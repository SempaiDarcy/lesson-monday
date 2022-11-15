import React from 'react';

type HumansPropsType = {
    humans:HumanType[]
    title:string
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
            {props.humans.map(h=>{
                return (
                    <ul key={h.id}>
                        <input type={"checkbox"} checked={h.isDone}/>
                        <span>{h.name}</span>
                    </ul>
                )
            })}
        </div>
    );
};

