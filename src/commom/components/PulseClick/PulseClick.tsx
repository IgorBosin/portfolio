import React from 'react';
import style from './PulseClick.module.scss'

const PulseClick = ({className}:{className:string}) => {
    return (
        <div className={className}>
            <span className={style.wave}></span>
            <span className={style.wave}></span>
            <span className={style.wave}></span>
        </div>
    );
};

export default PulseClick;