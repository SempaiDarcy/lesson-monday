import React from 'react';
import {TaskType} from "./Tuesday";

type TodoProps = {
    title:string
    tasks: TaskType[]
}
 export const TodolistTuesday = (props:TodoProps) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <input type="text"/><button>+</button>
            {props.tasks.map(task=>{
                return <li key={task.id}><input type="checkbox" defaultChecked={task.isDone}/><span>{task.name}</span></li>
            })}
            <button>All</button>
            <button>active</button>
            <button>completed</button>
        </div>
    );
};

