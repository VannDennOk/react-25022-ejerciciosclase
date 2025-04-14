import React from "react";
import "./ListaUsuarios.css"

function ListaUsuarios() {
    const usuarios = ['Ana', 'Luis', 'Pedro', 'Maria'];
    return (
        <ul className="lista_usuarios">
            {usuarios.map(usuario => (
                <li key={usuario}>{usuario}</li>
            ))}
        </ul>
    );
}

export default ListaUsuarios;