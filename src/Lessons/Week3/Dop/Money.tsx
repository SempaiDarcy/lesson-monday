import React, {useState} from 'react';
import Country from "./Country";

export type BanknotsType = 'All'|'Dollar' | 'Tenge' | 'RUBLS'

export type MoneyType = {
    banknotes:BanknotsType,
    number:number,
    value:string
}

let defaultMoney: MoneyType[] = [
    {banknotes:'Dollar', number:250,value:'a12345678'},
    {banknotes:'Dollar', number:500,value:'b12345678'},
    {banknotes:'Tenge', number:250,value:'c12345678'},
    {banknotes:'Dollar', number:100,value:'d12345678'},
    {banknotes:'Tenge', number:250,value:'e12345678'},
    {banknotes:'Dollar', number:1000,value:'f12345678'},
    {banknotes:'RUBLS', number:100,value:'g12345678'},
    {banknotes:'Dollar', number:150,value:'h12345678'},
    {banknotes:'RUBLS', number:50,value:'k12345678'},
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