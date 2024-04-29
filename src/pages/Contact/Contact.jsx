import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {

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
        setUser({ name: '', email: '', message: '' })
    }


    return (
        <div className='contact'>
            <div className='main'>
                <div className='parag'>
                    <h1>Get in Touch</h1>
                    <h1>Contact me</h1 >
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
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

                        <button className='submit' type="submit">Submit</button>
                    </form>
                </div>


            </div>
        </div >
    )
}
