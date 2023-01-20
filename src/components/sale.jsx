import React from 'react'

function Sale(props) {
  return (
    <div >
        <img style={{width:"100%"}} src={props.img} alt="" />
        <div className='d-flex flex-wrap'>
            <img style={{width:"11.5rem"}} src={props.img1} alt="" />
            <img style={{width:"11.5rem"}} src={props.img2} alt="" />
            <img style={{width:"11.5rem"}} src={props.img3} alt="" />
            <img style={{width:"11.5rem"}} src={props.img4} alt="" />
            <img style={{width:"11.5rem"}} src={props.img5} alt="" />
            <img style={{width:"11.5rem"}} src={props.img6} alt="" />
            <img style={{width:"11.5rem"}} src={props.img7} alt="" />
        </div>
    </div>
  )
}

export default Sale