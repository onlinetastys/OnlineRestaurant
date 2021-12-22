import React from 'react'
import Image from './Image';

function ThirdRow() {
    return (
<div className="container-fluid px-0">
  <div className="row d-flex align-items-center" style={{maxHeight:"600px", overflow:"hidden"}}>
      <div style={{position:"absolute", height:"30%"}}>
        <div className='bg-light locations-block'>
          <div className="center-v">
            <h3 className='font-dark'>
              LOCAIS DE ATUAÇÃO:
            </h3>
            <p className='font-light-1'>Santa Comba Dão</p>
            <p className='font-light-1'>Carregal do Sal</p>
            <p className='font-light-1'>Tondela</p>
          </div>
        </div>
      </div>
      <img style={{width: "100%", minWidth:"350px"}}
            src="https://image.winudf.com/v2/image/Y29tLmhhYmliaS5UYXN0eWFuZFl1bW15Rm9vZFJlY2lwZV9zY3JlZW5fMTFfMTUxNDE5MDc2Ml8wMTA/screen-11.jpg?fakeurl=1&type=.jpg"
            />
  </div>
</div> 
    )
}

export default ThirdRow
