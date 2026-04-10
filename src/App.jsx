import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Projects from './components/projects/Projects'

function App() {

  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
