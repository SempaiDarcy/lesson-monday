import React, {ChangeEvent} from 'react';
import './Tuesday.css'
import {FilterValuesType} from "./Tuesday";
import {Input} from "./components/Input";
import {EditableSpan} from "./components/EditableSpan";

export type TaskType = {
    id:string
    title:string
    isDone:boolean
}
type TodoProps = {
    id:string
    title:string
    tasks: TaskType[]
    removeTask:(id:string, todolistId:string)=>void
    changeFilter:(todolistID:string,value:FilterValuesType)=>void
    addTask:(title:string , todolistId:string)=>void
    changeTaskStatus:(id:string,isDone:boolean,todolistId:string)=>void
    filter:FilterValuesType
    removeTodolist:(todolistID:string)=>void
    updateTask:(todolistID:string, taskId:string, newTitle:string)=>void
    updateTodolist:(todolistId:string,newTitle:string)=>void

}
 export const TodolistTuesday = (props:TodoProps) => {
     const deleteTodolist = () => {
        props.removeTodolist(props.id)
     }


    const onAllClickFilter=()=>{
        props.changeFilter(props.id,'all')
    }
     const onActiveClickFilter=()=>{
         props.changeFilter(props.id,'active')
     }
     const onCompletedClickFilter=()=>{
         props.changeFilter(props.id,'completed')
     }
     const addTaskHandler = (newTitle:string) => {
         props.addTask(props.id,newTitle)
     }
    const updateTodoHandler = (newTitle:string) => {
            props.updateTodolist(props.id,newTitle)
    }
    return (
        <div>
            <h3>
                <EditableSpan title={props.title} callBack={updateTodoHandler}/>
                <button onClick={deleteTodolist}>X</button>
            </h3>
            <div>
                <Input callBack={addTaskHandler} />
            </div>

            <ul>
                {props.tasks.map(task => {
                const onCLickHandler=()=>{props.removeTask(task.id,props.id)}

                const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    props.changeTaskStatus(task.id, e.currentTarget.checked,props.id);
                }

                const updateTaskHandler = (newTitle:string) => {
                    props.updateTask(props.id,task.id,newTitle)
                }

                return <li key={task.id} className={task.isDone ? 'is-done':''}>
                    <input type="checkbox" onChange={onChangeHandler} checked={task.isDone}/>
                    <EditableSpan title={task.title} callBack={updateTaskHandler}/>
                    <button onClick={onCLickHandler}>x</button>
                </li>
            })
            }</ul>

            <button className={props.filter==='all'? 'active-filter':''} onClick={onAllClickFilter}>All</button>
            <button className={props.filter==='active'? 'active-filter':''} onClick={onActiveClickFilter}>active</button>
            <button className={props.filter==='completed'? 'active-filter':''} onClick={onCompletedClickFilter}>completed</button>
        </div>
    );
};

