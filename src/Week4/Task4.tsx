import Todolist4 from "./Todolist4";
import {v1} from "uuid";


const task = [
    {id:v1(),name:'Пахать',isDone:true},
    {id:v1(),name:'Трудиться',isDone:true},
    {id:v1(),name:'Выебываться',isDone:true},
]

const Task4 = () => {
    return (
        <div>
            <Todolist4 value={'Моя работа'} task={task}/>
        </div>
    );
};

export default Task4;