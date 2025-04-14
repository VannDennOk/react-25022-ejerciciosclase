import React from "react";
import "./Saludo.css"

function Saludo({nombre}) {

  // function Saludo(props) {
  //const { nombre } = props

    return <div className="box"> 
        <h1>¡Hola hola {nombre}!</h1>
    </div>;  
  };

export default Saludo;  