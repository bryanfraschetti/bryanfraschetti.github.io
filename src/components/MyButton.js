import React from 'react'
import "./MyButton.css"

function MyButton ({ text }){
  return (
    <button className='my-btn'>{text}</button>
  )
}

export default MyButton