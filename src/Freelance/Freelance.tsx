import React from 'react';
import style from './Freelance.module.scss';
import styleContainer from './../commom/styles/Container.module.scss'
import buttonStyle from '../commom/styles/Button.module.css'
import {Title} from "../commom/components/title/Title";

export const Freelance = () => {

    return (
        <div className={style.freelanceBlock}>
            <div className={`${styleContainer.container} ${style.freelanceContainer}`}>
                <Title icon={'lnr lnr-earth'} title={'I Am Avaible For Freelance Work'}/>
                <button className={`${style.btn}`}>HIRE ME</button>
                {/*<button*/}
                {/*    onClick={() => window.location.href = 'https://google.com'}*/}
                {/*    className={`${buttonStyle.btn} ${style.btn}`}>HIRE ME*/}
                {/*</button>*/}
            </div>
        </div>
    );
}

