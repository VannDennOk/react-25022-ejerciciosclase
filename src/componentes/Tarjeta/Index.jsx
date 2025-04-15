import React from "react";
import "./Tarjeta.css"
import Boton from "../Boton/Index";

function Tarjeta({ titulo, img, alt, descripcion, promocion, botonTexto }) {
    
    return <div className="tarjeta">
                <img src={img} alt={alt} />
                <span className="tarjeta__descripcion">
                    <h2>{titulo}</h2>
                    <h3>{descripcion}</h3>
                    <span className="tarjeta__promocion">
                        <p>{promocion}</p>
                    </span>
                    <Boton
                    texto={botonTexto} 
                    colorBG='var(--colorAcento)'
                    />
                </span>
            </div>
}

export default Tarjeta