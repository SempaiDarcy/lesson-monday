import React from 'react';
import {FilterValuesType} from "./Step-03";

type TodoPropsType = {
    title:string,
    tasks:TaskType[],
    removeTask:(id:number)=>void,
    changeFilter:(value:FilterValuesType)=>void
}
type TaskType = {
    id:number,
    title:string,
    isDone:boolean
}

const Todolist03 = (props:TodoPropsType) => {

    const taskListsItems = props.tasks.map(el=>el.id)

    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    );
};

export default Todolist03;