import React, {useState} from 'react';
import {v1} from "uuid";
import {Humans} from "./Humans";


const humans =[
    {id:v1(),name:'Akbar',age:25,isDone:true},
    {id:v1(),name:'Trofim',age:20,isDone:false},
    {id:v1(),name:'Marina',age:23,isDone:false},
    {id:v1(),name:'Dima',age:21,isDone:true}
]

const Less3 = () => {
    return (
        <div>
            <Humans title={'Лучшие'} humans={humans}/>
        </div>
    );
};

export default Less3;