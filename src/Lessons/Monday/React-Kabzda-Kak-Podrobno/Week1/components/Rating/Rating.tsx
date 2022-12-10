import React from "react";



 export const Rating = ()=>{
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={true}/>
            <Star selected={false}/>

        </div>
    )
}
const Star = (props: any) =>{
    return <span> <b>star</b> </span>
}