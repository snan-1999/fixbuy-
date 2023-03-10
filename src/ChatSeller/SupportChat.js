
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import { RiChatSmile2Line, RiCloseLine } from 'react-icons/ri';
import { AiOutlineSend } from 'react-icons/ai';
// import ReactScrollToBottom from 'react-scroll-to-bottom'
import styled from 'styled-components'
// import AdminMessage from './adminMessage'
// import UserMessage from './UserMessage';
import { io } from 'socket.io-client'
import { baseUrl } from '../functions/constant';
import axios from 'axios'
import { Stack } from '@chakra-ui/react';

function SupportChat({ isOpen, setisOpen, setcloseBtn, closeBtn, RoomID }) {
    const [message, setMessage] = useState([])
    const Token = localStorage.getItem('token');
    let userid;
    if (Token) {
        userid = JSON.parse(Token).token

    }

    const socket = io("https://fixebuyofficial.in", {
        transports: ["websocket"]
    });
    // console.log(userid, 'userid')

    const Onclose = () => {
        setcloseBtn(false)
        setisOpen(false)
    }

    useEffect(
        () => {
            socket.connect();
            socket.on("connect", () => {
                console.log(socket.connected, "connected")
            });
        }, [])
    //    ye message fetch krega
    const fetchMessage = async (abc) => {
        console.log(abc, 'abc')
        const RenderMessage = []
        await axios.get(`https://fixebuyofficial.in/room/${abc}`).then(function (response) {
            console.log(response, 'Rendermessage')
            const responsedata = response.data.conversation
            console.log(responsedata, 'Rendermessagelength')
            {
                 responsedata.map((e) => {
                    console.log('push ho rha h ', 'Rendermessage')
                    RenderMessage.push({message: e.message.messageText, msguserId: e.postedByUser, msgroomId: e.chatRoomId})
                })
                //  :     RenderMessage.push({message: "", msguserId: "", msgroomId: ""})
                // console.log("ye sb khali h", 'Rendermessage')
            }
        })
        console.log(RenderMessage,'RenderMessage')
        setMessage(RenderMessage)
    }
    // fetch message 
    useEffect(() => {
        socket.emit('subscribe', RoomID)
        // console.log("cALL HU "+ RoomID);
        fetchMessage(RoomID)
        return () => {
            socket.emit('unsubscribe', RoomID)
        }
    }, [RoomID])
    // },[RoomID])

    //  live chat
    useEffect(() => {
        socket.on("new message", (e) => {
            console.log(e, 'msg1')
            console.log(e.chatRoomId, '112', 'not')
            console.log(RoomID, 'if', e.chatRoomId);

            if (e.chatRoomId === RoomID) {
                fetchMessage(e.chatRoomId)
            }
            else {
                console.log(e.chatRoomId, '113', RoomID, 'not')
            }
        })
    })

    const senMessage = async (e) => {
        const textData = document.getElementById('adminText').value;
        console.log("textdata", textData)
       

        try {
            const response = await axios.post(`https://fixebuyofficial.in/room/${RoomID}/message`, {
                "userId": userid,
                "messageText": textData
            })
            if (response.data.success === true) {
                fetchMessage(RoomID);
            }
        }
        catch (e) {
            console.log(e)
        }
        document.getElementById('adminText').value = "";
    }
    const BottomScroll = useRef(null);
    useEffect(() => {
        BottomScroll.current?.scrollIntoView();
    }, [message , isOpen])


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
                            <ChatLine>Support Help - online</ChatLine>
                            <ChatClose>
                                <RiCloseLine onClick={Onclose} />
                            </ChatClose>
                        </ChatHeader>
                        <ChatMain>
                            <ChatBody>
                                <ScrollDiv >
                                    {
                                        message.length > 0 ?
                                            message.map((a, i) => {
                                                // console.log(a.msguserId,userid,'msguserId')
                                                console.log(a.msgroomId, 'responsedata');
                                                return (
                                                    a.msguserId === userid ?
                                                        <UserDiv>
                                                            <ArrowRight />
                                                            <UserMessage >
                                                                <span>{a.message}</span>
                                                            </UserMessage >
                                                        </UserDiv>
                                                        :
                                                        <Div>
                                                            <ArrowLeft />
                                                            <AdminMessage >
                                                                <span>{a.message}</span>
                                                            </AdminMessage>
                                                        </Div>
                                                )
                                            })
                                            : null
                                    }
                                    <Stack h='1px' ref={BottomScroll}/>
                                </ScrollDiv>
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
        </>
    )
}

export default SupportChat

const ArrowLeft = styled.div`
content: " ";
position: absolute;
width: 20px;
height: 18px;
top: -30%;
left: 4px;
margin: 11px 5px;
background: linear-gradient(230deg ,#487792 20% ,#37577A 50%  ,transparent 50% ,transparent);
`

const ArrowRight = styled.div`
      content: " ";
  position: absolute;
  /* border: 1px solid red; */
  width: 20px;
  height: 10px;
  top: 0;
  right: 0;
   margin: 0px 11px; 
  background: linear-gradient(135deg , grey  0% , grey 50% , transparent 50% , transparent);
//   background : #59c3f0;
`

const SendIcon = styled.div`
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    margin-right: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    @media screen and (max-width:600px){
        margin-right: .4rem;
        
    }
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
    height: auto;
    margin-left: 3%;
    // width:100%;
`
const ChatBody = styled.div`
    height: 75% !important;
`
const ButtonChats = styled.button`
    
`
const Div = styled.div`
color: white;
display :flex;
position: relative;
justify-content: left;
margin-top: 2%;
// z-index: 1;
`

const UserDiv = styled.div`
color: white;
display :flex;
position: relative;
justify-content: right;
margin-top: 2%;
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
    /* height: 50vh; */
    width: 20vw;
    background-color: white;
    position: fixed;
    top: 38%;
    left: 77.3%;
    border-radius: 10px;
    -webkit-transition: all 100ms ease;
    transition: all 100ms ease;
    box-shadow: 1px 1px 10px grey;
    overflow: hidden;
    z-index: 10;
    @media screen and (max-width:600px){
        height: auto;
        width: 62vw;
        background-color: white;
        position: fixed;
        top: 33%;
        left: 35.3%;
        padding-bottom: 5px;
    }

    @media screen and (min-width: 601px) and (max-width: 900px){
        height: 48vh;
        width: 35vw;
        background-color: white;
        position: fixed;
        top: 41%;
        left: 60.3%;
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

    @media screen and (max-width: 600px){
        font-size: 13px;
    }
`
const ChatClose = styled.div`
    color: white;
    font-size: 1.4rem;
`
const AdminMessage = styled.div`
 background: linear-gradient(${props => props.theme.colors.primary} , ${props => props.theme.colors.secondary});
    //  width: 30%;
    max-width: 60%;
     /* float: right; */ 
     margin:0px 19px;
     padding: 5px 10px 5px 10px; 
     border-radius: 15px;
     font-size: 0.9rem;
    //  position:absolute;
    z-index:2;
 `

const UserMessage = styled.div`
  background-color: grey;
    //  width: 30%;
    max-width: 60%;
     /* float: right; */ 
     margin:0px 19px;
     padding: 5px 10px 5px 10px; 
     border-radius: 15px;
     font-size: 0.9rem;
  `

const ScrollDiv = styled.div`
overflow : auto;
height : 39vh !important;
// position : relative;
`