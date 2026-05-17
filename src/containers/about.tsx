import React from 'react'
import patImg from '@/assets/pat.png'
const About = () => {
  return (
    <div id='about' className="w-full min-h-screen flex flex-col items-center justify-center container mx-auto px-6 space-y-6" >
      <h2 className="text-xl md:text-2xl text-center font-bold text-neutral-800 uppercase">
        the minds behind it
      </h2>

      <h3 className="text-sm md:text-lg text-center text-neutral-400 font-serif">Three specialists, one shared obsession: making digital products that feel as good as they function. We met over a conviction that design should be fearless and code should be clean.</h3>
      
      <div className="w-xl grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* left */}
        <div className='w-full space-y-2'>
          <div className='aspect-square round-lg shadow hover:shadow-lg bg-black -rotate-3 hover:rotate-0 transition-all duration-150 ease-in-out flex items-center justify-end'>
            <img src={patImg} alt="Patricia" className="w-full h-full object-contain"/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
