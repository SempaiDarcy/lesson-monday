import React, {useState} from 'react';
import {TodolistTuesday} from "./Todolist-tuesday";
import {v1} from "uuid";

export type FilterType = 'all' | 'active' | 'completed'

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

    const addTask=(name:string)=> {
        let newTask = {id:v1(),name,isDone:false}
        setTasks([...tasks,newTask])
    }

    const deleteTask=(id:string)=>{
        setTasks(tasks.filter(el=>el.id!==id))
    }

    let tasksForTodolist = tasks

    if (filter==='active'){
        tasksForTodolist=tasks.filter(el=>el.isDone)
    }
    if (filter==='completed'){
        tasksForTodolist = tasks.filter(el=>!el.isDone)
    }

    const onChangeFilter = (value:FilterType) => {
        setFilter(value)
    }

    return (
        <div>
           <TodolistTuesday title={'Я джуниор'}
                            tasks={tasksForTodolist}
                            onChangeFilter={onChangeFilter}
                            addTask={addTask}
                            deleteTask={deleteTask}

           />
        </div>
    );
};

export default Tuesday;