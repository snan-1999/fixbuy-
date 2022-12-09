import React from 'react'
import styled from 'styled-components'

export default function AdminMessage({ data }) {
    return (
        <Messages>{data}</Messages>
    )
}

const Messages = styled.div`
    
    background-color: #59c3f0;
    width: 30%; 
    margin:10px 20px; 
    padding: 5px 10px 5px 10px; 
    border-radius: 3px;
    font-size: 0.9rem;
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