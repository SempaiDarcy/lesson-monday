import React, {ChangeEvent} from 'react';
import {TasksType} from "./Kanban";

type ColumnProps = {
    tasks: TasksType[]
    status: string

    statuses: string[]
    onStatusChange:(id:number,newStatus:string)=>void
}

const Column = (props: ColumnProps) => {
    return (
        <div className={'col'}>
            <h3>{props.status}</h3>
            {props.tasks.filter((task) => task.status === props.status)
            .sort((a, b)=>b.priority-a.priority).map((task) => {
                return (
                    <div className={'card mb-3'} key={task.id}>
                        <div className={'card-body'}>
                            <h5 className={'card-title'}>{task.title}</h5>
                            <p>{task.status}</p>
                            <p>{task.priority}</p>

                            <select className="form-select" aria-label="Default select example"
                                    defaultValue={props.status} onChange={(e)=>props.onStatusChange(task.id, e.target.value)}>
                                {props.statuses.map((status) => (
                                    <option key={status} value={status}>{status}</option>
                                ))}
                            </select>
                        </div>
                    </div>)
            })}
        </div>
    );
};

export default Column;