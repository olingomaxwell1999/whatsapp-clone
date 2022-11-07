import React from 'react'
import './chat.scss'
import Avatar from '@mui/material/Avatar'
import {BiCheckDouble} from 'react-icons/bi'

function Chat(props) {
  return (
    <div className='chat'>
      <Avatar className='avatarpic' src={props.img}></Avatar>

      <div className="chat__info">
        <h2>{props.jina}</h2>
        <div className="ticks">
          <BiCheckDouble className={`() ? 'delivered' : 'ticked'`}/>
          <p>{props.msg}</p>
        </div>
      </div>

      <div className="date">
        <p>{props.tim}</p>
        <p>{props.siku}</p>
      </div>
    </div>
  )
}

export default Chat
