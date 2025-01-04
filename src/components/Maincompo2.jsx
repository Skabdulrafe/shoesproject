import React from 'react'

const Maincompo2 = (props) => {
  return (
    <div className='compo2'>
      <p>{props.name}</p>
      <h1>{props.heading}</h1>
      <p>{props.para}</p>
      <h3><b>{props.price}</b></h3>
      <br />
      <button>{props. btn}</button>
    </div>
  )
}

export default Maincompo2