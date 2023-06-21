import React from 'react';
import style from './Projects.module.css';
import styleContainer from './../commom/styles/Container.module.css'
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer} `}>
                <h2 className={style.title}>My project</h2>
                <div className={style.projects}>
                    <Project
                        url={'https://www.google.ru/'}
                        title={'Todo list'}
                        description={'Create Todo List'}/>
                    <Project
                        url={'https://www.yandex.ru/'}
                        title={'Social network'}
                        description={'Create Social Network         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ex excepturi impedit ipsum laudantium porro qui saepe suscipit tenetur voluptatibus! Aut dolores enim esse facilis magnam nulla, quia quod recusandae.\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ex excepturi impedit ipsum laudantium porro qui saepe suscipit tenetur voluptatibus! Aut dolores enim esse facilis magnam nulla, quia quod recusandae.\n'}/>
                </div>
            </div>
        </div>

    );
}

