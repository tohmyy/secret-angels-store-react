import styled from "styled-components";

export const CartList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end ;
    align-items: center;
    &:first-child{
        font-weight: 400;
    }
`

export const CartItemContainer = styled.div`
    width: 100%; 
    display: flex; 
    height: 80px; 
    margin-bottom: 15px; 
    img { 
        width: 30%; 
    } 
`
export const ItemDetails = styled.div`
     width: 70%; 
    display: flex; 
    flex-direction: column; 
    align-items: flex-start; 
    justify-content: center; 
    padding: 10px 20px; 
`

export const  Name = styled.div`
    font-size: 16px; 
`