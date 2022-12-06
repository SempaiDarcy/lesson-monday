import React from 'react';
import s from './SuperButton.module.css'


type PropsType = {
    callBack:()=>void,
    color?:string,
    children?:React.ReactNode
    sizeButton?:string
    disabled?:boolean
}

export const SuperButton:React.FC<PropsType> = (props) => {
    const {callBack, color, children,disabled,...otherProps}=props
    const callBackHandler = ()=>{
        callBack()
    }

    // const finalClassName = `${s.button} ${s.default}`

    // const finalClassName =`${s.button} ${color==='red'? s.red : s.default} ${s.default}`

    // const  finalClassName = `${s.button} ${color==='red'? s.red : color==='secondary'? s.secondary: s.default}`
    const finalClassName = `
    ${s.button} 
    ${color==='red'? s.red : color==='secondary'? s.secondary: s.default}
    ${disabled? s.disabled:''}
    
    `

    return (
        <button className={finalClassName} onClick={callBackHandler}>{
            children
        }</button>
    );
};

//----------------------------------------------------------
// import React from 'react';
//
// type PropsType = {
//     callBack:()=>void,
//     color:string,
//     children?:React.ReactNode
//     sizeButton?:string
// }
//
// export const SuperButton:React.FC<PropsType> = ({
//                                                     callBack,
//                                                     color,
//                                                     children,
//                                                     ...props}) => {
//     const callBackHandler = ()=>{
//         callBack()
//     }
//     return (
//         <button onClick={callBackHandler}>{
//             children
//         }</button>
//     );
// };