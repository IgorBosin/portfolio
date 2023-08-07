import React from 'react';
import style from './Main.module.scss'
import bgImage from "../assets/images/bgImage.jpg";
import avaImage from "../assets/images/ava.png";
import avaScaleImage from "../assets/images/avaScale.png";
import avaGeneral from "../assets/images/avaGeneral.png";


export const Main = () => {

    const bgMainImg = {
        backgroundImage: `url(${bgImage})`
    }

    const avatarGeneral = {
        backgroundImage: `url(${avaGeneral})`
    }

    const avatar = {
        backgroundImage: `url(${avaImage})`
    }

    const avatarScale = {
        backgroundImage: `url(${avaScaleImage})`
    }

    return (
        <div id={'Home'} style={bgMainImg} className={style.mainBlock}>
            {/*<div className={` ${style.container} `}>*/}
                <div style={avatarGeneral} className={style.photoGeneral}></div>
                <div style={avatar} className={style.photo}></div>
                <div className={style.greeting}>
                    <h1>Igor <span>Bosin</span></h1>
                    <p>I am a <span>Frontend Developer</span></p>
                </div>
                <div style={avatarScale} className={style.photo}></div>
            {/*</div>*/}
        </div>
    )
}

