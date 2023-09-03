import React from 'react';
import style from './Footer.module.scss';
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import {faVk} from "@fortawesome/free-brands-svg-icons/faVk";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Footer = () => {

    const links = [
        {
            id:1,
            href: "https://www.vk.com",
            icon: faVk,
        },
        {
            id:2,
            href: "https://www.linkedin.com",
            icon: faLinkedin,
        },
        {
            id:3,
            href: "https://www.whatsapp.com",
            icon: faWhatsapp,
        },
    ]

    return (
        <div className={style.footerBlock}>
            {links.map(el => <a key={el.id} href={el.href} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={el.icon} className={style.icon}/> </a>
            )}
            <p className={style.copyright}>Ⓒ 2023 All Rights Reserved</p>
        </div>
    );
}