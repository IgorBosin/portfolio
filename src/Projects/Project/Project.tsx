import React from 'react';
import style from './Project.module.scss';
import PulseClick from "../../commom/components/PulseClick/PulseClick";

type ProjectType = {
    title: string
    description: string
    backgroundStyle: any
}

export const Project = (props: ProjectType) => {
    return (
        <div className={style.project}>
            <PulseClick/>
            <a className={style.img} href={'https://www.google.com'} target="_blank"
               style={props.backgroundStyle} rel="noopener noreferrer">
                <div className={style.imgTextContainer}>
                    <h2 className={style.imgTextContainerTitle}>Show</h2>
                    <div className={style.imgTextContainerDescription}>GitHub-pages</div>
                </div>
            </a>
            <div className={style.projectText}>
                <h3 className={style.projectTitle}> {props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

