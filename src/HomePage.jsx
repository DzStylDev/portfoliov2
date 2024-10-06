import React, { useRef } from 'react'
import A_Propos_De_Moi from './components/A_Propos_De_Moi';
import DE_Professionnel from './components/DE_Professionnel';
import Competences from './components/Competences';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import AProposDeMoi from './components/A_Propos_De_Moi';

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
        <A_Propos_De_Moi refSection={aboutRef}/>
      </section>
      
      <section ref={competencesRef}>
        <Competences />
      </section>

      <section>
        <DE_Professionnel />
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

