import React from 'react';
import style from './Footer.module.css';
import styleContainer from './../commom/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer} `}>
                <h2 className={style.title}>Igor Bosin</h2>
                <div className={style.subscribeContainer}>
                    <a href="">Linkedin</a>
                    <a href="">VK</a>
                    <a href="">Telegram</a>
                    <a href="">WhatsApp</a>
                </div>
                <span className={style.text}>Ⓒ 2023 All Rights Reserved</span>
            </div>
        </div>

    );
}


