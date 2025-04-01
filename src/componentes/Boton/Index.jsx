import "./Boton.css"

function Boton({ texto, color }) {
    const estilo = {backgroundColor: color};
    return <button style = {estilo} > {texto} </button>
}

export default Boton
