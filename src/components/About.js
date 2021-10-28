import React, { Component } from 'react'
import './About.css';
import pic1 from '../images/start.JPG'


export class About extends Component {
    render() {
        return (
            
                <div className="about-container">
               

                  
                        <div className="aboutContent">
                            <h1>Joyce Starts Powerlifting</h1>
                            <p>In<dfn> 2017</dfn>, she was qualified to be part of the National Team after breaking national Powerlifting records. She wins in other strength sports too, such as CrossFit and Strongman, where she also earned the title of the 'Philippine's Strongest Woman'</p>
                        </div>
                        <div className="aboutContent">
                        <img  src={pic1} alt="start picture" />
                        </div>

                 
                    
                   
                </div>
           
            
        )
    }
}

export default About
