import React from 'react'
import './About.css'
import Marquee from "react-fast-marquee";
import JsIcon from './icons/js.png'
import TypeScript from './icons/ts.png'
import ReactLogo from './icons/react-2.svg'
import HtmlLogo from './icons/html.png'
import CSSLogo from './icons/css.png'
import NodeLogo from './icons/node.svg'
export default function About() {
    return (
        <div className='about'>

            <div className="card-form">

                <div className='about-me'>
                    <h1>About Me</h1>
                    <p>
                        Hello! I'm Erkam Yaman, a passionate Software Engineer and a dedicated Computer Science student. I have a strong interest in JavaScript, Node.js, React, and other related technologies. My journey in the tech world is fueled by my love for learning and improving my skills.
                    </p>
                    <p>
                        I am currently working as a Frontend Web Developer at YAFA Cloud Services LLC, where I am gaining valuable hands-on experience in the industry. I am also a proud student of Computer Engineering at Yalova University.
                    </p>
                    <p>
                        My dedication to self-improvement and my strong work ethic make me a reliable and committed team member. I am always looking for opportunities to learn and grow, and I am confident that my passion for programming and willingness to take on new challenges will make me a valuable asset to any team.
                    </p>
                </div>
                <div className='wrapper'  >
                    <Marquee
                        speed={100} delay={10} direction='right'>
                        <div className='icons'>
                            <img className='icon' src={HtmlLogo} alt="" />
                            <img className='icon' src={CSSLogo} alt="" />
                            <img className='icon' src={JsIcon} alt="" />
                            <img className='icon' src={TypeScript} alt="" />
                            <img className='icon' src={ReactLogo} alt="" />
                            <img className='icon' src={NodeLogo} alt="" />



                        </div>


                    </Marquee>


                </div>

            </div>

        </div>

    )
}
