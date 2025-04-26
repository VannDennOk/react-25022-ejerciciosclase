import React from 'react'
import './GaleriaIntereses.css'
import TarjetaIntereses from './TarjetaIntereses/Index';

const GaleriaIntereses = () => {

    const intereses = [
      {
        id: 1,
        tecnologia:'React',
        icono: 'https://i.postimg.cc/6Qs9phGf/React.png'
      },
      {
        id: 1,
        tecnologia:'JavaScript',
        icono: 'https://i.postimg.cc/J42r98rg/js.png'
      },
      {
        id: 1,
        tecnologia:'APIs',
        icono: 'https://i.postimg.cc/Y28qzgJt/Api.png'
      },
      {
        id: 1,
        tecnologia:'Diseño UX',
        icono: 'https://i.postimg.cc/c4H19CSw/Dise-o.png'
      },
      {
        id: 1,
        tecnologia:'Node.js',
        icono: 'https://i.postimg.cc/XYBjWPXv/Node.png'
      }
];

  return (
    <div className='intereses_container'>
      <h2>¿QUÉ TE INTERESA ESTUDIAR?</h2>
    <ul>
        <li className='intereses_area-tarjeta'>
        {intereses.map((interes) =>
          <TarjetaIntereses
            key={interes.id}
            tecnologia={interes.tecnologia}
            icono={interes.icono}
            botonTexto="Explorar"
            colorBG="var(--colorAcento)"
          ></TarjetaIntereses>
        )}
        </li>
    </ul>
    </div>
  )
}

export default GaleriaIntereses