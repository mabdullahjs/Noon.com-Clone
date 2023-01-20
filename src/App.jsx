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
import ExpressPro from './components/expressPro';
import Sale from './components/sale';

function App() {
  return (
    <div>
      <Navbar />
      <Navigation />
      <div className="container">
        <img style={{ width: "100%" }} src={cashback} alt="" />
        <div className="d-flex justify-content-center flex-wrap">
          <Carousels img1="https://f.nooncdn.com/mpcms/EN0001/assets/d1f344a8-b1d7-43d9-95e7-114069806252.png" img2="https://f.nooncdn.com/mpcms/EN0001/assets/e0bf5428-90c7-4ca9-a3c4-54b97e099bc6.png" img3="https://f.nooncdn.com/mpcms/EN0001/assets/47d5d396-239a-4ab8-b5e3-ae6765d93a49.png"
            img4="https://f.nooncdn.com/mpcms/EN0001/assets/83b71291-65f5-4fcc-8db8-a72d91b32426.jpg" width="60rem" />
          <div>
            <img className='img' src="https://f.nooncdn.com/mpcms/EN0001/assets/c6f2bd47-5eca-4908-b3a5-d377e231622a.png" alt="" />
            <img className='img' src="https://f.nooncdn.com/mpcms/EN0001/assets/4b795127-3b55-499d-831b-a361e0eae5b0.png" width="60rem" alt="" />
          </div>
        </div>
        <Product />

        {/* slider code */}

        <div className='container d-flex mt-5'>
          <Reason name="https://f.nooncdn.com/mpcms/EN0001/assets/66a5450d-bfd2-4ff3-ba71-434aee94d695.png" img1="https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png" img2="https://f.nooncdn.com/mpcms/EN0001/assets/13e146bb-6381-4d6e-9620-0b0743650dc6.png" img3="https://f.nooncdn.com/mpcms/EN0001/assets/d60b456a-31f4-4ce8-a090-766dae3738f0.png" img4="https://f.nooncdn.com/mpcms/EN0001/assets/2f75ee19-4d9a-4bc7-9599-f10b30f05469.png" />
          <Reason name="https://f.nooncdn.com/mpcms/EN0001/assets/3d4912ae-c58f-47d5-bf26-85ebf71e14a1.png" img1="https://f.nooncdn.com/mpcms/EN0001/assets/d52b23ef-0bcd-490c-8d69-cd41f6a159f8.png" img2="https://f.nooncdn.com/mpcms/EN0001/assets/5e4ac852-b7b2-43e1-a205-11e75d485433.png" img3="https://f.nooncdn.com/mpcms/EN0001/assets/74428d71-ca03-4241-ab74-d17d6c98a96a.png" img4="https://f.nooncdn.com/mpcms/EN0001/assets/1efa391f-c9ec-493a-9de7-c95b8bfd40e0.png" />
          <Focus name="https://f.nooncdn.com/mpcms/EN0001/assets/af1cf1f1-8ce8-415d-87b7-061000aa21a7.png" img1="https://f.nooncdn.com/mpcms/EN0001/assets/75222376-70d9-44aa-8f66-e5af9722f0fa.png" img2="https://f.nooncdn.com/mpcms/EN0001/assets/d0f2ffc1-4c5f-4253-ab12-b6bbb80662f2.png" />
        </div>

        {/*Express product code */}

        <div className='p-3'>
          <h1 style={{ fontSize: "1.5rem", color: "#404a5e", }}>Recommended for you</h1>
          <div className='d-flex justify-content-center flex-wrap'>
            <ExpressPro img="https://f.nooncdn.com/products/tr:n-t_240/v1662640953/N53346840A_1.avif" name="Apple iPhone 14 Pro Max 256GB 5G" price="5285.00" rating="4.3k" />
            <ExpressPro img="https://f.nooncdn.com/products/tr:n-t_240/v1669724765/N40633047A_1.avif" name="Sony PlayStation 5 Console (Disc)" price="2115.00" rating="1.6k" />
            <ExpressPro img="https://f.nooncdn.com/products/tr:n-t_240/v1660052743/N52856958A_1.avif" name="Samsung Galaxy A13 Dual SIM Light" price="589.00" rating="760" />
            <ExpressPro img="https://f.nooncdn.com/products/tr:n-t_240/v1667829014/N41247610A_1.avif" name="Apple iPhone 11 White 128GB 4G LTE" price="1999.00" rating="303" />
            <ExpressPro img="https://f.nooncdn.com/products/tr:n-t_240/v1668531488/N22732308A_1.avif" name="Apple Airpods 2nd Gen With Charging Case" price="2115.00" rating="1.6" />
          </div>
        </div>

        {/* carousel  */}


        <Carousels img1="https://f.nooncdn.com/mpcms/EN0001/assets/8429c515-26fc-4661-a8a8-7453682483b9.png" img2="https://f.nooncdn.com/mpcms/EN0001/assets/ac73d559-9560-4d40-9e0a-61670d1814a3.png" img3="https://f.nooncdn.com/mpcms/EN0001/assets/8429c515-26fc-4661-a8a8-7453682483b9.png"
          img4="https://f.nooncdn.com/mpcms/EN0001/assets/ac73d559-9560-4d40-9e0a-61670d1814a3.png" width="100%" />


        {/* noon gift card image */}
        <img style={{ width: "100%" }} src="https://f.nooncdn.com/mpcms/EN0001/assets/7f9ef85c-e278-440f-9dda-a2873a872a5e.jpg" alt="" />

        {/*Express product code */}

        <div className='p-3'>
          <h1 style={{ fontSize: "1.5rem", color: "#404a5e", }}>Trending deals in electronics</h1>
          <div className='d-flex justify-content-center flex-wrap'>
            <ExpressPro img="https://f.nooncdn.com/products/tr:n-t_240/v1659447849/N52751034A_1.avif" name="OnePlus Nord CE 2 Dual Sim Blue" price="973.00" rating="155" />
            <ExpressPro img="https://f.nooncdn.com/products/tr:n-t_240/v1669043087/N42284105A_1.avif" name="Apple Macbook Air MGN63 13 Display" price="3099.00" rating="320" />
            <ExpressPro img="https://f.nooncdn.com/products/tr:n-t_240/v1667497469/N40633049A_1.avif" name="Sony DualSence wireless PS5 Controller White" price="216.00" rating="704" />
            <ExpressPro img="https://f.nooncdn.com/products/tr:n-t_240/v1663230680/N53350699A_1.avif" name="GoPro HERO 11 Black Action Camera" price="1589.00" rating="28" />
            <ExpressPro img="https://f.nooncdn.com/products/tr:n-t_240/v1666856996/N53359859A_1.avif" name="Apple iPod Pro 2022 (4TH Generation) 11-inch 128GB" price="2935.00" rating="4.8" />
          </div>
        </div>



        {/* noon GIF*/}
        <img style={{ width: "100%" }} src="https://f.nooncdn.com/mpcms/EN0001/assets/ec03d76e-eabb-4623-a6cc-0e455abf491f.gif" alt="" />




        {/*Express product code */}

        <div className='p-3'>
          <h1 style={{ fontSize: "1.5rem", color: "#404a5e", }}>Recommended for you</h1>
          <div className='d-flex justify-content-center flex-wrap'>
            <ExpressPro img="https://f.nooncdn.com/products/tr:n-t_240/v1662640953/N53346840A_1.avif" name="Apple iPhone 14 Pro Max 256GB 5G" price="5285.00" rating="4.3k" />
            <ExpressPro img="https://f.nooncdn.com/products/tr:n-t_240/v1669724765/N40633047A_1.avif" name="Sony PlayStation 5 Console (Disc)" price="2115.00" rating="1.6k" />
            <ExpressPro img="https://f.nooncdn.com/products/tr:n-t_240/v1660052743/N52856958A_1.avif" name="Samsung Galaxy A13 Dual SIM Light" price="589.00" rating="760" />
            <ExpressPro img="https://f.nooncdn.com/products/tr:n-t_240/v1667829014/N41247610A_1.avif" name="Apple iPhone 11 White 128GB 4G LTE" price="1999.00" rating="303" />
            <ExpressPro img="https://f.nooncdn.com/products/tr:n-t_240/v1668531488/N22732308A_1.avif" name="Apple Airpods 2nd Gen With Charging Case" price="2115.00" rating="1.6" />
          </div>
        </div>



        {/* sale  */}

        <Sale img="https://f.nooncdn.com/mpcms/EN0001/assets/66728f5e-69e2-456f-85ac-e648dba07cb1.png" img1="https://f.nooncdn.com/mpcms/EN0001/assets/52c6a871-e905-4617-af55-448611f82ce2.png" img2="https://f.nooncdn.com/mpcms/EN0001/assets/bf00b3ff-ae46-4fb7-878e-36b3c50208a0.png" img3="https://f.nooncdn.com/mpcms/EN0001/assets/fa3737c6-f28d-4121-8933-d9252fb0f622.png" img4="https://f.nooncdn.com/mpcms/EN0001/assets/04dd2544-a666-49fc-8f09-b5cfd4a94edf.png" img5="https://f.nooncdn.com/mpcms/EN0001/assets/56b0ec98-34da-4a98-a1c8-93defc3eb3c2.png" img6="https://f.nooncdn.com/mpcms/EN0001/assets/c95c923b-5cd4-4bd6-80d6-7c1adb72869b.png" img7="https://f.nooncdn.com/mpcms/EN0001/assets/9bccfc51-945f-41c6-919d-9eb234e50fda.png" />


        {/* sale  */}

        <Sale img="https://f.nooncdn.com/mpcms/EN0001/assets/f4e08013-035b-43f1-b643-8ed152acdca4.png" img1="https://f.nooncdn.com/mpcms/EN0001/assets/b6b84a64-2fa5-4692-8f51-888d15892d94.png" img2="https://f.nooncdn.com/mpcms/EN0001/assets/6e6c50b5-2176-42a6-a8f1-456529c15c06.png" img3="https://f.nooncdn.com/mpcms/EN0001/assets/317c4402-5d33-45af-9c86-84641aa9cc8c.png" img4="https://f.nooncdn.com/mpcms/EN0001/assets/cf694483-a899-4418-a292-dd53f258bf92.png" img5="https://f.nooncdn.com/mpcms/EN0001/assets/895afaa3-594a-4997-9e25-82a592ab4d09.png" img6="https://f.nooncdn.com/mpcms/EN0001/assets/4a8ab2b2-eac4-4fef-a4a9-2bfeeb640ed3.png" img7="https://f.nooncdn.com/mpcms/EN0001/assets/d44615a9-dca3-419f-a5cc-6dec81b1edb3.png" />

        {/* sale  */}

        <Sale img="https://f.nooncdn.com/mpcms/EN0001/assets/1346ad04-a8c9-4846-8ee0-cdfcd3571f6b.png" img1="https://f.nooncdn.com/mpcms/EN0001/assets/c3d99b50-bbb7-4056-97fa-e08725cd7ebd.png" img2="https://f.nooncdn.com/mpcms/EN0001/assets/2db802b8-e71f-4234-999a-b131add34a45.png" img3="https://f.nooncdn.com/mpcms/EN0001/assets/1bd8d723-a951-4dde-a2fa-01b11c7f16d8.png" img4="https://f.nooncdn.com/mpcms/EN0001/assets/c240d589-9a3b-4127-833a-4c2a4c1dff73.png" img5="https://f.nooncdn.com/mpcms/EN0001/assets/c9939202-d507-4a53-9deb-8bb462474c7d.png" img6="https://f.nooncdn.com/mpcms/EN0001/assets/c95c923b-5cd4-4bd6-80d6-7c1adb72869b.png" img7="https://f.nooncdn.com/mpcms/EN0001/assets/4c15f523-693c-43d5-823d-cbd0e01a6961.png" />


                {/* noon GIF*/}
                <img style={{ width: "100%" , marginTop:"2rem" }} src="https://f.nooncdn.com/mpcms/EN0001/assets/6e50943a-e936-495c-873c-86feef76f8f0.png" alt="" />






      </div>
    </div>

  )
}

export default App