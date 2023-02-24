import React from 'react'

const Dropdown = ({img,text}) => {
  return (
    <div>
      <li className='dropDown-item' >
        <img 
        src={img} alt="" />
        <a>{text}</a>
      </li>
    </div>
  )
}

export default Dropdown
