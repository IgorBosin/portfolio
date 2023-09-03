import React from 'react';
import style from './Projects.module.scss';
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

    const projects = [
        {
            backgroundStyle: todo,
            title: 'To-do list',
            description: 'Create Todo List'
        },
        {
            backgroundStyle: social,
            title: 'Social network',
            description: 'we',
            //     description: 'Create Social Network Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ex' +
            //         ' excepturi impedit ipsum laudantium porro qui saepe suscipit tenetur voluptatibus! Aut dolores enim ' +
            //         'esse facilis magnam nulla, quia quod recusandae.\n        Lorem ipsum dolor sit amet, consectetur ' +
            //         'adipisicing elit. Blanditiis ex excepturi impedit ipsum laudantium porro qui saepe suscipit tenetur ' +
            //         'voluptatibus! Aut dolores enim esse facilis magnam nulla, quia quod recusandae.'
        }
    ]

    return (
        <div id={'Projects'} className={`${style.projectsBlock} bg`}>
            <div className={style.projectsContainer}>
                <Title icon={'lnr lnr-briefcase'} title={'My projects'}/>
                <div className={style.projects}>
                    {projects.map(el =>
                        <Project title={el.title} description={el.description}
                                 backgroundStyle={el.backgroundStyle}/>)}
                </div>
            </div>
        </div>
    );
}

