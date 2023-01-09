import React from 'react';

type TodoPropsType = {
    title:string
}
const TodolistTuesday = (props:TodoPropsType) => {
    return (
        <div>
            <span>{props.title}</span>
            <div>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </div>
        </div>
    );
};

export default TodolistTuesday;