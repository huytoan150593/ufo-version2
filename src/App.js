import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Director from './components/Director/Director';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Director />
    </div>
  );
}

export default App;
