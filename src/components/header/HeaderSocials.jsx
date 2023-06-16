import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{ImGithub} from 'react-icons/im'
import{FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ronnybrivera/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ronnyriv" target="_blank"><ImGithub /></a>
        <a href="https://dribbble.com" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials