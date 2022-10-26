import React from 'react'
import './signup.scss'
import Phonenumber from '../../Components/Phonenumber/Phonenumber'
import { Link } from 'react-router-dom'

const Signuppage = () => {

  return (
    <div>
      <div className="text">
        <h3>enter your phone number</h3>
        <p>whatsapp will need to verify your phone number</p>
        <span>What's my number?</span>
      </div>

      <div className="inputarea">
        <Phonenumber style={{ marginBottom: '50px' }} />

        <p>Carrier Charges may apply</p>

        <button>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/verify' >Next</Link>
        </button>

        <button>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/verify' >Login with google account</Link>
        </button>
      </div>


    </div>
  )
}

export default Signuppage