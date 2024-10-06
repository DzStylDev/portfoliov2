import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, Variants } from 'framer-motion'
import revealText from '../utils/revelText';
import revelText from '../utils/revelText';

export default function A_Propos_de_moi({ refSection }) {

  let text = `
    J'ai 25 ans , je développe depuis 4 ans et je suis en deuxième année de web@academie
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
      y: -29
    }}
      animate={{
        visibility: 'visible',
        opacity: 100,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 5,
        delay: 2
      }} className='p-1 mt-36'>
      <div className='flex'>
        <p className="mb-3 mt-3 font-bold">A propos de moi</p>
      </div>
      <div>
        <div className='text-[.9rem] leading-7'>
          <motion.p
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: .02 }}
          >
            {textChars.map((char, index) => (
              <motion.span
                key={index}
                transition={{
                  duration: 0.5,
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
            transition={{ staggerChildren: .03 }}
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
              className='inline-flex items-center px-9 py-2 text-sm font-medium text-center text-white rounded-lg bg-button-bg hover:bg-button-hover-bg  transition-all ease-in-out delay-75"'>Télécharger mon CV
              </motion.a>
          </div>

          <a>
            <div className='flex'>
              <p className='mb-3 mt-3 font-bold'>Ou me trouver</p>
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

          </a>

        </div>
      </div>
    </motion.div>
  )
}
