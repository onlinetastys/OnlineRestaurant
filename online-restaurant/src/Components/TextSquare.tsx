import React from 'react'

function TextSquare({ bgColor, fontColor }:any) {
    return (
            <div className={"fill-parent" + " " + bgColor} >
                <div className={"center-v-h " + fontColor}>
                    wassup, estou centrado
                </div>
            </div>
    )
}

export default TextSquare
