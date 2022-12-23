import React from 'react'
import styled from 'styled-components'

export default function AdminMessage({ data }) {
    return (
        <Messages>{data}</Messages>
    )
}
const Messages = styled.div`
    
    background: linear-gradient(${props => props.theme.colors.primary} , ${props => props.theme.colors.secondary});
    width: 80%; 
    color: #fff;
    margin:15px 20px; 
    padding: 8px 10px 8px 15px; 
    border-radius: 25px;
    font-size: 0.8rem;
    /* &::before{
        border-color: #59c3f0;
        border-color: #59c3f0;
    border-style: solid;
    content: "";
    height: 0;
    position: absolute;
    width: 0;
    border-width: 1px 10px 10px 0px;
    left: 5px;
    top: 12px;
    -webkit-transform: rotate(-65deg);
    -webkit-transform: rotate(-65deg);
    -ms-transform: rotate(-65deg);
    transform: rotate(-138deg);
    z-index: -1;
    } */
`