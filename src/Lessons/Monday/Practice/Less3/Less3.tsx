import React, {useState} from 'react';
import {v1} from "uuid";
import {Humans} from "./Humans";

export type FilterBestType = 'all' | 'wonder' | 'the best'




const Less3 = () => {
    const [humans,setHumans] = useState([
            {id:v1(),name:'Akbar',age:25,isDone:true},
            {id:v1(),name:'Trofim',age:20,isDone:false},
            {id:v1(),name:'Marina',age:23,isDone:false},
            {id:v1(),name:'Dima',age:21,isDone:true}
        ]
    )
    function removeHuman(id:string) {
        let filteredHuman = humans.filter(h=>h.id!==id)
        setHumans(filteredHuman)
    }
    const [filter,setFilter] = useState <FilterBestType>('all');
    let humansForTodolist = humans

    if (filter==='wonder'){
        humansForTodolist = humans.filter(h=>h.isDone===true)
    }
    if (filter==='the best'){
        humansForTodolist = humans.filter(h=>h.isDone===false)
    }

    function changeFilter(value: FilterBestType)  {
        setFilter(value);
    }
    return (
        <div>
            <Humans title={'Лучшие'} humans={humansForTodolist} changeFilter={changeFilter} removeHuman={removeHuman}/>
        </div>
    );
};

export default Less3;