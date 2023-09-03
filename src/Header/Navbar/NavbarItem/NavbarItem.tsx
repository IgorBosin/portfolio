import React from 'react';
import style from './NavbarItem.module.scss';
import {Link} from "react-scroll";


type NavbarItemType = {
    title: string
    icon: string
    activeTab: string
    setActiveTab: (title: string) => void
}

export const NavbarItem = (props: NavbarItemType) => {

    // const onClickHandler = (id: string) => {
    //     const element = document.getElementById(id)
    //     if (element) {
    //         element.scrollIntoView({behavior: 'smooth'})
    //     }
    //     props.setActiveTab(props.title)
    // }

//     return (
//         <div className={`${style.link} ${props.activeTab === props.title ? style.active : ''}`}
//              onClick={() => onClickHandler(props.title)}>
//             <p>{props.title}</p>
//             <i className={props.icon}></i>
//         </div>
//     );
    return (
        <Link activeClass={style.active}
              className={style.link}
              to={props.title}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
        >
            <p>{props.title}</p>
            <i className={props.icon}></i>
        </Link>
    )
}

