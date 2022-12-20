import React, {ChangeEvent, useState} from 'react';
import './Tuesday.css'
import {FilterType, TaskType} from "./Tuesday";

type TodoProps = {
    title:string
    tasks: TaskType[]
    onChangeFilter:(value:FilterType)=>void
    addTask:(name:string)=>void
    deleteTask:(id:string)=>void
}
 export const TodolistTuesday = (props:TodoProps) => {

    const [title,setTitle]=useState('')
     const [error,setError] = useState<string|null>(null)

    const addTask = () =>{
        if (title!==''){
            props.addTask(title.trim())
            setTitle('')
        }
        else{
            setError('Введите текст')
        }
    }
     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
         setError(null)
         setTitle(e.currentTarget.value)
     }

    const onAllClickFilter=()=>{
        props.onChangeFilter('all')
    }
     const onActiveClickFilter=()=>{
         props.onChangeFilter('active')
     }
     const onCompletedClickFilter=()=>{
         props.onChangeFilter('completed')
     }
    return (
        <div>
            <h2>{props.title}</h2>
            <input type="text"
                   value={title}
                   className={error ? 'error' : ''}
                   onChange={onChangeHandler}
            />

            <button onClick={addTask}>+</button>
            {error && <div className={'error-message'}>{error}</div>}

            <ul>{props.tasks.map(task => {
                const onCLickHandler=()=>{props.deleteTask(task.id)}

                return <li key={task.id}>
                    <input type="checkbox" defaultChecked={task.isDone}/><span>{task.name}</span><button onClick={onCLickHandler}>x</button>
                </li>
            })
            }</ul>

            <button onClick={onAllClickFilter}>All</button>
            <button onClick={onActiveClickFilter}>active</button>
            <button onClick={onCompletedClickFilter}>completed</button>
        </div>
    );
};

