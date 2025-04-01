import "./Tarjeta.css"
import Boton from "../Boton/Index";

function Tarjeta({ titulo, descripcion, botonTexto }) {
    
    return <div className="tarjeta">
                <span><h2>{titulo}</h2></span>
                <span><h3>{descripcion}</h3></span>
                <Boton
                    texto={botonTexto} 
                    color='var(--colorAcento)'
                />
            </div>
}

export default Tarjeta