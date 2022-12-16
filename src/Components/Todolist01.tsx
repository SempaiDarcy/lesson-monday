import React from 'react';
import {FilterType, TaskType} from "./Sunday";


type PropsType = {
    title:string,
    tasks:TaskType[]

    deleteTask:(id:string)=>void

    changeFilter:(value:FilterType)=>void
}
export const Todolist01 = (props:PropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <input type="text"/>
            <button>+</button>

            <ul>
                {props.tasks.map(el=><li key={el.id}><input type="checkbox" defaultChecked={el.isDone}/><span>{el.title}</span>
                    <button onClick={()=>{
                        props.deleteTask(el.id)
                }
                }>x</button></li>)}
            </ul>
            <button onClick={()=>props.changeFilter('All')}>All</button>
            <button onClick={()=>props.changeFilter('active')}>Active</button>
            <button onClick={()=>props.changeFilter("completed")}>Completed</button>
        </div>
    );
};

