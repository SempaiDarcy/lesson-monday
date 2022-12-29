import React, {useEffect, useState} from 'react';
import '../LocalStorage.css'
const LocalStorageUseEffect = () => {
    const [value, setValue] = useState(0)

    useEffect(()=>{
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('counterValue', JSON.stringify(value))
    },[value])
    const incHandler = () => {
        setValue(value + 1)
    }



    return (
        <div className='App'>
            <h1>{value}</h1>
            <div className='buttons'>
                <button onClick={incHandler}>Inc</button>
            </div>
        </div>
    );
}
export default LocalStorageUseEffect;