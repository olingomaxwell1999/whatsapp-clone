import React from 'react'
import './topbar.scss'
import Avatar from '@mui/material/Avatar'
import Tanasha from '../../assets/tansha.jpeg'
import {BiSearchAlt2} from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'

function Topbar() {
  return (
    <div className='topbar'>
      <Avatar className='profile' src={Tanasha}/>

      <div className="namearea">
        <h3>tanasha dona</h3>
        <p>last seen today 9:00am</p>
      </div>

      <div className="iconarea">
        <BiSearchAlt2 className='iconc' />
        <BsThreeDotsVertical className='iconc'/>
      </div>
    </div>
  )
}

export default Topbar
