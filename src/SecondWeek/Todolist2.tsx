import React from 'react';
type TaskTypeProps = {
    title:string
    tasks:TaskType[];
}
type TaskType = {
    id:number,
    name:string,
    priority:boolean
}
const Todolist2 = (props:TaskTypeProps) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <ol>
                {props.tasks.map((el,index)=>{
                    return (
                        <li key={index}>{el.name} <input type={"checkbox"} checked={el.priority}/></li>
                    )
                })}
            </ol>
        </div>
    );
};

export default Todolist2;