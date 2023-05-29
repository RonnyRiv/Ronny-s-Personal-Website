import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from 'C:/Users/Ronny/desktop/PortfolioWebsite/src/assets/cropped.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ronny Benjamin Rivera</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me"><img style={{width: '80%', height: '100%'}} src={ME} alt='me' /></div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>  

      </div>      
      </header>
  )
}

export default header