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
                <h2>Ementa ({getFormatedDate()})</h2>
            </div>
            <div className='row'>
                <div className='col-md m-0 p-3 bg-special-1'>
                    {ementa == "" ? "loading" : 
                        <EmentaItem source="./fish.png"
                            alt="fish_icon"
                            maxWidth="200px"
                            title={ementa[0]["PlateName"]}
                            description={ementa[0]["PlateDescription"]} />
                    }
                </div>
                <div className='col-md m-0 p-3 bg-special-2'>
                    {ementa == "" ? "loading" : 
                        <EmentaItem source="./meat.png"
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

function getFormatedDate(){
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    return date;
}

export default EmentaRow