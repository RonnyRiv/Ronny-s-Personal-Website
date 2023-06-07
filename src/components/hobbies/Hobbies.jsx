import React from 'react'
import './Hobbies.css'
import {FiCheck} from 'react-icons/fi'

const hobbies = () => {
  return (
    <section id='hobbies'>
      <h5>What I Do</h5>
      <h2>Hobbies</h2>

      <div className="container hobbies__container">
        <article className="hobby">
          <div className="hobby__head">
            <h3>Assembling Computers</h3>
          </div>

          <ul className="hobby__list">
            <li>
              <FiCheck className="hobby__list-icon" size='40px'/>
              <p>Selecting and ordering compatible computer components at specified price ranges.</p>
            </li>
            <li>
              <FiCheck className="hobby__list-icon" size='40px'/>
              <p>Building the computer on-site and explaining the process to the client every step of the way.</p>
            </li>
            <li>
              <FiCheck className="hobby__list-icon" size='40px'/>
              <p>Installing operating systems and troubleshooting potential hardware defects.</p>
            </li>
            <li>
              <FiCheck className="hobby__list-icon" size='35px'/>
              <p>Installing or replacing additional computer components.</p>
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
              <FiCheck className="hobby__list-icon" size='40px'/>
              <p>Selecting and ordering compatible computer components at specified price ranges.</p>
            </li>
            <li>
              <FiCheck className="hobby__list-icon" size='40px'/>
              <p>Building the computer on-site and explaining the process to the client every step of the way.</p>
            </li>
            <li>
              <FiCheck className="hobby__list-icon" size='40px'/>
              <p>Installing operating systems and troubleshooting potential hardware defects.</p>
            </li>
            <li>
              <FiCheck className="hobby__list-icon" size='35px'/>
              <p>Installing or replacing additional computer components.</p>
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
              <FiCheck className="hobby__list-icon" size='40px'/>
              <p>Selecting and ordering compatible computer components at specified price ranges.</p>
            </li>
            <li>
              <FiCheck className="hobby__list-icon" size='40px'/>
              <p>Building the computer on-site and explaining the process to the client every step of the way.</p>
            </li>
            <li>
              <FiCheck className="hobby__list-icon" size='40px'/>
              <p>Installing operating systems and troubleshooting potential hardware defects.</p>
            </li>
            <li>
              <FiCheck className="hobby__list-icon" size='35px'/>
              <p>Installing or replacing additional computer components.</p>
            </li>
          </ul>
        </article>
        {/*End of Gym*/}
      </div>
    </section>
  )
}

export default hobbies