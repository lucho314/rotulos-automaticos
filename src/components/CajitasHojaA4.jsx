import { useEffect, useRef, useState } from "react";
import { Configuraciones } from "./Configuraciones";
import { HojaA4Contenedor } from "./HojaA4Contenedor";


  
const CajitasHojaA4 = () => {
  const [ancho, setAncho] = useState(150);
  const [largo, setLargo] = useState(100);
  const [cantCajas, setCantCajas] = useState(10);
  const [nombres, setNombres] = useState("");
  const [cajitas, setCajitas] = useState([]);
  const [titulo, setTitulo] = useState("Titulo");
  const [fecha, setFecha] = useState(Date.now());
  const [orientacion, setOrientacion] = useState("V");

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const updateScreenSize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };


  useEffect(() => {
    // Agregar el event listener cuando se monta el componente
    window.addEventListener('resize', updateScreenSize);
    const alumnos = localStorage.getItem("alumnos") || "";
    setNombres(alumnos);

    // Eliminar el event listener cuando se desmonta el componente
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };

  
  }, []);


  const hojaA4Ref = useRef(null);

  const handleAnchoChange = (e) => {
    setAncho(e.target.value);
  };

  const handleLargoChange = (e) => {
    setLargo(e.target.value);
  };

  const handleNombresChange = (e) => {
    setNombres(e.target.value);
  };

    const handleCantPaginaChange = (e) => {
      
      setCantCajas(e.target.value);
  };


  const handleTituloChange = (e) => {
      
    setTitulo(e.target.value);
};


const handleFechaChange = (e) => {
      
  setFecha(e.target.value);
};

const handleOrientacionChange = (event) => {
  setOrientacion(event.target.value);
};




  const handleGenerarCajitas = () => {

   

    const nombresArray = nombres.split("\n").filter((nombre) => nombre.trim() !== "");

    localStorage.setItem("alumnos", nombresArray.join("\n"));

    const nuevasCajitas = nombresArray.map((nombre) => ({
      nombre,
      ancho,
      largo,
    }));
    setCajitas(nuevasCajitas);
  };

  const handleImprimir = () => {
    hojaA4Ref.current.style.display = "none";

    // Imprime solo el contenido del div con las cajitas
    window.print();

    // Vuelve a mostrar la hoja A4 después de imprimir
    hojaA4Ref.current.style.display = "initial";
  };
  

  return (
    <main>
      <Configuraciones 
        ancho={ancho} 
        handleAnchoChange={handleAnchoChange} 
        handleGenerarCajitas={ handleGenerarCajitas}
        handleImprimir={handleImprimir}
        handleLargoChange={handleLargoChange}
        handleNombresChange={handleNombresChange}
        hojaA4Ref={hojaA4Ref}
        largo={largo}
        nombres={nombres}
        cantCajas={cantCajas}
        handleCantPaginaChange = {handleCantPaginaChange}
        titulo={titulo}
        fecha={fecha}
        handleTituloChange={handleTituloChange}
        handleFechaChange={handleFechaChange}
        screenWidth={screenWidth}
        screenHeight={screenHeight}
        orientacion={orientacion}
        handleOrientacionChange={handleOrientacionChange}
      />
        <HojaA4Contenedor cajitas={cajitas} ancho={ancho} largo={largo} cantCajas={cantCajas} titulo={titulo} fecha={fecha} orientacion={orientacion}/>
    </main>
  );
};

export default CajitasHojaA4;
