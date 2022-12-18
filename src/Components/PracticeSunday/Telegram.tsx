import React, {ChangeEvent, useState} from 'react';
import {v1} from "uuid";
import './Telegram.css'

import Message from "./Message";

export type UserType = {
    id: string,
    name: string,
    avatar: string
}

export type MessageType = {
    id: string,
    message: string,
    userID: string
}

type TelegramProps = {
    users:UserType[]
    messages:MessageType[]
    thisUser:UserType
    setMessage:(messages:MessageType[])=>void
}
const Telegram = (props:TelegramProps) => {

    const [text, setText] = useState('')
    const addMessage = (text: string) => {
        let newMessage = {id: v1(), message: text, userID: 'user1'}
        props.setMessage([...props.messages, newMessage])
        setText('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    return (
        <div className={'Telegram'}>
            <div>{props.messages.map(el => {
                const thisUser = props.users.filter(elem => elem.id === el.userID)[0]

                return <Message
                    message={el}
                    user={thisUser}
                />
            })}
                <input type="text" value={text} onChange={onChangeHandler}/>
                <button onClick={() => addMessage(text)}>Отправить</button>
            </div>
        </div>
    );
};

export default Telegram;