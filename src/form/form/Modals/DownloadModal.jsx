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
import { Link } from 'react-router-dom';
export default function DownloadModal({ Onclose, OnOpen, setisOpenDownload, isOpenDownload, Type, UpdateShop, setGstNumber, setAddress, gstnumber }) {

    return (
        <>
            <AnimatePresence>


                {
                    isOpenDownload &&
                    <>
                        <Containermodel isOpenDownload={isOpenDownload}  >
                            <Modelcontent animate={{ y: 0, scale: 1 }} initial={{ y: '-100vh', scale: 0 }} exit={{ y: '-100vh', scale: 0 }}>
                                <Modalheader>
                                    <Headingsetting className='heading'>DOWNLOAD OUR APP NOW</Headingsetting>
                                    <ImCross onClick={Onclose} style={{ cursor: 'pointer' }} />
                                </Modalheader>
                                {/* <hr style={{ margin: '0rem 0.5rem  0 0.5rem' }} /> */}
                                <Modalbody>
                                    <ContentBody>

                                        <img src={logo} alt="logo" />

                                        <div className='content' style={{ color: 'white', fontSize: '16px' }} >
                                            Give you better experience
                                        </div>
                                        <br />
                                        <div className='download' style={{ color: 'white' }}>
                                            Download now
                                        </div>
                                        <ModelFooter>
                                            <Link to='https://play.google.com/store/apps/details?id=com.feelit.feelit_app'><img src={android} onClick={Onclose} /></Link>
                                            <Link to='https://play.google.com/store/apps/details?id=com.feelit.feelit_app'> <img src={apple} onClick={Onclose} /></Link>
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
    @media screen and (max-width : 600px ){
        padding: .3rem .8rem;
        width: 70vw;
        height: 40vh;
        .content{
            font-size: 15px !important;
            word-spacing: 10px;
            text-transform: capitalize;
        }
            .download{
            font-size: 11px !important;
            word-spacing: 10px;
            text-transform: capitalize;
            margin-bottom:.6rem;
        }
     
    }

`
const Headingsetting = styled.div`
    font-size: 1.3rem;
    font-weight: 600;
    color: white;
    `
const Modalheader = styled.div`
    @media screen and (max-width : 600px ){
        .heading{
            font-weight: 600;
            font-size:.8rem !important;
                
        }
        svg{
            font-size: 13px;
        }
    }
color: white;
    width: 100%;
    display: flex;
   justify-content: space-between;
   padding: 1rem 1rem 0rem 1rem;
   align-items: center;

    
    
    `

const Modalbody = styled.div`
@media screen and (max-width : 600px ){
width: auto;
height: auto;
}
    margin-top: 13px;
    width: 30vw;
    height: 40vh;
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
justify-content: center;
height: 41vh;
margin-left : 5%;
text-align : justify;
@media screen and (max-width : 600px ){
    margin-top : 7%;
    justify-content: start;

}

`

const ModelFooter = styled.div`

    display: flex;
        // justify-content: space-around;
        align-items: center;
        margin-top: 3rem;
        gap: 5%;

          img {
            cursor: pointer;
            width : 100% !important;
        }
        @media screen and (max-width : 600px ){
            img {
              cursor: pointer;
              width : 80% !important;
          }
    margin-top : 1%;
            display: flex;
            flex-direction: column;
            justify-content: center;

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