import React from 'react'
const Onclick = () => {
    const shoot = () => {
        alert("Great Shot!")}
        const hhover = () => {
            alert("hi rafe")}

  return (
    <div><button onClick={shoot}>click me</button>
    <h1 onMouseOver={hhover}>my name is rafe</h1></div>
  )
}

export default Onclick