import React from 'react';
import './App.css';
import Tuesday from "./Components/Tuesday/Tuesday";
import Monday from "./Components/Monday/Monday";

function App() {
    return (
        <div className="App">
            <Monday/>
            <Tuesday/>
        </div>
    );
}

export default App;
