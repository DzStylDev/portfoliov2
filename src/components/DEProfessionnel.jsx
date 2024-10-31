import { motion } from 'framer-motion'
import React from 'react'
export default function DEProfessionnel() {
  const fadeAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      }
    })
  }
  return (
    <div className='py-6 px-8 md:px-32'>
      <motion.div
        className='font-bold mb-2 text-white'
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        transition={{
          ease: 'easeIn',
          duration: 1,
          delay: .5
        }}>Mes Diplôme et mes expériences</motion.div>

      <div className='flex flex-col md:flex-row w-full justify-between rounded-lg gap-2'>
        <div className='border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full'>

          <div className='gap-2 flex h-full'>
            <div className='flex rounded-lg shadow-xl"
                bg-button-bg
                py-6 px-5
                w-full
                '>
              <div className="flex flex-col py-2 w-full">
                <div className=" text-[#ffffff]">
                  <motion.div
                    className='font-bold mb-2 text-xl'
                    initial={{
                      opacity: 0
                    }}
                    whileInView={{
                      opacity: 1
                    }}
                    transition={{
                      ease: 'easeIn',
                      duration: 1,
                      delay: .5
                    }}
                  >Diplômes</motion.div>

                  <div className="flex flex-col justify-center">

                    <motion.div 
                      className="py-2"
                      initial={{
                        opacity: 0,
                        y: 45
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0
                      }}
                      transition={{
                        ease: 'easeIn',
                        duration: 1,
                        delay: .5
                      }}
                    >
                      <p className="text-white text-sm font-bold">DEVELOPPEUR-INTEGRATEUR WEB (Titre 5 RNCP - BAC +2)</p>
                      <p className="text-gray-400 text-xs mt-2">2022 / 2024</p>
                      <img src="../assets/images/webacademy.svg" alt='webacademy-img' />
                      <div className="flex items-center align-middle gap-1">
                        <img src="../assets/images/epitech.svg" alt='epitech-img' />
                        <p>- Paris</p>
                      </div>
                      <div className="border-b-[#324b76] border mt-2"></div>

                    </motion.div>

                    <motion.div 
                      className=""
                      initial={{
                        opacity: 0,
                        y: 45
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0
                      }}
                      transition={{
                        ease: 'easeIn',
                        duration: 1,
                        delay: .5
                      }}
                      >
                      <p className="text-white text-sm font-bold">BAC Electrotechnique</p>
                      <p className="text-gray-400 text-xs mt-2">2018 / 2019</p>
                      <div className="flex items-center align-middle gap-1">
                        <p>Lycée Louis Armand</p>
                        <p>- Paris</p>
                      </div>
                      <div className="border-b-[#324b76] border mt-2"></div>

                    </motion.div>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        <div
          className='border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full'>
          <div className='gap-2 flex'>
            <div className='flex shadow-xl"
                px-5 py-6
                rounded-lg
                bg-button-bg
                w-full'>
              <div className="flex flex-col py-2 w-full">
                <div className=" text-[#ffffff]">
                  <motion.div className='font-bold mb-2 text-xl' 
                  initial={{
                    opacity: 0
                  }}
                  whileInView={{
                    opacity: 1
                  }}
                  transition={{
                    ease: 'easeIn',
                    duration: 1,
                    delay: .5
                  }}>Expériences</motion.div>

                  <div className="flex flex-col justify-center">

                    <div className="py-2">
                      <motion.div className="text-white text-sm font-bold"
                       initial={{
                        opacity: 0,
                        y: 45
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0
                      }}
                      transition={{
                        ease: 'easeIn',
                        duration: 1,
                        delay: .5
                      }}
                      >
                      <p>ALTERNANT CHEZ ALPHALIVES</p>
                      <p>2023 / 2024</p>
                    
                      <img src="../assets/images/alphalives.svg" alt='alphalives-icon' height={105} width={105} />
                      <ul>
                        { [
                          "Création de commande laravel",
                          "Ajout de formulaire",
                          "Transmission de donnée avec PHP",
                          "Gestion de requête sql",
                          "Création de composant",
                          "Clean code",
                          "Création de script laravel",
                          "Création de PDF avec Html2Pdf",
                          "Création de rubrique et de sous rubrique",
                          "export excel",
                          "Gestion des routes , controller , vues , base de donnée",
                          "Génération d’un JWT TOKEN",
                          "Création d’api",
                          "Création de map avec OpenStreetMap et Leaflet Js",
                          "Gestion de condition en laravel",
                          "Gestion d’envoi d’email avec mailpit",
                          "Dockerization"
                        ].map((item, index) => (
                          <motion.li 
                            className="text-gray-400 text-xs mt-2"
                            key={index}
                            variants={fadeAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                              once: true
                            }}
                            custom={index}
                            >{item}</motion.li>
                        ))}
                      </ul>
                      <div className="border-b-[#324b76] border mt-2"></div>
                      </motion.div>
                    </div>


                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
