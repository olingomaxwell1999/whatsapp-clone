import React from 'react'
import { Link } from 'react-router-dom'
import './welcome.scss'
import wApp from '../../assets/app.jpg'

function Welcome() {
  return (
      <div className='welcome'>
          <div className="heading">
              <h3>Welcome to WhatsApp</h3>
          </div>
          <div className="image">
              <img src={wApp} alt="Welcome to WhatsApp" />
          </div>
          <div className="text">
              <p>Read our <span>Privacy Policy.</span> Tap "Agree and Continue" to accept <span>Terms and Conditions</span></p>
              
              <button>
                  <Link style={{color: "white", textDecoration: 'none' }} to='/signup'>agree and continue</Link>
              </button>
          </div>
    </div>
  )
}

export default Welcome