import React from 'react'
import "./expressPro.css"

function ExpressPro(props) {
  return (
    <div className='p-2' style={{width:"15rem"}}>
        <img className='size' src={props.img} alt="product" />
        <h2 style={{fontSize:"1rem"}}>{props.name}</h2>
        <h3 style={{fontSize:"1rem"}}> <span style={{fontSize:"0.8rem"}}> AED </span>{props.price}</h3>
        <div className='d-flex justify-content-between mt-4'>
            <img  src="https://z.nooncdn.com/s/app/com/noon/images/fulfilment_express_v2-en.svg" alt="express" />
                <h4 style={{fontSize:"1rem" , color:"gray"}}>({props.rating})</h4>
        </div>
    </div>
  )
}

export default ExpressPro