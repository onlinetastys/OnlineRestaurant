import React, {useRef} from 'react'
import Image from './Image';

function AboutUsRow({id}:any) {
    return (
<div id={id} className="container-fluid">
  <div className="row">
     <div className="col-md-7 p-0 bg-dark d-flex justify-content-center align-items-end">
        <h2 className='mx-auto font-light-2' style={{fontSize: "3em"}}>
            SOBRE NÓS
        </h2>
        <div className='m-5'>
            <Image source="https://image.winudf.com/v2/image/Y29tLmhhYmliaS5UYXN0eWFuZFl1bW15Rm9vZFJlY2lwZV9zY3JlZW5fMTFfMTUxNDE5MDc2Ml8wMTA/screen-11.jpg?fakeurl=1&type=.jpg" 
            alt="food_picture"
            maxWidth="300px"
            />
        </div>
    </div>

    <div className="col-md-5 p-0 bg-dark d-flex align-items-stretch">
        <div className='px-md-5 mb-md-0 mb-3'>
            <div className='bg-light d-flex' style={{height: "100%"}}>
                <div className='align-self-center font-light-1'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo magnam, temporibus voluptas rem nam odio dignissimos veniam ratione maxime quos pariatur quidem in, totam officiis. Voluptas molestiae fugit non molestias mollitia reprehenderit, dolores animi deserunt sint praesentium natus asperiores ea est. Ex voluptatibus accusantium repudiandae repellat iusto, voluptas libero veritatis?
                </div>
            </div>
        </div>
    </div>
  </div>
</div> 
    )
}

export default AboutUsRow
