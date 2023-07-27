import React from 'react';
import style from './Title.module.scss';

type TitleType = {
    title: string
    icon: string
}

export const Title = (props: TitleType) => {
    return (
        <div className={style.title}>
            <h2>{props.title}</h2>
            <i className={props.icon}></i>
        </div>
    );
}

