import React, {useState} from 'react';
import {Todolist01} from "./Todolist01";
import {v1} from "uuid";


export type FilterType = 'All' | 'active' | 'completed'
export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}
const Sunday = () => {

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
    return (
        <div>
            <Todolist01 title={'What to learn?'}
                        tasks={tasksForTodolist}
                        deleteTask={deleteTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
            />
        </div>
    );
};

export default Sunday;