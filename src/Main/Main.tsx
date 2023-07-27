import React from 'react';
import style from './Main.module.scss'
import bgImage from "../assets/images/sky2.jpg";
import avaImage from "../assets/images/ava3.jpg";


export const Main = () => {

    const todo = {
        backgroundImage: `url(${bgImage})`
    }

    const ava = {
        backgroundImage: `url(${avaImage})`
    }

    return (
        <div id={'Home'} style={todo} className={style.mainBlock}>
            <div className={` ${style.container} `}>
                <div style={ava} className={style.photo}></div>

                <div className={style.greeting}>
                    <h1>Igor <span>Bosin</span></h1>
                    <p>I am a <span>Frontend Developer</span></p>
                </div>
            </div>
        </div>
    )
}

