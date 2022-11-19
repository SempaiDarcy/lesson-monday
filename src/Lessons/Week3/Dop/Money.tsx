import React from 'react';

export type BanknotesType = 'All'|'Dollar' | 'Tenge' | 'RUBLS'

export type MoneyType = {
    banknotes:BanknotesType,
    number:number,
    value:string
}

const Money = () => {


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

    const filterMoney = (money:MoneyType[],filter:BanknotesType): MoneyType[] =>{
        if (money.filter(el=>el.banknotes==='All')) return defaultMoney
        else {
            return money.filter(el=>el.banknotes===filter)
        }
    }

    return (
        <div>

        </div>
    );
};

export default Money;