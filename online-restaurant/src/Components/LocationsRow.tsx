import React from 'react'
import Image from './Image';
import MapAnimation from './MapAnimation';

function ThirdRow() {
    return (
<div className="container-fluid px-0">
  <div className="row d-flex align-items-center" style={{maxHeight:"600px", overflow:"hidden"}}>
      <div style={{position:"absolute", height:"30%", zIndex:"9"}}>
        <div className='bg-light locations-block'>
          <div className="center-v">
            <h3 className='font-dark title-underline'>
              LOCAIS DE ATUAÇÃO:
            </h3>
            <p className='font-light-1'>Santa Comba Dão</p>
            <p className='font-light-1'>Carregal do Sal</p>
            <p className='font-light-1'>Tondela</p>
          </div>
        </div>
      </div>
      <MapAnimation />
  </div>
</div> 
    )
}

export default ThirdRow
