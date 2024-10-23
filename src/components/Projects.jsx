import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap , faGithub, faJava, faLaravel, faPhp, faSymfony, faJs, faDocker } from '@fortawesome/free-brands-svg-icons';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/24/solid';
import { getDatabase, push, ref as dbRef, set, get, remove } from 'firebase/database'
import { getDownloadURL, list, ref as storageRef, uploadBytes, getStorage, listAll , deleteObject} from 'firebase/storage'
import app, { imageDB } from "../firebaseConfig"
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import 'yet-another-react-lightbox/styles.css';
import { Counter, Download, Fullscreen, Thumbnails, Zoom} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import "yet-another-react-lightbox/plugins/counter.css";
import { faImages } from '@fortawesome/free-regular-svg-icons';

export default function Projects({ title }) {
  const [toggle, setToggle] = useState(false)
  const [titre, setTitre] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState("")
  const [projects, setProjects] = useState([])
  const [color, setColor] = useState("")
  const [linkGitHub, setLinkGitHub] = useState("")
  const [member, setMember] = useState('')
  const [openGallerie, setOpenGallerie] = useState(null)
  const [checkedValue, setCheckedValue] = useState(null);

  const iconMap = {
    faLaravel: faLaravel,
    faSymfony: faSymfony,
    faBootstrap: faBootstrap,
    faGit: "git.svg",
    faGitlab: "gitlab.svg",
    faReact: "react-svgrepo-com.svg",
    faJS: faJs,
    faJava: faJava,
    faCss3: "css3-svgrepo-com.svg",
    faVuejs: "vue-9-logo-svgrepo-com.svg",
    faSass: "sass-svgrepo-com.svg",
    faHtml5: "html-5-svgrepo-com.svg",
    faJquery: "jquery.svg",
    faTypescript: "typescript.svg",
    faNodeJs: "node-js-svgrepo-com.svg",
    faPython: "python-svgrepo-com.svg",
    faRuby: "ruby.svg",
    faPhp: faPhp,
    faMysql: "mysql-logo-svgrepo-com.svg",
    faMongoDB: "mongo-svgrepo-com.svg",
    faDocker: faDocker,
    faLinux: "linux-svgrepo-com.svg",
    threeJS: "Threejs-logo.svg"

  };


  const toggleProject = () => {
    setToggle(!toggle)
  }
  const createProject = async (e) => {
    e.preventDefault()
    const db = getDatabase(app)
    const newDocRef = push(dbRef(db, "projects"))

    set(newDocRef, {
      titre,
      description,
      iconeName: document.getElementById('icones').value,
      icon: iconMap[document.getElementById('icones').value],
      color,
      link: linkGitHub,
      member: member
    }).then(() => {
      toast.success('Le projet à était créer avec success')
      toggleProject()
    }).catch(error => {
      console.log(error.message)
    })


    for (let index = 0; index < images.length; index++) {
      const imageListRef = storageRef(imageDB, `${titre}_images/${images[index].name}`)

      if (images === null) return;

      uploadBytes(imageListRef, images[index]).then(snapchot => {
        getDownloadURL(snapchot.ref)
      })
    }


  }

  const deleteProject = async (keyItem, item) => {

    if (!keyItem) {
      console.error("Erreur : keyItem est undefined ou null");
      return;
  }
    const db = getDatabase(app)
    const getProjectDB = dbRef(db, `projects/${keyItem}`)

    const storage = getStorage(app);
    const getStorageDB = storageRef(storage, `${item.titre}_images`)

    try {
    let { items } = await listAll(getStorageDB)
      if (items.length === 0) {
        console.error("Aucun fichier trouvé dans ce chemin.");
      } else {
          console.log("Fichiers trouvés :", items);
          const deletePromises = items.map(async (itemRef) => await deleteObject(itemRef));

          // Attendre que toutes les suppressions soient terminées
          await Promise.all(deletePromises);

          console.log("Tous les fichiers dans le dossier ont été supprimés avec succès !");
      }
    } catch (error) {
      console.error("Erreur lors de la vérification des fichiers :", error);
    }

    remove(getProjectDB)
     .then(() => {
         console.log("Projet supprimé avec succès");
         toast.success('Le projet à était supprimer avec success')
     })
     .catch((error) => {
         console.error("Erreur lors de la suppression du projet :", error);
     });

  }
  const getMember = (e) => {
    setMember(e.target.value)
  }
  const readProjectFile = async (projects) => {
    const storage = getStorage(app);

    let addFiles = []
    let files = []

    projects.map((projet, index) => {

      addFiles.push(storageRef(storage, `${projet.titre}_images`))
      return addFiles
    })

    let promises = addFiles.map((reference, index) => {
      let path = reference._location.path

      let getReference = list(reference)

      files[path] = [{}]


      return getReference.then(result => {
        result.items.forEach((item, indexImage) => {
          let url = 'https://firebasestorage.googleapis.com/v0/b/' + item._location.bucket + '/o/' + item._location.path.replace('/', '%2F') + '?alt=media'

          files[path].push({
            src: url.replace(' ', '%20'),
            description: projects[index].description,
            title: "Image " + (indexImage + 1),
          })
        })
        files[path].splice(0, 1)

      })
    })

    Promise.all(promises).then(() => {
      return files
    }).catch(err => {
      console.error("Une erreur est survenue: ", err);
    });

    return files
  }
  const handleCheckboxChange = (value) => {
    setCheckedValue(value)
  }
  useEffect(() => {
    const fetchProjects = async () => {
      const db = getDatabase(app)
      const refDB = dbRef(db, 'projects')
      const snapshot = await get(refDB)

      if (snapshot.exists()) {
        let idKeys = Object.keys(snapshot.val())
        let projects = Object.values(snapshot.val())
        let getAllProject = await readProjectFile(projects)

        let projectsAll = getAllProject


        let project = projects.map((project, index) => { 
          return {
            keyID: idKeys[index],
            titre: project.titre,
            description: project.description,
            checkGallerie: projectsAll[project.titre + '_images'],
            icon: project.icon,
            color: project.color,
            link: project.link,
            member: project.member
          }
        })

        
        setProjects(project)
      }
    };

    fetchProjects()
  }, [])
  let toggleButton = true
  return (
    <div className='py-6 px-8 md:px-32 text-white'>
      <div className='font-bold mb-2 flex items-center align-middle justify-between'>
        <span>{title}</span>
        {
          title === "Mes Projets" ? (
            toggleButton && (
              <button onClick={toggleProject} className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#5b637a] to-[#3f5081] group-hover:from-[#5b637a] group-hover:to-[#3f5081] hover:text-white dark:text-white focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#272e3e] rounded-md group-hover:bg-opacity-0">
                Ajouter un projet
              </span>
            </button>)
            )
            :
            <></>
        }

      </div>


      
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-3.5 items-center align-middle h-full">
      
     
      
        {projects.length > 0 && projects.map((item, index) => (
          <div key={index} className='flex w-full flex-wrap bg-button-bg gap-5 justify-center h-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>

        <button  style={{ marginTop: '1em' }} onClick={() => setOpenGallerie(index)}>
        <FontAwesomeIcon icon={faImages} color='#4a596e' fontSize={30} className='text-[#4a596e] hover:text-blue-200 transition-all duration-300 ease-in-out' />
        </button>

        { openGallerie === index && (
          <Lightbox 
              plugins={[ Download, Fullscreen, Zoom, Thumbnails, Counter]}
              counter={{ 
                container: { 
                  style: { 
                    top: 0, 
                    bottom: 0 
                  } 
                } 
              }}
              captions={{
                showToggle: true,
                descriptionTextAlign: 'end'
              }}
              open={true}
              close={() => setOpenGallerie(null)}  
              slides={item.checkGallerie}
            />
          )}
            <div className="flex flex-col rounded-lg w-full p-5">
              <div className="text-2xl font-bold text-white pb-6">
                <div className='flex justify-between item'>
                  <p>{item.titre}</p>
                </div>
              </div>
              <div className=" text-[.9em]  text-[#6a7c97]">
                {item.description}
              </div>
              <div className="flex pt-2 gap-2 items-center align-middle">
                <div>
                  <button href="#" className="bg-primary-bg text-[#ffffff] px-3 py-2 rounded-lg inline-flex items-center align-middle">
                    {
                      item.member === "one"
                        ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                    }
                    <span className='ml-2'>{item.member === "one" ? '1' : 'Plusieurs'}</span>
                  </button>
                </div>
                <div className='flex items-center align-middle'>
                  <button href="#" className='bg-gradient-to-tr bg-primary-bg text-[#ffffff] px-3 py-2 rounded-lg inline-flex items-center align-middle '>
                    <span>
                      {
                        typeof item.icon === "object"
                          ?
                          <FontAwesomeIcon icon={item.icon} color={item.color} fontSize={20} />
                          :
                          <img src={`../assets/images/${item.icon}`} alt="" />
                      }
                    </span>
                  </button>
                  <a href={item.link} target='_blank' rel="noreferrer" className='ml-2 bg-gradient-to-tr bg-primary-bg hover:bg-button-hover-bg cursor-pointer transition-all duration-300 ease-out text-[#ffffff] px-3 py-2 rounded-lg inline-flex items-center align-middle '>
                    <FontAwesomeIcon icon={faGithub} fontSize={25} />
                  </a>
                </div>
                
              </div>
              <div className='mt-2 flex'>
              { item.titre !== "RPGGames" && item.titre !== "Restaurant" && item.titre !== "Events"  && item.titre !== "Auto Ecole" && item.titre !== "html5gaming" ?
                  <button onClick={() => deleteProject(item.keyID, item)} className='bg-red-400 px-5 py-2 rounded-md text-sm cursor-pointer transition-all duration-200 ease-in-out hover:text-red-500 hover:bg-white'>Supprimer ce project</button>
                  : 
                  ''
                }
                </div>
            </div>
          </div>

        ))}

      </div>
        
      <div>
        {
          toggle && (
            <Dialog open={toggle} onClose={toggleProject} className="relative z-10">
              <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
              />

              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full justify-center p-4 text-center">
                  <DialogPanel
                    transition
                    className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-16 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                  >
                    <div className="bg-bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10">
                          <PlusIcon aria-hidden="true" className="h-6 w-6 text-orange-600" fill='#3d4858' />
                        </div>
                        <div className="mb-5 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-400">
                            Ajout d'un projet
                          </DialogTitle>
                          <div className="">
                            <p className="text-sm text-gray-500">
                              Les projets ajouter seront afficher dans la rubrique 'projet afficher'
                            </p>
                          </div>
                        </div>


                      </div>
                      <div className='p-1 rounded-sm'>
                        <div className="mx-auto 3xl:p-14 rounded-2xl gap-5">
                          <form className="w-full grid grid-cols-1 xl:grid-cols-1 bg-gray-800 rounded-xl">
                            <div className='flex flex-col md:flex-row gap-2'>
                              <div className="">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-white">Titre du projet</label>
                                <div className="relative text-gray-400"><span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                </span>
                                  <input type="text" name="title" id="title" placeholder="Entrer le titre du projet" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autoComplete="title" onChange={(e) => setTitre(e.target.value)} />
                                </div>
                              </div>
                              <div className="">
                                <label htmlFor="desc" className="block mb-2 text-sm font-medium text-white">Description du projet</label>
                                <div className="relative text-gray-400"><span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                                </svg>
                                </span>
                                  <input type="desc" name="desc" id="desc" placeholder="Entrer la description du projet" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autoComplete="desc" onChange={(e) => setDescription(e.target.value)} />
                                </div>
                              </div>
                            </div>
                            <div className="">
                              <label htmlFor="images" className="block mb-2 text-sm font-medium text-white">Image du projet</label>
                              <div className="relative text-gray-400"><span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" strokeWidth="1.5" className="size-6">
                                <path d="M9.97.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72v3.44h-1.5V3.31L8.03 5.03a.75.75 0 0 1-1.06-1.06l3-3ZM9.75 6.75v6a.75.75 0 0 0 1.5 0v-6h3a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3h3Z" />
                                <path d="M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z" />
                              </svg>
                              </span>
                                <input type="file" multiple name="images" id="images" placeholder="Insérer des images lier au projet" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" onChange={(e) => setImages(e.target.files)} />
                              </div>
                            </div>
                            <div className="">
                              <label htmlFor="icones" className="block mb-2 text-sm font-medium text-white">Icones</label>

                              <div className="">

                                <label htmlFor="icones" className="sr-only">Selectionne le language</label>
                                <select id="icones"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg border-s-gray-100 dark:border-s-gray-700 border-s-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                >

                                  <option value="">Séléctionne le language</option>
                                  <option value="faHtml5">HTML</option>
                                  <option value="faLaravel">Laravel</option>
                                  <option value="faSymfony">Symfony</option>
                                  <option value="faNodeJs">Node JS</option>
                                  <option value="faReact">React</option>
                                  <option value="faPhp">PHP</option>
                                  <option value="faPython">Python</option>
                                  <option value="faRuby">Ruby</option>
                                  <option value="faVuejs">Vue</option>
                                  <option value="faCss3">CSS</option>
                                  <option value="faJS">Javascript</option>
                                  <option value="faJava">Java</option>
                                  <option value="faBootstrap">Bootstrap</option>
                                  <option value="faTypescript">Typescript</option>
                                  <option value="threeJS">ThreeJS</option>
                                </select>
                              </div>
                            </div>
                            <div className="">
                              <label htmlFor="color_icones" className="block mb-2 text-sm font-medium text-white">Couleur de l'icone du projet</label>
                              <div className="text-gray-400">
                                <input type="color" name="color_icones" id="color_icones" placeholder="#fff" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block p-2.5 rounded-l-lg py-3 px-4" onChange={(e) => setColor(e.target.value)} />
                              </div>
                            </div>
                            <div className="flex justify-between items-center align-middle">
                              <ul className="grid gap-6 md:grid-cols-2 grid-cols-2" onChange={getMember}>
                                <li>
                                  <input type="checkbox" id="option-1" value="one" className="hidden peer" required="" onChange={() => handleCheckboxChange('one')} checked={checkedValue === "one"}/>
                                  <label htmlFor="option-1" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-white hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div className="block">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                      </svg>
                                      <div className="w-full text-xs font-semibold">1 personne</div>
                                    </div>
                                  </label>
                                </li>
                                <li>
                                  <input type="checkbox" id="option-2" value="all" className="hidden peer" required="" onChange={() => handleCheckboxChange('all')} checked={checkedValue === "all"} />
                                  <label htmlFor="option-2" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-white hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <div className="block">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                      </svg>

                                      <div className="w-full text-xs font-semibold">Plusieur personne</div>
                                    </div>
                                  </label>
                                </li>
                              </ul>
                            </div>
                            <label htmlFor="github" className="block mb-2 text-sm font-medium text-white">Lien github</label>
                            <div className="relative text-gray-400"><span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                              </svg>
                            </span>
                              <input type="github" name="github" id="github" placeholder="Entrer le lien github" className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" autoComplete="github" onChange={(e) => setLinkGitHub(e.target.value)} />
                            </div>
                            <button type="submit"
                              className="w-full text-[#ffffff] bg-button-hover-bg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6 transition-all duration-75 ease-out"
                              onClick={createProject}>Ajouter le projet</button>

                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        data-autofocus
                        onClick={toggleProject}
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      >
                        Fermer
                      </button>
                    </div>
                  </DialogPanel>
                </div>
              </div>
            </Dialog>
          )
        }
      </div>

    </div>
  )
}
