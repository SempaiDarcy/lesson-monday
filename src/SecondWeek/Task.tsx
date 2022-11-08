import React from 'react';
import Todolist2 from "./Todolist2";
const tasks1 = [
    {id:1, name:'HTML&CSS', priority:false},
    {id:2, name:'JS', priority:false},
    {id:3, name:'ReactJS', priority:true},
    {id:4, name:'Rest API', priority:false},
    {id:5, name:'GraphQL', priority:false}
]
const tasks2 = [
    {id:1, name:'Hello world', priority:true},
    {id:2, name:'I am happy', priority:false},
    {id:3, name:'Yo', priority:false}
]

const Task = ()=>{
    return (
        <div className="App">
            <Todolist2 title={'Что я знаю'} tasks={tasks1}/>
            <Todolist2 title={'Что я говорю'} tasks={tasks2}/>
        </div>
    );
}

export default Task;