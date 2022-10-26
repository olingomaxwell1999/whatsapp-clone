import React from 'react'
import Topverify from '../../Components/Topverify/Topverify'
import { FcMissedCall } from 'react-icons/fc'
import './verify.scss'
import Verifytext from '../../Components/Verifytext/Verifytext'
import { Link } from 'react-router-dom'

function Verify() {
  const texts = [{
    id: 0,
    message: 'allow WhatsApp to manage this call so we can call your phone and end the call automatically'
  },
    {
      id: 1,
      message: 'allow WhatsApp to do a one-time check and access your call log so that we can confirm that you received the call'
    }
  ]
  return (
      <div className='verify'>
      <Topverify />
      <FcMissedCall className='icon' />
      <h3>to automatically verify with a missed call to your phone :</h3>

      {
        texts.map((text) => (
          <Verifytext key={text.id} text={ text.message} />
        ))
      }

      <div className="textbutton">
        <p>learn more about how you can manage your <span>phone verification permissions</span></p>

        <button>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/message' >Continue</Link>
        </button>

        <button>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/message' >Continue with SMS</Link>
        </button>
      </div>
    </div>
  )
}

export default Verify