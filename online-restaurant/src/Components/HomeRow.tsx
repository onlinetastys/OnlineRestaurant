import React,{useRef} from 'react'
import Image from './Image';

function HomeRow({id}:any) {
    return (
 <div id={id} className="container-fluid">
  <div className="row d-flex justify-content-end">
    
    <div className="col-md p-0 d-flex align-items-center justify-content-left bg-light">
      <div style={{maxWidth:"100%", paddingLeft: "10px"}}>
        <div className="fade-in-with-top-translate font-dark px-1">
          <h1 className='title-underline title-main' >
            COMIDA DA ALICE
          </h1>
        </div>

        <h2  className="main-subtitle fade-in-with-left-translate font-light-1 px-1" >
          Sabor à distância de um clique
        </h2>
      </div>
    </div>

    <div className="col-md-auto p-0 d-flex flex-row-reverse">
        <Image source="./plate_showcase.png" 
                  alt="food_picture"
                  maxWidth="600px"
                   />
    </div>
  </div>
</div> 
    )
}

export default HomeRow
