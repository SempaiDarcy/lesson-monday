import React, {useState} from 'react';
import Todolist03 from "./Todolist03";
import {v1} from "uuid";
import {TaskType} from "../../Week/Week3/Todolist3";

export type FilterValuesType = 'all' | 'active' |'completed'

const Step03 = () => {
    let [tasks, setTasks] = useState<TaskType[]>([
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

    function addTask(title:string) {
        let newTask = {id:v1(),title,isDone: false};
        let newTasks = [...tasks,newTask]
        setTasks(newTasks)
    }

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;

    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => !t.isDone);
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    return (
        <div className="App">
            <Todolist03 title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                        addTask={addTask}
            />
        </div>
    );
}

export default Step03;