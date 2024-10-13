import React from 'react'
import { faBootstrap, faJava, faLaravel, faPhp, faSymfony, faJs, faDocker } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"

function hoverCompetence(icon, tag, color = null, boolImgOrIcon) {
  return (
      <>
        <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col align-middle items-center justify-center">

          {
            boolImgOrIcon === true ?
            <FontAwesomeIcon icon={icon} color={color} fontSize={50} />
            :
            <img src={`../assets/images/${icon}`} alt="" height={50} width={50}/>
          }
            <div>{tag}</div>
          </motion.div>
        </>
  )
} 

export default function Competences() {
  return (
    
    <div className='p-1 mb-2'>
    <motion.div
     initial={{
      opacity: 0
    }} 
    whileInView={{
      opacity: 1
    }}
    transition={{
      ease: 'easeIn',
      duration: 2,
      delay: 3
    }}

     className='font-bold mb-2'>
      Compétences
      </motion.div>
        
    <motion.div
      initial={{
        opacity: 0
      }} 
      whileInView={{
        opacity: 1
      }}
      viewport={{
        margin: "-200px",
        once: true
      }}
      transition={{
        ease: 'easeIn',
        duration: 2,
        delay: 3
      }}
      className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <motion.ul
         initial={{
          opacity: 0
        }} 
        whileInView={{
          opacity: 1
        }}
        transition={{
          ease: 'easeIn',
          duration: 2,
          delay: 2
        }}
  
        className="flex flex-wrap text-sm font-medium text-center border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist" aria-label='tabs'>
            <li> 
                <button id="framework-tab" data-tabs-target="#framework" type="button" role="tab" aria-controls="framework" aria-selected="true" className="inline-block p-4 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-75 ease-in-out">Framework</button>
            </li> 
            <li> 
                <button id="versionning-tab" data-tabs-target="#versionning" type="button" role="tab" aria-controls="versionning" aria-selected="false" className="inline-block p-4 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700  transition-all duration-75 ease-in-out">Outils de versionning</button>
            </li>
            <li> 
                <button id="front-end-tab" data-tabs-target="#front-end" type="button" role="tab" aria-controls="front-end" aria-selected="false" className="inline-block p-4 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700  transition-all duration-75 ease-in-out">Language Front-End</button>
            </li>
            <li> 
                <button id="back-end-tab" data-tabs-target="#back-end" type="button" role="tab" aria-controls="back-end" aria-selected="false" className="inline-block p-4 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700  transition-all duration-75 ease-in-out">Language Back-End</button>
            </li>
            <li> 
                <button id="bdd-tab" data-tabs-target="#bdd" type="button" role="tab" aria-controls="bdd" aria-selected="false" className="inline-block p-4 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700  transition-all duration-75 ease-in-out">Base de donnée</button>
            </li>
            <li> 
                <button id="ed-tab" data-tabs-target="#ed" type="button" role="tab" aria-controls="ed" aria-selected="false" className="inline-block p-4 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700  transition-all duration-75 ease-in-out">Environnement d’exécution </button>
            </li>
            <li> 
                <button id="lb-tab" data-tabs-target="#lb" type="button" role="tab" aria-controls="lb" aria-selected="false" className="inline-block p-4 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700  transition-all duration-75 ease-in-out">Librairie Javascript</button>
            </li>
        </motion.ul>
        <div id="defaultTabContent">
            <div className=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 transition-all duration-300 ease-in-out" id="framework" role="tabpanel" aria-labelledby="framework-tab">
                  <div className="grid grid-flow-col md:grid-cols-5 gap-3.5 py-4">
                    { hoverCompetence(faLaravel, 'Laravel', 'red', true) }
                    { hoverCompetence(faSymfony, 'Symfony', 'mintcream', true) }
                    { hoverCompetence(faBootstrap, 'BootStrap', '#7E13F8', true) }
                </div>
            </div>
            <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 invisible hidden opacity-0 transition-all duration-300 ease-in-out" id="versionning" role="tabpanel" aria-labelledby="versionning-tab">
              <div className="grid grid-cols-3 md:grid-cols-9 py-4">
                    { hoverCompetence('git.svg', 'Git', null, false) }
                    { hoverCompetence('gitlab.svg', 'GitLab', null, false) }
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 invisible hidden opacity-0 transition-all duration-300 ease-in-out"   id="front-end" role="tabpanel" aria-labelledby="front-end-tab">
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 py-4">
                  { hoverCompetence('react-svgrepo-com.svg', 'React', null, false) }
                  { hoverCompetence(faJs, 'JavaScript', '#F7DF1E', true) }
                  { hoverCompetence('css3-svgrepo-com.svg', 'Css', null, false) }
                  { hoverCompetence('vue-9-logo-svgrepo-com.svg', 'Vue', null, false) }
                  { hoverCompetence('sass-svgrepo-com.svg', 'SASS', null, false) }
                  { hoverCompetence('html-5-svgrepo-com.svg', 'HTML', null, false) }
                  { hoverCompetence('jquery.svg', 'Jquery', null, false) }
                  { hoverCompetence('typescript.svg', 'Typescript', null, false) }
                  { hoverCompetence('node-js-svgrepo-com.svg', 'NodeJs', null, false) }
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 invisible hidden opacity-0 transition-all duration-300 ease-in-out"   id="back-end" role="tabpanel" aria-labelledby="back-end-tab">
              <div className="grid grid-cols-3 md:grid-cols-5 py-4">
                  { hoverCompetence(faJs, 'Javascript', '#F7DF1E', true) }
                  { hoverCompetence(faJava, 'Java', '#d82222', true) }
                  { hoverCompetence('python-svgrepo-com.svg', 'Python', null, false) }
                  { hoverCompetence('ruby.svg', 'Ruby', null, false) }
                  { hoverCompetence(faPhp, 'PHP', '#777bb3', true) }
                  { hoverCompetence('typescript.svg', 'Typescript', null, false) }
                  { hoverCompetence('node-js-svgrepo-com.svg', 'NodeJs', null, false) }
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 invisible hidden opacity-0 transition-all duration-300 ease-in-out"   id="bdd" role="tabpanel" aria-labelledby="bdd-tab">
              <div className="grid grid-cols-3 md:grid-cols-5 py-4">
                { hoverCompetence('mysql-logo-svgrepo-com.svg', 'Mysql', null, false) }
                { hoverCompetence('mongo-svgrepo-com.svg', 'Mongo DB', null, false) }
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 invisible hidden opacity-0 transition-all duration-300 ease-in-out"   id="ed" role="tabpanel" aria-labelledby="ed-tab">
                <div className="grid grid-cols-3 md:grid-cols-5 py-4">
                    { hoverCompetence(faDocker, 'Mysql', "#2396ed", true) }
                    { hoverCompetence('linux-svgrepo-com.svg', 'Linux', null, false) }
                </div>
            </div>
            <div className=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 hidden transition-all duration-300 ease-in-out" id="lb" role="tabpanel" aria-labelledby="lb-tab">
                  <div className="grid grid-cols-3 md:grid-cols-5 py-4">
                    { hoverCompetence('Threejs-logo.svg', 'ThreeJS', null, false) }
                </div>
            </div>
        </div>
    </motion.div>


   
  </div>
  )
}
