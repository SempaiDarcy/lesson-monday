import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './Tuesday.css'
import {FilterValuesType, TaskType} from "./Tuesday";

type TodoProps = {
    title:string
    tasks: TaskType[]
    removeTask:(id:string)=>void
    changeFilter:(value:FilterValuesType)=>void
    addTask:(title:string)=>void
    changeTaskStatus:(taskId: string, isDone: boolean)=>void
    filter:FilterValuesType

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

     const onKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>) => {
         if (e.key === 'Enter') {
             addTask()
         }
     }
    const onAllClickFilter=()=>{
        props.changeFilter('all')
    }
     const onActiveClickFilter=()=>{
         props.changeFilter('active')
     }
     const onCompletedClickFilter=()=>{
         props.changeFilter('completed')
     }
    return (
        <div>
            <h2>{props.title}</h2>
            <input type="text"
                   value={title}
                   className={error ? 'error' : ''}
                   onChange={onChangeHandler}
                   onKeyDown={onKeyDownHandler}
            />

            <button onClick={addTask}>+</button>
            {error && <div className={'error-message'}>{error}</div>}

            <ul>{props.tasks.map(task => {
                const onCLickHandler=()=>{props.removeTask(task.id)}

                const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    props.changeTaskStatus(task.id, e.currentTarget.checked);
                }

                return <li key={task.id}>
                    <input type="checkbox" onChange={onChangeHandler} checked={task.isDone}/><span>{task.title}</span><button onClick={onCLickHandler}>x</button>
                </li>
            })
            }</ul>

            <button className={props.filter==='all'? 'onCLick':''} onClick={onAllClickFilter}>All</button>
            <button className={props.filter==='active'? 'onCLick':''} onClick={onActiveClickFilter}>active</button>
            <button className={props.filter==='completed'? 'onCLick':''} onClick={onCompletedClickFilter}>completed</button>
        </div>
    );
};

