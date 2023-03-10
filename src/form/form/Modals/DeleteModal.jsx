import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import styled from 'styled-components'

export default function UserDeleteModal({ DelId, ModalOpen, setModalOpen, DeleteData }) {
    const onclose = () => setModalOpen(false)
    return (
        <>
            <AnimatePresence>

                {
                    ModalOpen &&
                    <BackLight>

                        <ModelContainer animate={{ y: "0", scale: '1' }} initial={{ y: '-100vh', scale: '0' }} exit={{ y: '-100vh', scale: '1' }}>
                            <ModelDiv >
                                <DeleteDiv>
                                    {/* <MdDelete className='SetMOdalDelete' /> */}
                                    <lord-icon
                                        src="https://cdn.lordicon.com/isyfoshl.json"
                                        trigger="loop"
                                        colors="outline:#121331,primary:#487792,secondary:#38597b,tertiary:#38597b,quaternary:#f9c9c0"
                                        style={{ width: '80px', height: '80px' }}>
                                    </lord-icon>
                                </DeleteDiv>
                                <ModalBody>
                                    Are You Sure  <br />
                                    You Want to Delete?
                                </ModalBody>
                                <ModalFooter>
                                    <Cancelbtn onClick={onclose}>Cancel</Cancelbtn>
                                    <OKbtn onClick={DeleteData}>Delete</OKbtn>
                                </ModalFooter>
                            </ModelDiv>
                        </ModelContainer>

                    </BackLight>
                }
            </AnimatePresence>
        </>
    )
}
const BackLight = styled.div`
z-index: 10;
/* background-color: red; */

`
const ModelContainer = styled(motion.div)`
z-index: 10;
    position: fixed;
    top: 30%;
    left: 40%;
    @media screen and (max-width :600px){
        z-index: 10;
        position: fixed;
        top: 30% !important;
        left: 10% !important;
    }
    @media screen and (min-width: 601px) and (max-width: 1000px) {
        top: 35% !important;
        left: 25% !important;

    }
    `
const ModelDiv = styled(motion.div)`
box-shadow: 1px 1px 10px #dadada;
border-top: 10px solid  ${props => props.theme.colors.primary};
background-color: white;
width: 25rem;
height: 16rem;
transition: all 400ms;
border-radius: 1rem;
z-index: 25;
@media screen and (max-width :600px){
    width: 18rem;
    height: 13rem;
}
`
const DeleteDiv = styled.div`

z-index: 25;
    position: absolute;
    top: -18%;
    /* font-size: 5rem; */
    /* padding: 10px; */
    left: 36%;
    color: white;
    background-color: #fff;
    border-radius: 50%;
    border: 5px solid ${props => props.theme.colors.primary};
    @media screen and (max-width : 600px){
        top: -15%;
        lord-icon{

            width : 60px !important;
            height : 60px !important;
        }
    }

`
const ModalBody = styled.div`
    position: relative;
    top: 26%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color:  ${props => props.theme.colors.primary};
    font-weight: 600;
    font-size: 1.4rem;
    @media screen and (max-width : 600px){
        font-size: 1.1rem;
        
    }
`
const ModalFooter = styled.div`
    position: relative;
    top: 45%;
    display: flex;
    justify-content: space-around;
    
`
const Cancelbtn = styled.button`
    padding: 7px 20px;
    border: none;
    border-radius: 3px;
    color: white;
    background: linear-gradient(${props => props.theme.colors.primary} , ${props => props.theme.colors.primary});
    @media screen and (max-width: 600px){
        font-size: 13px;
        padding: 7px 12px;
    }
`
const OKbtn = styled(Cancelbtn)``