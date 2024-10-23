import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Squash as Hamburger } from "hamburger-react"

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
          <button className='p-3 hover:bg-white hover:text-[#243147] rounded-md transition-all cursor-pointer'>
            Accueil
          </button>
          <button onClick={() => scrollToSection('about')} className='p-3  cursor-pointer hover:bg-white hover:text-[#243147] rounded-md transition-all'>
            A propos
          </button>
          <button onClick={() => scrollToSection('competences')} className='p-3 cursor-pointer hover:bg-white hover:text-[#243147] rounded-md transition-all'>
            Compétences
          </button>
          <button onClick={() => scrollToSection('projects')} className='p-3  cursor-pointer hover:bg-white hover:text-[#243147] rounded-md transition-all'>
            Projets
          </button>
          <button onClick={() => scrollToSection('contact')} className='p-3  cursor-pointer hover:bg-white hover:text-[#243147] rounded-md transition-all'>
            <span>Contact</span>
          </button>
        </ul>
        
        <div className='xl:hidden flex text-5xl cursor-pointer'>
          <Hamburger toggled={menuVisible} size={25} toggle={setMenuVisible} color='white' />
        </div>

        <AnimatePresence>
          {menuVisible && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
              className={`absolute xl:hidden top-24 left-0 w-full [box-shadow:0_2px_4px_rgba(0,_0,_0,_0.5)] backdrop-blur-sm bg-[rgba(0,_0,_0,_0.5)] flex flex-col items-center gap-6 font-semibold text-lg transform z-40 transition-transform`}
              style={{ transition: "transform 0.3s ease , opacity .3s ease" }}
            >
              <motion.button
               initial={{ scale: 0, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{
                 type: "spring",
                 stiffness: 260,
                 damping: 20,
                 delay: 0.1 + 0 / 10,
               }} 
                onClick={() => setMenuVisible(!menuVisible)} className='p-4 w-full list-none hover:bg-white hover:text-[#243147] transition-all cursor-pointer text-center [box-shadow:0_2px_4px_rgba(0,_0,_0,_0.5)] bg-[rgba(38,49,80,0.5)]'>
                Accueil
              </motion.button>
              <motion.button
               initial={{ scale: 0, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{
                 type: "spring",
                 stiffness: 260,
                 damping: 20,
                 delay: 0.1 + 1 / 10,
               }}  
                onClick={() => {
                scrollToSection('about')
                setMenuVisible(!menuVisible)
              }
              } className='p-4 list-none text-center w-full hover:bg-white hover:text-[#243147] transition-all cursor-pointer [box-shadow:0_2px_4px_rgba(0,_0,_0,_0.5)] bg-[rgba(38,49,80,0.5)]'>
                A propos
              </motion.button>
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 2 / 10,
                }}  
                onClick={() => {
                  scrollToSection('competences')
                  setMenuVisible(!menuVisible)
              }
              } className='p-4 text-center list-none w-full hover:bg-white hover:text-[#243147] transition-all cursor-pointer [box-shadow:0_2px_4px_rgba(0,_0,_0,_0.5)] bg-[rgba(38,49,80,0.5)]'>
                Compétences
              </motion.button>
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 3 / 10,
                }}  
                onClick={() => {
                  scrollToSection('projects')
                  setMenuVisible(!menuVisible)
              }
              } className='p-4 text-center w-full list-none hover:bg-white hover:text-[#243147] rounded-md transition-all cursor-pointer [box-shadow:0_2px_4px_rgba(0,_0,_0,_0.5)] bg-[rgba(38,49,80,0.5)]'>
                Projets
              </motion.button>
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + 4 / 10,
                }}  
                onClick={() => {
                  scrollToSection('contact')
                  setMenuVisible(!menuVisible)
              }
              } className='p-4 text-center list-none w-full hover:bg-white hover:text-[#243147] transition-all cursor-pointer [box-shadow:0_2px_4px_rgba(0,_0,_0,_0.5)] bg-[rgba(38,49,80,0.5)]'>
                <span>Contact</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence >


      </motion.header>
    </div>
  )
}
