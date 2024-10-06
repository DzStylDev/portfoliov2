import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import A_Propos_de_moi from './components/A_Propos_de_moi';
import DE_professionnel from './components/DE_professionnel';
import Competences from './components/Competences';
import Projects from './components/Projects';
import Centre_Interet from './components/Centre_Interet';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

export default function HomePage() {

  const aboutRef = useRef(null);
  const competencesRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const footerRef = useRef(null)

  const scrollToSection = (section) => {
    switch (section) {
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'competences':
        competencesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'footerRef':
        footerRef.current.scrollIntoView({ behavior: 'smooth' })
      default:
        break;
    }
  };

  return (
    <div className='bg-my-gradient font-pol1 text-white box-border p-0 m-0'>
      <div className='mx-72 min-w-20 p-4'>
      <Header scrollToSection={scrollToSection} />
        
      <section>
        <A_Propos_de_moi refSection={aboutRef}/>
      </section>
      
      <section ref={competencesRef}>
        <Competences />
      </section>

      <section>
        <DE_professionnel />
      </section>

      <section ref={projectsRef}>
        <Projects title="Mes Projets" />
      </section>
      

      <section ref={contactRef}>
        <Contact />
      </section>

      <section ref={footerRef}>
        <Footer />
      </section>
      </div>

    </div>
  )
}

