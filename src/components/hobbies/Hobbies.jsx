import React from 'react'
import './Hobbies.css'
import {AiOutlineCheck} from 'react-icons/ai'

const hobbies = () => {
  return (
    <section id='hobbies'>
      <h5>What I Do</h5>
      <h2>Hobbies</h2>

      <div className="container hobbies__container">
        <article className="hobby">
          <div className="hobby__head">
            <h3>Computer Assembly</h3>
          </div>

          <ul className="hobby__list">
            <li>
              <AiOutlineCheck className="hobby__list-icon"/>
              <p>Selecting and ordering compatible computer components at specified price ranges.</p>
            </li>
            <li>
              <AiOutlineCheck className="hobby__list-icon"/>
              <p>Building the computer on-site and explaining the process to the client every step of the way.</p>
            </li>
            <li>
              <AiOutlineCheck className="hobby__list-icon"/>
              <p>Installing operating systems and troubleshooting potential hardware defects.</p>
            </li>
            <li>
              <AiOutlineCheck className="hobby__list-icon"/>
              <p>Installing additional computer components as well as replacing old or broken parts.</p>
            </li>
          </ul>
        </article>
        {/*End of Computer Building*/}
        <article className="hobby">
          <div className="hobby__head">
            <h3>Programming</h3>
          </div>

          <ul className="hobby__list">
            <li>
              <AiOutlineCheck className="hobby__list-icon"/>
              <p>Designing and implementing object oriented programs to solve every day problems.</p>
            </li>
            <li>
              <AiOutlineCheck className="hobby__list-icon"/>
              <p>Learning new java tools to help streamline the coding process as well as improve the overall quality.</p>
            </li>
            <li>
              <AiOutlineCheck className="hobby__list-icon"/>
              <p>Understanding java packages so that I can refine the user experience.</p>
            </li>
            <li>
              <AiOutlineCheck className="hobby__list-icon"/>
              <p>Challenging myself with learning new languages to better suit the tasks that need to be completed.</p>
            </li>
          </ul>
        </article>
        {/*End of Programming*/}
        <article className="hobby">
          <div className="hobby__head">
            <h3>Gym</h3>
          </div>

          <ul className="hobby__list">
            <li>
              <AiOutlineCheck className="hobby__list-icon"/>
              <p>Keeping a consistent gym schedule to maintain a daily structured routine.</p>
            </li>
            <li>
              <AiOutlineCheck className="hobby__list-icon"/>
              <p>Having the discipline to make better eating choices and maintain a healthy lifestyle.</p>
            </li>
            <li>
              <AiOutlineCheck className="hobby__list-icon"/>
              <p>Focusing on consistent improvement and applying it to other areas of my life.</p>
            </li>
            <li>
              <AiOutlineCheck className="hobby__list-icon"/>
              <p>Having proper work ethic and perservering through challenging situations.</p>
            </li>
          </ul>
        </article>
        {/*End of Gym*/}
      </div>
    </section>
  )
}

export default hobbies