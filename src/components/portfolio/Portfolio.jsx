import React from 'react'
import './Portfolio.css'
import IMG1 from 'C:/Users/Ronny/Desktop/PortfolioWebsite/src/assets/CatalogueImage.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />  
          </div>
          <h3>Portfolio Website using React</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/RonnyRiv/Ronny-s-Personal-Website" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {/*
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />  
          </div>
          <h3>Game Catalogue using React</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article><article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />  
          </div>
          <h3>Game Catalogue using React</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article><article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />  
          </div>
          <h3>Game Catalogue using React</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article><article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />  
          </div>
          <h3>Game Catalogue using React</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article><article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />  
          </div>
          <h3>Game Catalogue using React</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className='btn' target='_blank'>Github</a>
            <a href="https://github.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>                                        
        */}
      </div>
    </section>
  )
}

export default portfolio