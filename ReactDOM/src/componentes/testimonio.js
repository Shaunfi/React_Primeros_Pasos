import React from 'react';
import '../estilo/testimonio.css'

function Testimonio(props) {
  return (
    <div className='contenedor'>
      <img className='imagen' src={require(`../imagenes/${props.imagen}.png`)} alt={props.alt} />
      <div className='contenedor-texto'>
        <p className='nombre'><b>{props.nombre}</b> en {props.pais}</p>
        <p className='cargo'>{props.cargo} en <b>{props.lugar}</b></p>
        <p className='texto'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
