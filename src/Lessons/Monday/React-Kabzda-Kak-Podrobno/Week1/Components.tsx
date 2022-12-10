import React from 'react';
import {Accordion} from "./components/Accordion/Accordion";


function hello () {
    debugger
}
hello()
const Components = () => {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
};
const Rating = ()=>{
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>

        </div>
    )
}

const Star = ()=>{
    return (
        <div>
            <div>star</div>
        </div>
    )
}
function AppTitle() {
    return <div>This is App component</div>
}

export default Components;