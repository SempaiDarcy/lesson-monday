import React, {useState} from 'react';
import './Tuesday.css'
import {TodolistTuesday,TaskType} from "./Todolist-tuesday";
import {v1} from "uuid";

export type FilterValuesType= 'all' | 'active' | 'completed'

type TasksType = { [key: string]: TaskType[] }

type TodolistsType = {
    id:string,
    title:string,
    filter:FilterValuesType
}
const Tuesday = () => {
    let todolistID1 = v1()
    let todolistID2 = v1()

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TasksType>({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},

        ],
        [todolistID2]: [
            {id: v1(), title: 'Rest API', isDone: true},
            {id: v1(), title: 'GraphQL', isDone: false},
        ]
    })

    const removeTodolist = (todolistID:string) => {
        setTodolists(todolists.filter(el=>el.id!==todolistID))
        delete tasks[todolistID]
        console.log(tasks)
    }

    function removeTask(id: string,todolistId:string) {
        let todolistTasks = tasks[todolistId];
        tasks[todolistId] = todolistTasks.filter(el=>el.id!==id)
        setTasks({...tasks});
    }

    function addTask(title: string, todolistId:string) {
        let task = {id: v1(), title: title, isDone: false};
        let todolistTasks = tasks[todolistId];
        tasks[todolistId] = [task,...todolistTasks]
        setTasks({...tasks});
    }

    function changeTaskStatus(taskID:string,isDone:boolean,todolistId:string) {
        setTasks({...tasks,[todolistId]:tasks[todolistId].map(el=>el.id===taskID ? {...el,isDone} :el)})
    }



    function changeFilter(todolistID:string,value: FilterValuesType) {
        setTodolists(todolists.map(el=>el.id===todolistID ? {...el,filter:value} : el))
    }



    return (
        <div className="App">
            {todolists.map(el=>{
                let tasksForTodolist = tasks[el.id];

                if (el.filter === "active") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone);
                }
                if (el.filter === "completed") {
                    tasksForTodolist = tasks[el.id].filter(t => !t.isDone);
                }
                return (
                    <TodolistTuesday
                        key={el.id}
                        todolistID ={el.id}
                        title={el.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeTaskStatus}
                        filter={el.filter}
                        removeTodolist={removeTodolist}
                    />
                )
            })}
        </div>
    );
}

export default Tuesday;