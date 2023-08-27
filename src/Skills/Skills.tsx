import React from 'react';
import style from './Skills.module.scss';
import styleContainer from './../commom/styles/Container.module.scss'
import {Skill} from "./Skill/Skill";
import {Title} from "../commom/components/title/Title";
import {Fade} from "react-awesome-reveal";

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis, debitis deserunt ducimus error' +
    ' esse eveniet illum, inventore iusto magni, necessitatibus perspiciatis rerum veniam voluptas voluptatum. Libero,' +
    ' perspiciatis quas. Animi.'

export const Skills = () => {

    const skills = [
        {
            icon: 'lnr lnr-earth',
            title: 'JS',
        },
        {
            icon: 'lnr lnr-text-size',
            title: 'CSS',
        },
        {
            icon: 'lnr lnr-diamond',
            title: 'React',
        },
    ]

    return (
        <div id={'Skills'} className={`${style.skillsBlock} bg`}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title icon={'lnr lnr-license'} title={'Skills'}/>
                <div className={style.skills}>
                    <Fade cascade damping={0.5} direction={'right'}>
                        {skills.map(el => <Skill title={el.title} description={lorem} icon={el.icon}/>)}
                    </Fade>
                </div>
            </div>
        </div>
    );
}

