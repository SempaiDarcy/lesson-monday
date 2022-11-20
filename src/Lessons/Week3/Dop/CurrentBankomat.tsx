import React from 'react';
import {MoneyType} from "./Money";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
    return (
        props.money.banknotes === 'Dollar' ?
            <BanknoteGreen>
                {props.money.banknotes}
                <Value>{props.money.value}</Value>
            </BanknoteGreen>
            :
            props.money.banknotes === 'Tenge' ?
                <BanknoteBlue>
                    {props.money.banknotes}
                    <Value>{props.money.value}</Value>
                </BanknoteBlue>
                :
                <BanknoteRed>
                    {props.money.banknotes}
                    <Value>{props.money.value}</Value>
                </BanknoteRed>

    );
};


const BanknoteRed = styled.div`
    background-color: palevioletred;
    width: 400px;
  height: 200px;
  margin: 10px;
`
const BanknoteGreen = styled.div`
    background-color: darkseagreen;
    width: 400px;
  height: 200px;
  margin: 10px;
`
const BanknoteBlue = styled.div`
    background-color: deepskyblue;
    width: 400px;
  height: 200px;
  margin: 10px;
`

const Value = styled.div`
  display: flex;
  justify-content: center;
`