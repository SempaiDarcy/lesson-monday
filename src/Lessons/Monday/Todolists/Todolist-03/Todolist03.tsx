import React, {useState} from 'react';
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

    return (
        <div>
            <h2>{props.title}</h2>
            <input value={title} onChange={(e)=>setTitle(e.currentTarget.value)} onKeyDown={(e)=>{if (e.key==='Enter') {addTask()}}}/>
            <button onClick={()=>addTask()}>+</button>
            {taskListsItems}
            <button onClick={()=>{props.changeFilter('all')}}>all</button>
            <button onClick={()=>{props.changeFilter('active')}}>active</button>
            <button onClick={()=>{props.changeFilter('completed')}}>completed</button>
        </div>
    );
};

export default Todolist03;