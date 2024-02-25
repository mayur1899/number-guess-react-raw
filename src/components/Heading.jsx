import React from 'react'
import './css/Heading.css'

const Heading = ({text, style}) => {
  return (
    <div>
      <h3 id='heading-component' style={style}>{text}</h3>
    </div>
  )
}

export default Heading
