import React from 'react'

function Focus(props) {
  return (
    <div>
        <img style={{width:"100%"}} src={props.name} alt="" />
            <div className='d-flex flex-wrap'>
                <img className='p-2' style={{width:"100%"}} src={props.img1} alt="" />
            </div>
            <div>
                <img className='p-2' style={{width:"100%"}} src={props.img2} alt="" />
            </div>
    </div>
  )
}

export default Focus