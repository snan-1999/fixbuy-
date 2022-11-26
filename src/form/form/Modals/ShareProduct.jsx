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
} from "@chakra-ui/react";
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { ImCross } from 'react-icons/im'
import { useState } from 'react';
import ShareLink from '../Share/ShareLink';
export default function ShareProuctsModal({Onclose ,OnOpen , setisOpen, isOpen, Type, ShareLinkParam }) {

    return (
        <>
            <AnimatePresence>


                {
                    isOpen &&
                  
                    <>
                        <Containermodel isOpen={isOpen}  >
                            <Modelcontent animate={{ y: 0, scale: 1 }} initial={{ y: '-100vh', scale: 0 }} exit={{ y: '-100vh', scale: 0 }}>
                                <Modalheader>
                                    <Headingsetting>Share Product</Headingsetting>
                                    <ImCross className='text-white' onClick={Onclose} style={{ cursor: 'pointer' }} />
                                </Modalheader>
                                <hr style={{ margin: '0rem 0.5rem  0 0.5rem' }} />
                                <Modalbody>

                                      {/* <ShareLink ShareLinkParam={ShareLinkParam} /> */}
                                    <ModelFooter>
                                        <ApplyBtn onClick={Onclose}>Cancel</ApplyBtn>
                                        <ApplyBtn onClick={Onclose}>OK</ApplyBtn>
                                    </ModelFooter>
                                </Modalbody>
                            </Modelcontent>
                        </Containermodel>
                    </>
                }
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
    width: 100%;
    height: 100%;
    place-items: center;
    z-index: 20;
    top:0;

    `
const Modelcontent = styled(motion.div)`
    background: linear-gradient( ${props => props.theme.colors.primary}  ,  ${props => props.theme.colors.secondary} ) ;
    /* width: 32rem;
    height: 28rem; */
    border-radius: 1rem;
    z-index: 25;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
    padding: 1rem 2rem;

`
const Modalheader = styled.div`
    width: 100%;
    display: flex;
   justify-content: space-between;
   padding: 1rem 0rem 0rem 0rem;

    
    
    `
const Headingsetting = styled.h2`
       color: white;
        font-weight: 600;
`
const Modalbody = styled.div`
    margin-top: 23px;
    width: 25vw;


    
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
        justify-content: space-around;
        align-items: center;
        margin-top: 3rem;
`
const ApplyBtn = styled.button`
    all: unset;
    background: white ;
    color: ${props => props.theme.colors.secondary};
    padding: 10px 20px;
    border-radius: 50rem;
    width: 20%;
    text-align: center;
    cursor: pointer;
    
    &:hover{
        background-color: #c0c0c0;
        transition: all 100ms ease ;
        transform:scale(0.9);
        /* box-shadow: 0px 1px 10px #ffffff2b; */
        
    }
` 