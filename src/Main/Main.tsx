import React from 'react';
import style from './Main.module.scss'
import avatarImage from "../assets/images/avatar.png";
import avatarMini from "../assets/images/avatarMini.png";
import {Fade, Zoom} from "react-awesome-reveal";
import Particle from "../commom/components/Particle/Particle";
import ReactTyped from "react-typed";


export const Main = () => {

    const images = {
        avaMini: {backgroundImage: `url(${avatarMini})`},
        avatar: {backgroundImage: `url(${avatarImage})`}
    }

    return (
        <div id={'Home'} className={style.mainBlock}>
            <Particle/>
            <div style={images.avaMini} className={style.photoGeneral}></div>
            <div className={style.greeting}>
                <Fade cascade direction={'right'} damping={1}>
                    <h1>Igor &thinsp;
                        <Zoom style={{display: 'inline-flex'}} delay={500}>
                            <span>Bosin</span>
                        </Zoom>
                    </h1>
                    <p>I am a &thinsp;
                        <span>
                            <ReactTyped strings={["^2000Frontend Developer"]}
                                        typeSpeed={100}
                                        showCursor={false}/>
                        </span>
                    </p>
                </Fade>
            </div>
            <div style={images.avatar} className={style.photo}></div>
        </div>
    )
}