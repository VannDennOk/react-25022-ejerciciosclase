import { useState } from 'react'
import "./App.css"
import Saludo from './componentes/Saludo/Index'
import ListaUsuarios from './componentes/ListaUsuarios/Index'
import Boton from './componentes/Boton/Index'
import Productos from './componentes/Productos/Index'
import Tarjeta from './componentes/Tarjeta/Index'

function App() {
  const productos = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

  const promociones = [
    {
      id: 1,
      titulo: 'Producto 1',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…',
      imagenUrl: 'https://i.postimg.cc/sggP0g7m/producto.png',
      promocion: '2x1',
      alt: 'imagen de producto'
    },
    {
      id: 2,
      titulo: 'Producto 2',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…',
      imagenUrl: 'https://i.postimg.cc/sggP0g7m/producto.png',
      promocion: '-50%',
      alt: 'imagen de producto'
    },
    {
      id: 3,
      titulo: 'Producto 3',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…',
      imagenUrl: 'https://i.postimg.cc/sggP0g7m/producto.png',
      promocion: '2x1',
      alt: 'imagen de producto'
    },
    {
      id: 4,
      titulo: 'Producto 4',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…',
      imagenUrl: 'https://i.postimg.cc/sggP0g7m/producto.png',
      promocion: '-25%',
      alt: 'imagen de producto'
    }
  ];

  return (
    <div className='container'>
      <Saludo nombre="Van"></Saludo>
      <ListaUsuarios />
      <div className='container_btn'>
        <Boton texto="Aceptar" colorBG="var(--colorVerde)" />
        <Boton texto="Cancelar" colorBG="var(--colorRojo)" />
      </div>
      <Productos productos={productos} />
      <section className='tarjeta__container'>
        {promociones.map((promocion) =>
          <Tarjeta
            key={promocion.id}
            titulo={promocion.titulo}
            img={promocion.imagenUrl}
            alt={promocion.alt}
            descripcion={promocion.descripcion}
            promocion={promocion.promocion}
            botonTexto="Ver más"
          ></Tarjeta>
        )}
      </section>
    </div>
  )
}

export default App