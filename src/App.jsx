import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import VendorShowcase from './components/VendorShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F6F0E8] text-stone-800 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <VendorShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
