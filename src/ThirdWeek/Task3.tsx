import React, {useState} from 'react';
import Todolist3 from "./Todolist3";
import {v1} from "uuid";

export type FilteredType = 'all' | 'active' | 'completed'

const Task3 = () => {
    const [tasks1,setTasks] =  useState([
        {id:v1(), name:'HTML&CSS', priority:true},
        {id:v1(), name:'JS', priority:false},
        {id:v1(), name:'ReactJS', priority:true},
        {id:v1(), name:'Rest API', priority:false},
        {id:v1(), name:'GraphQL', priority:true}
    ])

    function removeTask(id:string){
        let filteredTasks = tasks1.filter(t=>t.id !== id)
        setTasks(filteredTasks)
    }

    let [filter,setFilter] = useState<FilteredType>("all")

    let tasksForTodolist = tasks1;

    if (filter==='active') {
        tasksForTodolist = tasks1.filter(t => t.priority)
        // tasksForTodolist = tasks1.filter(t => t.priority)
    }
    if (filter==='completed') {
        tasksForTodolist = tasks1.filter(t => !t.priority)
    }

    function changeFilter(value:FilteredType){
        setFilter(value)
    }

    return (
        <div>
            <Todolist3 title={'Что я знаю?'}
                       tasks={tasksForTodolist}
                       delete={removeTask}
                       changeFilter={changeFilter}
            />
        </div>
    );
};

export default Task3;