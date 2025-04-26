import React from "react";
import "./TarjetaEquipo.css"

function TarjetaEquipo({ nombre, rol, imagen, alt }) {
    
    return <div className="tarjeta_equipo">
                <div className="tarjeta_equipo-img">  
                    <img className="tarjeta_equipo-avatar" src={imagen} alt={alt} />
                </div>
                <div className="tarjeta_equipo-txt">
                    <h3>{nombre}</h3>
                    <p>{rol}</p>
                </div>
            </div>
}

export default TarjetaEquipo