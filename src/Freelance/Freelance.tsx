import React from 'react';
import style from './Freelance.module.css';
import styleContainer from './../commom/styles/Container.module.css'
import buttonStyle from '../commom/styles/Button.module.css'

export const Freelance = () => {

    return (
        <div className={style.freelanceBlock}>
            <div className={`${styleContainer.container} ${style.freelanceContainer}`}>
                <h2 className={style.text}>I Am Avaible For Freelance Work</h2>
                <button
                    onClick={() => window.location.href = 'https://google.com'}
                    className={`${buttonStyle.btn} ${style.btn}`}>HIRE ME
                </button>
            </div>
        </div>
    );
}

