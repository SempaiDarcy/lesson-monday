import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "./Task3";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask:(title:string)=>void
}

export function Todolist3(props: PropsType) {
    let [title,setTitle] = useState('')

    const tasksListItems =  props.tasks.map(t => <li key={t.id}>
        <input type="checkbox" checked={t.isDone}/>
        <span>{t.title}</span>
        <button onClick={ () => {
            props.removeTask(t.id) } }>x</button>
    </li>)

    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }
    const setLocalTitle = (event:ChangeEvent<HTMLInputElement>) => setTitle(event.currentTarget.value)

    const onEnterAddTask =(event:KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTask()
        }
    }

    /*    const setFilterAll = () => props.changeTodoListFilter("all")
    const setFilterActive = () => props.changeTodoListFilter("active")
    const setFilterCompleted = () => props.changeTodoListFilter("completed")*/


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onKeyDown={onEnterAddTask}
                   onChange={setLocalTitle
                   }/>
            <button onClick={()=>{
                addTask()
            }}>+</button>
        </div>
        <ul>
            {
                tasksListItems
            }
        </ul>
        <div>

        </div>
    </div>
}