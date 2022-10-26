import React from 'react'
import { Link } from 'react-router-dom'
import Topverify from '../Topverify/Topverify'
import './messages.scss'

function Messages() {
  return (
      <div className='messages'>
          <Topverify />
          
          <p>waiting to automatically detect an sms sent to <span className='number'>+254736586940.</span> <span className='wrong'>Wrong number?</span></p>

          <form className='code'>
              <input className='input' type="text" placeholder='--- ---' />
              <label for='text'>enter 6-digit code</label>
          </form>

          <h4>Didn't receive code?</h4>

          <button>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/profile' >Continue</Link>
        </button>
    </div>
  )
}

export default Messages