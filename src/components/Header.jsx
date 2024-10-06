import React from 'react'
import { motion } from "framer-motion"
export default function Header({ scrollToSection }) {
  
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
      }}  className='top-0 flex text-white z-50'>
    <div className=''>
      <div className="flex mr-96 w-full justify-between items-center align-middle">
        <div className='text-white text-xl'>Amine Meddour</div>
        <div className='flex gap-2 justify-around px-2 py-1 rounded-sm align-middle items-center'>
          <button className="
                inline-flex 
                items-center 
                px-5 py-1 
                text-sm 
                font-medium 
                text-center 
                text-white 
                rounded-lg 
                focus:outline-none 
                bg-button-bg 
                hover:bg-button-hover-bg 
                transition-all
                ease-in-out 
                delay-75"
            >
            Accueil
          </button>
          <button onClick={() => scrollToSection('about')} className="inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white rounded-lg focus:outline-none bg-button-bg hover:bg-button-hover-bg transition-all ease-in-out delay-75">
            A propos de moi
          </button>
          <button href="#" onClick={() => scrollToSection('competences')}  className="inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white rounded-lg focus:outline-none bg-button-bg hover:bg-button-hover-bg transition-all ease-in-out delay-75">
            Compétences
          </button>
          <button href="#" onClick={() => scrollToSection('projects')}  className="inline-flex items-center px-5 py-1 text-sm font-medium text-center text-white rounded-lg focus:outline-none bg-button-bg hover:bg-button-hover-bg transition-all ease-in-out delay-75">
            Mes Projets
          </button>
          <button href="#" onClick={() => scrollToSection('contact')} className='className="inline-flex justify-between flex align-middle items-center px-5 py-1 text-sm font-medium text-center text-white rounded-lg focus:outline-none bg-button-bg hover:bg-button-hover-bg transition-all ease-in-out delay-75"'>
            <span>Contact</span>
          </button>
        </div>

      </div>
      <span style={{ color: 'mintcream', fontWeight: 'bold', fontSize: '.8em' }}>DEVELOPPEUR WEB FULLSTACK</span>
    </div>
  </motion.header>
  )
}
