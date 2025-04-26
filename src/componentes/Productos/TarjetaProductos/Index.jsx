import React from "react"
import "./TarjetaProductos.css"
import Boton from "../../Boton/Index"

function TarjetaProductos({ titulo, img, alt, descripcion, promocion, colorPromo, botonTexto }) {

    const estilo = {backgroundColor: colorPromo};
    
    return <div className="tarjeta">
        <img className="tarjeta__imagen" src={img} alt={alt} />
        <span className="tarjeta__descripcion">
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <span style = {estilo} className="tarjeta__promocion">
                <p>{promocion}</p>
            </span>
            <Boton
                texto={botonTexto}
                colorBG='var(--colorAcento)'
            />
        </span>
    </div>
}

export default TarjetaProductos