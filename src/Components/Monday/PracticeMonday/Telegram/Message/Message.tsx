import React from 'react';
import {MessageType, UserType} from "../Telegram";
import s from './Message.module.css'

type PropsMessage = {
    message:MessageType
    user:UserType
}
const Message = (props:PropsMessage) => {
    return (
        <div>
            <div><span className={s.text}>{props.message.message}</span><img src={props.user.avatar}/></div>
        </div>
    );
};

export default Message;