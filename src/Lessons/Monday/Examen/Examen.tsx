import React, {useState} from 'react';
import Button from "./Button";
import s from './Examen.module.css'

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
            <div className={s.container}>
                <div className={s.first}>
                    <Button buttonName='+' button={Plus}/>
                    <div className={s.number}>{number}</div>
                    <Button buttonName='-' button={Minus}/>
                </div>
                <Button buttonName='Reload' button={Reload}/>
            </div>

    );
};

export default Examen;