import React from 'react'
import patImg from '@/assets/pat-about.png'
import sannyImg from '@/assets/sanny-about.png'
import xtImg from '@/assets/xt-about.png'

const About = () => {
  return (
    <div id='about' className="w-3xl min-h-screen flex flex-col items-center justify-center container mx-auto px-6 space-y-6">
      <h2 className="text-xl md:text-2xl text-center font-bold text-pink-500 uppercase">
        meet the team
      </h2>

      <h3 className="text-sm md:text-lg text-center text-neutral-500 font-serif">Three specialists, one shared obsession: making digital products that feel as good as they function. We met over a conviction that design should be fearless and code should be clean.</h3>
      
      <div className="w-2xl grid grid-cols-3 md:grid-cols-3 gap-4">
        {/* left */}
        <div className='w-full space-y-2'>
          <div className='aspect-auto round-lg shadow hover:shadow-lg'>
            <img src={sannyImg} alt="Patricia" className="w-full h-full object-contain"/>
          </div>
          <div>
            <h3 className='font-bold text-sm text-neutral-700'>Sanny Gine Patan-Patan</h3>
            <p className='font-normal text-xs text-neutral-500'>UI/UX Designer</p>
          </div>
        </div>
        <div className='w-full space-y-2'>
          <div className='aspect-auto round-lg shadow hover:shadow-lg'>
            <img src={patImg} alt="Patricia" className="w-full h-full object-contain"/>
          </div>
          <div>
            <h3 className='font-bold text-sm text-neutral-700'>Patricia Ann Mahinay</h3>
            <p className='font-normal text-xs text-neutral-500'>Project Manager and Frontend Developer</p>
          </div>
        </div>
        <div className='w-full space-y-2'>
          <div className='aspect-auto round-lg shadow hover:shadow-lg '>
            <img src={xtImg} alt="Patricia" className="w-full h-full object-contain"/>
          </div>
          <div>
            <h3 className='font-bold text-sm text-neutral-700'>Cristene Rios</h3>
            <p className='font-normal text-xs text-neutral-500'>Document Specialist</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
