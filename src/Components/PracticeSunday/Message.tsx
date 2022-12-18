import React from 'react';
import {MessageType, UserType} from "./Telegram";

type PropsMessage = {
    message:MessageType
    user:UserType
}
const Message = (props:PropsMessage) => {
    return (
        <div>
            <div><span>{props.message.message}</span><img src={props.user.avatar}/></div>
        </div>
    );
};

export default Message;