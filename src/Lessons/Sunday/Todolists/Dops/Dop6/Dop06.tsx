import React, {useState} from 'react';
import Todolist06 from "./Todolist06";
import {v1} from "uuid";


export type FilterValuesType = 'all' | 'active' | 'completed'

type TodoType = {
    id:string,
    title:string,
    filter:FilterValuesType
}

type ItemsType = {
    [key:string]: ItemType[]
}
export type ItemType = {
    id:string,
    title:string,
    isDone:boolean
}
const Dop06 = () => {

    let todolistId1 = v1()
    let todolistId2 = v1()

    const [todolists,setTodolists] = useState<TodoType[]>([
        {id:todolistId1, title: 'Что находится в квартире', filter:'all'},
        {id:todolistId2,title:'Что я вижу под окном?', filter:'all'}
        ]
    )



    const [items,setItems] = useState<ItemsType>({
        [todolistId1]: [
            {id:v1(),title:'Desktop', isDone: true},
            {id:v1(), title:'Mouse', isDone:true }
        ],
        [todolistId2]: [
            {id:v1(),title:'Car',isDone:true},
            {id:v1(),title:'Bed',isDone: false}
        ]
    })


    const addItem = (title:string,todolistId:string)=> {
        let newItem = {id:v1(), title:title, isDone:false};
        let todolistTasks = items[todolistId];
        items[todolistId] = [newItem,...todolistTasks]
        setItems({...items})
    }
    const removeTask = (todolistId:string,id:string) => {
        setItems({...items,[todolistId]:items[todolistId].filter(el=>el.id!==id?{...items}:items)})
    }

    const changeFilter = (value:FilterValuesType, todolistId:string) => {
        // let todolist = todolists.find(tl=>tl.id === todolistId)
        // if (todolist) {
        //     todolist.filter = value;
        //     setTodolists([...todolists])
        // }
    setTodolists(todolists.map(el=>el.id===todolistId?{...el,filter:value}:el))
    }

    const removeTodolist = () => {
        console.log('Remove Todo')
    }

    const changeTaskStatus = (isDone:boolean,id:string,todolistID:string)=>{
        setItems({...items,[todolistID]:items[todolistID].map(el=>el.id===id?{...el,isDone}:el)})
    }

    return (
        <div>
            {todolists.map(el=>{

                let allTodoListItems = items[el.id]

                if (el.filter==='active'){
                   allTodoListItems = allTodoListItems.filter(el=>el.isDone)
                }
                if (el.filter==='completed'){
                    allTodoListItems = allTodoListItems.filter(el=>!el.isDone)
                }
                console.log(allTodoListItems)
                return <Todolist06
                key={el.id}
                id={el.id}
                title={el.title}
                filter={el.filter}
                items={allTodoListItems}
                addItem={addItem}
                changeFilter={changeFilter}
                changeStatus={changeTaskStatus}
                removeTask={removeTask}

                />
            })}
        </div>
    );
};

export default Dop06;