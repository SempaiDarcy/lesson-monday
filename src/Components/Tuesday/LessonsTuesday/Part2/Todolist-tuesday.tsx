import React, {ChangeEvent} from 'react';
import './Tuesday.css'
import {FilterValuesType} from "./Tuesday";
import {AddItemForm} from "./components/AddItemForm";
import {EditableSpan} from "./components/EditableSpan";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from "@mui/material/Checkbox";


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
                {/*<Button onClick={deleteTodolist} variant="contained">X</Button>*/}
                <IconButton aria-label='delete' onClick={deleteTodolist}>
                    <DeleteIcon/>
                </IconButton>
            </h3>
            <div>
                <AddItemForm callBack={addTaskHandler} />
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
                    {/*<input type="checkbox" onChange={onChangeHandler} checked={task.isDone}/>*/}
                    <Checkbox defaultChecked onChange={onChangeHandler} checked={task.isDone}/>
                    <EditableSpan title={task.title} callBack={updateTaskHandler}/>
                    {/*<button onClick={onCLickHandler}>x</button>*/}
                    <IconButton aria-label='delete' onClick={onCLickHandler}>
                        <DeleteIcon/>
                    </IconButton>
                </li>
            })
            }</ul>

            <div>
                <Button variant={props.filter==='all'?'outlined':'contained'}
                        onClick={onAllClickFilter} color='success'>All</Button>

                <Button variant={props.filter==='active'?'outlined':'contained'}
                        onClick={onActiveClickFilter} color='error'>Active</Button>

                <Button variant={props.filter==='completed'?'outlined':'contained'}
                        onClick={onCompletedClickFilter} color='secondary'>Completed</Button>

            </div>
        </div>
    );
};

