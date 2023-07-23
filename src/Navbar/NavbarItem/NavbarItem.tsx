import React from 'react';
import style from './NavbarItem.module.scss';

type NavbarItemType = {
    title: string
    icon: string
}

export const NavbarItem = (props: NavbarItemType) => {

    const onClickHandler = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <div className={style.link} onClick={() => onClickHandler(props.title)}>
            <p>{props.title}</p>
            <i className={props.icon}></i>
        </div>
    );
}

