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
                        <p className="text-white text-sm font-bold">BAC  Electrotechnique</p>
                        <p className="text-gray-400 text-xs mt-2">2018 / 2019</p>
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
                  <div className='font-bold mb-2 text-xl' >Expériences</div>

                  <div className="flex flex-col justify-center">
                      
                      <div className="py-2">
                        <p className="text-white text-sm font-bold">ALTERNANT CHEZ ALPHALIVES</p>
                        <p className="text-gray-400 text-xs mt-2">2023 / 2024</p>
                         <img src="../assets/images/alphalives.svg" alt='webacademy-img' />
                        <ul>
                          <li className="text-gray-400 text-xs mt-2">Création de commande laravel </li>
                          <li className="text-gray-400 text-xs mt-2">Ajout de formulaire</li>
                          <li className="text-gray-400 text-xs mt-2">Transmission de donnée avec PHP</li>
                          <li className="text-gray-400 text-xs mt-2">Gestion de requête sql</li>
                          <li className="text-gray-400 text-xs mt-2">Création de composant</li>
                          <li className="text-gray-400 text-xs mt-2">Clean code</li>
                          <li className="text-gray-400 text-xs mt-2">Création de script laravel</li>
                          <li className="text-gray-400 text-xs mt-2">Création de PDF avec Html2Pdf</li>
                          <li className="text-gray-400 text-xs mt-2">Création de rubrique et de sous rubrique</li>
                          <li className="text-gray-400 text-xs mt-2">export excel </li>
                          <li className="text-gray-400 text-xs mt-2">Gestion des routes , controller , vues , base de donnée</li>
                          <li className="text-gray-400 text-xs mt-2">Génération d’un JWT TOKEN</li>
                          <li className="text-gray-400 text-xs mt-2">Création d’api </li>
                          <li className="text-gray-400 text-xs mt-2">Création de map avec OpenStreetMap et Leaflet Js</li>
                          <li className="text-gray-400 text-xs mt-2">Gestion de condition en laravel</li>
                          <li className="text-gray-400 text-xs mt-2">Gestion d’envoi d’email avec mailpit</li>
                        </ul>                          
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
