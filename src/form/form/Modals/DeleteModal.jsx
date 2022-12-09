import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import styled from 'styled-components'

export default function UserDeleteModal({ ModalOpen, setModalOpen, DeleteData }) {
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
                                    Are You Sure ? <br />
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
`
const OKbtn = styled(Cancelbtn)``