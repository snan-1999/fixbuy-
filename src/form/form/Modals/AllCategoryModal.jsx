import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,

    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,

    Label,
    useColorMode,
    RadioGroup,
    Radio,
    Stack
} from "@chakra-ui/react";
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { ImCross } from 'react-icons/im'
import { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function AllCategoryModal({ Onclose, OnOpen, setisOpen, isOpen, Type, Reportapi, setreason, reason, categories }) {


    return (
        <>
            <AnimatePresence>

                <>

                    <Containermodel isOpen={isOpen}  >
                        <Modelcontent animate={{ y: 0, scale: 1 }} initial={{ y: '-100vh', scale: 0 }} exit={{ y: '-100vh', scale: 0 }}>
                            <Modalheader>
                                <Headingsetting>Category</Headingsetting>
                                <ImCross onClick={Onclose} style={{ cursor: 'pointer', color: 'black' }} />
                            </Modalheader>
                            {/* <hr style={{ margin: '0rem -1.5rem 0px' }} /> */}
                            <Modalbody>

                                <MyModal>

                                    <div className='setOver'>

                                        <ul class="list-group ">
                                            {
                                                categories?.map((value, key) => {
                                                    return (
                                                        <Link to={value.to} style={{ textDecoration: "none" }}>
                                                            <li class="list-group-item row text-center" style={{ width: '100%' }}>{value.name}</li>
                                                        </Link>
                                                    )
                                                })

                                            }
                                        </ul>
                                    </div>

                                </MyModal>

                            </Modalbody>
                        </Modelcontent>
                    </Containermodel>
                </>

            </AnimatePresence>
        </>
    )
}
const Containermodel = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap');
font-family: 'Lato', sans-serif;
position: fixed;
display: grid;
place-content: center;
height: 100%;
    place-items: center;
    z-index: 20;
    top:0;
    @media screen and (min-width: 601px) and (max-width: 1000px) {
        position: fixed;
        left :0;
        width : 100%;
        
    }
    @media screen and (max-width : 600px) {
        height :100vh
    }
    

    `
const Nandita = styled.button`
`
const Modelcontent = styled(motion.div)`
background: white;

    /* width: 32rem;
    height: 28rem; */
    border-radius: 1rem;
    z-index: 25;
    -webkit-transition: all 150ms ease;
transition: all 150ms ease;
width:85%;
margin-left: 15%;

@media screen and (max-width: 600px){
    margin-left: 21rem;
    // justify-content : center;
    padding: 1rem 2rem;
    overflow: hidden;
    position: fixed;
    width : 75%;
}

@media screen and (min-width: 601px) and (max-width: 1000px) {
    width: 40vw;
    // position : fixed;
    // height: 50vh;
    // display: flex;
    // justify-content: center;
    // align-items:center;
    // flex-direction :column;
    // top:0%;
} 

`
const MyModal = styled.div`

     margin-left: 5%;
     @media screen and (max-width: 600px) {
        .list-group{
            margin-left: 1.7rem;
        }
        margin-left:-8%;
        li{
            font-size: .7rem;
        }
        .setOver{
            height: 35vh;
    overflow: auto;
        }
     }
    .MyInput{
        width: 3%;
        margin-top :4%;
        padding: 0 5px ;
        @media screen and (max-width: 600px) {
            width: 11%; 
            border-Radius: 100%
        }
        
    }
`
const Modalheader = styled.div`
    width: 100%;
    display: flex;
   justify-content: space-between;
   padding: 2rem 5rem 0rem 2rem;
   
    
   @media screen and (max-width :600px){
    width: 100%;
    padding: 1rem 0rem 0rem 0rem;
   }
    
   @media screen and (min-width: 601px) and (max-width: 1000px) {
       display :flex;
    align-items:center;
       justify-content: space-between;
    
}
    `
const Headingsetting = styled.h2`
       
        font-weight: 600;
`
const Modalbody = styled.div`
    margin-top: 23px;
    width: 60vw;
    @media screen and (min-width: 601px) and (max-width: 1000px) {
        width: 100%;
        
    }

    
`
const WorkingTime = styled.div`
display:flex;
justify-content: space-around;
align-items: center;
height: 8vh;
`
const ShortBreak = styled.div`
display:flex;
justify-content:space-around;
align-items :center;
height: 8vh;
`
const LongBreak = styled.div`
display:flex;
justify-content:space-around;
height: 8vh;
align-items :center;
`
const Input = styled.input`
   height: 4vh;
   margin-bottom: 1rem;
    background: transparent;
    width: 100%;
    ::placeholder{
        @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap');
font-family: 'Lato', sans-serif;
        color: white;
        font-weight: 400;
        font-size: 15x;
        
    }
    border-width: 0 0 1px 0;
        :focus-visible {
             outline: -webkit-focus-ring-color auto 0px;
             color: wheat;
     }
`

const ModelFooter = styled.div`
    display: flex;
        align-items: center;
        margin-top: 3rem;
        margin-left: 20%;
        gap:5%;
        margin-bottom: 3%;

        @media screen and (max-width : 600px){
            align-items: center;
        margin-top: 3rem;
        margin-left: -8%;
        }
`
const ApplyBtn = styled.button`
    all: unset;
    background: grey ;
    color: white;
    padding: 10px 20px;
    border-radius: 50rem;
    width: 20%;
    text-align: center;
    cursor: pointer;

    
    &:hover{
        transition: all 500ms ease ;
        transform:scale(0.9);
        /* box-shadow: 0px 1px 10px #ffffff2b; */
        
    }

    @media screen and (max-width: 600px) {
        all: unset;
    background: grey ;
    color: white;
    padding: 10px 16px;
    border-radius: 50rem;
    width: 30%;
    text-align: center;
    cursor: pointer;
    
    
    &:hover{
        transition: all 500ms ease ;
        transform:scale(0.9);
        /* box-shadow: 0px 1px 10px #ffffff2b; */
        
    }
    }
`

const ApplyBtn1 = styled.button`
    all: unset;
    background:linear-gradient( ${props => props.theme.colors.primary} ,${props => props.theme.colors.secondary} ) ;;
    color: white;
    padding: 10px 16px;
    border-radius: 50rem;
    width: 25%;
    text-align: center;
    cursor: pointer;
    
    &:hover{
        transition: all 500ms ease ;
        transform:scale(0.9);
        /* box-shadow: 0px 1px 10px #ffffff2b; */
        
    }
`