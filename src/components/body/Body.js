import React from 'react'
import About from './about/About'
import './Body.css'
import Contact from './contact/Contact'
import Projects from './projects/Projects'
import Skill from './skills/Skill'
import Work from './work/Work'

function Body() {
  return (
    <div className='body'>
      <section id='about'>
        <About/>
      </section>
      <section id='projects'>
        <Projects/>
      </section>
      <section id='skills'>
        <Skill/>
      </section>
      <section id='work'>
        <Work/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
    </div>
  )
}

export default Body