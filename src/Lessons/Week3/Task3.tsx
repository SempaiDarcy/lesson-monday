import React, {useState} from 'react';
import {TaskType, Todolist3} from './Todolist3';
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed";

function App() {


    let [tasks, setTasks] = useState([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Rest API", isDone: false },
        { id: v1(), title: "GraphQL", isDone: false },
    ]);

    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    function addTask() {
        let newTask:TaskType = {id:v1(), title:"New Task", isDone:false}
        let newTasks = [newTask,...tasks]//Создаем новый массив тасок в которой в квадратных скобках создаем новый массив. newTask-начало, ...tasks это все элементы которые сидели в старом массиве Tasks
        setTasks(newTasks)// Закидываем новый массив объекта в setTasks

    }

    let [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }


    return (
        <div className="App">
            <Todolist3 title="What to learn"
                       tasks={tasksForTodolist}
                       removeTask={removeTask}
                       changeFilter={changeFilter}
                       addTask={addTask}

            />
        </div>
    );
}

export default App;