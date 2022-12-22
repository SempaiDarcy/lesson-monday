import React from 'react';
import './Chess.css'
import BoardComponent from "./components/BoardComponent";
const Chess = () => {
    return (
        <div className='app'>
            <BoardComponent/>
        </div>
    );
};

export default Chess;