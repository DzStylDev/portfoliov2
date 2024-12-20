import React, { useState } from 'react'
import Swal from "sweetalert2"
import { motion } from "framer-motion"
export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    if(name !== "" && email !== "" && message !== ""){

    formData.append("access_key", process.env.REACT_APP_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
   
    if (data.success) {
      Swal.fire({
        title: "Message Envoyé",
        text: "Ton message à était envoyé avec success",
        icon: 'success'
      })
    } else {
      Swal.fire({
        title: "Message non envoyé",
        text: "Ton message n'à  pas pus etre envoyé car clé manquante pour l'api web3form",
        icon: 'error'
      })

    }
  } else {
    Swal.fire({
      title: "Message non envoyé",
      text: "Ton message n'à  pas pus etre envoyé car le formulaire est incomplet",
      icon: 'error'
    })
  }
  event.target.reset();
  };
  
  return (
    <div className='py-6 px-8 md:px-32 text-white xl:flex xl:justify-center xl:flex-col xl:items-center'>
    <motion.div 
    className='xl:w-full'
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
    }}>
          <h1 className="text-1xl font-bold text-mintcream my-auto">Contacte-moi</h1>
          <div className="text-sm font-light text-[#5b85c0] pb-8 ">Envie de me recontrer ou de discuté avec moi</div>
    </motion.div>  
    <div className='rounded-sm p-1 xl:w-full'>
      <div className="flex flex-col md:flex-row  w-full mx-auto rounded-2xl gap-5">
        <form className="w-full grid grid-cols-1 gap-5 bg-gray-800 rounded-xl p-4"  onSubmit={onSubmit} method='POST'>
         <div className='flex gap-2 w-full'> 
          <input type="hidden" name="access_key" value={process.env.REACT_APP_ACCESS_KEY} className='w-full' />
            <motion.div className="pb-6 w-full"
             initial={{
              opacity: 0,
              y: 100
             }}
             whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.09
              }
             }}
             viewport={{
               once: true
             }}
             >
              <label htmlFor="prenom" className="block mb-2 text-sm font-medium text-mintcream">Name</label>
              <div className="relative text-gray-400"><span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
              </span>
                <input type="text" name="prenom" id="prenom" placeholder="Enter Name" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autoComplete="new-prenom" onChange={(e) => setName(e.currentTarget.value)} />
              </div>
            </motion.div>
            <motion.div className="pb-6 w-full"
            initial={{
              opacity: 0,
              y: 100
             }}
             whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.02
              }
             }}
             viewport={{
               once: true
             }}>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-mintcream">Email</label>
              <div className="relative text-gray-400"><span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
              </svg>
              </span>
                <input type="email" name="email" id="email" placeholder="Enter Email" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autoComplete="new-email" onChange={(e) => setEmail(e.currentTarget.value)}/>
              </div>
            </motion.div>
         </div>
            <motion.div className="pb-6"
            initial={{
              opacity: 0,
              y: 100
             }}
             whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.4
              }
             }}
             viewport={{
               once: true
             }}>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-mintcream">Message</label>
            <div className="relative text-gray-400"><span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></span>
              <input type="text" name="message" id="message" placeholder="Enter Message" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autoComplete="new-message" onChange={(e) => setMessage(e.currentTarget.value)}/>
            </div>
          </motion.div>
          <motion.button type="submit" className="w-full text-[#ffffff] bg-button-hover-bg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6 transition-all duration-75 ease-out"
          initial={{
            opacity: 0,
            y: 100
           }}
           whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.6
            }
           }}
           viewport={{
             once: true
           }}
           >Envoyé</motion.button>

        </form> 
      </div>
    </div>
    </div>
  )
}
