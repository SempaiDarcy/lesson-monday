import React, {useState} from 'react';
import {TodolistLearn} from "./TodolistLearn";
import {v1} from "uuid";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = "all" | "active" | "completed";

const Learn = () => {
    console.log(typeof v1())
    const todolistTitle:string = 'What to learn'
    let [tasks, setTasks] = useState([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Rest API", isDone: false },
        { id: v1(), title: "GraphQL", isDone: false },
    ]);

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    const addTask = (title:string) => {
        const newTask: TaskType = {
            id:v1(),
            title:title,
            isDone:false
        }
        const copyTasks = [newTask,...tasks]
        setTasks(copyTasks)
    }

    const [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }

    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function changeTodolistFilter(value: FilterValuesType) {
        setFilter(value);
    }



    return (
        <div>
            <TodolistLearn
                      tasks={tasksForTodolist}
                      title={todolistTitle}
                      removeTask={removeTask}
                      changeTodolistFilter={changeTodolistFilter}
                      addTask={addTask} />
        </div>
    );
}

export default Learn;