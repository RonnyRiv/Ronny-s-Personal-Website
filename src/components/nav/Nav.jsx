import React from 'react'
import './Nav.css' 
import{FaHome} from 'react-icons/fa'
import{BiUserCircle} from 'react-icons/bi'
import{BsBook} from 'react-icons/bs'
import{BiDumbbell} from 'react-icons/bi'
import{AiOutlinePhone} from 'react-icons/ai'
import{useState} from 'react'

const nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav> 
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBook/></a>
        <a href="#hobbies" onClick={() => setActiveNav('#hobbies')} className={activeNav === '#hobbies' ? 'active' : ''}><BiDumbbell/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlinePhone/></a>
    </nav>
  )
}

export default nav