import React from 'react';
import style from './Project.module.scss';
import PulseClick from "../../commom/components/PulseClick/PulseClick";

type ProjectType = {
    title: string
    description: string
    backgroundStyle: any
}

export const Project = (props: ProjectType) => {

    const onClickHandler = () => {
        window.open('https://www.google.com', '_blank' )
    }

    return (
        <div className={style.project}>
            <PulseClick className={style.waveContainer}/>
            <div className={style.img} style={props.backgroundStyle} onClick={onClickHandler}>
                <div className={style.imgTextContainer}>
                    <h2 className={style.imgTextContainerTitle}>Show</h2>
                    <div className={style.imgTextContainerDescription}>GitHub-pages</div>
                </div>
            </div>
            <div className={style.projectText}>
                <h3 className={style.projectTitle}> {props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

