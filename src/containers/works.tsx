import { ProjectsData } from '@/utils/helper'
import React from 'react'
import { motion } from "motion/react"

const Works = () => {
  return (
    <motion.div id='works' className="w-full min-h-screen flex flex-col items-center justify-center container mx-auto px-6 space-y-6" 
    initial={{
      opacity: 1
    }} 
    whileInView=
    {{opacity: 1, 
      scale: 1.05, 
      transition: 
      { duration: 1,
      }
    }}
    viewport={{
      amount: 0.5
    }}
      >
      <h2 className="text-xl md:text-2xl text-center font-bold text-neutral-800 uppercase">
        Featured Projects
      </h2>
      <p></p>

      <div className="w-xl grid grid-cols-1 md:grid-cols-3 gap-4">
        {ProjectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <div className="relative overflow-hidden rounded-xl group cursor-pointer shadow-[0_10px_30px_rgba(236,72,153,0.35)]
  hover:shadow-[0_15px_40px_rgba(236,72,153,0.5)]
  transition-all duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

      {/* Title at Bottom */}
      <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-md font-semibold">
          {project.title}
        </p>
        <link rel="stylesheet" href="" />
      </div>

    </div>
  )
}

export default Works