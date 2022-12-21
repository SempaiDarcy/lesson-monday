import React from 'react';
import {TasksType} from "./Kanban";

type ColumnProps = {
    tasks:TasksType[]
}

const Column = (props:ColumnProps) => {
    return (
        <div className={'column'}>
            {props.tasks.map((task)=> {
                return (
                    <div className={'task'} key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.status}</p>
                        <p>{task.priority}</p>
                    </div>)
            })}
        </div>
    );
};

export default Column;