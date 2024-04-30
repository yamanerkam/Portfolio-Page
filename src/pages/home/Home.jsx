import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import './Home.css'
export default function Home() {
    return (
        <div id='home' className='home'>

            <h1>Hello, I am Kam <span className='wave'>👋</span></h1>
            <TypeAnimation
                className='type'
                sequence={[
                    'Front End Developer', // Types 'One'
                    1000, // Waits 1s
                    'Computer Engineer', // Deletes 'One' and types 'Two'
                    1000, // Waits 2s
                    'Learning Back End Development', // Types 'Three' without deleting 'Two'
                    1000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '3em', display: 'inline-block' }}
            />

            <button className='btn'>View My Portfolio</button>

        </div>
    )
}
