import React from "react"
import "./TarjetaProyecto.css"

function TarjetaProyecto({ nombreProy, detalleProy, botonTexto }) {
    
    const estilo = {backgroundColor: 'var(--colorAcento)'};

    const mostrarMensaje  = (e) => {
        console.log(`Explorando ${nombreProy}`)
    }

    return <div className="tarjeta_proyecto">
        <h3>{nombreProy}</h3>
        <p>{detalleProy}</p>
        <button style = {estilo} onClick={mostrarMensaje}>{botonTexto}</button>
    </div>
}

export default TarjetaProyecto