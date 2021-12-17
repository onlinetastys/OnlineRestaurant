import React from 'react'

function FlexRow({stretchFirst, firstColComp, secondColComp}:any) {
    return (
        <div className="flex-container">
          <div className={stretchFirst ? "row" : "row row-stretch"}>
            {firstColComp}
          </div>
          <div className={stretchFirst ? "row row-stretch" : "row"}>
            {secondColComp}
          </div>
        </div>

    )
}

export default FlexRow
