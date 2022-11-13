import Todolist4 from "./Todolist4";
import {v1} from "uuid";
import {useState} from "react";

export type FilteredType = 'all' | 'active' | 'completed'

const Task4 = () => {
    const [affairs,setAffairs] = useState([
        {id:v1(), name:'HTML&CSS', isDone:true},
        {id:v1(), name:'JS', isDone:false},
        {id:v1(), name:'ReactJS', isDone:true},
        {id:v1(), name:'Rest API', isDone:false},
        {id:v1(), name:'GraphQL', isDone:true}
    ])

    function removeTask(id:string) {
        let filteredTasks = affairs.filter(t => t.id !== id)
        setAffairs(filteredTasks)
    }
    let [filter,setFilter] = useState<FilteredType>('all')
    function changeFilter(value:FilteredType){
        setFilter(value);
    }
    return (
        <div>
            <Todolist4 value={'Моя работа'} affair={affairs} delete={removeTask} changeFilter={changeFilter}/>
        </div>
    );
};

export default Task4;