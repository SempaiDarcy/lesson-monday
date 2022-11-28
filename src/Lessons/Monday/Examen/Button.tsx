import React from 'react';

type ButtonPropsType = {
    buttonName:string,
    button:()=>void
}

const Button = (props:ButtonPropsType) => {
    return (
        <div>
            <button onClick={props.button}>{props.buttonName}</button>
        </div>
    );
};

export default Button;