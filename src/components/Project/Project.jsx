import React from 'react'
import './Project.css'
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";


export default function Project(props) {
    return (
        <div className='project-card'>
            <img className='img' src={props.imgSrc} alt="" />
            <h1>Project {props.name}</h1>
            <p>{props.p}</p>
            <div className='buttons'>

                <a href={props.GitHubURL}>
                    <button className='btn'>
                        <BsGithub className='icon'></BsGithub> <span>Github</span>
                    </button>
                </a>

                <a href={props.DemoURL}>
                    <button className='btn'>
                        <CgWebsite className='icon'></CgWebsite>
                        <span>Demo</span>
                    </button>
                </a>
            </div>
        </div>
    )
}
