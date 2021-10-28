import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Filler from '../Filler'
import Footer from '../Footer';
import About from '../About';

function Home() {
  return (
    <>
      <HeroSection /><Cards /><Filler/><About/>
      
      <Footer />
    </>
  );
}

export default Home;