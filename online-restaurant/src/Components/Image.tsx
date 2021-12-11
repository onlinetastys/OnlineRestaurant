import React from 'react'

function Image({ source, alt }:any) {
    return (
         <div>
          <img className="img-right"
               src={source}
               alt={alt}
                /> 
        </div>
    )
}

export default Image
