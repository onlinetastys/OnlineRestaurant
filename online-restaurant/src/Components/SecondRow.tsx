import React from 'react'
import Image from './Image';

function SecondRow() {
    return (
<div className="container-fluid">
  <div className="row">
     <div className="col-md-7 p-0 bg-dark d-flex justify-content-center align-items-end">
         <h2 className='mx-auto' style={{fontSize: "3em"}}>TESTE TESTE TESTE</h2>
        <div className='m-5'>
            <Image source="https://image.winudf.com/v2/image/Y29tLmhhYmliaS5UYXN0eWFuZFl1bW15Rm9vZFJlY2lwZV9zY3JlZW5fMTFfMTUxNDE5MDc2Ml8wMTA/screen-11.jpg?fakeurl=1&type=.jpg" 
            alt="food_picture"
            maxWidth="300px"
            />
        </div>
    </div>

    <div className="col-md-5 p-0 bg-dark d-flex align-items-stretch">
        <div className='px-5 mb-md-0 mb-1'>
            <div className='bg-light d-flex' style={{height: "100%"}}>
                <div className='align-self-center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo magnam, temporibus voluptas rem nam odio dignissimos veniam ratione maxime quos pariatur quidem in, totam officiis. Voluptas molestiae fugit non molestias mollitia reprehenderit, dolores animi deserunt sint praesentium natus asperiores ea est. Ex voluptatibus accusantium repudiandae repellat iusto, voluptas libero veritatis?
                </div>
            </div>
        </div>
    </div>
  </div>
</div> 
    )
}

export default SecondRow
