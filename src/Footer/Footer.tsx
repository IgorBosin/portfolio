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

    const links = [
        {
            href: "https://www.vk.com",
            icon: faVk,
        },
        {
            href: "https://www.linkedin.com",
            icon: faLinkedin,
        },
        {
            href: "https://www.whatsapp.com",
            icon: faWhatsapp,
        },
    ]

    return (
        <div className={`${style.footerBlock} bg`}>
            <div className={`${styleContainer.container} ${style.footerContainer} `}>
                <div className={style.subscribeContainer}>
                    {links.map(el => <a href={el.href} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={el.icon} className={style.icon} /> </a>
                    )}
                </div>
                <p className={style.text}>Ⓒ 2023 All Rights Reserved</p>
            </div>
        </div>
    );
}


 // className="svg-inline--fa fa-linkedin
