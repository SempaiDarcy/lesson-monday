import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./Step-04";

type TodoPropsType = {
    title:string,
    tasks:TaskType[],
    removeTask:(id:string)=>void,
    changeFilter:(value:FilterValuesType)=>void,
    addTask:(title:string)=>void
    changeStatus:(taskId:string,isDone:boolean)=>void
}

type TaskType = {
    id:string,
    title:string,
    isDone:boolean
}


const Todolist04 = (props:TodoPropsType) => {

    const [title,setTitle] = useState('')

    const tasksListItems = props.tasks.map(el=>{
        const onClickHandler =() =>props.removeTask(el.id)
        const onChangeHandler =( e:ChangeEvent<HTMLInputElement>)=> {
            props.changeStatus(el.id,e.currentTarget.checked)
        }
        return (
            <ul key={el.id}>
                <li>
                    <input type="checkbox" checked={el.isDone} onChange={onChangeHandler}/>
                    <span>{el.title}</span>
                    <button onClick={onClickHandler}>x</button>
                </li>
            </ul>
        )
    })



    const addTask = () => {
       if(title.trim()!== '') {
           props.addTask(title)
           setTitle('')}
    }

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
    }

    const onKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key==='Enter') {
            addTask()
        }
    }

    const onClickAllHandler = () =>{props.changeFilter('all')}
    const onClickActiveHandler = () =>{props.changeFilter('active')}
    const onClickCompletedHandler = () =>{props.changeFilter('completed')}

    return (
        <div>
            <h2>{props.title}</h2>
            <input value={title} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
            <button onClick={()=>addTask()}>+</button>
            {tasksListItems}
            <button onClick={onClickAllHandler}>All</button>
            <button onClick={onClickActiveHandler}>Active</button>
            <button onClick={onClickCompletedHandler}>Completed</button>
        </div>
    );
};

export default Todolist04;