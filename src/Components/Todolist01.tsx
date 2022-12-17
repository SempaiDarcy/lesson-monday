import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import {FilterType, TaskType} from "./Sunday";


type PropsType = {
    title:string,
    tasks:TaskType[]

    deleteTask:(id:string)=>void

    changeFilter:(value:FilterType)=>void
    addTask:(title:string)=>void
}
export const Todolist01 = (props:PropsType) => {
    let [title, setTitle] = useState('')

    const addTask = () => {
        if (title !== '') {
            props.addTask(title.trim())
            setTitle('')
        }}

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setTitle(e.currentTarget.value)
        }

        const onKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter') {
                    addTask()
                }
            }
    const onAllClickHandler = () => {
        props.changeFilter('All')
    }
    const onActiveClickHandler = () => {
        props.changeFilter('active')
    }
    const onCompletedClickHandler = () => {
        props.changeFilter('completed')
    }

    return (
            <div>
                <h2>{props.title}</h2>
                <input type="text" value={title} onChange={onChangeHandler}
                       onKeyDown={onKeyDownHandler}/>
                <button onClick={addTask}>+</button>

                <ul>
                    {props.tasks.map(el => <li key={el.id}><input type="checkbox"
                                                                  defaultChecked={el.isDone}/><span>{el.title}</span>
                        <button onClick={() => {
                            props.deleteTask(el.id)
                        }
                        }>x
                        </button>
                    </li>)}
                </ul>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        );
    };

