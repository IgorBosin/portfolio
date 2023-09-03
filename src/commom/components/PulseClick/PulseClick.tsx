import React from 'react';
import style from './PulseClick.module.scss'

const PulseClick = () => {
    return (
        <div className={style.waveContainer}>
            <span className={style.wave}></span>
            <span className={style.wave}></span>
            <span className={style.wave}></span>
        </div>
    );
};

export default PulseClick;