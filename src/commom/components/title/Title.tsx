import React from 'react';
import style from './Title.module.scss';
import {Zoom} from "react-awesome-reveal";

type TitleType = {
    title: string
    icon: string
}

export const Title = (props: TitleType) => {
    return (
        <div className={style.title}>
            <Zoom style={{display: 'inline-flex'}} direction={"right"}>
                <h2>{props.title}</h2>
            </Zoom>
            <i className={props.icon}></i>
        </div>
    );
}
