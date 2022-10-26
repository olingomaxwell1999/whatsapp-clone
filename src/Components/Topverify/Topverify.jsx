import React from 'react'
import {FiArrowLeft} from 'react-icons/fi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import './topverify.scss'

function Topverify() {
  return (
      <div className='top'>
          <FiArrowLeft className='arrow' />
          
          <h3>verify phone number</h3>

          <BsThreeDotsVertical className='dot'/>
    </div>
  )
}

export default Topverify