import pat from '@/assets/pat.png'

const Home = () => {
  return (
    <div className='w-full h-screen pt-24 relative '>
      {/* <div className="radial-bg"></div>
      <div className="bottom-left-gradient"></div>
      <div className="bottom-right-gradient"></div> */}

      {/* image layer */}
      <div className="absolute inset-0 z-10 flex justify-center items-center pointer-events-none">
        <img 
        src={pat} 
        alt="Patricia"
        className="w-[70vw] max-w-[520px] sm:w-[60vw] md:w-[45vw] object-contain object-bottom image-mask"
      />
      </div>
      
      {/* Text layer */}
      <div className='relative flex flex-col items-center justify-around text-center pointer-events-none h-full'>
        <h2 className="text-neutral-700 font-normal font-serif italic text-4xl md:text-7xl lg:text-7xl tracking-wider -mt-16">Hey, there!</h2>

        <div className="w-full flex items-center justify-between px-12">
          <div className="p-2 px-3 rounded-full bg-white shadow-sm flex items-center gap-2 animate-bounce">
            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-3 h-3 bg-red-300 rounded-full"></div>
            </div>
            <span className="text-xs text-neutral-700">Available for new opportunities</span>
          </div>

          <p className="w-50 text-left text-xs tracking-widertext-neutral-700">Specialized in Project Management, Web Design, and Front End Development</p>
        </div>  

        <div className="w-full flex items-center justify-between px-12 z-50">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-left font-bold font-sans text-neutral-800 uppercase">I AM <br /> Patricia</h1>
          <h2 className="text-2xl md:text-3xl text-left font-semibold text-neutral-800 tracking-wider uppercase">Project Manager and <br />Front End Developer</h2>
        </div>  
      </div>

      
    </div>
    
  )
}

export default Home
