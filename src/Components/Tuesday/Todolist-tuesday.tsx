import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './Tuesday.css'
import {FilterValuesType} from "./Tuesday";

export type TaskType = {
    id:string
    title:string
    isDone:boolean
}
type TodoProps = {
    todolistID:string
    title:string
    tasks: TaskType[]
    removeTask:(id:string, todolistId:string)=>void
    changeFilter:(todolistID:string,value:FilterValuesType)=>void
    addTask:(title:string , todolistId:string)=>void
    changeTaskStatus:(id:string,isDone:boolean,todolistId:string)=>void
    filter:FilterValuesType
    removeTodolist:(todolistID:string)=>void

}
 export const TodolistTuesday = (props:TodoProps) => {

    const [title,setTitle]=useState('')
     const [error,setError] = useState<string|null>(null)

     const deleteTodolist = () => {
        props.removeTodolist(props.todolistID)
     }

    const addTask = () => {
        if (title.trim() !==''){
            props.addTask(props.todolistID,title.trim())
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
        props.changeFilter(props.todolistID,'all')
    }
     const onActiveClickFilter=()=>{
         props.changeFilter(props.todolistID,'active')
     }
     const onCompletedClickFilter=()=>{
         props.changeFilter(props.todolistID,'completed')
     }
    return (
        <div>
            <h3>{props.title}<button onClick={deleteTodolist}>X</button></h3>
            <input type="text"
                   value={title}
                   className={error ? 'error' : ''}
                   onChange={onChangeHandler}
                   onKeyDown={onKeyDownHandler}
            />

            <button onClick={addTask}>+</button>
            {error && <div className={'error-message'}>{error}</div>}

            <ul>{props.tasks.map(task => {
                const onCLickHandler=()=>{props.removeTask(task.id,props.todolistID)}

                const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    props.changeTaskStatus(task.id, e.currentTarget.checked,props.todolistID);
                }

                return <li key={task.id} className={task.isDone ? 'is-done':''}>
                    <input type="checkbox" onChange={onChangeHandler} checked={task.isDone}/><span>{task.title}</span><button onClick={onCLickHandler}>x</button>
                </li>
            })
            }</ul>

            <button className={props.filter==='all'? 'active-filter':''} onClick={onAllClickFilter}>All</button>
            <button className={props.filter==='active'? 'active-filter':''} onClick={onActiveClickFilter}>active</button>
            <button className={props.filter==='completed'? 'active-filter':''} onClick={onCompletedClickFilter}>completed</button>
        </div>
    );
};

