import React from 'react'

function EmentaItem({source, alt, maxWidth, title, description}:any) {
    return (
        <div style={{position: "relative"}}>
            <img src={source}
                alt={alt}
                className='opacity-hover'
                style={{maxWidth: maxWidth}} />
            <div className='center-vh'>
                <h2 className='font-dark'>{title}</h2>
                <p className='font-dark'>{description}</p>
            </div>
        </div>
    )
}

export default EmentaItem
