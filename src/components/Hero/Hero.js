import React from 'react';
import './Hero.css';
import HeroImg from '../../assets/hero.png';

function Hero() {
    return (
        <div className="hero-section">
            <div className="hero-left-info">
                {/* <button>Netbook community</button> */}
                <h2>Your Solutions For Community!</h2>
                <p>More than 2 billion people in over countries use socibook to stay in touch with friends and family.</p>
                {/* <div className="buttons">
                    <button>About More</button>
                    <button>Invite Friends</button>
                </div> */}
            </div>
            <img className='hero-img' src={HeroImg} alt="HeroImage" />
        </div>
    )
}

export default Hero