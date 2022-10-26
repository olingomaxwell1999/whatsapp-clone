import React,{useState} from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


function Phonenumber() {

    let [phonenumber, setPhonenumber] = useState('')
  return (
      <div>
          <PhoneInput country='Ke' placeholder='Phone number' value={phonenumber} onChange={setPhonenumber } />
    </div>
  )
}

export default Phonenumber