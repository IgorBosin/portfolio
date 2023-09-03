import React from 'react';
import style from './Footer.module.scss';
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import {faVk} from "@fortawesome/free-brands-svg-icons/faVk";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Footer = () => {

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
            {links.map(el => <a href={el.href} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={el.icon} className={style.icon}/> </a>
            )}
            <p className={style.text}>Ⓒ 2023 All Rights Reserved</p>
        </div>
    );
}