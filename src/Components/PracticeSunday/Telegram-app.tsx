import React, {useState} from 'react';
import Telegram, {MessageType} from "./Telegram";
import avatar1 from "./img/img_2.png";
import avatar2 from "./img/img_1.png";
import {v1} from "uuid";
import message from "./Message";

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
        <div>
            {user.map(el=><Telegram users={user} messages={messages} setMessage={setMessage} thisUser={el}/>)}
        </div>
    );
};

export default TelegramApp;