import React from 'react'
import "./Attribute.css"

function Attribute({ child }){
  return (
    <div className='attribute'>{ child }</div>
  )
}

export default Attribute