import React, {useState} from 'react';
import { v1 } from 'uuid';
import Todolist04 from "./Todolist04";

export type FilterValuesType = "all" | "active" | "completed";

 export function Step04() {

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

    function addTask(title: string) {
        let task = { id: v1(), title: title, isDone: false };
        let newTasks = [task, ...tasks];
        setTasks(newTasks);
    }
    function changeStatus (taskId:string,isDone:boolean)   {
        let task = tasks.find(t=>t.id === taskId);
        // debugger
        if (task) {
            task.isDone = isDone;
            setTasks([...tasks])
        }
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
             <Todolist04 title="What to learn"
                         tasks={tasksForTodolist}
                         removeTask={removeTask}
                         changeFilter={changeFilter}
                         addTask={addTask}
                         changeStatus={changeStatus}/>
         </div>
    );
}

