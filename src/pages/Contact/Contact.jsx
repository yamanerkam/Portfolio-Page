import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

import './Contact.css'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
    const form = useRef();
    const [user, setUser] = useState({ name: '', email: '', message: '' });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)


        emailjs
            .sendForm('service_yvd46w4', 'template_2pk8wao', form.current, {
                publicKey: '40I0FwzM30_m_vkho',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );

        setUser({ name: '', email: '', message: '' })

    }


    return (
        <div className='contact'>
            <div className='main'>
                <div className='parag'>
                    <h1>Get in Touch</h1>
                    <h1 className='contact-me'>Contact me</h1 >
                </div>
                <div className="form">
                    <form ref={form} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder='Name'
                            value={user.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder='Email'
                            value={user.email}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            name="message"
                            placeholder='Message'
                            value={user.message}
                            onChange={handleChange}
                            required
                        />

                        <button className='submit' type="submit">Send</button>
                    </form>
                </div>

            </div>

            <div className='bottom'>
                <div className="socials">
                    <li className='btn'>
                        <a className='btn-icon' target="_blank" href="https://github.com/yamanerkam">
                            <FaGithub />
                        </a>


                    </li>
                    <li className='btn'><a className='btn-icon' target="_blank" href="https://www.instagram.com/erkamyaman35/ ">
                        <FaInstagram />
                    </a></li>
                    <li className='btn'><a className='btn-icon' target="_blank" href="https://www.linkedin.com/in/erkamyaman35/
 ">
                        <FaLinkedin />
                    </a></li>

                    <li className='btn' >

                        <a className='btn-icon' target="_blank" href="https://www.linkedin.com/in/erkamyaman35/ ">
                            <FaTwitter />
                        </a></li>

                </div>
            </div>


        </div >
    )
}
