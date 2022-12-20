import React, {useState} from 'react';
import {TodolistTuesday} from "./Todolist-tuesday";
import {v1} from "uuid";

type FilterType = 'all' | 'active' | 'completed'

export type TaskType = {
    id:string,
    name:string,
    isDone:boolean
}
const Tuesday = () => {

    const [tasks,setTasks] = useState<TaskType[]>([
        {id:v1(),name:'JS',isDone:true},
        {id:v1(),name:'ReactJS',isDone:false},
        {id:v1(),name:'Angular',isDone:false},
        {id:v1(),name:'Vue',isDone:false},
    ])

    const [filter,setFilter] = useState<FilterType>('all')

    let tasksForTodolist = tasks

    if (filter==='active'){
        tasksForTodolist=tasks.filter(el=>el.isDone)
    }
    if (filter==='completed'){
        tasksForTodolist = tasks.filter(el=>!el.isDone)
    }

    return (
        <div>
           <TodolistTuesday title={'Я джуниор'} tasks={tasksForTodolist}/>
        </div>
    );
};

export default Tuesday;