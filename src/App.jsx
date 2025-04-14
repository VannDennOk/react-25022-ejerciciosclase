import { useState } from 'react'
import "./App.css"
import Saludo from './componentes/Saludo/Index'
import ListaUsuarios from './componentes/ListaUsuarios/Index'
import Boton from './componentes/Boton/Index'
import Productos from './componentes/Productos/Index'
import Tarjeta from './componentes/Tarjeta/Index'

function App() {
  const productos = [ 'Manzanas', 'Peras', 'Naranjas'];

  
  
  
  return (
    <div className='container'>
      <Saludo nombre="Van"></Saludo>
      <ListaUsuarios/>
      <div className='container_btn'>
        <Boton texto="Aceptar" colorBG="var(--colorVerde)"/>
        <Boton texto="Cancelar" colorBG="var(--colorRojo)"/>
      </div>
      <Productos productos={productos}></Productos>
      <Tarjeta
        titulo = "Oferta especial"
        descripcion = "20% de descuento en todos los productos"
        botonTexto = "Ver más"
      ></Tarjeta>
    </div>
  )
}

export default App