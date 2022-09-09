import React, { useState } from 'react';
import './Navbar.css';
import { CSSTransition } from 'react-transition-group';

import logo from '../../assets/logo.png';
import CaretDown from '../../assets/CaretDown.png';

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <div className="siema">
            <div className="navbar">
                <img src={logo} alt="netbook-logo" />
                <ul className='nav'>
                    <li>Home</li>
                    <li>
                        <a onClick={() => setOpen(!open)} href="#comm">
                            Community
                            <img className='caret-down' src={CaretDown} alt="caret-down" />
                        </a>
                        <CSSTransition
                            in={open}
                            unmountOnExit
                            timeout={150}
                            classNames='dropdown-animation'
                        >
                            <div className="dropdown">
                                <ul className='dropdown-menu'>
                                    <li>Members, Fiends</li>
                                    <li>Forum</li>
                                    <li>List Builder</li>
                                    <li>Groups</li>
                                    <li>Custom Module</li>
                                    <li>List Scroll Effects</li>
                                </ul>
                            </div>
                        </CSSTransition>

                    </li>
                    <li>Blog</li>
                    <li>Events</li>
                </ul>
                <button>Log In</button>
            </div>
        </div>
    )
}

export default Navbar;