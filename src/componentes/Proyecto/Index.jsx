import React from 'react'
import TarjetaProyectos from './TarjetaProyecto/Index'
import './Proyecto.css'

const Proyecto = () => {

    const proyectos = [
        {
          id: 1,
          nombreProy: 'Proyecto A',
          detalleProy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…'
        },
        {
          id: 2,
          nombreProy: 'Proyecto B',
          detalleProy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…'
        },
        {
          id: 3,
          nombreProy: 'Proyecto C',
          detalleProy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…'
        },
        {
          id: 4,
          nombreProy: 'Proyecto D',
          detalleProy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…'
        }
      ];

  return (
    <div className='proyectos_container'>
      <h2>NUESTROS PROYECTOS</h2>
    <ul>
        <li className='proyectos_area-tarjeta'>
        {proyectos.map((proyecto) =>
          <TarjetaProyectos
            key={proyecto.id}
            nombreProy={proyecto.nombreProy}
            detalleProy={proyecto.detalleProy}
            botonTexto="Saber más"
          ></TarjetaProyectos>
        )}
        </li>
    </ul>
    </div>
  )
}

export default Proyecto
