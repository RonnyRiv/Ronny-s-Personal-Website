import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Hobbies from './components/hobbies/Hobbies'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
    <Header />
    <Nav/>
    <About />
    <Experience />
    <Portfolio />
    <Hobbies />
    <Contact />
    <Footer/>
    </>
  )
}

export default App