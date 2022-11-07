import React from 'react'
import Mainchat from '../../Components/Mainchat/Mainchat'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './chats.scss'

function Chats() {
  return (
    <div className='chats'>
        <Sidebar/>
        <Mainchat/>
    </div>
  )
}

export default Chats
