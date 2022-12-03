import React from 'react';
import Todolist01 from "./Todolist01";
import classes from "./Step01.module.css";

const Step01 = () => {

    const task1 = [
        {id:1, title: 'HTML&CSS', isDone:false},
        {id:1, title: 'JS', isDone:false},
        {id:1, title: 'ReactJS', isDone:true}
    ]
    const task2 = [
        {id:1, title: 'Angular', isDone:false},
        {id:1, title: 'Vue', isDone:false},
        {id:1, title: 'ReactJS', isDone:true}
    ]
    const task3 = [
        {id:1, title: 'Backend', isDone:true},
        {id:1, title: 'NodeJS', isDone:true},
        {id:1, title: 'ReactJS', isDone:true}
    ]




    return (
        <div className={classes.todolist}>
            <Todolist01 title={'Что я буду учить'} tasks={task1}/>
            <Todolist01 title={'Что я хочу учить ?'} tasks={task2}/>
            <Todolist01 title={'Что мне нравится учить'} tasks={task3}/>
        </div>
    );
};

export default Step01;