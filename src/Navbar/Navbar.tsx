import React from 'react';
import style from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={style.navbar}>
            <a href="">HOME</a>
            <a href="">SKILLS</a>
            <a href="">PROJECTS</a>
            <a href="">CONTACT</a>
        </div>
    );
}

