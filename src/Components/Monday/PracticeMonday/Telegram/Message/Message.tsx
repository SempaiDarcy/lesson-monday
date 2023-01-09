import React from 'react';
import {MessageType, UserType} from "../Telegram";
import s from './Message.module.css'

type PropsMessage = {
    message:MessageType
    user:UserType
    iteration: number
}
const Message = (props:PropsMessage) => {

        return (
                props.iteration !== 0
                ?
                <div className={props.user.name === "Akbar" ? s.message_block : props.user.name === "Victor" ? s.message_revers_block : ''}>
                    <span className={s.text}>{props.message.message}</span><img src={props.user.avatar}/>
                </div>
                :
                <div className={props.user.name === "Akbar" ? s.message_revers_block : props.user.name === "Victor" ? s.message_block : ''}>
                    <span className={s.text}>{props.message.message}</span><img src={props.user.avatar}/>
                </div>
                )
        }

export default Message;