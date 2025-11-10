import React from 'react'
import Home from '../../components/Home'
import About from '../../components/About'
import Resume from '../../components/Resume'
import Portfolio from '../../components/Portfolio'
import Contact from '../../components/Contact'
import Skills from '../../components/Skills'

function MainComponents() {
  return (
        <>
            <Home/>
            <About/>
            <Skills/>
            <Resume/>
            <Portfolio/>
            <Contact/>
        </>
  )
}

export default MainComponents