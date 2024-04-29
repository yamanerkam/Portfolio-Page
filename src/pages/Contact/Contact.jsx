import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div className='contact'>
            <div className='main'>
                <div className='parag'>paragraph</div>
                <div className="form">
                    <form >
                        <input
                            type="text"
                            name="name"
                            placeholder='Name'
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder='Email'
                            required
                        />

                        <textarea
                            name="message"
                            placeholder='Message'
                            required
                        />

                        <button className='submit' type="submit">Submit</button>
                    </form>
                </div>


            </div>
        </div >
    )
}
