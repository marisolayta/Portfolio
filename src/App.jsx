import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection delay={60}>
          <Skills />
        </AnimatedSection>
        <AnimatedSection delay={80}>
          <Projects />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <Education />
        </AnimatedSection>
        <AnimatedSection delay={120}>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
