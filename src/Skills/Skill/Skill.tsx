import React from 'react';
import style from './Skill.module.css';

type SkillsType = {
    title: string
    description: string
}

export const Skill = (props: SkillsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3 className={style.title}> {props.title}</h3>
            <span className={style.discription}>
                {props.description}
            </span>
        </div>
    );
}

