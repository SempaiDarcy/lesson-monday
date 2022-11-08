import React from 'react';
import './App.css';
import Todolist from "./FirstWeek/Todolist";
 const Affairs = [
    {id:1, name:'HTML&CSS', priority:false},
    {id:2, name:'JS', priority:false},
    {id:3, name:'ReactJS', priority:true}
]

function App() {
    return (
        <div className="App">
           <Todolist title={'What to learn'} affairs={Affairs}/>
        </div>
    );
}

export default App;
