import React, {ChangeEvent, useState} from 'react';
import {TasksType} from "./Kanban";
type TaskForm = {

}
const CreateTaskForm = (props:TaskForm) => {
    const [title,setTitle] = useState('')



    return (
        <div>
            <div>
                <label htmlFor="title" className={'form-label'}>Title</label>
                <input type="text" className={'form-control'} id={'title'} value={title}/>
            </div>

            <div className={'mb-3'}>
                <label htmlFor="priority" className={'form-label'}>Priority</label>
                <input type="text" className={'form-control'} id={'priority'}/>
            </div>
            <button className={'btn btn-primary'} onClick={()=>{}}>Submit</button>
        </div>
    );
};

export default CreateTaskForm;