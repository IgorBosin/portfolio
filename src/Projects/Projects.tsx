import React from 'react';
import style from './Projects.module.scss';
import {Project} from './Project/Project';
import {Title} from "../commom/components/title/Title";
import socialImage from '../assets/images/socialNetwork.jpg'
import todoImage from '../assets/images/ToDoList.jpg'

export const Projects = () => {

    const backgroundImages = {
        social: {backgroundImage: `url(${socialImage})`},
        todo: {backgroundImage: `url(${todoImage})`}
    }


    const projects = [
        {
            id: 1,
            backgroundStyle: backgroundImages.todo,
            title: 'To-do list',
            description: 'Create Todo List'
        },
        {
            id: 2,
            backgroundStyle: backgroundImages.social,
            title: 'Social network',
            description: 'Create Social network',
        }
    ]

    return (
        <div id={'Projects'} className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title icon={'lnr lnr-briefcase'} title={'My projects'}/>
                <div className={style.projects}>
                    {projects.map(el => <Project key={el.id}
                                                 title={el.title}
                                                 description={el.description}
                                                 backgroundStyle={el.backgroundStyle}/>)}
                </div>
            </div>
        </div>
    );
}

