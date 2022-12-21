import React, {useState} from 'react';
import Column from "./Column";
import './Kanban.css'
//kanban application
//kanban statuses

export type TasksType = {
    id:number,
    title:string,
    status:string,
    priority:number
}
const taskStatuses = ['todo', 'progress', 'review', 'done'];

const initialTasks = [
    {id: 1, title: 'Task 1', status: 'todo', priority: 1},
    {id: 2, title: 'Task 2', status: 'progress', priority: 2},
    {id: 3, title: 'Task 3', status: 'review', priority: 3},
    {id: 4, title: 'Task 4', status: 'done', priority: 4},
    {id: 5, title: 'Task 5', status: 'todo', priority: 5},
]
const Kanban = () => {

    const [tasks, setTasks] = useState(initialTasks)

    return (
        <div>
            <Column tasks={tasks}/>
        </div>
    );
};

export default Kanban;