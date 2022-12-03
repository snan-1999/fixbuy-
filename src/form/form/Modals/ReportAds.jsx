import React from 'react'
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { ImCross } from 'react-icons/im'
import { useState } from 'react';
export default function ReportAds({ ReportApi, Onclose, OnOpen, setisOpen, isOpen, Type, Reportapi, setReason, reason }) {
    const [Custom, setCustom] = useState(false)
    return (
        <>
            {
                isOpen &&
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
                                            <input class="MyInput form-check-input" type="radio" id="flexRadioDefault1" onChange={(e) => setReason(e.target.value)} name='reason' value='Offensive Content' />
                                            <label class="MyLabel form-check-label" for="flexRadioDefault1"
                                                style={{ marginTop: '4%', marginLeft: '5%', color: 'black' }}>
                                                Offensive Content
                                            </label>
                                        </div>


                                        <div class="form-check">
                                            <input class="MyInput form-check-input" type="radio" id="flexRadioDefault2" onChange={(e) => setReason(e.target.value)} name='reason' value='Fraud' />
                                            <label class="MyLabel form-check-label" for="flexRadioDefault2"
                                                style={{ marginTop: '4%', marginLeft: '5%', color: 'black' }}>
                                                Fraud
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="MyInput form-check-input" type="radio" id="flexRadioDefault2" onChange={(e) => setReason(e.target.value)} name='reason' value='Duplicate Ad' />
                                            <label class="MyLabel form-check-label" for="flexRadioDefault2" style={{ marginTop: '4%', marginLeft: '5%', color: 'black' }}>
                                                Duplicate Ad
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="MyInput form-check-input" type="radio" id="flexRadioDefault2" onChange={(e) => setReason(e.target.value)} name='reason' value='Product Already Sold' />
                                            <label class="MyLabel form-check-label" for="flexRadioDefault2" style={{ marginTop: '4%', marginLeft: '5%', color: 'black' }}>
                                                Product Already Sold
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="MyInput form-check-input" type="radio" id="flexRadioDefault2" onClick={(e) => setCustom(!Custom)} name='reason' value='Product Already Sold' />
                                            <label class="MyLabel form-check-label" for="flexRadioDefault2" style={{ marginTop: '4%', marginLeft: '5%', color: 'black' }}>
                                                Custom 
                                            </label>
                                        </div>

                                        {
                                            Custom && <textarea placeholder='Your Message' name="" id="" className='mt-2 form-control' cols="30" rows="3" onChange={(e) => setReason(e.target.value)} />
                                        }
                                    </MyModal>

                                    <ModelFooter>
                                        <ApplyBtn onClick={Onclose}>Cancel</ApplyBtn>

                                        <ApplyBtn1 onClick={ReportApi}>Submit</ApplyBtn1>

                                    </ModelFooter>
                                </Modalbody>
                            </Modelcontent>
                        </Containermodel>
                    </>

                </AnimatePresence>
            }
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
    left: 50%;
    transform: translate(-50%);
width: 100%;
    `
const Nandita = styled.button`
`
const Modelcontent = styled(motion.div)`
width: 28vw;
background: white;
box-shadow: 0 1px 5px 5px rgb(235 234 234);
    /* width: 32rem;
    height: 28rem; */
    border-radius: 1rem;
    z-index: 25;
    -webkit-transition: all 150ms ease;
transition: all 150ms ease;

@media screen and (max-width: 600px){
    margin-left: 25%;
    padding: 1rem 2rem;
}

`
const MyModal = styled.div`
.form-check {
    display: flex;
    align-items: center;
    min-height: 1.5rem;
    position: relative;
    margin-left: 0 !important;
    margin-bottom: 0.5rem !important;
    left: 6% !important;
}
     /* margin: 5%; */
     padding: 10px;
     @media screen and (max-width: 600px) {
        margin-left:-8%;
     }
    .MyInput{
        height: 2vh;
    width: auto;
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
    
    
    `
const Headingsetting = styled.h2`
       
        font-weight: 600;
`
const Modalbody = styled.div`
    margin-top: 23px;
    width: auto;


    
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
        margin-top: 1rem;
        /* margin-left: 20%; */
        justify-content: space-around;
        gap:5%;
        margin-bottom: 3%;

        @media screen and (max-width : 600px){
            align-items: center;
        margin-top: 1rem;
        margin-left: -8%;
        }
`
const ApplyBtn = styled.button`
    all: unset;
    background: grey ;
    color: white;
    padding: 10px 20px;
    border-radius: 50rem;
    /* width: 10%; */
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
    /* width: 10%; */
    text-align: center;
    cursor: pointer;
    
    &:hover{
        transition: all 500ms ease ;
        transform:scale(0.9);
        /* box-shadow: 0px 1px 10px #ffffff2b; */
        
    }
`
// const FormControl styled