import React from 'react';
import {MoneyType} from "./Money";


type CountryPropsType = {
    data: MoneyType[],
}

const Country = (props:CountryPropsType) => {
    return (
        <div>
            <button>All</button>
            <button>RUBLS</button>
            <button>Tenge</button>
            <button>Dollars</button>
            <ul>{props.data.map(el => {
                return (
                    <span>{el.banknotes}</span>
                )
            })}</ul>
        </div>
    );
};

export default Country;