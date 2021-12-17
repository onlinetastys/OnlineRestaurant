import React from 'react'

function Image({ source, alt, maxWidth }:any) {
    return (
          <img style={{width: "100%", height:"100%", maxWidth: maxWidth}}
               src={source}
               alt={alt}
                />
    )
}

export default Image
