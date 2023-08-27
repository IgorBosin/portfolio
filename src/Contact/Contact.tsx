import React from 'react';
import style from './Contact.module.scss';
import styleContainer from './../commom/styles/Container.module.scss'
import {Title} from "../commom/components/title/Title";
import Input from "../commom/components/Input/Input";
import ButtonComponent from "../commom/components/Button/ButtonComponent";


export const Contact = () => {

    const inputs = [
        {
            label: 'E-mail',
            type: "email",
            maxRows: 2,
            multiline: false,
        },
        {
            label: 'Name',
            type: "text",
            maxRows: 2,
            multiline: false,
        },
        {
            label: 'Your message',
            type: "text",
            maxRows: 4,
            multiline: true,
        },
    ]

    return (
        <div id={'Contact'} className={`${style.contactBlock} bg`}>
            <div className={`${styleContainer.container} ${style.contactContainer} `}>
                <Title icon={"lnr lnr-envelope"} title={'Contact Me'}/>
                <form className={style.formContainer}>
                    {inputs.map(el => <Input label={el.label}
                                             type={el.type}
                                             maxRows={el.maxRows}
                                             multiline={el.multiline}/>)}
                    <ButtonComponent/>
                </form>
            </div>
        </div>
    );
}


