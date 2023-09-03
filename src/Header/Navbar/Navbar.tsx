import React, {useState} from 'react';
import style from './Navbar.module.scss';
import {NavbarItem} from "./NavbarItem/NavbarItem";

export const Navbar = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const navBar = [
        {
            id:1,
            title: 'Home',
            icon: 'lnr lnr-home'
        },
        {
            id:2,
            title: 'Skills',
            icon: 'lnr lnr-license'
        },
        {
            id:3,
            title: 'Projects',
            icon: 'lnr lnr-briefcase'
        },
        {
            id:4,
            title: 'Contact',
            icon: 'lnr lnr-envelope'
        },
    ]

    return (
        <div className={style.navbar}>
            {navBar.map(el => <NavbarItem key={el.id}
                title={el.title}
                icon={el.icon}
                activeTab={activeTab}
                setActiveTab={setActiveTab}/>)}
        </div>
    );
}


