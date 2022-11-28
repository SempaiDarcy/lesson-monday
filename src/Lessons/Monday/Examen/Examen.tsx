import React, {useState} from 'react';

const Examen = () => {

    let [number,setNumber] = useState(0)

    const Plus = ()=>{
        setNumber(number+1)
    }
    const Minus = ()=>{
        return number===0? setNumber(0):setNumber(number-1)
    }
    const Reload = ()=>{
        setNumber(0)
    }

    return (
        <div>
            <div>{number}</div>
            <button onClick={Plus}>+</button>
            <button onClick={Minus}>-</button>
            <button onClick={Reload}>Reload</button>
        </div>
    );
};

export default Examen;