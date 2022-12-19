import React, {useState} from 'react';
import {Todolist01} from "./Todolist01";
import {v1} from "uuid";


export type FilterType = 'All' | 'active' | 'completed'
export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}
const Monday = () => {

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: false}
    ])

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(el=>el.id!==id))
    }

    const [filter,setFilter] = useState<FilterType>('All')

    let tasksForTodolist = tasks

    if (filter==='active') {
        tasksForTodolist = tasks.filter(el=>el.isDone)
    }
    if (filter==='completed') {
        tasksForTodolist = tasks.filter(el=>!el.isDone)
    }

    const addTask = (title:string) => {
        let newTask = {id:v1(), title:title, isDone:false}
        setTasks([newTask,...tasks])
    }

    const changeFilter = (value:FilterType) => {
        setFilter(value)
    }

    const changeTaskStatus = (id:string,isDone:boolean) =>{
        let task = tasks.find(t=>t.id===id)
        if (task) {
            task.isDone = isDone
            setTasks([...tasks])
        }
    }
    return (
        <div>
            <Todolist01 title={'What to learn?'}
                        tasks={tasksForTodolist}
                        deleteTask={deleteTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeTaskStatus}
            />
        </div>
    );
};

export default Monday;