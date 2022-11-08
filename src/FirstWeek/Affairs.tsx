import React from 'react';
import Todolist from "./Todolist";
const Affair = [
    {id:1, name:'HTML&CSS', priority:false},
    {id:2, name:'JS', priority:false},
    {id:3, name:'ReactJS', priority:true}
]

const Affairs = ()=>{
    return (
        <div className="App">
            <Todolist title={'What to learn'} affairs={Affair}/>
        </div>
    );
}

export default Affairs;