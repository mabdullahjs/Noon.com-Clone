import React from 'react'
import "./category.css"

function Category(props) {
  return (
    <div>
        <img style={{width:"100%" , paddingTop:"3rem" ,paddingBottom:"3rem"}} src={props.main} alt="" />
        <div className="images">
            <img id='img' className='p-3' src={props.img1} alt="" />
            <img id='img' className='p-3' src={props.img2} alt="" />
            <img id='img' className='p-3' src={props.img3} alt="" />
            <img id='img' className='p-3' src={props.img4} alt="" />
            <img id='img' className='p-3' src={props.img5} alt="" />
            <img id='img' className='p-3' src={props.img6} alt="" />
        </div>
    </div>
  )
}

export default Category