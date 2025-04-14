import React from "react";
import "./Tarjeta.css"
import Boton from "../Boton/Index";

function Tarjeta({ titulo, descripcion, botonTexto }) {
    
    return <div className="tarjeta">
                <h2>{titulo}</h2>
                <h3>{descripcion}</h3>
                <Boton
                    texto={botonTexto} 
                    colorBG='var(--colorAcento)'
                />
            </div>
}

export default Tarjeta