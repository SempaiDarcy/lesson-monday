import React, {useState} from 'react';
import {v1} from 'uuid';
import {Todolist05} from "./Todolist05";

export type FilterValuesType = "all" | "active" | "completed";


type TodolistsType = {
    id:string,
    title:string,
    filter:FilterValuesType
}

function Step05() {

    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]:[
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]:[
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });

    const removeTodolist = (todolistID:string)=> {
        setTodolists(todolists.filter(el=>el.id!==todolistID))
    }

    function removeTask(todolistID:string,taskId: string) {
        setTasks({...tasks,[todolistID]:tasks[todolistID].filter(el=>el.id!==taskId)})
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
    }

    function addTask(todolistID:string,title:string) {
        let newTask = {id: v1(),title:title, isDone:false};
        setTasks({...tasks,[todolistID]: [newTask,...tasks[todolistID]]})
        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(todolistID: string, taskID:string, isDone: boolean) {
        setTasks({...tasks,[todolistID]:[...tasks[todolistID].map(el=>el.id===taskID ? {...el,isDone} :el)]})
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        //
        // setTasks([...tasks]);
    }


    function changeFilter(todolistID:string,value: FilterValuesType) {
        // setFilter(value);
        setTodolists(todolists.map(el=>el.id===todolistID ? {...el,filter:value} :el))

    }


    return (
        <div className="App">
            {todolists.map(el => {
                let tasksForTodolist = tasks[el.id];

                if ( el.filter === "active") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone);
                }
                if ( el.filter === "completed") {
                    tasksForTodolist = tasks[el.id].filter(t => !t.isDone);
                }
                return (
                    <Todolist05
                     key={el.id}
                     todolistID={el.id}
                     title={el.title}
                     tasks={tasksForTodolist}
                     removeTask={removeTask}
                     changeFilter={changeFilter}
                     addTask={addTask}
                     changeTaskStatus={changeStatus}
                     filter={el.filter}
                     removeTodolist={removeTodolist}
                />)
            })}

        </div>
    );
}

export default Step05;
