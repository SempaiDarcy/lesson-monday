import React from 'react';

type TasksPropsType = {
    title:string
    tasks:TaskType[]
    delete:(id:number)=>void
}
type TaskType = {
    id:number,
    name:string,
    priority:boolean
}

const Todolist3 = (props:TasksPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <input/>
            <button>+</button>
            <ul>{props.tasks.map(el => <li key={el.id}>
                <input type="checkbox" checked={el.priority}/>
                {el.name}
                <button onClick={()=>{props.delete(el.id)}}>x</button>
            </li> )}
            </ul>
        </div>
    );
};

export default Todolist3;