import React, {useState} from 'react';
import {v1} from 'uuid';
import {TaskType, Todolist05} from "./Todolist05";
import styled from "styled-components";

export type FilterValuesType = "all" | "active" | "completed";

export type TodolistType = {
    id: string,
    title: string
}
type DataType = {
    data: TaskType[]
    filter: FilterValuesType

}

type TasksStateType = {
    [key: string]: DataType
}


function Dop5() {

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn"},
        {id: todolistId2, title: "What to buy"}
    ])

    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistId1]: {
            data: [
                {id: v1(), title: "HTML&CSS1111", isDone: true},
                {id: v1(), title: "JS1111", isDone: true}
            ],
            filter: "all"
        },
        [todolistId2]: {
            data: [
                {id: v1(), title: "HTML&CSS22222", isDone: true},
                {id: v1(), title: "JS2222", isDone: true}
            ],
            filter: "all"
        }
    });


    function removeTask(todolistID: string, taskID: string) {
        setTasks({
            ...tasks,
            [todolistID]: {...tasks[todolistID], data: tasks[todolistID].data.filter(el => el.id !== taskID)}
        })

    }

    function addTask( todolistID: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({
            ...tasks,[todolistID]:{...tasks[todolistID],data:[newTask,...tasks[todolistID].data]}
        })

    }

    function changeStatus( todolistID: string, taskId: string, isDone: boolean) {
        setTasks({
            ...tasks,
            [todolistID]:{...tasks[todolistID],data:tasks[todolistID].data.map(el=>el.id===taskId ? {...el,isDone} :el)}
        })
    }


    // let tasksForTodolist = tasks;
    //
    // if (filter === "active") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === false);
    // }
    // if (filter === "completed") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === true);
    // }

    function changeFilter(todolistID:string,value: FilterValuesType) {
        setTasks({
            ...tasks,[todolistID]: {...tasks[todolistID],filter:value}
        })
    }


    return (
        <div className="App">
            {todolists.map(el => {
                let tasksForTodolist = tasks[el.id].data;

                if (tasks[el.id].filter === "active") {
                    tasksForTodolist = tasks[el.id].data.filter(t => t.isDone === false);
                }
                if (tasks[el.id].filter === "completed") {
                    tasksForTodolist = tasks[el.id].data.filter(t => t.isDone === true);
                }

                return (
                    <div>
                        <Wrapper>Hello</Wrapper>
                        <Wrapper>By</Wrapper>
                        <Todolist05
                            key={el.id}
                            todolistID={el.id}
                            title={el.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={tasks[el.id].filter}
                        /></div>
                )
            })}

        </div>
    );
}

const Wrapper = styled.a` color: red;

`
export default Dop5;

