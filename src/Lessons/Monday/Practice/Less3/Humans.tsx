import React from 'react';
import {FilterBestType} from "./Less3";

type HumansPropsType = {
    humans:HumanType[]
    title:string
    changeFilter:(value:FilterBestType)=>void
    removeHuman:(id:string)=>void
}
type HumanType = {
    id:string,
    name:string,
    age:number,
    isDone:boolean
}

 export const Humans = (props:HumansPropsType) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <input/>
            <ul>
                {
                    props.humans.map(t => <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.name}</span>
                        <button onClick={ () => { props.removeHuman(t.id) } }>x</button>
                    </li>)
                }
            </ul>
            <button onClick={()=>{props.changeFilter("all")}}>All</button>
            <button onClick={()=>{props.changeFilter("wonder")}}>The Wonder</button>
            <button onClick={()=>{props.changeFilter('the best')}}>The Best</button>
        </div>
    );
};

