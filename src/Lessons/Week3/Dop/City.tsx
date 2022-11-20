import React from 'react';
import {MoneyType} from "./Money";

type CityPropsType = {
    data:MoneyType[]
}

const City = (props:CityPropsType) => {
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
            {mappedMoney}
        </div>
    );
};

export default City;