import React from 'react';
import './About.css';

import aboutImage1 from '../../assets/Image.png';
import aboutImage2 from '../../assets/Image-1.png';
import aboutImage3 from '../../assets/Image-2.png';

function About() {
    return (
        <div className="about-section">
            <div className="about-section-box">
                <div className="about-left-info">
                    <h5>What's Netbook?</h5>
                    <h3>Why Join to Netbook Social Network?</h3>
                    <p>Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</p>
                    <ul>
                        <li>Groups</li>
                        <li>Messages</li>
                        <li>Share</li>
                    </ul>
                </div>
                <div className="about-images">
                    <img src={aboutImage1} alt="aboutImg" />
                    <img src={aboutImage2} alt="aboutImg" />
                    <img src={aboutImage3} alt="aboutImg" />
                </div>
            </div>
        </div>
    )
}

export default About