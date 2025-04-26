import React from 'react'
import TarjetaEquipo from './TarjetaEquipo/Index'
import './EquipoTalentoLab.css'

const EquipoTalentoLab = () => {

    const integrantes = [
        {
            id: 1,
            nombre: 'Silvia',
            rol: 'Product Owner',
            imagen: 'https://i.pravatar.cc/150?img=32',
            alt: 'avatar integrante de equipo'
        },
        {
            id: 2,
            nombre: 'Luis',
            rol: 'Diseñador UX/UI',
            imagen: 'https://i.pravatar.cc/150?img=11',
            alt: 'avatar integrante de equipo'
        },
        {
            id: 3,
            nombre: 'Matías',
            rol: 'Desarrollador',
            imagen: 'https://i.pravatar.cc/150?img=12',
            alt: 'avatar integrante de equipo'
        },
        {
            id: 4,
            nombre: 'Sabrina',
            rol: 'Desarrolladora',
            imagen: 'https://i.pravatar.cc/150?img=48',
            alt: 'avatar integrante de equipo'
        },
    ]

    return (
        <div className='equipo_container'>
            <h2>CONOCÉ AL EQUIPO DE TALENTO LAB</h2>
            <ul>
                <li className='equipo_area-tarjetas'>
                    {integrantes.map((integrante) =>
                        <TarjetaEquipo
                            key={integrante.id}
                            nombre={integrante.nombre}
                            rol={integrante.rol}
                            imagen={integrante.imagen}
                            alt={integrante.alt}
                        ></TarjetaEquipo>
                    )}
                </li>
            </ul>
        </div>
    )
}

export default EquipoTalentoLab