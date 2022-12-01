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

    function addTask(title:string) {
        let newTask:TaskType = {id:v1(),title, isDone:false}
        let newTasks = [newTask,...tasks]//Создаем новый массив тасок в которой в квадратных скобках создаем новый массив. newTask-начало, ...tasks это все элементы которые сидели в старом массиве Tasks
        setTasks(newTasks)// Закидываем новый массив объекта в setTasks

    }

    let [filter, setFilter] = useState<FilterValuesType>("all");


    const getFilteredTasks = (tasks:TaskType[],filter:FilterValuesType):TaskType[] => {
        // switch (filter) {
        //     case "completed":
        //         return tasks.filter(task=>task.isDone)
        //     case "active":
        //         return tasks.filter(task=>!task.isDone)
        //     default:
        //         return tasks
        // }
        //
        let filteredTasks:TaskType[]=[];
        if (filter==='all'){
            filteredTasks = tasks
        }
        if (filter === "active") {
            filteredTasks = tasks.filter(t => !t.isDone);
        }
        if (filter === "completed") {
            filteredTasks = tasks.filter(t => t.isDone);
        }
        return filteredTasks
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }


    return (
        <div className="App">
            <Todolist3 title="What to learn"
                       tasks={getFilteredTasks(tasks,filter)}
                       removeTask={removeTask}
                       changeFilter={changeFilter}
                       addTask={addTask}

            />
        </div>
    );
}

export default App;