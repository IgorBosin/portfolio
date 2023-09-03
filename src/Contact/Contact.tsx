import React from 'react';
import style from './Contact.module.scss';
import {Title} from "../commom/components/title/Title";
import Input from "../commom/components/Input/Input";
import ButtonComponent from "../commom/components/Button/ButtonComponent";
import SendIcon from '@mui/icons-material/Send';


export const Contact = () => {

    const inputs = [
        {
            id: 1,
            label: 'E-mail',
            type: "email",
            maxRows: 2,
            multiline: false,
        },
        {
            id: 2,
            label: 'Name',
            type: "text",
            maxRows: 2,
            multiline: false,
        },
        {
            id: 3,
            label: 'Your message',
            type: "text",
            maxRows: 6,
            multiline: true,
        },
    ]

    return (
        <div id={'Contact'} className={style.contactBlock}>
            <div className={style.contactContainer}>
                <Title icon={"lnr lnr-envelope"} title={'Contact Me'}/>
                <form className={style.formContainer}>
                    {inputs.map(el => <Input key={el.id} label={el.label}
                                             type={el.type}
                                             rows={6}
                                             maxRows={el.maxRows}
                                             multiline={el.multiline}/>)}
                    <ButtonComponent text={'Send message'} icon={<SendIcon/>}/>
                </form>
            </div>
        </div>
    );
}


