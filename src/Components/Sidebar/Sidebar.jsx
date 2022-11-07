import React from 'react'
import './sidebar.scss'
import {CgProfile} from 'react-icons/cg'
import {BiLoaderCircle} from 'react-icons/bi'
import {MdMessage} from 'react-icons/md'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {FiSearch} from 'react-icons/fi'
import Chat from '../Chat/Chat'
import Tanasha from '../../assets/tansha.jpeg'
import Martin from '../../assets/gathu.jpeg'
import Robert from '../../assets/robert.jpeg'
import Fauzia from '../../assets/fauzia.jpg'
import Ismael from '../../assets/lenox.jpeg'

function Sidebar() {

  let users = [
    {
      id:1,
      image: Tanasha,
      name: 'tanasha donna',
      message:'lets see to....',
      time: '13:00 pm',
      day: 'today'
    },
    {
      'id':2,
      'image': Martin,
      name: 'developer martin',
      message:'i havent recieve....',
      time: '12:40 pm',
      day: 'today'
    },
    {
      id:3,
      image: Fauzia,
      name: 'developer fauzia',
      message:'max nimejam....',
      time: '12:30 pm',
      day: 'today'
    },
    {
      id:4,
      image: Robert,
      name: 'developer robert',
      message:'ile soo yang...',
      time: '6:00 am',
      day: 'today'
    },
    {
      id:5,
      image: Fauzia,
      name: 'developer omala',
      message:'kam kejan...',
      time: '5:00 am',
      day: 'today'
    },
    {
      id:6,
      image: Ismael,
      name: 'developer ismael',
      message:'upload io re...',
      time: '3:00 am',
      day: 'today'
    },
    {
      id:7,
      image: Tanasha,
      name: 'tanasha donna',
      message:'lets see to....',
      time: '13:00 pm',
      day: 'today'
    },
    {
      'id':8,
      'image': Martin,
      name: 'developer martin',
      message:'i havent recieve....',
      time: '12:40 pm',
      day: 'today'
    },
    {
      id:9,
      image: Fauzia,
      name: 'developer fauzia',
      message:'max nimejam....',
      time: '12:30 pm',
      day: 'today'
    },
    {
      id:10,
      image: Robert,
      name: 'developer robert',
      message:'ile soo yang...',
      time: '6:00 am',
      day: 'today'
    },
    {
      id:11,
      image: Fauzia,
      name: 'developer omala',
      message:'kam kejan...',
      time: '5:00 am',
      day: 'today'
    },
    {
      id:12,
      image: Ismael,
      name: 'developer ismael',
      message:'upload io re...',
      time: '3:00 am',
      day: 'today'
    },
  ]

  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <CgProfile className='header__icon one'/>
        <BiLoaderCircle className='header__icon'/>
        <MdMessage className='header__icon'/>
        <BsThreeDotsVertical className='header__icon'/>
      </div>

      <div className="sidebar__search">
        <FiSearch className='search__icon'/>
        <input type="text" placeholder='search for chat' />
      </div>

      <div className="sidebar__chats">
        {
          users.map((user) => {
            return (
              <Chat key={user.id} img={user.image} jina={user.name} msg={user.message} tim={user.time} siku={user.day}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Sidebar
