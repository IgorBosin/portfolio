import React from 'react';
import style from './Contact.module.css';
import styleContainer from './../commom/styles/Container.module.css'
import buttonStyle from "../commom/styles/Button.module.css";


export const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer} `}>
                <h2 className={style.title}>Say Hello!</h2>
                <form className={style.formContainer}>
                    <input placeholder={'Name'} type="text"/>
                    <input placeholder={'E-mail'} type="email"/>
                    <textarea placeholder={'Your message'} name="text" id=""></textarea>
                </form>
                <button
                    onClick={() => window.location.href = 'https://google.com'}
                    className={`${buttonStyle.btn} ${style.btn}`}>SEND MESSAGE
                </button>
            </div>
        </div>

    );
}


