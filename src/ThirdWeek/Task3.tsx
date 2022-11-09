import React from 'react';
import Todolist3 from "./Todolist3";

const Task3 = () => {
    const tasks1 = [
        {id:1, name:'HTML&CSS', priority:true},
        {id:2, name:'JS', priority:false},
        {id:3, name:'ReactJS', priority:true},
        {id:4, name:'Rest API', priority:false},
        {id:5, name:'GraphQL', priority:true}
    ]
    return (
        <div>
            <Todolist3 title={'Что я знаю?'} tasks={tasks1}/>
        </div>
    );
};

export default Task3;