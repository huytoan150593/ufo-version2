import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Director from './components/Director/Director';
import Gallery from './components/Gallery/Gallery';
import DirectorList from './components/DirectorList/DirectorList';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <DirectorList />
      <Director />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
