import React from 'react';
import {FilteredType} from "./Step-02";

type TodoPropsType = {
    title:string,
    tasks:TaskType[]
    deleteTask:(taskId:number)=>void
    functionFilter:(value:FilteredType)=>void
}
 export type TaskType = {
    id:number,
    title:string,
    isDone:boolean
}

const Todolist02 = (props:TodoPropsType) => {

    const tasksListItems = props.tasks.map(el=>{
        return <ul key={el.id}>
            <li>
                <input type="checkbox" checked={el.isDone}/><span>{el.title}</span>
                <button onClick={()=>props.deleteTask(el.id)}>x</button>
            </li>
        </ul>
    })

    return (
        <div>
            <h2>{props.title}</h2>
            <input type="text"/>
            <button>+</button>
            {
                tasksListItems
            }
            <button onClick={()=> {
                props.functionFilter('All')
            }}>All</button>
            <button onClick={()=> {
                props.functionFilter('active')
            }}>Active</button>
            <button onClick={()=> {
                props.functionFilter('completed')
            }}>Completed</button>
        </div>
    );
};

export default Todolist02;