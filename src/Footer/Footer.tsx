import React from 'react';
import style from './Footer.module.scss';
import styleContainer from './../commom/styles/Container.module.scss'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import {faVk} from "@fortawesome/free-brands-svg-icons/faVk";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Footer = () => {

    const styleIcon = {
        cursor: 'pointer',
        fontSize: '18px',
        margin: '5px',
        color: '#777',
    }

    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer} `}>
                {/*<h2 className={style.footerTitle}>Igor Bosin</h2>*/}
                <div className={style.subscribeContainer}>
                    <a href="https://www.vk.com" target="_blank" rel="author">
                        <FontAwesomeIcon icon={faVk} style={styleIcon}/>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="author">
                        <FontAwesomeIcon icon={faLinkedin} style={styleIcon}/>
                    </a>
                    <a href="https://www.whatsapp.com" target="_blank" rel="author">
                        <FontAwesomeIcon icon={faWhatsapp} style={styleIcon}/>
                    </a>
                </div>
                <p className={style.text}>Ⓒ 2023 All Rights Reserved</p>
            </div>
        </div>

    );
}


