import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div 
      className="min-h-screen relative text-white"
      style={{
        backgroundImage: `url('/ethereum-network-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay gradient for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Workflow />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;