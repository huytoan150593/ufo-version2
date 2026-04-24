import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Director from './components/Director/Director';
import Gallery from './components/Gallery/Gallery';
import DirectorList from './components/DirectorList/DirectorList';
import Contact from './components/Contact/Contact';
import ActorList from './components/ActorList/ActorList';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <DirectorList />
      <Director />
      <ActorList />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
