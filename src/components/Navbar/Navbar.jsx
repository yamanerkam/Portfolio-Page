import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const scrollToProjects = (section) => {
        const projectsSection = document.querySelector(section);
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className='navbar'>
            <span className='logo'>Kam</span>
            <button className='toggle-button' onClick={() => setShowLinks(!showLinks)}>
                <FaBars className='barr' />
            </button>
            <ul className={showLinks ? 'nav-links active' : 'nav-links'}>
                <li><a className='link-nav' onClick={() => scrollToProjects('#home')}>Home</a></li>
                <li><a className='link-nav' onClick={() => scrollToProjects('#about')}>About</a></li>
                <li><a className='link-nav' onClick={() => scrollToProjects("#projects")}>Projects</a></li>
                <li><a className='link-nav' onClick={() => scrollToProjects("#contact")}>Contact</a></li>
            </ul>
        </div>
    );
}
