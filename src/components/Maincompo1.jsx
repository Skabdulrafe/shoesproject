import React from 'react'
import '../assets/css/Main.css'
const Maincompo1 = (props) => {
  return (
    <>
    <div >
        <img className='imageclass'src={props.src}  ></img>
        <br />
       <div className='smallimg'> <img src={props.src} width="50" height="33" ></img>
        <img src={props.src} width="50" height="33" ></img> 
        <img src={props.src} width="50" height="33" ></img>
        <img src={props.src} width="50" height="33" ></img>
        </div>
    </div>
    </>
  )
}

export default Maincompo1