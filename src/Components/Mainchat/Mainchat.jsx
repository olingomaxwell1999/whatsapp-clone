import React, { useState } from 'react'
import Message from '../Message/Message'
import Messagerecieve from '../Messagerecieve/Messagerecieve'
import Topbar from '../Topbar/Topbar'
import './mainchat.scss'
import {MdEmojiEmotions} from 'react-icons/md'
// import {BiSend} from 'react-icons/bi'
import {BsMic} from 'react-icons/bs'

function Mainchat() {
  let recievedmessages = [
    {
      id:20,
      message: 'hi, my name is olingo maxwell, I am a web developer'
    },
    {
      id:21,
      message: 'i have checked your website and i feel that there ase some changes that can be made to take your website to the next level.'
    },
  ]

  let sentmessages = [
    {
      id:30,
      message: 'ok maxwell how may i help you?'
    },
    {
      id:40,
      message: 'wow! thats nice. would you mind sharing the areas that you feel need to be changed.'
    },
  ]

  //sending message functionality
  const [input,setInput] = useState('')

  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(input);
  }

  const sendMessage = (e) => {
    e.preventDefault()
    setInput(sentmessages.push(input))
    setInput(' ')
  }

  return (
    <div className='mainchat'>
      <Topbar/>
      {
        recievedmessages.map((recievedmessage) => (
          <Message key={recievedmessage} msg={recievedmessage.message}/>
        ))
      }
      {
        sentmessages.map((sentmessage) => (
            <Messagerecieve key={sentmessage.id} msg={sentmessage.message}/>
        ))
      }

      <div className="chat__footer">
        <MdEmojiEmotions className='footer__icon'/>

        <form>
          <input value={input} onChange={handleChange} type="text" placeholder='Type a message' />

          <BsMic className='footer__icon'/>

          <button onClick={sendMessage} type='submit'>
            send message
          </button>

          
        </form>
      </div>
      
    </div>
  )
}

export default Mainchat
