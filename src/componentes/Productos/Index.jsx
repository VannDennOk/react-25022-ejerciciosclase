import "./Productos.css"

function Productos() {
    const productos = [ 'Manzanas', 'Peras', 'Naranjas'];
    return (
        <ul className="lista_productos">
            {productos.map(productos => (
                <li key={productos}>{productos}</li>
            ))}
        </ul>
    );
}

export default Productos

