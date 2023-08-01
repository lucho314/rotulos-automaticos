export const Configuraciones = ({orientacion,handleOrientacionChange,screenWidth,screenHeight,titulo,fecha,handleTituloChange,handleFechaChange,handleCantPaginaChange,hojaA4Ref,ancho,largo,handleAnchoChange,handleLargoChange,nombres,handleNombresChange,handleGenerarCajitas,handleImprimir,cantCajas})=>{
    const cmAncho = (ancho / screenWidth) * 21;
    const cmLargo = (largo / screenHeight) * 29.7;
    
    return(
        <div className="configuracion" ref={hojaA4Ref}>
           <div className="radio-button-container-horizontal">
      <label>
        <input
          type="radio"
          name="option"
          value="V"
          checked={orientacion === "V"}
          onChange={handleOrientacionChange}
        />
        Vertical
      </label>

      <label>
        <input
          type="radio"
          name="option"
          value="H"
          checked={orientacion === "H"}
          onChange={handleOrientacionChange}
        />
        Horizontal
      </label>

    </div>
        <div>
          <label htmlFor="ancho">Ancho:</label>
          <input type="range" min="150" max="1000" id="ancho" value={ancho} onChange={handleAnchoChange} />
          <span>{cmAncho.toFixed(2)} cm.</span>
        </div>
        <div>
          <label htmlFor="largo">Largo:</label>
          <input type="range" min="100" max="1000" id="largo" value={largo} onChange={handleLargoChange} />
          <span>{cmLargo.toFixed(2)} Cm.</span>
        </div>
         <div>
          <label htmlFor="cantPaginas">Cant. cajas X pagina:</label>
          <input type="number" value={cantCajas} id="cantPaginas" onChange={handleCantPaginaChange}/>
        </div>
        <div>
          <label htmlFor="nombres">Lista de nombres:</label>
          <textarea rows="6" value={nombres} id="nombres" onChange={handleNombresChange} />
        </div>
        <div>
          <label htmlFor="titulo">Titulo</label>
          <input type="text" id="titulo" value={titulo} onChange={handleTituloChange}/>
        </div>
        <div>
          <label htmlFor="fecha">Fecha</label>
          <input type="date" id="fecha" value={fecha} onChange={handleFechaChange} />
        </div>
        <div className="botonera">
            <button onClick={handleGenerarCajitas}>Generar Cajitas</button>
            <button onClick={handleImprimir}>Imprimir</button>
        </div>
       
      </div>

    )
  }