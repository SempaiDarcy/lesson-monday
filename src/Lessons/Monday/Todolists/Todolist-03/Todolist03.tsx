import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./Step-03";

type TodoPropsType = {
    title: string,
    tasks: TaskType[],
    removeTask: (id: string) => void,
    changeFilter: (value: FilterValuesType) => void
    addTask:(title:string)=>void
}
type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

const Todolist03 = (props: TodoPropsType) => {

    const [title,setTitle] = useState('')
    const taskListsItems = props.tasks.map(el => {
        return (
            <ul key={el.id}>
                <li><input type="checkbox" checked={el.isDone}/>
                    <span>{el.title}</span>
                    <button onClick={()=>props.removeTask(el.id)}>x</button>
                </li>
            </ul>)
    })

    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>)=>{
        if (e.key==='Enter') {addTask()}
    }

    const onCLickAllHandler = ()=> {props.changeFilter('all')}
    const onCLickActiveHandler = ()=> {props.changeFilter('active')}
    const onCLickCompletedHandler = ()=> {props.changeFilter('completed')}

    return (
        <div>
            <h2>{props.title}</h2>
            <input value={title} onChange={onChangeHandler} onKeyDown={onKeyPressHandler}/>
            <button onClick={()=>addTask()}>+</button>
            {taskListsItems}
            <button onClick={onCLickAllHandler}>all</button>
            <button onClick={onCLickActiveHandler}>active</button>
            <button onClick={onCLickCompletedHandler}>completed</button>
        </div>
    );
};

export default Todolist03;