import React from 'react';
import {SuperButton} from "./SuperButton/SuperButton";
import {SuperTodolist} from "./SyperTodolist/SuperTodolist";



const Dop04 = () => {

    const tasks = [
        {id:1,title:'HTML&CSS',isDone:true},
        {id:2,title:'JS',isDone:true},
        {id:3,title:'ReactJS',isDone:false}
    ]


    return (
       <div>
           <SuperTodolist tasks={tasks}>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
           </SuperTodolist>

           <SuperTodolist tasks={tasks}>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <div>NEWS</div>
               <SuperButton callBack={()=>{}} color={'red'}>RED SuperButton</SuperButton>
               <SuperButton callBack={()=>{}}>DEFAULT SuperButton</SuperButton>
               <SuperButton callBack={()=>{}} color={'secondary'} disabled>SECONDARY-DISABLED SuperButton</SuperButton>
           </SuperTodolist>

           <SuperTodolist tasks={tasks}>XXX</SuperTodolist>

       </div>
    );
};

export default Dop04;