import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion'
import revealText from '../utils/revelText';
import revelText from '../utils/revelText';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

export default function AProposDeMoi({ refSection }) {

  let text = `
    J'ai 26 ans , je développe depuis 4 ans et je suis en deuxième année de web@academie
    J'ai commencé par développer des plugins minecraft, des bots discord et quelques sites (front-end, back-end)
  `
  let cite = "Travailleur , autonome et motivé , possèdant une très bonne faculté d'adaptation et un sens relationnel développé"

  const textChars = revealText(text);
  const citeChar = revelText(cite)

  const charVariants = {
    hidden: {
      opacity: 0,
    },
    reveal: {
      opacity: 1
    }
  }
  return (
    <motion.div 
      ref={refSection}
      initial={{
      visibility: 'hidden',
      opacity: 0,
      y: 35
    }}
      animate={{
        visibility: 'visible',
        opacity: 100,
        y: 79
      }}
      transition={{
        ease: 'easeIn',
        duration: 2
      }} className='py-6 px-8 md:px-32'>
      <div className='flex'>
        <p className="mb-3 mt-3 font-bold text-white">A propos de moi</p>
      </div>
      <div>
        <div className='text-[.9rem] leading-7'>
          <motion.p
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: .01 }}
            className='text-white'
          >
            {textChars.map((char, index) => (
              <motion.span
                key={index}
                transition={{
                  duration: 0.2,
                }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="reveal"  
            transition={{ staggerChildren: .02 }}
             className='text-white'
          >
            {citeChar.map((cite, index) => (
              <motion.cite
              key={index}
              transition={{
                duration: 0.2,
              }}
              variants={charVariants}
              >
                {cite}
              </motion.cite>
            )
            )}
          </motion.p>


          <div className='mb-3 mt-2'>
            <motion.a
            download={true}
            href='../assets/Cv amine.pdf'
              className='inline-flex items-center justify-between min-w-40 gap-2 px-5 py-2 text-sm font-medium text-center text-white rounded-lg bg-button-bg hover:bg-button-hover-bg  transition-all ease-in-out delay-75'>
                <div  className='text-white'>Télécharger mon cv</div>
                <FontAwesomeIcon icon={faFilePdf} size='xl' />
              </motion.a>
          </div>

          <button>
            <div className='flex'>
              <p className='mb-3 mt-3 font-bold text-white'>Ou me trouver</p>
            </div>
            <div>
              <div className='flex'>
              <motion.a
            href='http://github.com/DzStylDev'
            target='_blank'
              className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-lg bg-button-bg hover:bg-button-hover-bg  transition-all ease-in-out delay-75 justify-between gap-2'>
                <div>GitHub</div>
                <FontAwesomeIcon icon={faGithub} size='xl' />
              </motion.a>
              </div>
            </div>

          </button>

        </div>
      </div>
    </motion.div>
  )
}
