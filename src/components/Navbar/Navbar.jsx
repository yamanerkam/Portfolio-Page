import React from 'react'
import './Navbar.css'


export default function Navbar() {
    return (
        <div className='navbar'>
            <span>Kam</span>
            <ul>
                <li><a className='link-nav' href="#home" class="active">Home</a></li>
                <li><a className='link-nav' href="#about">About</a></li>
                <li><a className='link-nav' href="#projects">Projects</a></li>
                <li><a className='link-nav' href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
