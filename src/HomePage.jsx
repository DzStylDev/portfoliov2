import React, { useRef } from 'react'
import AProposDeMoi from './components/AProposDeMoi';
import DEProfessionnel from './components/DEProfessionnel';
import Competences from './components/Competences';
import Projects from './components/Projects';
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
    const headerOffset = document.querySelector('.header').offsetHeight
    let element;
    
    switch (section) {
      case 'about':
        element = aboutRef.current
        break;
      case 'competences':
        element = competencesRef.current
        break;
      case 'projects':
        element = projectsRef.current
        break;
      case 'contact':
        element = contactRef.current
        break;
      case 'footerRef':
        element = footerRef.current
      break;
    }

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='font-pol1 text-white box-border p-4 h-full'>
      <Header scrollToSection={scrollToSection} />
        
      <section>
        <AProposDeMoi refSection={aboutRef}/>
      </section>
      
      <section ref={competencesRef}>
        <Competences />
      </section>

      <section>
        <DEProfessionnel />
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
  )
}

