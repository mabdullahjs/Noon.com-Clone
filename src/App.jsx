import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Navigation from './components/navigation';
import cashback from "./assets/cashback.avif"
import Carousels from './components/carousal';
import "./app.css";
import Product from './components/product';
import Reason from './components/reason';
import Focus from './components/focus';

function App() {
  return (
    <div>
      <Navbar/>
      <Navigation/>
      <img style={{width:"100%"}} src={cashback} alt="" />
      <div className="d-flex justify-content-center flex-wrap">
        <Carousels/>
        <div>
        <img className='img' src="https://f.nooncdn.com/mpcms/EN0001/assets/c6f2bd47-5eca-4908-b3a5-d377e231622a.png" alt="" />
        <img className='img' src="https://f.nooncdn.com/mpcms/EN0001/assets/4b795127-3b55-499d-831b-a361e0eae5b0.png" alt="" />
        </div>
      </div>
      <Product/>
      <div className='container d-flex mt-5'>
      <Reason name = "https://f.nooncdn.com/mpcms/EN0001/assets/66a5450d-bfd2-4ff3-ba71-434aee94d695.png" img1 = "https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png" img2="https://f.nooncdn.com/mpcms/EN0001/assets/13e146bb-6381-4d6e-9620-0b0743650dc6.png" img3 = "https://f.nooncdn.com/mpcms/EN0001/assets/d60b456a-31f4-4ce8-a090-766dae3738f0.png" img4="https://f.nooncdn.com/mpcms/EN0001/assets/2f75ee19-4d9a-4bc7-9599-f10b30f05469.png"/>
      <Reason name = "https://f.nooncdn.com/mpcms/EN0001/assets/3d4912ae-c58f-47d5-bf26-85ebf71e14a1.png" img1 = "https://f.nooncdn.com/mpcms/EN0001/assets/d52b23ef-0bcd-490c-8d69-cd41f6a159f8.png" img2="https://f.nooncdn.com/mpcms/EN0001/assets/5e4ac852-b7b2-43e1-a205-11e75d485433.png" img3 = "https://f.nooncdn.com/mpcms/EN0001/assets/74428d71-ca03-4241-ab74-d17d6c98a96a.png" img4="https://f.nooncdn.com/mpcms/EN0001/assets/1efa391f-c9ec-493a-9de7-c95b8bfd40e0.png"/>
      <Focus name = "https://f.nooncdn.com/mpcms/EN0001/assets/af1cf1f1-8ce8-415d-87b7-061000aa21a7.png" img1="https://f.nooncdn.com/mpcms/EN0001/assets/75222376-70d9-44aa-8f66-e5af9722f0fa.png" img2="https://f.nooncdn.com/mpcms/EN0001/assets/d0f2ffc1-4c5f-4253-ab12-b6bbb80662f2.png"/>
      </div>


    </div>
    
  )
}

export default App