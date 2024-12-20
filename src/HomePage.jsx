import React, { useRef } from 'react'
import AProposDeMoi from './components/AProposDeMoi';
import DEProfessionnel from './components/DEProfessionnel';
import Competences from './components/Competences';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Reveal from './utils/Reveal';

export default function HomePage() {

  const aboutRef = useRef(null);
  const competencesRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const footerRef = useRef(null)

  const scrollToSection = (section) => {
    
    switch (section) {
      case 'about':
        aboutRef.current.scrollIntoView({
          behavior: 'smooth',
        });
        break;
      case 'competences':
        competencesRef.current.scrollIntoView({
          behavior: 'smooth',
        });
        break;
      case 'projects':
        projectsRef.current.scrollIntoView({
          behavior: 'smooth',
        });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({
          behavior: 'smooth',
        });
        break;
      case 'footerRef':
        footerRef.current.scrollIntoView({
          behavior: 'smooth',
        });
        break;
      default:
    }
  };

  return (
   <>
          <Header scrollToSection={scrollToSection} />

        
              <Reveal>
                <section>
                    <AProposDeMoi refSection={aboutRef}/>
                </section>
              </Reveal>

              <Reveal>
                <section ref={competencesRef}>
                      <Competences />
                </section>
              </Reveal>

            <Reveal>
              <section>
                  <DEProfessionnel />
              </section>
            </Reveal>

       
            <Reveal>
          <section ref={projectsRef}>
              <Projects title="Mes Projets" />
          </section>
            </Reveal>

            <Reveal>
              <section ref={contactRef}>
                  <Contact />
              </section>
             </Reveal>

            <Reveal>
              <section ref={footerRef}>
                  <Footer />
              </section>   
            </Reveal>
      </>
      ) 
}

