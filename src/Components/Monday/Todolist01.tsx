import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import {FilterType, TaskType} from "./Monday";
import './Monday.css'

type PropsType = {
    title:string,
    tasks:TaskType[]

    deleteTask:(id:string)=>void

    changeFilter:(value:FilterType)=>void
    addTask:(title:string)=>void

    changeTaskStatus:(id:string,isDone:boolean)=>void
}
export const Todolist01 = (props:PropsType) => {
    let [title, setTitle] = useState('')
    let [error,setError] = useState<string|null>(null)

    const addTask = () => {
        if (title !== '') {
            props.addTask(title.trim())
            setTitle('')
        }
        else {
            setError('Title is required')
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
                <input type="text" value={title}
                       onChange={onChangeHandler}
                       onKeyDown={onKeyDownHandler}
                       className={error ? 'error' : ''}
                />
                <button onClick={addTask}>+</button>
                {error && <div className='error-message'>{error}</div>}

                <ul>
                    {props.tasks.map(el => {
                        const onClickHandler=()=>{props.deleteTask(el.id)}
                        const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
                            let newIsDoneValue = e.currentTarget.checked
                            props.changeTaskStatus(el.id,newIsDoneValue)
                        }
                        return <li key={el.id} className={el.isDone?'is-done':''}><input type="checkbox"
                                                      checked={el.isDone} onChange={onChangeHandler}/><span>{el.title}</span>
                            <button onClick={onClickHandler}>x
                            </button>
                        </li>
                    })}
                </ul>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>
        );
    };

