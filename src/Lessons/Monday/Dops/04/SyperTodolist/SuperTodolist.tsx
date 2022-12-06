import React from 'react';

type TasksType = {
    id:number,
    title:string,
    isDone:boolean
}
type PropsType = {
    tasks:TasksType[]
    children:React.ReactNode
}



export const SuperTodolist:React.FC<PropsType> = (props) => {
    const {tasks,children} = props

    const mappedTasks = tasks.map(t=>{
            return <li key={t.id}><input type="checkbox" checked={t.isDone}/><span>{t.title}</span></li>
        })

    return (
        <div>
            <ul>
                {mappedTasks}
            </ul>
            {children}
            <div>-------------------------------------------------------------------------------</div>
        </div>
    );
};

