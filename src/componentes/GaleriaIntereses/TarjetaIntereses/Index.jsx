import React from "react"
import "./TarjetaIntereses.css"

function TarjetaIntereses({ tecnologia, icono, botonTexto, colorBG }) {
    
    const estilo = {backgroundColor: colorBG};

    const cambiarColorBG  = (e) => {
        console.log(e.target.style.backgroundColor = 'var(--colorVerde')
    }

    return <div className="tarjeta_intereses">

        <img className="tarjeta_intereses-img"src={icono} alt={tecnologia}></img>
        <h3>{tecnologia}</h3>
        <button style = {estilo} onClick={cambiarColorBG}>{botonTexto}</button>
    </div>
}

export default TarjetaIntereses