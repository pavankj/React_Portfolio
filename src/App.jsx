import styles from './App.module.css'
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Education from './components/Education/Education';
import { Experience } from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
     <Navbar />
     <Hero />
     <About />
     <Education />
     <Experience />
     <Projects />
     <Contact />
    </div>
  );
}

export default App
