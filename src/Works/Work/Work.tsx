import React from 'react';
import style from './Work.module.css';

type SkillsType = {
    title: string
    description: string
}

export const Work = (props: SkillsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3> {props.title}</h3>
            <span className={style.discription}>
                {props.description}
            </span>
        </div>
    );
}

