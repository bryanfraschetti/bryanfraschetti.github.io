import React from 'react'
import "./MyButton.css"

function MyButton ({ className, text }){
  return (
    <button className={className}>{text}</button>
  )
}

export default MyButton