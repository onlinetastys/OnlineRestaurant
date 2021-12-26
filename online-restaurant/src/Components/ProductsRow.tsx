import React from 'react'
import Image from './Image';
import Review from './Review';

function ProductsRow() {
    return (
<div className="container-fluid px-0">
  <div className="row d-flex align-items-center bg-dark py-md-5 pb-5">
        <div className='col-md-6'>
            <div>
                <h2 className='font-light-2'>Qualidade Garantida</h2>
                <p className='font-light-1 px-2'>Da frescura dos produtos que utilizamos, ao rigor que aplicamos
                na confeção das refeições, cada prato que sai da nossa cozinha estará de acordo com os nossos elevados padrões de qualidade. </p>
                <p className='font-light-1'>Os nossos clientes que o digam!</p>
            </div>
        </div>
        <div className='col-md-6 mt-4'>
            <Review />
        </div>
  </div>
</div> 
    )
}

export default ProductsRow;