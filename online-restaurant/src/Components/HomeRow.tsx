import React,{useRef} from 'react'
import Image from './Image';

function HomeRow({id}:any) {
    return (
 <div id={id} className="container-fluid">
  <div className="row d-flex justify-content-end">
    
    <div className="col-md p-0 d-flex align-items-center justify-content-left bg-light">
      <div style={{maxWidth:"100%", paddingLeft: "10px"}}>
        <h1 className="fade-in-with-top-translate font-dark" style={{fontSize: "3.8em", textAlign: "left"}}>
          COMIDA DA ALICE
        </h1>
        <h2  className="main-subtitle fade-in-with-left-translate font-light-1" >
          Sabor à distância de um clique
        </h2>
      </div>
    </div>

    <div className="col-md-auto p-0 d-flex flex-row-reverse">
        <Image source="https://image.winudf.com/v2/image/Y29tLmhhYmliaS5UYXN0eWFuZFl1bW15Rm9vZFJlY2lwZV9zY3JlZW5fMTFfMTUxNDE5MDc2Ml8wMTA/screen-11.jpg?fakeurl=1&type=.jpg" 
                  alt="food_picture"
                  maxWidth="800px"
                   />
    </div>
  </div>
</div> 
    )
}

export default HomeRow
