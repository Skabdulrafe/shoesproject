import React from 'react'

const Btnn = () => {
    let count=1
    let functionhandler=()=>{
        count=count+1
    }
  return (
    <div>
       count is {count}
        <button onclick={functionhandler}>increment</button>
    </div>
  )
}

export default Btnn