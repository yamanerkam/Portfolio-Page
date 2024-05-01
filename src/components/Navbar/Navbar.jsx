import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className='navbar'>
            <span className='logo'>Kam</span>
            <button className='toggle-button' onClick={() => setShowLinks(!showLinks)}>
                <FaBars className='barr' />
            </button>
            <ul className={showLinks ? 'nav-links active' : 'nav-links'}>
                <li><a className='link-nav' href="#home" onClick={() => setShowLinks(false)}>Home</a></li>
                <li><a className='link-nav' href="#about" onClick={() => setShowLinks(false)}>About</a></li>
                <li><a className='link-nav' href="#projects" onClick={() => setShowLinks(false)}>Projects</a></li>
                <li><a className='link-nav' href="#contact" onClick={() => setShowLinks(false)}>Contact</a></li>
            </ul>
        </div>
    );
}
