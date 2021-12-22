import React from 'react'

function Image({ source, alt, maxWidth, title}:any) {
    if(title){
        return (<>
                <img style={{width: "100%", height:"100%", maxWidth: maxWidth}}
                src={source}
                alt={alt}
                />
                <h5>{title}</h5>
        </>)
    }

    return (<>
              <img style={{width: "100%", height:"100%", maxWidth: maxWidth}}
               src={source}
               alt={alt}
            />
    </>)
}

export default Image
