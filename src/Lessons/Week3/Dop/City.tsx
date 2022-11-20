import React from 'react';
import {MoneyType} from "./Money";
import styled from "styled-components";
import {CurrentBankomat} from "./CurrentBankomat";
type CityPropsType = {
    data:MoneyType[]
}

 export const City = (props: CityPropsType) => {
     const mappedMoney = props.data.map((el,index)=>{
         return(
             <div key={index}>
                <CurrentBankomat money={el}/>
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

