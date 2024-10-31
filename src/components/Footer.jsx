import React from 'react'
import { motion } from 'framer-motion'
export default function Footer() {

    
    return (
        <motion.div 
            className='py-6 px-8 md:px-32 text-white'
            initial={{
                opacity: 0,
                y: 100
               }}
               whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.09,
                }
               }}
               viewport={{
                 once: true
               }}
            >
            <div className="rounded-lg to py-2 mx-auto my-5  bg-button-bg text-[#ffffff]font-bold text-1xl text-center ">Designed and Developed by Amine . Copyright © 2024 All Rights Reserved</div>
        </motion.div>
    )
}
