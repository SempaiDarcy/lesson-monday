import React from 'react';
import {BanknotsType, MoneyType} from "./Money";
import {City} from "./City";


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

    return (
        <div>
            <button onClick={setAll}>All</button>
            <button onClick={setRUBLS}>RUBLS</button>
            <button onClick={setTenge}>Tenge</button>
            <button onClick={setDollar}>Dollars</button>
            <City data={props.data}/>
        </div>
    );
};

export default Country;