import React from 'react'
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { ImCross } from 'react-icons/im'
import { useState } from 'react';
export default function ReportModal({ Onclose, OnOpen, setisOpen, isOpen, Type, Reportapi, setreason, reason }) {
    return (
        <>
            <AnimatePresence>



                <>

                    <Containermodel isOpen={isOpen}  >
                        <Modelcontent animate={{ y: 0, scale: 1 }} initial={{ y: '-100vh', scale: 0 }} exit={{ y: '-100vh', scale: 0 }}>
                            <Modalheader>
                                <Headingsetting>Report</Headingsetting>
                                <ImCross onClick={Onclose} style={{ cursor: 'pointer', color: 'black' }} />
                            </Modalheader>
                            <hr style={{ margin: '0rem 0.5rem  0 0.5rem' }} />
                            <Modalbody>

                                <MyModal>

                                    <div class="form-check">
                                        <input class="MyInput form-check-input" type="radio" id="flexRadioDefault1"  onChange={(e) => setreason(e.target.value)} name='reason' value='Offensive Content' />
                                        <label class="MyLabel form-check-label" for="flexRadioDefault1"
                                            style={{ marginTop: '4%', marginLeft: '5%', color: 'black' }}>
                                            Offensive Content
                                        </label>
                                    </div>


                                    <div class="form-check">
                                        <input class="MyInput form-check-input" type="radio" id="flexRadioDefault2" onChange={(e) => setreason(e.target.value)} name='reason' value='Fraud' />
                                        <label class="MyLabel form-check-label" for="flexRadioDefault2"
                                            style={{ marginTop: '4%', marginLeft: '5%', color: 'black' }}>
                                            Fraud
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="MyInput form-check-input" type="radio" id="flexRadioDefault2"  onChange={(e) => setreason(e.target.value)} name='reason' value='Duplicate Ad' />
                                        <label class="MyLabel form-check-label" for="flexRadioDefault2" style={{ marginTop: '4%', marginLeft: '5%', color: 'black' }}>
                                            Duplicate Ad
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="MyInput form-check-input" type="radio" id="flexRadioDefault2"  onChange={(e) => setreason(e.target.value)} name='reason' value='Product Already Sold' />
                                        <label class="MyLabel form-check-label" for="flexRadioDefault2" style={{ marginTop: '4%', marginLeft: '5%', color: 'black' }}>
                                            Product Already Sold
                                        </label>
                                    </div>

                                </MyModal>

                                <ModelFooter>
                                    <ApplyBtn onClick={Onclose}>Cancel</ApplyBtn>
                                    {
                                        <ApplyBtn1 onClick={Reportapi} disabled={reason === ''}>Submit</ApplyBtn1>
                                    }
                                </ModelFooter>
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
    position: absolute;
    display: grid;
    place-content: center;
    height: 100vh;
    place-items: center;
    z-index: 20;
    top:0;
    width: 100%;

    `
const Nandita = styled.button`
`
const Modelcontent = styled(motion.div)`
background: white;
box-shadow: 0 1px 5px 5px rgb(235 234 234);
    /* width: 32rem;
    height: 28rem; */
    border-radius: 1rem;
    z-index: 25;
    -webkit-transition: all 150ms ease;
transition: all 150ms ease;
width: 29vw;
margin-left: 0%;

@media screen and (max-width: 600px){
    width: 74vw;
    margin-left: 0%;
    padding: 1rem 2rem;
    
}

`
const MyModal = styled.div`
     margin-left: 5%;
     @media screen and (max-width: 600px) {
        margin-left:-8%;
     }
    .MyInput{
        width: 20px !important;
        height :20px !important;
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
    display: flex;
    align-items: center;
   }
    
    
    `
const Headingsetting = styled.h2`
       
        font-weight: 600;
`
const Modalbody = styled.div`
    margin-top: 23px;
    width: 100%;


    
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
        // margin-left: 20%;
        gap:5%;
        margin-bottom: 3%;
justify-content: space-evenly;
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
// const FormControl styled