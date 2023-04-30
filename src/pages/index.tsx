import React from 'react'
import Skills from './Skills'
import Project from './Project'
import Writing from './Writing'
import Contact from './Contact'
import About from './About'

export default function index() {
  return (
    <div>
      <About />
      <Skills />
      <Project />
      <Writing />
      <Contact />
    </div>
  )
}

