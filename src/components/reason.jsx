import React from 'react'

function Reason(props) {
    return (
        <div>
            <img style={{width:"100%"}} src={props.name} alt="" />
            <div className='d-flex flex-wrap'>
                <img className='p-2' style={{width:"50%"}} src={props.img1} alt="" />
                <img className='p-2' style={{width:"50%"}} src={props.img2}alt="" />
            </div>
            <div>
                <img className='p-2' style={{width:"50%"}} src={props.img3} alt="" />
                <img className='p-2' style={{width:"50%"}} src={props.img4} alt="" />
            </div>

        </div>
    )
}

export default Reason