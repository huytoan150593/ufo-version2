import { Suspense, lazy } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import ViewportMount from './components/shared/ViewportMount/ViewportMount';

const About = lazy(() => import('./components/About/About'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const DirectorList = lazy(() => import('./components/DirectorList/DirectorList'));
const Director = lazy(() => import('./components/Director/Director'));
const ActorList = lazy(() => import('./components/ActorList/ActorList'));
const Gallery = lazy(() => import('./components/Gallery/Gallery'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function SectionFallback({ compact = false }) {
  return (
    <div
      className={`section-fallback ${compact ? 'is-compact' : ''}`}
      aria-hidden="true"
    >
      <div className="section-fallback__inner">
        <span className="section-fallback__line section-fallback__line--short"></span>
        <span className="section-fallback__line"></span>
        <span className="section-fallback__line section-fallback__line--medium"></span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ViewportMount fallback={<SectionFallback compact />} minHeight={220}>
        <Suspense fallback={<SectionFallback compact />}>
          <About />
        </Suspense>
      </ViewportMount>
      <ViewportMount fallback={<SectionFallback />} minHeight={360}>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
      </ViewportMount>
      <ViewportMount fallback={<SectionFallback compact />} minHeight={220}>
        <Suspense fallback={<SectionFallback compact />}>
          <DirectorList />
        </Suspense>
      </ViewportMount>
      <ViewportMount fallback={<SectionFallback compact />} minHeight={220}>
        <Suspense fallback={<SectionFallback compact />}>
          <Director />
        </Suspense>
      </ViewportMount>
      <ViewportMount fallback={<SectionFallback />} minHeight={420}>
        <Suspense fallback={<SectionFallback />}>
          <ActorList />
        </Suspense>
      </ViewportMount>
      <ViewportMount fallback={<SectionFallback />} minHeight={420}>
        <Suspense fallback={<SectionFallback />}>
          <Gallery />
        </Suspense>
      </ViewportMount>
      <ViewportMount fallback={<SectionFallback />} minHeight={420}>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </ViewportMount>
      <ViewportMount fallback={<SectionFallback compact />} minHeight={220}>
        <Suspense fallback={<SectionFallback compact />}>
          <Footer />
        </Suspense>
      </ViewportMount>
    </div>
  );
}

export default App;
