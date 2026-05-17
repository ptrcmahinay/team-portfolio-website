import React from 'react'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import Portfolio from '@/containers/portfolio'
import Home from '@/containers/home'
import Works from '@/containers/works'
import About from '@/containers/about'

const App = () => {
  return (
    <div className="w-screen min-h-screen flex-1">
      {/* header */}
      <Header />

      {/* home */}
      <Home />

      <Portfolio />

      {/* works */}
      <Works/>
      {/* about us */}

      <About/>
      {/* services */}

      {/* contact */}

      {/* footer */}
    </div>
  )
}

export default App
