import React from 'react';
import {MoneyType} from "./Money";
import styled from "styled-components";
type CityPropsType = {
    data:MoneyType[]
}

 export const City = (props: CityPropsType) => {
     const mappedMoney = props.data.map((el,index)=>{
         return(
             <div key={index}>
                 <div>{el.banknotes}</div>
                 <div>{el.value}</div>
                 <div>{el.number}</div>
             </div>
         )
     })
    return (
        <div>
            <Wrapper>
                {mappedMoney}
            </Wrapper>
        </div>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  margin: 30px;
`

