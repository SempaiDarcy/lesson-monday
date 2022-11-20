import React from 'react';
import {BanknotsType, MoneyType} from "./Money";


type CountryPropsType = {
    data: MoneyType[],
    setFilter:(filter:BanknotsType)=>void,
    filter:BanknotsType
}

const Country = (props:CountryPropsType) => {

    const  setAll = () => {
        props.setFilter('All')
    }
    const  setDollar = () => {
        props.setFilter('Dollar')
    }
    const  setRUBLS = () => {
        props.setFilter('RUBLS')
    }
    const  setTenge = () => {
        props.setFilter('Tenge')
    }

    const mappedMoney = props.data.map((el,index)=>{
        return(
            <li key={index}>
                <div>{el.banknotes}</div>
                <div>{el.value}</div>
                <div>{el.number}</div>
            </li>
            )
    })
    return (
        <div>
            <button onClick={setAll}>All</button>
            <button onClick={setRUBLS}>RUBLS</button>
            <button onClick={setTenge}>Tenge</button>
            <button onClick={setDollar}>Dollars</button>
            {mappedMoney}
        </div>
    );
};

export default Country;