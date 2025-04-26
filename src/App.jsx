import { useState } from 'react'
import "./App.css"
import Saludo from './componentes/Saludo/Index'
import ListaUsuarios from './componentes/ListaUsuarios/Index'
import Boton from './componentes/Boton/Index'
import EquipoTalentoLab from './componentes/EquipoTalentoLab/Index'
import Productos from './componentes/Productos/Index'
import Proyecto from './componentes/Proyecto/Index'
import GaleriaIntereses from './componentes/GaleriaIntereses/Index'

function App() {

  return (
    <div className='container'>
      <Saludo nombre="Van"></Saludo>
      <ListaUsuarios />
      <div className='container_btn'>
        <Boton texto="Aceptar" colorBG="var(--colorVerde)" />
        <Boton texto="Cancelar" colorBG="var(--colorRojo)" />
      </div>
      <Productos/>
      <EquipoTalentoLab/>
      <Proyecto/>
      <GaleriaIntereses/>
    </div>
  )
}

export default App