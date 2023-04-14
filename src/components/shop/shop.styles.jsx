import styled from "styled-components";

export const ShopContainer = styled.div`
    display: flex;
    flex-direction: column;
    // display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 70px;
    width: 100%;
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
        }

`
export const ItemsContainer =styled.div`
`

export const ItemBox =styled.div`
    display: flex;
    flex-direction: column;

    max-width: 350px;
    height: 300px;
    max-height: 700px;
    flex-grow: 1;
    position: relative;
    flex-shrink: 1;

    button{
        display: none;
        position: absolute;
        bottom: 80px;
        opacity: 0.85;
        text-align: center;
        font-size: 10px;
        padding: 0 2px;
        min-width: 10px;
        max-width: 180px;
        left: 0;
        right: 0;
        margin-left: auto; 
        margin-right: auto; 
        }
`


export const ImgBox =styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    margin-bottom: 5px;

    img{
        height: 100%
    }

    &:hover{
        opacity: 0.8;
    }
    &:hover button{
        display: flex;
    }
`
export const TextBox =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


export const Name =styled.div` 
    width: 90%; 
    margin-bottom: 15px; 
`
export const Price =styled.div` 
    width: 10%; 
`

export const Footer = styled.div`
    width: 100%; 
    height: 5%; 
    display: flex; 
    justify-content: space-between; 
    font-size: 18px; 
`

