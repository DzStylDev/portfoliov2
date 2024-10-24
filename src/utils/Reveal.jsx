import { useAnimation, useInView, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

export default function Reveal({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: true
    })
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControls.start('visible')
        }
    }, [isInView, mainControls])
    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 90
                    },
                    visible: {
                        opacity: 1,
                        y: 75
                    }
                }}  
                initial="hidden"
                animate={mainControls}
                transition={{ 
                    duration: 2, delay: 0.25
                }}  
            >
            <div>{children}</div>
            </motion.div>
        </div>
    )
}
