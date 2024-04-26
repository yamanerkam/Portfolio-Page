import React from 'react'
import './About.css'
import Marquee from "react-fast-marquee";
import JsIcon from './icons/js.png'
import TypeScript from './icons/ts.png'
import ReactLogo from './icons/react-2.svg'
import HtmlLogo from './icons/html.png'
import CSSLogo from './icons/css.png'

export default function About() {
    return (
        <div className='about'>

            <div className="card-form">

                <div className='about-me'>
                    <h1>About Me</h1>
                    <p>
                        I'm currently honing my skills as a front-end developer, with a particular interest in building user-friendly interfaces using React. My internship at YAFA Tech is providing me with invaluable hands-on experience, where I'm actively involved in creating visually appealing and interactive web experiences. I'm a passionate learner, constantly seeking to expand my knowledge and explore the latest advancements in front-end development. This pursuit fuels my excitement for the future and the opportunity to contribute my skills to building innovative web applications.I'm currently honing my skills as a front-end developer, with a particular interest in building user-friendly interfaces using React. My internship at YAFA Tech is providing me with invaluable hands-on experience, where I'm actively involved in creating visually appealing and interactive web experiences. I'm a passionate learner, constantly seeking to expand my knowledge and explore the latest advancements in front-end development. This pursuit fuels my excitement for the future and the opportunity to contribute my skills to building innovative web applications.I'm currently honing my skills as a front-end developer, with a particular interest in building user-friendly interfaces using React. My internship at YAFA Tech is providing me with invaluable hands-on experience, where I'm actively involved in creating visually appealing and interactive web experiences. I'm a passionate learner, constantly seeking to expand my knowledge and explore the latest advancements in front-end development. This pursuit fuels my excitement for the future and the opportunity to contribute my skills to building innovative web applications.I'm currently honing my skills as a front-end developer, with a particular interest in building user-friendly interfaces using React. My internship at YAFA Tech is providing me with invaluable hands-on experience, where I'm actively involved in creating visually appealing and interactive web experiences. I'm a passionate learner, constantly seeking to expand my knowledge and explore the latest advancements in front-end development. This pursuit fuels my excitement for the future and the opportunity to contribute my skills to building innovative web applications.I'm currently honing my skills as a front-end developer, with a particular interest in building user-friendly interfaces using React. My internship at YAFA Tech is providing me with invaluable hands-on experience, where I'm actively involved in creating visually appealing and interactive web experiences. I'm a passionate learner, constantly seeking to expand my knowledge and explore the latest advancements in front-end development. This pursuit fuels my excitement for the future and the opportunity to contribute my skills to building innovative web applications.I'm currently honing my skills as a front-end developer, with a particular interest in building user-friendly interfaces using React. My internship at YAFA Tech is providing me with invaluable hands-on experience, where I'm actively involved in creating visually appealing and interactive web experiences. I'm a passionate learner, constantly seeking to expand my knowledge and explore the latest advancements in front-end development. This pursuit fuels my excitement for the future and the opportunity to contribute my skills to building innovative web applications.I'm currently honing my skills as a front-end developer, with a particular interest in building user-friendly interfaces using React. My internship at YAFA Tech is providing me with invaluable hands-on experience, where I'm actively involved in creating visually appealing and interactive web experiences. I'm a passionate learner, constantly seeking to expand my knowledge and explore the latest advancements in front-end development. This pursuit fuels my excitement for the future and the opportunity to contribute my skills to building innovative web applications.</p>
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


                        </div>


                    </Marquee>


                </div>

            </div>

        </div>

    )
}
