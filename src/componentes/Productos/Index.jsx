import React from "react";
import "./Productos.css"

function Productos({ productos }) {
    
    return (
        <ul className="lista_productos">
            {
            productos.map((productos, index) => (
                <li key={index}>
                    {productos}
                </li>
            ))}
        </ul>
    );
}

export default Productos

