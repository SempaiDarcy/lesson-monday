import React from 'react';

type TaskType = {
    id:string,
    name:string,
    isDone:boolean
}

type TaskPropsType = {
    value:string
    task:TaskType[]
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
                props.task.map(el=><li key={el.id} >
                    <input type="checkbox" checked={el.isDone}/>
                    {el.name}
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