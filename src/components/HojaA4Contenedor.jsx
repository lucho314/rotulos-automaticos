export const HojaA4Contenedor = ({ cajitas = [],ancho=200, largo=200,cantCajas,titulo,fecha,orientacion }) => {
    const cajitasPorHoja = cantCajas || 1; // Número de cajitas que caben en una hoja A4
    const numHojas = Math.ceil(cajitas.length / cajitasPorHoja);
    const date = new Date(fecha);
    const width = orientacion === "V" ? '21cm' : '29.7cm';
    const height = orientacion === "V" ? '29.7cm' : '21cm';

    // Obtener los componentes de la fecha (día, mes y año)
    const dia = date.getDate().toString().padStart(2, "0");
    const mes = (date.getMonth() + 1).toString().padStart(2, "0");
    const anio = date.getFullYear().toString();
  
    // Formatear la fecha como "dd/mm/aaaa"
    const fechaFormateada = `${dia}/${mes}/${anio}`;
    return (
      <div className="hojas">
        {Array.from({ length: numHojas }).map((_, hojaIndex) => (
          <div key={hojaIndex} className="hoja-a4" style={{width,height}}>
            <div className="cajas">
              {cajitas.slice(hojaIndex * cajitasPorHoja, (hojaIndex + 1) * cajitasPorHoja).map((cajita, index) => (
                <div key={index} className="cajita" style={{width:`${ancho}px`, height:`${largo}px`}}>
                <div className="cajita-head">
                    {titulo}
                </div>
                <div className="cajita-main">
                {cajita.nombre}
                </div>
                    <div className="cajita-footer">
                        {fechaFormateada}
                    </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        { numHojas === 0 && <div className="hoja-a4" style={{width,height}}></div>}
      </div>
    );
  };