import React, {useState} from 'react';
import {FilteredType} from "./Task3";

type TasksPropsType = {
    title:string
    tasks:TaskType[]
    delete:(id:string)=>void
    changeFilter:(value:FilteredType)=>void
    addTask:(title:string)=>void
}
type TaskType = {
    id:string,
    name:string,
    priority:boolean
}

const Todolist3 = (props:TasksPropsType) => {
    const [newTaskTitle,setNewTaskTitle] = useState('')
    return (
        <div>
            <h3>{ props.title}</h3>
            <input value={newTaskTitle} onChange={(e)=>{
                setNewTaskTitle(e.currentTarget.value)}}
                onKeyDown={(e)=>{
                    if ( e.key === 'Enter') {
                        props.addTask(newTaskTitle);
                        setNewTaskTitle('');
                    }
                }}
            />

            <button onClick={()=>{
                props.addTask(newTaskTitle);
                setNewTaskTitle('')
            }}>+</button>

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