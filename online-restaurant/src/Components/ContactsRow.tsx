import React, {useRef} from 'react'
import Image from './Image';
import TelephoneAnimation from './TelephoneAnimation';

function ContactsRow({id}:any) {
    return (
<div id={id} className="container-fluid">
  <div className="row">
     <div className="col-md-7 p-0 bg-dark d-flex justify-content-center align-items-end">
        <div>
            <h1 className='mx-auto font-light-1 px-1'>
                CONTACTOS
            </h1>
        </div>
        <div className='m-5'>
            <TelephoneAnimation /> 
        </div>
    </div>

    <div className="col-md-5 p-0 bg-dark d-flex align-items-stretch">
        <div className='px-md-5 mb-md-0 mb-5' style={{width:"100%"}}>
            <div className='bg-light d-flex justify-content-center' style={{height: "100%"}}>
                <div className='align-self-center font-light-1'>
                    <h4 className='font-light-2'>Telemóvel:</h4>
                    <h3>914 718 404</h3>
                    <p className='font-dark px-1'>Faça já a sua encomenda!</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</div> 
    )
}

export default ContactsRow
