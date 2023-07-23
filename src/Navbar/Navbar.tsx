import React from 'react';
import style from './Navbar.module.scss';
import {NavbarItem} from "./NavbarItem/NavbarItem";

export const Navbar = () => {
    return (
        <div className={style.navbar}>
            <NavbarItem title={'Home'} icon={'lnr lnr-home'}/>
            <NavbarItem title={'Skills'} icon={'lnr lnr-license'}/>
            <NavbarItem title={'Projects'} icon={'lnr lnr-briefcase'}/>
            <NavbarItem title={'Contact'} icon={'lnr lnr-envelope'}/>
        </div>
    );
}


