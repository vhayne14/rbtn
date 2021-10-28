import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          DON'T BE AFRAID OF BEING A BEGINNER.
        </p>
       
       
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Powerlifting</h2>

            <a target="_blank" href="https://www.openpowerlifting.org/" rel="noreferrer">Rankings</a>
            <Link to='/'>Testimonials</Link>

          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Suggestions</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Community</Link>

          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a target="_blank" href="https://www.instagram.com/joycerbtn/?hl=en" rel="noreferrer">Instagram</a>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
               <i class='fas fa-dumbbell' />&nbsp;RBTN
              
            </Link>
          </div>
          <small class='website-rights'>RBTN © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
    
              <a target="_blank"  class='social-icon-link instagram' aria-label='Instagram' href="https://www.instagram.com/joycerbtn/?hl=en" rel="noreferrer"><i class='fab fa-instagram' /></a>


              
     
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
     
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;