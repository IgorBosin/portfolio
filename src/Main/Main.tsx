import React from 'react';
import style from './Main.module.css';
import styleContainer from './../commom/styles/Container.module.scss'

export const Main = () => {
    return (
        <div id={'Main'} className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <span>Hi World</span>
                    <h1>I am Igor</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
}

