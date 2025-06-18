import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import News from './components/News';
import About from './components/About';
import Objectives from './components/Objectives';
import Mission from './components/Mission';
import Partnerships from './components/Partnerships';
import Research from './components/Research';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Researchers from './components/Researchers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <News />
      <About />
      <Objectives />
      <Mission />
      <Partnerships />
      <Research />
      <Projects />
      <Publications />
      <Researchers />
      <Footer />
    </div>
  );
}

export default App;