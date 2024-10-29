import React from 'react'
export default function DEProfessionnel() {
  return (
    <div className='py-6 px-8 md:px-32'>
      <div className='font-bold mb-2 text-white'>Mes Diplôme et mes expériences</div>
      
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
                  <div className='font-bold mb-2 text-xl' >Diplômes</div>

                  <div className="flex flex-col justify-center">
                      
                      <div className="py-2">
                        <p className="text-white text-sm font-bold">DEVELOPPEUR-INTEGRATEUR WEB (Titre 5 RNCP - BAC +2)</p>
                        <p className="text-gray-400 text-xs mt-2">2022 / 2024</p>
                        <img src="../assets/images/webacademy.svg" alt='webacademy-img' />
                        <div className="flex items-center align-middle gap-1">
                          <img src="../assets/images/epitech.svg" alt='epitech-img' />
                          <p>- Paris</p>                          
                        </div>
                        <div className="border-b-[#324b76] border mt-2"></div>

                      </div>

                      <div className="">
                        <p className="text-white text-sm font-bold">BAC PRO Electrotechnique</p>
                        <p className="text-gray-400 text-xs mt-2">2018 / 2019</p>
                        <div className="flex items-center align-middle gap-1">
                          <p>Lycée Louis Armand</p>
                          <p>- Paris</p>
                        </div>
                        <div className="border-b-[#324b76] border mt-2"></div>

                      </div>
                      
                      <div className="mt-2">
                        <p className="text-white text-sm font-bold">BEP Electrotechnique</p>
                        <p className="text-gray-400 text-xs mt-2">2016 / 2017</p>
                        <div className="flex items-center align-middle gap-1">
                          <p>Lycée Louis Armand</p>
                          <p>- Paris</p>
                        </div>
                        <div className="border-b-[#324b76] border mt-2"></div>

                      </div>
                      
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
                  <div className='font-bold mb-2 text-xl' >Mes Expériences</div>

                  <div className="flex flex-col justify-center">
                      
                      <div className="py-2">
                        <p className="text-white text-sm font-bold">Stage de 8 semaines en Electrotechnique à Energilec</p>
                        <p className="text-gray-400 text-xs mt-2">2018</p>
                        <p className="text-gray-400 text-xs mt-2">Compréhension d'un schéma éléctrique</p>                          
                        <p>Saint-Cloud</p>
                        <div className="border-b-[#324b76] border mt-2"></div>

                      </div>

                      <div className="">
                        <p className="text-white text-sm font-bold"> Stage de 8 semaines en Electrotechnique à Sarl Satlec</p>
                        <p className="text-gray-400 text-xs mt-2">2017</p>
                        <p className="text-gray-400 text-xs mt-2">Installation des lampes . Cablage éléctrique</p>
                        <p>Paris</p>
                        <div className="border-b-[#324b76] border mt-2"></div>
                      </div>
                      
                      <div className="mt-2">
                        <p className="text-white text-sm font-bold">Stage de 6 semaines en Electronique à NK Electronique</p>
                        <p className="text-gray-400 text-xs mt-2">2015</p>
                        <p className="text-gray-400 text-xs mt-2">Démontage d'ordinateurs et de télévisions</p>
                          <p>Paris</p>
                        <div className="border-b-[#324b76] border mt-2"></div>

                      </div>

                      <div className="mt-2">
                        <p className="text-white text-sm font-bold">Stage de 6 semaines en électrotechnique à SBD (Self blanc drug)</p>
                        <p className="text-gray-400 text-xs mt-2">2015</p>
                        <p className="text-gray-400 text-xs mt-2">Réparation des laveries</p>
                          <p>Paris</p>
                        <div className="border-b-[#324b76] border mt-2"></div>

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
