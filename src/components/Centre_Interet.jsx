import React from 'react'

export default function Centre_Interet() {
  return (
    <div className='bg-button-bg rounded-lg'>
      <div className=" p-4 rounded-lg md:p-8 dark:bg-gray-800 bg-gradient-to-tr bg-button-bg mt-5 mb-2" id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
                <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-2 dark:text-white sm:p-8 text-center">
                    <div className="flex flex-col">
                        <dt className="mb-2 text-3xl font-extrabold">Centre d'interêts</dt>
                        <dd className="text-gray-500 dark:text-gray-400">Informatique</dd>
                        <dd className="text-gray-500 dark:text-gray-400">Sport (Football , karaté et taekwondo)</dd>
                    </div>
                    <div className="flex flex-col">
                        <dt className="mb-2 text-3xl font-extrabold">Langues</dt>
                        <dd className="text-gray-500 dark:text-gray-400">Anglais Intermédiaire</dd>
                        <dd className="text-gray-500 dark:text-gray-400">Arabe: courant</dd>
                    </div>
                </dl>
            </div>
    </div>
  )
}
