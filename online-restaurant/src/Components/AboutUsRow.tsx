import React, {useRef} from 'react'
import Image from './Image';
import ForkKnifeAnimation from './ForkKnifeAnimation';

function AboutUsRow({id}:any) {
    return (
<div id={id} className="container-fluid p-0">
  <div className="row">
     <div className="col-md-7 p-0 bg-dark d-flex justify-content-center align-items-end">
        <h2 className='title-lg font-light-2 px-1'>
            SOBRE NÓS
        </h2>
        <div className='m-5'>
            <ForkKnifeAnimation /> 
        </div>
    </div>

    <div className="col-md-5 p-0 bg-dark">
        <div className='px-md-4 mb-md-0 mb-3'>
            <div className='bg-light d-flex' style={{height: "100%"}}>
                <div className='align-self-center font-light-1 py-3 px-4' style={{textAlign:"left"}}>
                    <p>Somos uma pequena empresa de entrega de refeições ao domicílio.</p>
                    <p>A cada dia teremos uma ementa diferente,
                    possível de consultar neste site ou por contacto telefónico.</p>
                    <p> Caso queira colocar uma encomenda basta entrar
                    em contacto connosco e verificar se a sua morada se encontra dentro da nossa zona de intervenção.</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</div> 
    )
}

export default AboutUsRow
