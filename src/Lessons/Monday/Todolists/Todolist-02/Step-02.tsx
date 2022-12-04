import React, {useState} from 'react';
import Todolist02, {TaskType} from "./Todolist02";

export type FilteredType = 'All' | 'active'| 'completed'

const Step02 = () => {
    const [tasks,setTasks] = useState<TaskType[]>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "RestAPI", isDone: false },
        { id: 5, title: "GraphQL", isDone: false }
    ])

    const [filter,setFilter] = useState<FilteredType>('All')

    const deleteTask = (taskId:number) => {
       const delTask = tasks.filter(task=>task.id!==taskId)
        setTasks(delTask)
    }

    let filteredTask = tasks

    if (filter==='active'){
        filteredTask = tasks.filter(t=>t.isDone===false)
    }
    if (filter==='completed'){
        filteredTask = tasks.filter(t=>t.isDone===true)
    }

    const functionFilter = (value:FilteredType)=>{
        setFilter(value)
    }

    return (
            <div>
                <Todolist02 title="What to learn" tasks={filteredTask} deleteTask={deleteTask} functionFilter={functionFilter} />
            </div>
    );
};

export default Step02;