import React, {useState} from 'react';
import style from './Navbar.module.scss';
import {NavbarItem} from "./NavbarItem/NavbarItem";

export const Navbar = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const navBar = [
        {
            title: 'Home',
            icon: 'lnr lnr-home'
        },
        {
            title: 'Skills',
            icon: 'lnr lnr-license'
        },
        {
            title: 'Projects',
            icon: 'lnr lnr-briefcase'
        },
        {
            title: 'Contact',
            icon: 'lnr lnr-envelope'
        },
    ]

    return (
        <div className={style.navbar}>
            {navBar.map(el => <NavbarItem
                title={el.title}
                icon={el.icon}
                activeTab={activeTab}
                setActiveTab={setActiveTab}/>)}
        </div>
    );
}


