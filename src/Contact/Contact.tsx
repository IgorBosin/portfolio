import React from 'react';
import style from './Contact.module.scss';
import styleContainer from './../commom/styles/Container.module.scss'
import {Title} from "../commom/components/title/Title";
import Input from "../commom/components/Input/Input";
import ButtonComponent from "../commom/components/Button/ButtonComponent";


export const Contact = () => {
    return (
        <div id={'Contact'} className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer} `}>
                <Title icon={"lnr lnr-envelope"} title={'Contact Me'}/>
                <form className={style.formContainer}>
                    <Input label={'E-mail'} type={"email"} maxRows={2} multiline={false}/>
                    <Input label={'Name'} type={"text"} maxRows={2} multiline={false}/>
                    <Input label={'Your message'} type={"text"} rows={4} maxRows={4} multiline={true}/>
                    <ButtonComponent/>
                </form>
            </div>
        </div>
    );
}


