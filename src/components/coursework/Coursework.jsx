import React from 'react'
import './Coursework.css'

const data = [
{
    grade: 'A+',
    course: 'Class 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque nihil officia atque quas voluptatem recusandae mollitia dolorum',
},
{
    grade: 'A+',
    course: 'Class 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque nihil officia atque quas voluptatem recusandae mollitia dolorum',
},
{
    grade: 'A+',
    course: 'Class 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque nihil officia atque quas voluptatem recusandae mollitia dolorum',
},
{
    grade: 'A+',
    course: 'Class 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque nihil officia atque quas voluptatem recusandae mollitia dolorum',
}
]

const coursework = () => {
  return (
    <section id='coursework'>
        <h5>Courses completed in college</h5>
        <h2>Additional Coursework</h2>

        <div className="container coursework__container">
            {
                data.map(({grade,course,description}, index) => {
                    return (
                        <article key={index} className="course">
                            <h1 className="course__grade">{grade}</h1>
                            <h5 className='course__title'>{course}</h5>
                            <small className="course__description">{description}</small>
                        </article>
                    )
                })
            }
        </div>

    </section>
  )
}

export default coursework