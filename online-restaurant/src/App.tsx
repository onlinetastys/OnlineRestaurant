import './App.css';
import TextSquare from './Components/TextSquare';
import Image from './Components/Image';
import NavBar from './Components/NavBar';
import { useRef } from 'react';
import FlexRow from './Components/FlexRow';
import FirstRow from './Components/FirstRow';
import SecondRow from './Components/SecondRow';

function App() {
  const app = useRef(null);

  return (
    <div className="App main" ref={app}>
        <NavBar app={app}/>
        <FirstRow />
        <SecondRow />

        <div style={{fontSize: "100px", zIndex: 1}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iste illum minus quibusdam maxime unde impedit similique odit, consequatur ipsum eveniet, excepturi, molestias illo a aliquid exercitationem quisquam quis deserunt! 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi reiciendis vitae ullam, minus fugiat deserunt porro architecto laudantium nisi, nihil quas sapiente. Earum dolorum dolorem nesciunt culpa optio praesentium? 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum vitae quas accusamus corporis magni officia. Qui, laudantium eum sapiente error vero consequuntur, magni sit adipisci quidem odit ratione assumenda.  
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, fugit. Aliquam explicabo voluptas dolor ut quos. Dolorum magnam magni ab culpa vitae minima natus libero maiores, inventore earum exercitationem est.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sint voluptates pariatur incidunt cupiditate iusto excepturi iste sapiente perferendis dicta cumque tempora non delectus, quod, eius aut maxime quibusdam accusantium.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi explicabo harum nam. Magni molestias, suscipit aperiam itaque quod dicta quam repellendus quis iusto accusamus dolorum eum voluptate quia totam sint.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore magni quam maxime, sint fugiat excepturi aut nisi nostrum ipsa saepe magnam numquam ab neque repellat veniam praesentium suscipit amet aspernatur.
        </div>  
    </div>
  );
}


export default App;
