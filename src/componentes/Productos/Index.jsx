import React from 'react'
import TarjetaProductos from './TarjetaProductos/Index'
import './Productos.css'

const Productos = () => {

    const productos = [
        {
          id: 1,
          titulo: 'Producto 1',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…',
          imagenUrl: 'https://i.postimg.cc/sggP0g7m/producto.png',
          promocion: '2x1',
          colorPromo: 'var(--colorVerde)',
          alt: 'imagen de producto'

        },
        {
          id: 2,
          titulo: 'Producto 2',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…',
          imagenUrl: 'https://i.postimg.cc/sggP0g7m/producto.png',
          promocion: '-50%',
          colorPromo: 'var(--colorRojo)',
          alt: 'imagen de producto'
        },
        {
          id: 3,
          titulo: 'Producto 3',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…',
          imagenUrl: 'https://i.postimg.cc/sggP0g7m/producto.png',
          promocion: '2x1',
          colorPromo: 'var(--colorVerde)',
          alt: 'imagen de producto'
        },
        {
          id: 4,
          titulo: 'Producto 4',
          descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…',
          imagenUrl: 'https://i.postimg.cc/sggP0g7m/producto.png',
          promocion: '-25%',
          colorPromo: 'var(--colorRojo)',
          alt: 'imagen de producto'
        }
      ];

  return (
    <div className='productos_container'>
      <h2>NUESTROS CURSOS</h2>
    <ul>
        <li className='productos_area-tarjeta'>
        {productos.map((producto) =>
          <TarjetaProductos
            key={producto.id}
            titulo={producto.titulo}
            descripcion={producto.descripcion}
            img={producto.imagenUrl}
            promocion={producto.promocion}
            colorPromo={producto.colorPromo}
            alt={producto.alt}        
            botonTexto="Ver más"
          ></TarjetaProductos>
        )}
        </li>
    </ul>
    </div>
  )
}

export default Productos
