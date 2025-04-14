import React from "react";
import "./Boton.css"

function Boton({ texto, colorBG }) {
    const estilo = {backgroundColor: colorBG};
    return <button style = {estilo} > {texto} </button>
}

export default Boton
