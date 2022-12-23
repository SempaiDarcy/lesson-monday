import React, {useState} from 'react';
type TaskForm = {
    addTask:(title:string, priority:number)=>void
}
const CreateTaskForm = (props:TaskForm) => {
    const [taskStatuses,setTaskStatuses] = useState('')
    const [title,setTitle] = useState('')
    const [priority,setPriority] = useState(1)

    const addTask = () => {
        props.addTask(title,priority)
        setTitle('')
        setPriority(0)
    }


    return (
        <div>
            <div>
                <label htmlFor="title" className={'form-label'}>Title</label>
                <input type="text" className={'form-control'} id={'title'} value={title} onChange={e=>setTitle(e.currentTarget.value)}/>
            </div>

            <div className={'mb-3'}>
                <label htmlFor="priority" className={'form-label'}>Priority</label>
                <input type="number" className={'form-control'} id={'priority'}  value={priority} onChange={e=>setPriority(e.currentTarget.valueAsNumber)}/>
            </div>
            <button className={'btn btn-primary'} onClick={addTask}>Submit</button>
        </div>
    );
};

export default CreateTaskForm;