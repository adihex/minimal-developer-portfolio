import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { EarlierWork } from './components/EarlierWork';
import { About } from './components/About';
import { Notes } from './components/Notes';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <EarlierWork />
        <About />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
