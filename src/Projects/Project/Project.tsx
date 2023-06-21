import React from 'react';
import style from './Project.module.css';
import buttonStyle from '../../commom/styles/Button.module.css'

type ProjectType = {
    title: string
    description: string
    url: string
}

export const Project = (props: ProjectType) => {
    return (
        <div className={style.project}>
            {/*<div className={style.imgContainer}>*/}
            {/*    <a className={style.btn} href={props.url}>Click me</a>*/}
            {/*</div>*/}
            <div className={style.imgContainer}>
                <button
                    onClick={()=>window.location.href = props.url}
                    className={buttonStyle.btn}>Show
                </button>
            </div>
            <h3 className={style.title}> {props.title}</h3>
            <span className={style.discription}>{props.description}</span>
        </div>
    );
}

