import React, {useState, useEffect, useRef} from 'react'
import EmentaItem from './EmentaItem'
 
function EmentaRow({id}:any) {
    const [ementa, setEmenta] = useState<any>("")

    useEffect(() => {
        let GetEmenta = async () => {
            try {
                let response = await fetch('https://raw.githubusercontent.com/onlinetastys/Ementa/master/Ementa.json');
                let responseJson = await response.json();

                setEmenta(responseJson)
            } 
            catch(error) { }
        }

        GetEmenta()
    }, [])

    return (
        <div id={id} className='container-fluid m-0 p-0' >
            <div className='p-1 bg-light font-dark'>
                <h2>Ementa: ADICIONAR AQUI A DATA</h2>
            </div>
            <div className='row'>
                <div className='col-md m-0 p-3 bg-special-1'>
                    {ementa == "" ? "loading" : 
                        <EmentaItem source="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Fish_icon.svg/1101px-Fish_icon.svg.png"
                            alt="fish_icon"
                            maxWidth="200px"
                            title={ementa[0]["PlateName"]}
                            description={ementa[0]["PlateDescription"]} />
                    }
                </div>
                <div className='col-md m-0 p-3 bg-special-2'>
                    {ementa == "" ? "loading" : 
                        <EmentaItem source="http://cdn.onlinewebfonts.com/svg/img_483512.png"
                                    alt="meat_icon"
                                    maxWidth="200px"
                                    title={ementa[1]["PlateName"]}
                                    description={ementa[1]["PlateDescription"]} />
                    }
                </div>
            </div>
        </div>
    )
}


export default EmentaRow