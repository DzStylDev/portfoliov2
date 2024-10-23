import React, { useState } from 'react'
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
export default function Header({ scrollToSection }) {

  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <div className='w-full h-full absolute bg-[linear-gradient(to_right,_#1f2937,_#2e3f5c)] header'>
      <motion.header
        initial={{
          y: -29,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 100
        }}
        transition={{
          ease: 'easeIn',
          duration: 2
        }} className='flex justify-between items-center py-6 px-8 md:px-32  fixed z-40 w-full [box-shadow:0_2px_4px_rgba(0,_0,_0,_0.5)] backdrop-blur-sm bg-[rgba(0,_0,_0,_0.5)] text-white drop-shadow-md'>
        <div>
          <div className='text-white'>Amine Meddour</div>
          <span className='text-white'>DEVELOPPEUR WEB FULLSTACK</span>
        </div>


        <ul className={`hidden xl:flex items-center gap-12 font-semibold text-sm`} style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }} >
          <button  className='p-3 hover:bg-[#5e79a7] rounded-md transition-all cursor-pointer'>
            Accueil
          </button>
          <button onClick={() => scrollToSection('about')} className='p-3  cursor-pointer hover:bg-[#5e79a7] rounded-md transition-all'>
            A propos
          </button>
          <button onClick={() => scrollToSection('competences')} className='p-3  cursor-pointer hover:bg-[#5e79a7] rounded-md transition-all'>
            Compétences
          </button>
          <button onClick={() => scrollToSection('projects')} className='p-3  cursor-pointer hover:bg-[#5e79a7] rounded-md transition-all'>
            Projets
          </button>
          <button onClick={() => scrollToSection('contact')} className='p-3  cursor-pointer hover:bg-[#5e79a7] rounded-md transition-all'>
            <span>Contact</span>
          </button>
        </ul>

        <FontAwesomeIcon icon={!menuVisible ? faBars : faCircleXmark} color="#2d3e5a"  className='xl:hidden block text-5xl cursor-pointer size-6' onClick={() => setMenuVisible(!menuVisible)}></FontAwesomeIcon>

        <div
          className={`absolute xl:hidden top-24 left-0 w-full [box-shadow:0_2px_4px_rgba(0,_0,_0,_0.5)] backdrop-blur-sm bg-[rgba(0,_0,_0,_0.5)]  flex flex-col items-center gap-6 font-semibold text-lg transform z-40 transition-transform ${menuVisible ? "block" : "hidden"}`}
          style={{ transition: "transform 0.3s ease , opacity .3s ease" }}
        >
          <button className='p-4 list-none hover:bg-[#5e79a7] w-full rounded-md transition-all cursor-pointer text-center'>
            Accueil
          </button>
          <button onClick={() => {
              scrollToSection('about')
              setMenuVisible(false)
            }
          } className='p-4 w-full list-none text-center hover:bg-[#5e79a7] rounded-md transition-all cursor-pointer'>
            A propos
          </button>
          <button onClick={() => {
              scrollToSection('competences')
              setMenuVisible(false)
            }
          } className='p-4 text-center w-full list-none hover:bg-[#5e79a7] rounded-md transition-all cursor-pointer'>
            Compétences
          </button>
          <button onClick={() => {
              scrollToSection('projects')
              setMenuVisible(false)
            }
          } className='p-4 text-center w-full list-none hover:bg-[#5e79a7] rounded-md transition-all cursor-pointer'>
            Projets
          </button>
          <button onClick={() => {
              scrollToSection('contact')
              setMenuVisible(false)
            }
          } className='p-4 text-center list-none w-full hover:bg-[#5e79a7] rounded-md transition-all cursor-pointer'>
            <span>Contact</span>
          </button>
        </div>


      </motion.header>
    </div>
  )
}
