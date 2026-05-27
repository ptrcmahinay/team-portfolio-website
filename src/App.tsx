import Header from '@/components/header'
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
      <div className="brand-marquee overflow-hidden whitespace-nowrap py-4">
        <div className="marquee-track flex w-max animate-marquee gap-20">
          <span className="marquee-item flex items-center gap-2">
            <span className="dot w-2 h-2 rounded-full bg-pink-500"></span> Figma
          </span>

          <span className="marquee-item flex items-center gap-2">
            <span className="dot w-2 h-2 rounded-full bg-pink-500"></span> React
          </span>

          <span className="marquee-item flex items-center gap-2">
            <span className="dot w-2 h-2 rounded-full bg-pink-500"></span> JavaScript
          </span>

          <span className="marquee-item flex items-center gap-2">
            <span className="dot w-2 h-2 rounded-full bg-pink-500"></span> TypeScript
          </span>

          <span className="marquee-item flex items-center gap-2">
            <span className="dot w-2 h-2 rounded-full bg-pink-500"></span> Framer Motion
          </span>

          <span className="marquee-item flex items-center gap-2">
            <span className="dot w-2 h-2 rounded-full bg-pink-500"></span> Php
          </span>

          <span className="marquee-item flex items-center gap-2">
            <span className="dot w-2 h-2 rounded-full bg-pink-500"></span> MySQL
          </span>

          <span className="marquee-item flex items-center gap-2">
            <span className="dot w-2 h-2 rounded-full bg-pink-500"></span> Tailwind
          </span>

          <span className="marquee-item flex items-center gap-2">
            <span className="dot w-2 h-2 rounded-full bg-pink-500"></span> Supabase
          </span>
        </div>
      </div>
      {/* <Portfolio /> */}

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
