import React from 'react'
import Image from './Image';

function FourthRow() {
    return (
<div className="container-fluid px-0">
  <div className="row d-flex align-items-center bg-dark py-md-5 pb-5">
        <div className='col-md-6'>
            <div>
                <h3 className='font-light-2'>Fresh Stuff</h3>
                <h4 className='font-light-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed reiciendis, soluta sint, dolore ullam dicta officia ratione deleniti voluptatum perferendis provident consectetur nam? Qui, fugiat eveniet laudantium aliquid voluptatum vero ad earum labore fuga dolore nobis ipsa dicta alias ex. </h4>
            </div>
        </div>
        <div className='col-md-2 mt-4'>
            <Image source="https://image.winudf.com/v2/image/Y29tLmhhYmliaS5UYXN0eWFuZFl1bW15Rm9vZFJlY2lwZV9zY3JlZW5fMTFfMTUxNDE5MDc2Ml8wMTA/screen-11.jpg?fakeurl=1&type=.jpg"
                   title="Ola 1" 
                   maxWidth="50px"/>
        </div>
        <div className='col-md-2 mt-4'>
            <Image source="https://image.winudf.com/v2/image/Y29tLmhhYmliaS5UYXN0eWFuZFl1bW15Rm9vZFJlY2lwZV9zY3JlZW5fMTFfMTUxNDE5MDc2Ml8wMTA/screen-11.jpg?fakeurl=1&type=.jpg"
                   title="Ola 2" 
                   maxWidth="50px"/>
        </div>
        <div className='col-md-2 mt-4'>
            <Image source="https://image.winudf.com/v2/image/Y29tLmhhYmliaS5UYXN0eWFuZFl1bW15Rm9vZFJlY2lwZV9zY3JlZW5fMTFfMTUxNDE5MDc2Ml8wMTA/screen-11.jpg?fakeurl=1&type=.jpg"
                   title="Ola 3" 
                   maxWidth="50px"/>
        </div>
  </div>
</div> 
    )
}

export default FourthRow;