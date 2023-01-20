import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React from 'react'

function Product() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8,
            slidesToSlide: 3 // optional, default to 1.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 2 // optional, default to 1.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
          }
      };
  return (
    
      <Carousel className="container mt-5" responsive={responsive}>
       
        <div>
            <img style={{width:"6rem"}} src="https://f.nooncdn.com/mpcms/EN0001/assets/5431f381-094e-413f-b418-a102a94f6075.png" alt="" />
        </div>
        <div>
            <img style={{width:"6rem"}} src="https://f.nooncdn.com/mpcms/EN0001/assets/a4100d70-c868-4cda-9854-224e91ff63cc.png" alt="" />
        </div>
        <div>
            <img style={{width:"6rem"}} src="https://f.nooncdn.com/mpcms/EN0001/assets/10119d9a-2d92-4a07-9392-eca8849548f9.png" alt="" />
        </div>
        <div>
            <img style={{width:"6rem"}} src="https://f.nooncdn.com/mpcms/EN0001/assets/d4b83965-09f0-4664-9e2d-4f49cb997bec.png" alt="" />
        </div>
        <div>
            <img style={{width:"6rem"}} src="https://f.nooncdn.com/mpcms/EN0001/assets/124bada2-1862-4f89-baa1-7926444af823.png" alt="" />
        </div>
        <div>
            <img style={{width:"6rem"}} src="https://f.nooncdn.com/mpcms/EN0001/assets/d1f0c21e-9f54-430a-a92e-7e10e56e3feb.png" alt="" />
        </div>
        <div>
            <img style={{width:"6rem"}} src="https://f.nooncdn.com/mpcms/EN0001/assets/30c4cca3-3562-4fe7-8322-5beb111bddda.png" alt="" />
        </div>
        <div>
            <img style={{width:"6rem"}} src="https://f.nooncdn.com/mpcms/EN0001/assets/0e6f7b79-a40c-4941-b1b2-bdd1cec29302.png" alt="" />
        </div>
        <div>
            <img style={{width:"6rem"}} src="https://f.nooncdn.com/mpcms/EN0001/assets/ed889b28-66e2-4ee0-aa41-be4c885ca396.png" alt="" />
        </div>
        <div>
            <img style={{width:"6rem"}} src="https://f.nooncdn.com/mpcms/EN0001/assets/19e90192-43c3-4520-aa60-3e2006c79f72.png" alt="" />
        </div>
        <div>
            <img style={{width:"6rem"}} src="https://f.nooncdn.com/mpcms/EN0001/assets/e130c9aa-1322-4ce2-865e-4bd4abef665d.png" alt="" />
        </div>
        <div>
            <img style={{width:"6rem"}} src="https://f.nooncdn.com/mpcms/EN0001/assets/1e51e3ef-2992-47b8-b256-8f9ffd77f968.png" alt="" />
        </div>
        <div>
            <img style={{width:"6rem"}} src="https://f.nooncdn.com/mpcms/EN0001/assets/d398aa22-c9ee-4f7f-9b71-8c74163f79f8.png" alt="" />
        </div>
        <div>
            <img style={{width:"6rem"}} src="https://f.nooncdn.com/mpcms/EN0001/assets/b531fe1e-3adb-4f09-9927-0f2f64c8fa66.png" alt="" />
        </div>
        <div>
            <img style={{width:"6rem"}} src="https://f.nooncdn.com/mpcms/EN0001/assets/f675c347-ef06-45b3-b0fa-ab05e54da651.png" alt="" />
        </div>
        <div>
            <img style={{width:"6rem"}} src="https://f.nooncdn.com/mpcms/EN0001/assets/42e649f2-37c9-44c0-932b-fcfb652e5766.png" alt="" />
        </div>
      </Carousel>
  )
}

export default Product