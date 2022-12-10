import React from 'react';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


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

function AppTitle() {
    return <div>This is App component</div>
}

export default Components;