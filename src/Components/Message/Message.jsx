import React from 'react'
import './message.scss'

function Message({msg}) {
  return (
    <div className='message'>
      <p>{msg}</p>
    </div>
  )
}

export default Message
