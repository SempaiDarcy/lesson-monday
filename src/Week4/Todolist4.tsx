import React from 'react';
import {FilteredType} from "./Task4";

type TaskType = {
    id:string,
    name:string,
    isDone:boolean
}

type TaskPropsType = {
    value:string
    affair:TaskType[]
    delete:(id:string)=>void
    changeFilter:(value:FilteredType)=>void
}


const Todolist4 = (props:TaskPropsType) => {
    return (
        <div>
            <div>
                <h3>{props.value}</h3>
                <input/>
                <button>+</button>
            </div>

            <ul>{
                props.affair.map(el=><li key={el.id} >
                    <input type="checkbox" checked={el.isDone}/>
                    {el.name}
                    <button onClick={()=>{props.delete(el.id)}}>x</button>
                </li>)
            }
            </ul>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
            
        </div>
    );
};

export default Todolist4;