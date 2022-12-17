import React, { useState, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import Footer from "../../src/form/form/Footer"
import Header from "../../src/form/form/header"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import one from "../../src/assets/images/one.png"
import two from "../../src/assets/images/two.png"
import three from "../../src/assets/images/three.png"
// import AdminMessage from '../../src/ChatSeller/adminMessage'
// import UserMessage from '../../src/ChatSeller/UserMessage'
import { AiOutlineSend } from 'react-icons/ai';
import { GrGallery } from 'react-icons/gr';
export default function MessageScreen() {
    let textData;

    const [sendMess, setsendMess] = useState(false)
    const senMessage = (e) => {
        textData = document.getElementById('adminText').value;
        (e.target.value == "") ? setsendMess(true) : setsendMess(false)
        document.getElementById('adminText').value = ""

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
                                        <img src={one} className="userImage" />&nbsp;&nbsp;&nbsp;User Name</span>
                                    </div>
                                    <hr/>
                                       
                                       <ChatBoxDiv>
                                        <UserDiv>
                                            <ArrowRight />
                                            <UserMessage>
                                                <span>hello</span>
                                                </UserMessage>
                                        </UserDiv>
                                    <AdminDiv>
                                            <ArrowLeft />
                                            <AdminMessage>
                                                <span>hey User</span>
                                                </AdminMessage>
                                        </AdminDiv>
                                        <UserDiv>
                                            <ArrowRight />
                                            <UserMessage>
                                                <span>hello</span>
                                                </UserMessage>
                                        </UserDiv>
                                        <AdminDiv>
                                            <ArrowLeft />
                                            <AdminMessage>
                                                <span>hey User</span>
                                                </AdminMessage>
                                        </AdminDiv>
                                  
                                <SendDiv className='d-flex'>
                                <TextArea className='w-100' placeholder="Enter Your Message" />
                                            <GalleryIcon>
                                            <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
                                                <GrGallery onClick={onButtonClick} />
                                            </GalleryIcon>
                                            <SendIcon>
                                                <AiOutlineSend onClick={senMessage} />
                                            </SendIcon>
                                </SendDiv>
                                </ChatBoxDiv>
                                </ListAll>
                            </div>
                        {/* </ChatMain> */}
                   
            {/* <Footer /> */}
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
    width: 30%;
    /* float: right; */ 
    margin:0px 19px;
    padding: 5px 10px 5px 10px; 
    border-radius: 15px;
    font-size: 0.9rem;
 `
 const AdminMessage = styled.div`
    
 background: linear-gradient( #345276 ,100%, #497993 , 100% , transparent);
 width: 30%; 
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
    border-radius: 5px;
    margin:0 5px ;
    box-shadow: 1px 1px 10px  #38607829;
    width: 98%;
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
  height: 78vh;
  width: 70vw;
  border-radius: 5px;
  padding: 10px;
  margin-left: 2%;

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

  @media screen and (max-width : 600px) {
    margin: 10px 5px;
    //   box-shadow: 1px 1px 10px #8080807a;
      height: 75vh;
      border-radius: 5px;
      position: relative;
  }
  
  `

    
