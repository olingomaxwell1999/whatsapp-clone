import React from 'react'
import './loginpage.scss'
import GoogleButton from 'react-google-button'
import {UserAuth} from '../../Context/Context'


function Loginpage() {

  const { googleSignIn} = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  

  
  return (
    <div className='loginpage'>
        <div className="login">
            <h2>Hi and welcome to WhatsApp</h2>
            <GoogleButton onClick={handleGoogleSignIn}/>
        </div>
    </div>
  )
}

export default Loginpage
