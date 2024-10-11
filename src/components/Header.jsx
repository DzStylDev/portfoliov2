import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import { motion } from "framer-motion"
export default function Header({ scrollToSection }) {
  
  const [isMenuOpen , setIsMenuOpen] = useState(false)

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
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
      }}  className='top-0 flex text-white z-50 items-center'>
    <div className='w-full'>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:align-middle">
        
        <div className='w-full flex md:flex-col flex-row justify-between'>
          
          <div className='flex flex-col justify-center'>
            <div className='text-white text-xl'>Amine Meddour</div>
            <span style={{ color: 'mintcream', fontWeight: 'bold', fontSize: '.8em' }}>DEVELOPPEUR WEB FULLSTACK</span>
          </div>

          <div className='md:hidden'>
            <button id="hamburger-button" className='text-3xl focus:outline-none min-sm::bg-red-600 block md:hidden transition-all' onClick={handleClick}>&#9776;</button>
          </div>
        </div>

      <div className='gap-2 justify-end px-2 py-1 rounded-sm align-middle items-center flex-row md:flex navbar__links w-full ' >
          <a href="">
            Accueil
          </a>
          <a style={{minWidth:"105px"}} href="#" onClick={() => scrollToSection('about')} >
            A propos
          </a>
          <a href="#" onClick={() => scrollToSection('competences')} >
            Compétences
          </a>
          <a href="#" onClick={() => scrollToSection('projects')} >
            Projets
          </a>
          <a href="#" onClick={() => scrollToSection('contact')} >
            <span>Contact</span>
          </a>
        </div>


      </div>

      
      
    </div>
  </motion.header>
  )
}
