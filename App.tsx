
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Cta from './components/Cta';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default App;
