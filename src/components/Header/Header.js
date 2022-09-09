import React from 'react';
import './Header.css';
import { Navbar, Hero } from '../index';

function Header() {
    return (
        <div className="header">
            <Navbar />
            <Hero />
        </div>
    )
}

export default Header