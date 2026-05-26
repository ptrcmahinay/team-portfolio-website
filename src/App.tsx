import React from 'react'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import Portfolio from '@/containers/portfolio'
import Home from '@/containers/home'
import Projects from '@/containers/projects'
import About from '@/containers/about'
import Services from '@/containers/services'
import Contact from '@/containers/contact'
import Footer from '@/containers/footer'

const App = () => {
  return (
    <div className="w-screen min-h-screen flex-1">
      {/* header */}
      <Header />

      {/* home */}
      <Home />

      <Portfolio />

      {/* Projects */}
      <Projects/>
      {/* about us */}

      <About/>

      <Services/>
      {/* services */}
      
      {/* contact */}
      <Contact/>

      {/* footer */}
      <Footer/>
    </div>
  )
}

export default App
