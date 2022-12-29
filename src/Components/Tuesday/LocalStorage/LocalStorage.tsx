import React, {useState} from 'react';
import './LocalStorage.css'
// Основные операции localStorage
const LocalStorage = () => {
   const [value,setValue] = useState(0)
    const incHandler = () => {
       setValue(value+1)
    }
    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
    }
    const getFromLocalHandler = () => {
       let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }
    const clearLocalStorageHandler = () => {
       localStorage.clear()
        setValue(0)
    }
    const removeItemFromLocalStorageHandler = () => {
       localStorage.removeItem('counterValue + 1')
    }
    return (
        <div className='App'>
            <h1>{value}</h1>
            <div className='buttons'>
                <button onClick={incHandler}>Inc</button>
                <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
                <button onClick={getFromLocalHandler}>getFromLocalStorage</button>
                <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
                <button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorage</button>
            </div>
        </div>
    );
};

export default LocalStorage;