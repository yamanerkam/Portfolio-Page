import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div className='contact'>
            <div className='main'>
                <div>paragraph</div>
                <div className="form">
                    <form >
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                required
                            />
                        </label>
                        <label>
                            Message:
                            <textarea
                                name="message"
                                required
                            />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>


            </div>
        </div>
    )
}
