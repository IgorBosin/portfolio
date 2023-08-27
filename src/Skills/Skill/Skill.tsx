import React from 'react';
import style from './Skill.module.scss';

type SkillsType = {
    title: string
    description: string
    icon: string
}

export const Skill = (props: SkillsType) => {
    return (
        <div className={style.skill}>
            <i className={props.icon}></i>
            <h4 className={style.title}> {props.title}</h4>
            <p className={style.description}>
                {props.description}
            </p>
        </div>
    );
}

