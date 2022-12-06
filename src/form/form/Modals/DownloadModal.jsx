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
import logo from "../../../assets/images/FB-white.png";
import Modalimage from '../../../assets/images/ModalImage.png'
import android from '../../../assets/images/android.png';
import apple from '../../../assets/images/apple.png';
export default function DownloadModal({ Onclose, OnOpen, setisOpen, isOpen, Type, UpdateShop, setGstNumber, setAddress, gstnumber }) {

    return (
        <>
            <AnimatePresence>


                {
                    isOpen &&
                    <>
                        <Containermodel isOpen={isOpen}  >
                            <Modelcontent animate={{ y: 0, scale: 1 }} initial={{ y: '-100vh', scale: 0 }} exit={{ y: '-100vh', scale: 0 }}>
                                <Modalheader>
                                    {/* <Headingsetting>Check</Headingsetting> */}
                                    <ImCross onClick={Onclose} style={{ cursor: 'pointer' }} />
                                </Modalheader>
                                {/* <hr style={{ margin: '0rem 0.5rem  0 0.5rem' }} /> */}
                                <Modalbody>
                                    <ContentBody>

                                        <img src={logo} alt="logo" />

                                        <div style={{ color: 'white', fontSize: '16px' }} >
                                            Give you better experience
                                        </div>
                                        <br />
                                        <div style={{ color: 'white' }}>
                                            Download now
                                        </div>
                                        <ModelFooter>
                                            <img src={android} onClick={Onclose} />
                                            <img src={apple} onClick={Onclose} />
                                        </ModelFooter>

                                    </ContentBody>


                                    <div className='handImageright' style={{ textAlign: 'end' }}>
                                        <img src={Modalimage} className='handImg' />
                                    </div>
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
    position: absolute;
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
       
        font-weight: 600;
`
const Modalbody = styled.div`
    margin-top: 23px;
    width: 35vw;
    height: 50vh;
    display: flex;
    align-items : center;
    // text-align : end; 

    .handImg{
        width : 85% ;
    }
    img {
        width : 40%;
    
    }
    
`
const ContentBody = styled.div`
    display: flex;
flex-direction: column;
justify-content: space-between;
height: 41vh;
margin-left : 5%;
text-align : justify;

`

const ModelFooter = styled.div`
    display: flex;
        // justify-content: space-around;
        align-items: center;
        margin-top: 3rem;
        gap: 5%;

        img {
            width : 50%;
        }
`
const ApplyBtn = styled.button`
    all: unset;
    background: black ;
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