import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import logo from '../images/trophy.gif'

function Cards() {
  return (
    
    <div className='cards'>
      
      <div className='titleCard'>
       <img src={logo} alt="trophy" /> <h1>Achievements</h1>
        
      </div>
      
      <div className='cards__container'>
      
        <div className='cards__wrapper'>
          <ul className='cards__items'>
           
            <CardItem
              src='./images/sweden1.jpg'
              text='2021 Worlds Silver and Bronze'
              label='Halmstad, Sweden'
              path='/achievements'
           />
   
            <CardItem
              src='images/sweden3.jpg'
              text='2019 Worlds Bronze'
              label='Helsinborg, Sweden'
              path='/achievements'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/uk.jpg'
              text='2020 only female Asian Powerlifter qualified to compete'
              label='POSTPONED EVENT, U.K'
              path='/sign-up'
            />
            <CardItem
              src='images/goldcoast.jpg'
              text='2019 Gold Asian Pacific Powerlifting Championships'
              label='Gold Coast, Australia'
              path='/achievements'
            />
            <CardItem
              src='images/india.jpg'
              text='2018 APF Asian Powerlifting Classic Championships 8 Golds'
              label='Ulaanbaatar, Mongolia and Udaipur, India'
              path='/achievements'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;