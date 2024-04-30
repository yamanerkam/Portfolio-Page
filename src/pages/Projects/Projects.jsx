import React from 'react'
import './Projects.css'
import Project from '../../components/Project/Project'
import imgSrc from './img.jpeg';




export default function Projects() {
    return (
        <div id='projects' className='projects'>
            <h1 className='title'>My Recent <span>Projects</span></h1>
            <div className='project-area'>

                <Project imgSrc={imgSrc} name='1' p='Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.'></Project>
                <Project imgSrc={imgSrc} name='1' p='Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.'></Project>
                <Project imgSrc={imgSrc} name='1' p='Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.'></Project>
                <Project imgSrc={imgSrc} name='1' p='Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.'></Project>
                <Project imgSrc={imgSrc} name='1' p='Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.'></Project>
                <Project imgSrc={imgSrc} name='1' p='Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.'></Project>




            </div>
        </div >
    )
}
