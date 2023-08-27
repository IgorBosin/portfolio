import React from 'react';
import style from './Main.module.scss'
import bgImage from "../assets/images/bgImage.jpg";
import avaImage from "../assets/images/ava.png";
import avatarImage from "../assets/images/avatar.png";
import avatarMini from "../assets/images/avatarMini.png";
import {Fade, Zoom} from "react-awesome-reveal";
import Particle from "../commom/components/Particle/Particle";


export const Main = () => {

    const bgMainImg = {
        backgroundImage: `url(${bgImage})`
    }

    const avaMini = {
        backgroundImage: `url(${avatarMini})`
    }

    const avatar = {
        backgroundImage: `url(${avatarImage})`
    }

    return (
        <div id={'Home'} className={style.mainBlock}>
            <Particle/>
            <div style={avaMini} className={style.photoGeneral}></div>
            {/*<div style={avatar} className={style.photo}></div>*/}
            <div className={style.greeting}>
                <Fade cascade direction={'right'} damping={1}>
                    <h1>Igor &thinsp;
                        <Zoom style={{display: 'inline-flex'}} direction={"right"}>
                            <span>Bosin</span>
                        </Zoom>
                    </h1>
                    <p>I am a <span>Frontend Developer</span></p>
                </Fade>
            </div>
            <div style={avatar} className={style.photo}></div>
        </div>
    )
}