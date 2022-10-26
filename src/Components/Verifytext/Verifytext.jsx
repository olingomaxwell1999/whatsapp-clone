import React from 'react'
import './verifytext.scss'
import {IoMdCall} from 'react-icons/io'

function Verifytext({text}) {
  return (
      <div className='textcontainer'>
          <div className="iconarea">
              <IoMdCall className='callicon'/>
          </div>
          <div className="text">
              <p>{text }</p>
          </div>
    </div>
  )
}

export default Verifytext