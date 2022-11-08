import React from 'react';

type TodolistPropsType = {
    title:string
    affairs:AffairsType[]
}
type AffairsType = {
    id:number,
    name:string,
    priority:boolean
}



const Todolist = (props:TodolistPropsType) => {
    return (
        <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li><input type="checkbox" checked={props.affairs[0].priority}/> <span>{props.affairs[0].name}</span></li>
                    <li><input type="checkbox" checked={props.affairs[1].priority}/> <span>{props.affairs[1].name}</span></li>
                    <li><input type="checkbox" checked={props.affairs[2].priority}/> <span>{props.affairs[2].name}</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
        </div>
    );
};

export default Todolist;