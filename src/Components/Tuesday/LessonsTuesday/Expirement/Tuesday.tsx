import React, {useState} from 'react';
import TodolistTuesday from "./TodolistTuesday";
import './Tuesday.css'
import {v1} from "uuid";

type FilterType = 'all' | 'active' | 'completed'

 export type TodolistType = {
    id:string,
    title:string,
    filter:FilterType
}
const Tuesday = () => {
    let todolistId1=v1()
    let todolistId2=v1()
    const [todolists,setTodolists] = useState<TodolistType[]>([
        {id:v1(), title:'What to learn',filter:'all'},
        {id:v1(), title:'What to buy',filter:'all'}
    ])
    return (
        <div className='App'>
            {todolists.map(el=>{
                return (
                    <TodolistTuesday title={el.title}/>
                )
            })}
        </div>
    );
};

export default Tuesday;