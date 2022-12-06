import React from 'react';

type PropsType = {
    callBack:()=>void,
    color:string,
    children?:React.ReactNode
    sizeButton?:string
}

export const SuperButton:React.FC<PropsType> = ({
                                                    callBack,
                                                    color,
                                                    children,
                                                    ...props}) => {
    const callBackHandler = ()=>{
        callBack()
    }
    return (
        <button onClick={callBackHandler}></button>
    );
};

