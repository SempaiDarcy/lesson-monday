import React, {useState} from 'react';
import Country from "./Country";

export type BanknotsType = 'All'|'Dollar' | 'Tenge' | 'RUBLS'

export type MoneyType = {
    banknotes:BanknotsType,
    number:string,
    value:number
}

let defaultMoney: MoneyType[] = [
    {banknotes:'Dollar', value:250,number:'a12345678'},
    {banknotes:'Dollar', value:500,number:'b12345678'},
    {banknotes:'Tenge', value:250,number:'c12345678'},
    {banknotes:'Dollar', value:100,number:'d12345678'},
    {banknotes:'Tenge', value:250,number:'e12345678'},
    {banknotes:'Dollar', value:1000,number:'f12345678'},
    {banknotes:'RUBLS', value:100,number:'g12345678'},
    {banknotes:'Dollar', value:150,number:'h12345678'},
    {banknotes:'RUBLS', value:50,number:'k12345678'},
]

export const moneyFilter = (money:MoneyType[],filter:BanknotsType): MoneyType[] =>{
    if (filter==='All') return defaultMoney
    else {
        return money.filter(el=>el.banknotes===filter)
    }
}
const Money = () => {
    const [money,setMoney] = useState<MoneyType[]>(defaultMoney)

    const [filter,setFilter] = useState<BanknotsType>('All');

    const filteredMoney = moneyFilter(money,filter)
    console.log(filteredMoney)
    return (
        <div>
            <Country
                data={filteredMoney}
                setFilter={setFilter}
                filter={filter}
            />
        </div>
    );
};

export default Money;