import React from 'react';
import {FilteredType} from "./Task3";

type TasksPropsType = {
    title:string
    tasks:TaskType[]
    delete:(id:string)=>void
    changeFilter:(value:FilteredType)=>void
}
type TaskType = {
    id:string,
    name:string,
    priority:boolean
}

const Todolist3 = (props:TasksPropsType) => {
    return (
        <div>
            <h3>{ props.title}</h3>
            <input/>
            <button>+</button>
            <ul>{ props.tasks.map(el => <li key={el.id}>
                <input type="checkbox" checked={el.priority}/>
                {el.name}
                <button onClick={()=>{props.delete(el.id)}}>x</button>
            </li> )}
            </ul>
            <button onClick={()=>{props.changeFilter('all')}}>all</button>
            <button onClick={()=>{props.changeFilter('active')}}>active</button>
            <button onClick={()=>{props.changeFilter('completed')}}>completed</button>
        </div>
    );
};

export default Todolist3;