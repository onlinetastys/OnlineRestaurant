import './App.css';
import TextSquare from './Components/TextSquare';
import Image from './Components/Image';
import NavBar from './Components/NavBar';
import { useRef, useEffect, useState } from 'react';
import HomeRow from './Components/HomeRow';
import AboutUsRow from './Components/AboutUsRow';
import LocationsRow from './Components/LocationsRow';
import ProductsRow from './Components/ProductsRow';
import EmentaRow from './Components/EmentaRow';
import ContactsRow from './Components/ContactsRow';

 const navElements = [
    {
      "NavId":"start",
      "NavName":"Início"
    },
    {
      "NavId":"aboutus",
      "NavName":"Sobre Nós"
    },
    {
      "NavId":"menu",
      "NavName":"Ementa"
    },
    {
      "NavId":"contacts",
      "NavName":"Contactos"
    }
  ]

  
  

let vpOptions = {
    root: null,
    rootMargin: '-20px -20px -20px -20px',
    threshold: 0.3
};

function App() {
  const app = useRef(null);

  return (
    <div className="App main" ref={app}>
        <NavBar app={app} navElements={navElements}/>
        <HomeRow id={navElements[0].NavId} />
        <AboutUsRow id={navElements[1].NavId}/>
        <LocationsRow />
        <ProductsRow />
        <EmentaRow id={navElements[2].NavId} />
        <ContactsRow id={navElements[3].NavId}  />
    </div>
  );
}

export default App;
