import React, {ChangeEvent, KeyboardEvent, useRef, useState} from 'react';
import {FilterValuesType, TaskType} from './Learn';


type PropsType = {
    title:string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeTodolistFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

export function TodolistLearn(props: PropsType) {
    let [title, setTitle] = useState("")

    const addTask = () => {
        props.addTask(title);
        setTitle("");
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }


    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeTodolistFilter("all");
    const onActiveClickHandler = () => props.changeTodolistFilter("active");
    const onCompletedClickHandler = () => props.changeTodolistFilter("completed");

    return <div>
        <h2>{props.title}</h2>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)

                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}

