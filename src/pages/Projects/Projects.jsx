import React from 'react'
import './Projects.css'


export default function Projects() {
    return (
        <div className='projects'>
            <h1 className='title'>My Recent <span>Projects</span></h1>
            <div className='project-area'>
                <div className='proj'>project 1</div>
                <div className='proj'>project 2</div>
                <div className='proj'>project 3</div>
            </div>
        </div>
    )
}
