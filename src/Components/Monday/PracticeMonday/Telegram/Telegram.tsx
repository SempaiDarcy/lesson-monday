import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import {v1} from "uuid";
import Message from "./Message/Message";

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


    const onClickHandler = () => {
        addMessage(text)
    }

    //Делаем так, чтобы кнопка дизейблилась
    // const isDisabled = ()=> {
    //     if(text.trim()!==''){
    //        return  false
    //     }
    //     else{
    //         return true
    //     }
    // }

    const isDisabled = text.trim()===''//

    const addMessage = (text: string) => {
        let newMessage = {id: v1(), message: text, userID: props.thisUser.id}
        props.setMessage([...props.messages, newMessage])
        setText('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    const onKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key==='Enter') {
            addMessage(text)
        }
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
                <input type="text" value={text} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
                <button disabled={isDisabled} onClick={onClickHandler}>Отправить</button>
            </div>
        </div>
    );
};

export default Telegram;