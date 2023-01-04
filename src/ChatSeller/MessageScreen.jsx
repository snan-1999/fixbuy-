import React, { useState, useRef, useEffect } from 'react'
import { FaRegImage, FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import Footer from "../../src/form/form/Footer"
import Header from "../../src/form/form/header"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { io } from 'socket.io-client'
import axios from 'axios'
import { ImageView } from '../functions/constant'
import { AiOutlineSend } from 'react-icons/ai';
import { GrGallery } from 'react-icons/gr';
import {Scrollbars} from 'react-custom-scrollbars';
import { useLocation } from 'react-router-dom'
export default function MessageScreen({ infoprofiledata, location, selectedroom }) {
  
    // const selectedroomid = selectedroom
    // const {infoprofiledata,location,selectedroom} = useLocation()
    const RoomID = infoprofiledata.length > 0 ? infoprofiledata[0].room_Id : location.state.roomId
    
    { console.log(selectedroom, '11') }
    const [message, setMessage] = useState([])
    const Token = localStorage.getItem('token');
    const userid = JSON.parse(Token).token
    const socket = io("https://fixebuyofficial.in", {
        transports: ["websocket"]
    });
    // useEffect(() => {
    //     socket.on("connect", () => {
    //         console.log('socket', socket)
    //         console.log(socket.connected, 'connected socket');
    //         console.log("something in this id is here", socket.id) // true
    //     })
    // }, [])
    useEffect(
        () => {
          socket.connect();
          socket.on("connect", ()=>{
            console.log(socket.connected,"connected")
          });
        },[])

    // subscribe socket
    // useEffect(() => {
    //     // console.log(RoomID,'selectedroomajay')
       
    // }, [])
    //    ye message fetch krega
    const fetchMessage = async (abc) => {
        console.log(abc, 'abc')
        const RenderMessage = []
        await axios.get(`https://fixebuyofficial.in/room/${abc}`).then(function (response) {
            console.log(response, 'Rendermessage')
            const responsedata = response.data.conversation
            console.log(responsedata.length, 'Rendermessagelength')
            {
                responsedata.length > 0 ? responsedata.map((e) => {
                    console.log('push ho rha h ', 'Rendermessage')
                    RenderMessage.push({message: e.message.messageText, msguserId: e.postedByUser, msgroomId: e.chatRoomId})
                }) :RenderMessage.push({message: "", msguserId: "", msgroomId: ""})
                console.log("ye sb khali h", 'Rendermessage')
            }
        })
        setMessage(RenderMessage)
    }

    // fetch message 
    useEffect(() => {
        socket.emit('subscribe', RoomID)
        console.log("cALL HU "+ RoomID);
        fetchMessage(RoomID)
        return () =>{
            socket.emit('unsubscribe',RoomID)
        }
    },[RoomID])
    // console.log(RoomID,'if');
    //  live chat
    useEffect(() => {
        socket.on("new message", (e) => {
            console.log(e, 'msg1')
            console.log(e.chatRoomId, '112', selectedroom, 'not')
            console.log(RoomID,'if',e.chatRoomId);
            if (e.chatRoomId === RoomID){
            fetchMessage(e.chatRoomId) 
            }
            else {
                console.log(e.chatRoomId, '113', selectedroom, 'not')
            }
        })
    })
    let textData;
    const [inputMessage, setInputMessage] = useState()
    const [sendMess, setsendMess] = useState(false)
    const senMessage = async (e) => {
        const textData = document.getElementById('message').value;
        if((textData.trim() === "")){
            return
        } else {
            try {
                const response = await axios.post(`https://fixebuyofficial.in/room/${RoomID}/message`, {
                    "userId": userid,
                    "messageText": textData
                })
                if (response.data.success === true) {
                    fetchMessage(RoomID);
                }
                console.log(response, 'inputresponse')
            }
            catch (e) {
                console.log(e)
            }
            document.getElementById('message').value = "";

        }
        
    }
    const EnterKeyPress = async(e)=>{
        if (e.keyCode == 13 && textData !== '') {
            const textData = document.getElementById('message').value;
        
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
            document.getElementById('message').value = "";
        }
}
    const inputFile = useRef(null)
    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    };
    
    
    return (
        <>

        
            <div className='row m-0'>
                <ListAll className='NamesColumn'>
                    <div className='mt-3 px-3'>
                        <span className='chatheading'>
                            <img src={infoprofiledata.length > 0 ? `${ImageView}${infoprofiledata[0].image}` : `${ImageView}${location.state.image}`} className="userImage" />&nbsp;&nbsp;&nbsp;
                            {/* User Name */}
                            {infoprofiledata.length > 0 ? infoprofiledata[0].name : location.state.name}</span>
                    </div>
                    <hr />

                    <ChatBoxDiv>
                        <ScrollDiv>
                        {
                            message.length > 0 ?
                                message.map((a, i) => {
                                    // console.log(a.msguserId,userid,'msguserId')
                                    console.log(a.msgroomId, 'responsedata');
                                    return (

                                        
                                        a.msguserId === userid ?
                                           
                                            <UserDiv>
                                                <ArrowRight />
                                                <UserMessage>
                                                    <span>{a.message}</span>
                                                </UserMessage>
                                            </UserDiv> :
                                            <AdminDiv>
                                                <ArrowLeft />
                                                <AdminMessage>
                                                    <span>{a.message}</span>
                                                </AdminMessage>
                                            </AdminDiv>
                                            
                                            
                                            )
                                        })
                                        : null
                                    }
                        
                                    </ScrollDiv>
                        <SendDiv className='d-flex'>
                            <input className='w-100 EnterMesaage' placeholder="Enter Your Message" id="message" onKeyUp={EnterKeyPress} />
                            <GalleryIcon>
                                <input type='file' id='file' ref={inputFile} style={{ display: 'none' }} />
                                <FaRegImage onClick={onButtonClick} />
                            </GalleryIcon>
                            <SendIcon>
                                <AiOutlineSend onClick={senMessage} />
                            </SendIcon>
                        </SendDiv>
                            </ChatBoxDiv>
                </ListAll>
            </div>
           
                                    
        </>
    )
}
const ArrowLeft = styled.div`
      content: " ";
  position: absolute;
  /* border: 1px solid red; */
  width: 20px;
  height: 18px;
  top: 1%;
  left: -7px;
  margin: 10px 17px;
  background: linear-gradient(230deg ,#345276  50% ,#497993 50% , transparent 50% , transparent);
// background : #59c3f0;
`
const ArrowRight = styled.div`
      content: " ";
  position: absolute;
  /* border: 1px solid red; */
  width: 20px;
  height: 10px;
  top: 0;
  right: 0;
   margin: 0px 8px; 
  background: linear-gradient(135deg , grey  0% ,grey 50% , transparent 50% , transparent);
//   background : #59c3f0;
`
const UserMessage = styled.div`
     background-color: grey;
    width: auto;
    max-width: 35%;
    /* float: right; */ 
    margin:0px 19px;
    padding: 5px 10px 5px 10px; 
    border-radius: 15px;
    font-size: 0.9rem;
 `
const AdminMessage = styled.div`
    
 background: linear-gradient( #345276 ,100%, #497993 , 100% , transparent);
 width: auto;
 max-width: 35%;
 margin:10px 20px; 
 padding: 5px 10px 5px 10px; 
 border-radius: 15px;
 font-size: 0.9rem;
 /* &::before{
     border-color: #59c3f0;
     border-color: #59c3f0;
 border-style: solid;
 content: "";
 height: 0;
 position: absolute;
 width: 0;
 border-width: 1px 10px 10px 0px;
 left: 5px;
 top: 12px;
 -webkit-transform: rotate(-65deg);
 -webkit-transform: rotate(-65deg);
 -ms-transform: rotate(-65deg);
 transform: rotate(-138deg);
 z-index: -1;
 } */
`

const SendDiv = styled.div`
 position: absolute;
    bottom: 0;
    left: 0;
    border: 1px solid #3860788d;
    border-radius: 17px;
    margin:5% 5px ;
    box-shadow: 1px 1px 10px  #38607829;
    width: 98%;
    padding: 3px 0 3px;
`
const SendIcon = styled.div`
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    margin-right: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
`
const GalleryIcon = styled.div`
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    margin-right: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
`

const TextArea = styled.input`
   
    width: 100%;
    padding: 0.3rem 1rem;
    margin: 0.3rem 1rem 0.1rem 0rem;
    position: relative;
    bottom: -6%;
    line-height: 1.5;
    background-color: #f8f8f8;
    outline: none;
    border: none;
    /* border:1px solid #bababa !important ; */
    
    border-radius: 5px;
    /* box-shadow: 1px 1px 10px #80808069; */
    &:focus{
        background-color: #f8f8f8;
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
const AdminDiv = styled.div`
    display :flex;
    justify-content: left;
    position: relative;
    color: white;
    `
    const UserDiv = styled.div`
color: white;
     display :flex;
     position: relative;
     justify-content: right;
     margin-top: 1%;
`
const ChatMain = styled.div`
  margin: 10px 5px;
  box-shadow: 1px 1px 10px #8080807a;
  height: 84vh;
  border-radius: 5px;
  padding: 10px;
  overflow: auto;
`
const ListAll = styled.div`
     margin: 10px 5px;
  box-shadow: 1px 1px 10px #8080807a;
  height: 70vh;
  width: 70vw;
  border-radius: 5px;
  padding: 10px;
  margin-left: 1%;

  @media screen and (max-width : 600px) {
    margin: 10px 5px;
    box-shadow: 1px 1px 10px #8080807a;
    height: 91vh;
    width: 95vw;
    border-radius: 5px;
    padding: 10px;
    margin-left: 2%;
  }
`

const ChatBoxDiv = styled.div`
  margin: 10px 5px;
//   box-shadow: 1px 1px 10px #8080807a;
  height: 61vh;
  border-radius: 5px;
  position: relative;
//   overflow-y : scroll;

  @media screen and (max-width : 600px) {
    margin: 10px 5px;
    //   box-shadow: 1px 1px 10px #8080807a;
      height: 75vh;
      border-radius: 5px;
      position: relative;
  }
  
  `

const ScrollDiv = styled.div`
overflow : auto;
height : 46vh !important;
// position : relative;
`


