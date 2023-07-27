import React from 'react';
import style from './Header.module.scss';
import {Navbar} from "../Navbar/Navbar";

export const Header = () => {
    return (
        <div className={`${style.header} bg`}>
            <Navbar/>
        </div>
    );
}

