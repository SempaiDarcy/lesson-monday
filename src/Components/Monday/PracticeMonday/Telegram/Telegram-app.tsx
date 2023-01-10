import React, {useState} from 'react';
import Telegram, {MessageType} from "./Telegram";
import s from './Telegram.module.css'
import avatar1 from "./img/img_2.png";
import avatar2 from "./img/img_1.png";
import {v1} from "uuid";

const TelegramApp = () => {

    const user = [{id: 'user1', name: 'Akbar', avatar: avatar1}, {id: 'user2', name: 'Victor', avatar: avatar2}]

    const [messages, setMessage] = useState<MessageType[]>([
        {id: v1(), message: 'Hi', userID: 'user2'},
        {id: v1(), message: 'Hi', userID: 'user2'},
        {id: v1(), message: 'Hi', userID: 'user2'},
        {id: v1(), message: 'Hi', userID: 'user2'},
        {id: v1(), message: 'Hello', userID: 'user1'},
        {id: v1(), message: 'Hello', userID: 'user1'},
        {id: v1(), message: 'Hello', userID: 'user1'},
        {id: v1(), message: 'Hello', userID: 'user1'},
    ])

    return (
        <div className={s.Telegram}>
            <ul></ul>
            <ul></ul>
            <ul></ul>
            {user.map((el, i) =><Telegram iteration={i} users={user} messages={messages} setMessage={setMessage} thisUser={el}/>)}
        </div>
    );
};

export default TelegramApp;