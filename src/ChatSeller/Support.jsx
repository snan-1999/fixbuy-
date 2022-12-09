import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { RiChatSmile2Line, RiCloseLine } from 'react-icons/ri';
import { AiOutlineSend } from 'react-icons/ai';
import ReactScrollToBottom from 'react-scroll-to-bottom'
import styled from 'styled-components'
import AdminMessage from './adminMessage'
import UserMessage from './UserMessage';


const Support = () => {

    const [isOpen, setisOpen] = useState(false);
    const [closeBtn, setcloseBtn] = useState(false);

    const ToggleClick = () => {
        setisOpen(true);
        setcloseBtn(true)
    }

    const Onclose = () => {
        setcloseBtn(false)
        setisOpen(false)
    }

    let textData;

    const [sendMess, setsendMess] = useState(false)
    const senMessage = (e) => {
        textData = document.getElementById('adminText').value;
        (e.target.value == "") ? setsendMess(true) : setsendMess(false)
        document.getElementById('adminText').value = ""
        alert('😄');
    }
    return (
        <>
            <AnimatePresence>

                {
                    isOpen &&
                    <ChatBox
                        initial={{ y: '200vh', scale: 0 }}
                        animate={{ y: 0, scale: 1 }}
                        exit={{ y: '200vh', scale: 0 }}>
                        <ChatHeader>
                            <ChatLine>Let's Chats - online</ChatLine>
                            <ChatClose>
                                <RiCloseLine onClick={Onclose} />
                            </ChatClose>
                        </ChatHeader>
                        <ChatMain>

                            <ChatBody>

                                <ReactScrollToBottom>
                                    {/* {
                                data.map((mess , i) => {
                                    <ChaMessage key={i} data={mess} />
                                })
                            } */}
                                    <AdminDiv>
                                        <AdminMessage data={'hey whtsapp'} />
                                    </AdminDiv>
                                    <UserDiv>
                                        <UserMessage />
                                    </UserDiv>
                                </ReactScrollToBottom>

                            </ChatBody>
                            <div className="d-flex">

                                <InputChat placeholder='Enter Your Message' id='adminText' />
                                <SendIcon>
                                    <AiOutlineSend onClick={senMessage} />
                                </SendIcon>
                            </div>
                        </ChatMain>
                    </ChatBox>
                }
            </AnimatePresence>
            <footer className="page-footer">
                {/* <p className="mb-0">Copyright © 2021. All right reserved.</p> */}

                <div className="relative  border-0">

                    <ChatIcon>
                        <RiChatSmile2Line onClick={ToggleClick} />
                    </ChatIcon>
                    {

                        (closeBtn) ?
                            <ChatIcon>
                                <RiChatSmile2Line onClick={Onclose} />
                            </ChatIcon>
                            :
                            <ChatIcon>
                                <RiChatSmile2Line onClick={ToggleClick} />
                            </ChatIcon>
                    }
                </div>
            </footer>
        </>
    )
}

export default Support
const SendIcon = styled.div`
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    margin-right: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
`
const InputChat = styled.input`
    width: 100%;
    padding: 0.3rem 1rem;
    position: relative;
    bottom: -6%;
    line-height: 1.5;
    background-color: #f8f8f8;
    outline: none;
    border: none;
    &:focus{
        width: 100%;
        border: none;
        line-height: 1.5;
        outline: none;
    }
    &::placeholder{
        color: grey;
        background-color: white;
        font-size: 0.8rem;
    }

`
const ChatMain = styled.div`
    height: 100%;
`
const ChatBody = styled.div`
    height: 75% !important;
`
const ButtonChats = styled.button`
    
`
const AdminDiv = styled.div`
    display :flex;
    justify-content: left;
    `
const UserDiv = styled.div`
     display :flex;
     justify-content: right;
`
const ChatIcon = styled.div`
    font-size: 30px;
    position: fixed;
    right: 2%;
    top: 90%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:  10px 10px;
    color: white;
    background-color: ${props => props.theme.colors.primary};
    cursor: pointer;
    border-radius: 50px;
    `
const ChatBox = styled(motion.div)`
    height: 58vh;
    width: 22vw;
    background-color: white;
    position: fixed;
    top: 30%;
    left: 76.3%;
    border-radius: 10px;
    -webkit-transition: all 100ms ease;
    transition: all 100ms ease;
    box-shadow: 1px 1px 10px grey;
    overflow: hidden;
    z-index: 10;
    @media screen and (max-width:600px){
        height: 48vh;
        width: 62vw;
        background-color: white;
        position: fixed;
        top: 41%;
        left: 35.3%;
    }
    `

const ChatHeader = styled.div`
border-radius: 10px 10px 30px 30px;
background-color: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px 2px 20px ;
    cursor: pointer;
    border-bottom: 1px solid #ffffff57;
    height: 8vh;
`
const ChatLine = styled.div`
    color: white;
    font-weight: 500;
`
const ChatClose = styled.div`
    color: white;
    font-size: 1.4rem;
`
// const ChatHeader =styled.div``