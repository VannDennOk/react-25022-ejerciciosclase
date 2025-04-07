import { useState } from 'react'
import "./App.css"
import Saludo from './componentes/Saludo/Index'
import ListaUsuarios from './componentes/ListaUsuarios/Index'
import Boton from './componentes/Boton/Index'
import Productos from './componentes/Productos/Index'
import Tarjeta from './componentes/Tarjeta/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Saludo/>
      <ListaUsuarios/>
      <div className='container_btn'>
        <Boton texto="Aceptar" color="var(--colorVerde)"/>
        <Boton texto="Cancelar" color="var(--colorRojo)"/>
      </div>
      <Productos></Productos>
      <Tarjeta
        titulo = "Oferta especial"
        descripcion = "20% de descuento en todos los productos"
        botonTexto = "Ver más"
      ></Tarjeta>
    </div>
  )
}

export default App