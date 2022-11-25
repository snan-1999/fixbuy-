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

// import OTPInput, { ResendOTP } from "otp-input-react";
import axios from 'axios'
import { baseUrl } from '../../../functions/constant';
export default function OtpPop({OtpCondition, setOtpCondition, otp, setOtp, setModalSellerPhone, user_id, sellerphone, sellername, Onclose, OnOpen, setisOpen, setSellerPhone, isOpen, Type, Reportapi, setreason, reason }) {

    
    // const [OTP, setOTP] = useState("");
    // const handleOtp = (OtpValue) => {
    //     //     // console.log(e , 'opt')
    //     //     // console.log('hh' , 'opt')
    //         setOtpValue(OtpValue)
    //     console.log(OtpValue, 'opt')
    // }
    const Otpverify = async () => {
        setisOpen(false)
        const api = `${baseUrl}/users//otp/verify/profileUpdate`;
        await axios.post(api, {
            user_id: user_id,
            phone: sellerphone,
            name: sellername,
            otp: otp
        }).then((res) => {
            if (res.data) {
                setModalSellerPhone(sellerphone)
                // setMessage(res.message);
                console.log(res.data, 'Otp');

            }
            else {
                // setotpError('invalid otp')

            }
        })
    }
    const Generate = async () => {
        console.log(sellerphone, 'Otp')
        let mobRegex = new RegExp('^[6-9]{1}[0-9]{9}$');
        // console.log("function started");
        // if (sellerphone.trim().length > 0 && sellerphone.trim().match(mobRegex)) {
        const api = `${baseUrl}/users/otp/genrate/formUpdate`;
        await axios.post(api, {
            "phone": sellerphone
        }).then((res) => {
            if (res.data) {
                setOtpCondition(true)
                // Otpverify()
                // setverify(true);
                setOtp(res.data.otp)
                // console.log(verify, 'var')
                console.log(res.data, 'Otp');
            }
            // }
        })
        // } else {
        // setError('Invalid Phone Number');
        // }


    }
    let OtpField
    OtpField = document.getElementById('OTp')
    const OtpLenght = () => {
       
        // setOtpCondition(OtpField.value.length)
        console.log(OtpField , 'length')
    }

    return (
        <>

            {
                isOpen &&
                <AnimatePresence>
                    <>
                        <Containermodel isOpen={isOpen}  >
                            <Modelcontent animate={{ y: 0, scale: 1 }} initial={{ y: '-100vh', scale: 0 }} exit={{ y: '-100vh', scale: 0 }}>
                                <Modalheader>
                                    <Headingsetting>Add Number</Headingsetting>
                                    <ImCross onClick={Onclose} style={{ cursor: 'pointer', color: 'black' }} />
                                </Modalheader>
                                <hr style={{ margin: '0rem 0.5rem  0 0.5rem' }} />
                                <Modalbody>

                                    <MyModal>
                                        <input type="text" placeholder='Your Mobile Number' className='form-control shadow-none'
                                            onChange={(e) => {
                                                setSellerPhone(e.target.value)
                                            }} />
                                        <br />
                                        {
                                            otp && <input type="text" placeholder='Enter Number' className='form-control shadow-none' onChange={OtpLenght} id='OTp' />
                                        }
                                    </MyModal>

                                    <ModelFooter>
                                        <ApplyBtn onClick={Onclose}>Cancel</ApplyBtn>
                                        {
                                            (!OtpCondition) ?<ApplyBtn1 onClick={Generate} >Generate OTP</ApplyBtn1> : <ApplyBtn1 onClick={Otpverify} >Verify</ApplyBtn1>
                                        }
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
    transform: translate(-72%);

    `
const Modelcontent = styled(motion.div)`
background: white;
box-shadow: 0 1px 5px 5px rgb(235 234 234);
    /* /* width: 32rem; */
    /* height: 20rem; */
    border-radius: 1rem;
    z-index: 25;
    -webkit-transition: all 150ms ease;
    transition: all 150ms ease;
    width:25vw;
    margin-left: 15%;


@media screen and (max-width: 600px){
    margin-left: 25%;
    padding: 1rem 2rem;
}

`
const MyModal = styled.div`
input{
    padding: 10px;
}
 input::placeholder{
    color : #80808099;
    font-size: .8rem;
    padding-left: 10px;
}
.OTP{
    padding: 10px 0;
}
.OTP input{
    padding: 15px 18px;
}
margin: 8% 5% 0%;
     @media screen and (max-width: 600px) {
        margin-left:-8%;
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
    
    
    `
const Headingsetting = styled.h2`
        font-size : 1.3rem;
        font-weight: 600;
`
const Modalbody = styled.div`
    margin-top: 23px; 
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
        justify-content: space-around;
        /* margin-left: 20%; */
        gap:5%;
        margin-bottom: 3%;

        @media screen and (max-width : 600px){
            align-items: center;
        margin-left: -8%;
        }
`
const ApplyBtn = styled.button`
    all: unset;
    background: grey ;
    color: white;
    padding: 8px 12px;
    font-size: .9rem;
    border-radius: .4rem;
    /* width: 20%; */
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
    padding: 8px 12px;
    font-size: .9rem;
    border-radius: .4rem;
    text-align: center;
    cursor: pointer;
    
    &:hover{
        transition: all 500ms ease ;
        transform:scale(0.9);
        /* box-shadow: 0px 1px 10px #ffffff2b; */
        
    }
`
// const FormControl styled