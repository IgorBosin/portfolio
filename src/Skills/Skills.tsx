import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../commom/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis, debitis deserunt ducimus error esse eveniet illum, inventore iusto magni, necessitatibus perspiciatis rerum veniam voluptas voluptatum. Libero, perspiciatis quas. Animi.'

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={lorem}/>
                    <Skill title={'CSS'} description={lorem}/>
                    <Skill title={'React'} description={lorem}/>
                </div>
            </div>
        </div>
    );
}

