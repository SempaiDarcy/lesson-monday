import React from 'react';

type TodoPropsType = {
    title:string
    tasks:TodoType[]

}
type TodoType = {
    id:number,
    title:string,
    isDone:boolean
}

const Todolist01 = (props:TodoPropsType) => {

    const affairs = () => {
        props.tasks.map(el=>{
            return <ul key={el.id}>
                <li>
                   <input type={"checkbox"} checked={el.isDone}/><span>{el.title}</span>
                </li>
            </ul>
        })
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <div>{props.tasks.map(el=>{
                return <ul key={el.id}>
                    <li>
                        <input type={"checkbox"} checked={el.isDone}/><span>{el.title}</span>
                    </li>
                </ul>
            })}</div>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

export default Todolist01;