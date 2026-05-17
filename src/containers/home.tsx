import React from 'react'
import { Button } from '@/components/ui/button'
import heroImg from '@/assets/heroImage.png'

const Home = () => {
  return (
    <div>
       <div className="w-full mx-auto px-6 pt-10 pb-0 text-center">
          <h1 className="mx-auto max-w-4xl text-xl sm:text-3xl md:text-5xl font-bold text-neutral-800 leading-[1.1] tracking-tight">
            We are a team of <span className="italic font-[Times_New_Roman] bg-black text-pink-400">women</span>
            <br />
            developers and designers
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base text-neutral-500 md:text-lg">
            creating intuitive, user-centered, and visually engaging web experiences.
          </p>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
            <Button >
              <a href="#contact">Contact</a>
            </Button>

            <Button variant={'pink'}>
              <a href="#projects">View Project</a>
            </Button>
          </div>

          <div className="relative mx-auto w-full max-w-6xl mt-3">
            {/* Glow layer */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-[60%] h-[60%] bg-pink-500/30 blur-3xl rounded-full" />
            </div>

            <img
              src={heroImg}
              alt="The TRIA team — Sanny, Patricia, and Cristene"
              width={1020}
              height={1020}
              className="mx-auto w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-[720px] object-contain image-mask"
            />

            
            {/* Overlay labels */}
            <div className="absolute inset-0 z-20">

              {/* Sanny */}
              <div className="absolute top-6 left-1/5 flex flex-col items-center animate-bounce">
                <span className="text-sm font-semibold text-black">Sanny</span>
              </div>

              {/* Patricia */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm font-semibold text-black">Patricia</span>
                <span className="text-pink-500">↓</span>
              </div>

              {/* Cristene */}
              <div className="absolute top-6 right-1/5 flex flex-col items-center animate-bounce">
                <span className="text-sm font-semibold text-black">Cristene</span>
                <span className="text-pink-500">↓</span>
              </div>

            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Home
