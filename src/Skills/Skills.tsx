import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../commom/styles/Container.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../commom/components/title/Title";

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis, debitis deserunt ducimus error esse eveniet illum, inventore iusto magni, necessitatibus perspiciatis rerum veniam voluptas voluptatum. Libero, perspiciatis quas. Animi.'

export const Skills = () => {
    return (
        <div id={'Skills'} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title icon={'lnr lnr-license'} title={'Skills'}/>
                <div className={style.skills}>
                    <Skill icon={'lnr lnr-earth'} title={'JS'} description={lorem}/>
                    <Skill icon={'lnr lnr-text-size'} title={'CSS'} description={lorem}/>
                    <Skill icon={'lnr lnr-diamond'} title={'React'} description={lorem}/>
                </div>
            </div>
        </div>
    );
}

