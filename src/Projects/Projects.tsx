import React from 'react';
import style from './Projects.module.scss';
import styleContainer from './../commom/styles/Container.module.scss'
import {Project} from './Project/Project';
import {Title} from "../commom/components/title/Title";
import socialImage from '../assets/images/socialNetwork.jpg'
import todoImage from '../assets/images/ToDoList.jpg'



export const Projects = () => {

    const social = {
        backgroundImage: `url(${socialImage})`
    }

    const todo = {
        backgroundImage: `url(${todoImage})`
    }

    return (
        <div id={'Projects'} className={`${style.projectsBlock} bg`}>
            <div className={`${styleContainer.container} ${style.projectsContainer} `}>
                <Title icon={'lnr lnr-briefcase'} title={'My projects'} />
                <div className={style.projects}>
                    <Project
                        backgroundStyle={todo}
                        title={'To-do list'}
                        description={'Create Todo List'}/>
                    <Project
                        backgroundStyle={social}
                        title={'Social network'}
                        description={'Create Social Network         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ex excepturi impedit ipsum laudantium porro qui saepe suscipit tenetur voluptatibus! Aut dolores enim esse facilis magnam nulla, quia quod recusandae.\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ex excepturi impedit ipsum laudantium porro qui saepe suscipit tenetur voluptatibus! Aut dolores enim esse facilis magnam nulla, quia quod recusandae.\n'}/>
                </div>
            </div>
        </div>

    );
}

