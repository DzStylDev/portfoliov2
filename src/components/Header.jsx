import React, { useState } from 'react'
import { motion } from "framer-motion"
export default function Header({ scrollToSection }) {
  
  const [menuVisible , setMenuVisible] = useState(false)

  const toggleMenu  = () => {
    setMenuVisible(!menuVisible)
  }
  return (  <motion.header 
    initial={{ 
      y: -25, 
      opacity: 0 
      }} 
      animate={{
         y: 10,  
         opacity: 100 
      }} 
      transition={{ 
        ease: 'easeIn', 
        duration: 5
      }}  className=' flex text-white z-50 items-center w-full fixed header'>
      <div className="flex flex-col lg:flex-row lg:fixed lg:items-center justify-between align-middle w-[67.6%] [box-shadow:0_2px_4px_rgba(0,_0,_0,_0.5)] backdrop-blur-sm bg-[rgba(0,_0,_0,_0.5)]">

        <div className='w-full flex flex-row md:flex-row md:justify-between justify-between'>
          
          <div className='flex flex-col justify-center'>
            <div className='text-white text-xl'>Amine Meddour</div>
            <span style={{ color: 'mintcream', fontWeight: 'bold', fontSize: '.8em' }}>DEVELOPPEUR WEB FULLSTACK</span>
          </div>

          <div className='lg-[500px]:hidden md-[994px]:flex-row md-[994px]:flex'>
            <button id="hamburger-button" className='text-3xl focus:outline-none block transition-all py-0 px-[.5rem]' onClick={toggleMenu}>&#9776;</button>
          </div>
        </div>

      <div className={`gap-2 justify-end px-2 py-1 rounded-sm align-middle md:items-center lg:flex-row md:flex flex-col items-center w-full flex menu ${menuVisible ? 'show' : ''}`} >
          <button href="" className='hover:text-[#5e79a7] rounded-sm px-[.5rem] py-[1em] text-center text-[.9em] min-w-[auto] transition-all'>
            Accueil
          </button>
          <button style={{minWidth:"105px"}} href="#" onClick={() => scrollToSection('about')} className='hover:text-[#5e79a7] rounded-sm px-[.5rem] py-[1em] text-center text-[.9em] min-w-[auto]'>
            A propos
          </button>
          <button href="#" onClick={() => scrollToSection('competences')} className='hover:text-[#5e79a7] rounded-sm px-[.5rem] py-[1em] text-center text-[.9em] min-w-[auto]'>
            Compétences
          </button>
          <button href="#" onClick={() => scrollToSection('projects')} className='hover:text-[#5e79a7] rounded-sm px-[.5rem] py-[1em] text-center text-[.9em] min-w-[auto]'>
            Projets
          </button>
          <button href="#" onClick={() => scrollToSection('contact')} className='hover:text-[#5e79a7] rounded-sm px-[.5rem] py-[1em] text-center text-[.9em] min-w-[auto]'>
            <span>Contact</span>
          </button>
        </div>


      </div>

      
      
  </motion.header>
  )
}
