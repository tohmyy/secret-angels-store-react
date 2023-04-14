import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const NavigationContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
        height: 100%; 
        width: 70px; 
        padding: 25px; 
`

export const NavLinks = styled.div`
    margin-right: 10px;
    list-style: none;
    gap: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%; height: 100%; 
    text-decoration: none;
`

export const NavLink = styled(Link)`
    text-decoration: none;
    padding: 10px 15px;
    color: black;
    cursor: pointer;
`