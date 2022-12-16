import React, {KeyboardEvent,ChangeEvent, useState} from 'react';
import {FilterValuesType, ItemType} from "./Dop06";

type TodoProps = {
    id: string,
    title:string,

    filter:FilterValuesType,
    items: ItemType[]

    addItem:(title:string,todolistId:string)=>void

    changeFilter:(value:FilterValuesType, todolistId:string)=>void
    changeStatus:(isDone:boolean,id:string, todolistID:string)=>void

    removeTask:(todolistID:string,id:string)=>void
}

const Todolist06 = (props:TodoProps) => {
    const [title,setTitle] = useState<string>('')
    const [error,setError] = useState<string>('')

    const addTask = () => {
        let newTitle = title.trim()
        if (newTitle !== ''){
            props.addItem(newTitle,props.id)
            setTitle('')
        }
        else {
            setError('Ошибка')
        }
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler=(e:KeyboardEvent<HTMLInputElement>)=>{
        setError('')
        if (e.key==='Enter'){
            addTask()
        }
    }




     const onAllClickHandler = () => props.changeFilter('all',props.id)
     const onActiveClickHandler = () => props.changeFilter('active',props.id)
     const onCompletedHandler = () => props.changeFilter('completed',props.id)
    return (
        <div>
            <h2>{props.title}</h2>
            <div><input value={title}
                        onChange={onChangeHandler}
                        onKeyDown={onKeyPressHandler}
            />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {
                 props.items.map((el)=>{
                     const onClickHandler=()=>props.removeTask(el.id,props.id)
                     return (<div key={el.id}>
                         <li><input type="checkbox" defaultChecked={el.isDone}/><span>{el.title}</span><button onClick={onClickHandler}>x</button></li>
                     </div>)
                 })
                }
            </ul>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedHandler}>Completed</button>

        </div>
    );
};

export default Todolist06;