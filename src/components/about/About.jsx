import React from 'react'
import './About.css'
import ME from 'C:/Users/Ronny/Desktop/PortfolioWebsite/src/assets/GradPic.jpg'
import{LuMedal} from 'react-icons/lu'
import{MdGroups2} from 'react-icons/md'
import{FaRegFolder} from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article>
              <LuMedal className="about__icon"/>
              <h5>Experience</h5>
              <small>5+ Years of School Experience</small>
            </article>

            <article>
              <MdGroups2 className="about__icon"/>
              <h5>Groups</h5>
              <small>5+ Groups Participated in</small>
            </article>

            <article>
              <FaRegFolder className="about__icon"/>
              <h5>Projects</h5>
              <small>8+ Completed Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores recusandae id voluptatem molestiae voluptas mollitia dolor, unde assumenda consectetur illo? Saepe quidem, distinctio dignissimos odio reprehenderit quod aspernatur iste similique.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about