import React from 'react'
import styled from 'styled-components'

export default function UserMessage() {
  return (
    <UserMessages>hello</UserMessages>
  )
}
 const UserMessages = styled.div`
     background-color: grey;
    width: 30%;
    /* float: right; */ 
    margin:0px 19px;
    padding: 5px 10px 5px 10px; 
    border-radius: 3px;
    font-size: 0.9rem;
 `