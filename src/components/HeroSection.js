import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';



function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/vid2.mp4' autoPlay loop muted />
      <h1>JOYCE REBOTON</h1>
      <p>THIS IS MY STORY</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> START LIFTING</Button>

      </div>
    </div>
  );
}

export default HeroSection;