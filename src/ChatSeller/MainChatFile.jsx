import React, { useState , useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import Footer from "../../src/form/form/Footer"
import Header from "../../src/form/form/header"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import one from "../../src/assets/images/one.png"
import two from "../../src/assets/images/two.png"
import three from "../../src/assets/images/three.png"
import AdminMessage from '../../src/ChatSeller/adminMessage'
import UserMessage from '../../src/ChatSeller/UserMessage'
import { AiOutlineSend } from 'react-icons/ai';
import {GrGallery} from 'react-icons/gr';
export default function MainChatFile() {
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
            <Header />
            <ChatMain>
                <Tabs variant='solid-rounded' colorScheme='blue' className="overflow-auto" orientation='vertical'>
                    <div className="row m-0 ">
                        <Width30>

                            <ListAll>
                                <SearchBAr className='d-flex align-items-baseline'>
                                    <ChatInput placeholder="Search" />
                                    <ChatSearchIcon>
                                        <FaSearch />
                                    </ChatSearchIcon>
                                </SearchBAr>
                                {/* tab panel chkra */}
                                <TabList display='flex' flexDirection='column'> 
                                    <Tab className="border-0 mt-3 m-1 p-2">
                                        <ParentList className="d-flex align-items-center ">
                                            <div className="col-2">
                                                <ProfileImg src={one} />
                                            </div>
                                            <User1 className='ms-3'>Nadeem choudhary</User1>
                                        </ParentList>
                                    </Tab>
                                    <Tab className="border-0  m-1 p-2">
                                        <ParentList className="d-flex align-items-center">
                                            <div className="col-2">
                                                <ProfileImg src={two} />
                                            </div>
                                            <User1 className='ms-3'>Aman gusain</User1>
                                        </ParentList>

                                    </Tab>
                                    <Tab className="border-0  m-1 p-2">
                                        <ParentList className="d-flex align-items-center">
                                            <div className="col-2">
                                                <ProfileImg src={three} />
                                            </div>
                                            <User1 className='ms-3'>Garv Mehta</User1>
                                        </ParentList>

                                    </Tab>
                                    <Tab className="border-0  m-1 p-2">
                                        <ParentList className="d-flex align-items-center">
                                            <div className="col-2">
                                                <ProfileImg src={one} />
                                            </div>
                                            <User1 className='ms-3'>Shaksham sethi</User1>
                                        </ParentList>

                                    </Tab>
                                </TabList>

                            </ListAll>

                        </Width30>
                        <Width70>

                            <TabPanels>
                                <TabPanel>
                                    <ChatBoxDiv>
                                        <SubHeader>
                                            <CHatBoxDp>
                                                <ImageDp src={one} className="col-1" />
                                                <ChaterName>
                                                    Nadeem
                                                </ChaterName>
                                            </CHatBoxDp>
                                        </SubHeader>
                                        <AdminDiv>
                                            <ArrowLeft />
                                            <AdminMessage data={'hey whtsapp'} />
                                        </AdminDiv>
                                        <UserDiv>
                                            <ArrowRight />
                                            <UserMessage />
                                        </UserDiv>
                                        <AdminDiv>
                                            <ArrowLeft />
                                            <AdminMessage data={'hey whtsapp'} />
                                        </AdminDiv>
                                        <UserDiv>
                                            <ArrowRight />
                                            <UserMessage />
                                        </UserDiv>
                                        <SendDiv className="d-flex ">
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
                                </TabPanel>
                                <TabPanel>
                                    <ChatBoxDiv>
                                        <SubHeader>
                                            <CHatBoxDp>
                                                <ImageDp src={two} className="col-1" />
                                                <ChaterName>
                                                    AMan gusai
                                                </ChaterName>
                                            </CHatBoxDp>
                                        </SubHeader>
                                        AMan gusai
                                    </ChatBoxDiv>
                                </TabPanel>
                                <TabPanel>
                                    <ChatBoxDiv>
                                        <SubHeader>
                                            <CHatBoxDp>
                                                <ImageDp src={three} className="col-1" />
                                                <ChaterName>
                                                    Garv Mehta
                                                </ChaterName>
                                            </CHatBoxDp>
                                        </SubHeader>
                                        Garv Mehta
                                    </ChatBoxDiv>

                                </TabPanel>
                                <TabPanel>
                                    <ChatBoxDiv>
                                        Saksham Sethi
                                    </ChatBoxDiv>
                                </TabPanel>
                            </TabPanels>
                        </Width70>
                    </div>

                </Tabs>

            </ChatMain>
            <Footer />
        </>
    )
}
const ArrowLeft = styled.div`
      content: " ";
  position: absolute;
  /* border: 1px solid red; */
  width: 20px;
  height: 18px;
  top: 0;
  left: -12px;
  margin: 10px 17px;
  background: linear-gradient(230deg ,#59c3f0   0% ,#59c3f0 50% , transparent 50% , transparent);
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
   margin: 0px 2px; 
  background: linear-gradient(135deg , grey  0% ,grey 50% , transparent 50% , transparent);
//   background : #59c3f0;
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
  height: 81vh;
  border-radius: 5px;
  padding: 10px;
  overflow: auto;
`
const ListAll = styled.div`
     margin: 10px 5px;
  box-shadow: 1px 1px 10px #8080807a;
  height: 75vh;
  border-radius: 5px;
  padding: 10px;
`
const SearchBAr = styled.div``
const ChatInput = styled.input`
    width: 100%;
    padding: 0.3rem 1rem;
    position: relative;
    bottom: -6%;
    line-height: 1.5;
    background-color: #f8f8f8;
    outline: none;
    border: 1px solid #dfdfdf;
    border-radius: 5px;
    &:focus{
        background-color: #f8f8f8;
        width: 100%;
        border: 1px solid #dfdfdf;
        line-height: 1.5;
        outline: none;
    }
    &::placeholder{
        color: grey;
        background-color: white;
        font-size: 0.8rem;
    }
`
const ChatSearchIcon = styled.div`
    color: gray;
    margin-left: 12px;
    cursor: pointer;
`
const User1 = styled.div`
  font-size: 0.9rem;
`
const ProfileImg = styled.img`
   width: 100%;
   height: 100%;
`
const ParentList = styled.div`
`
const Width30 = styled.div`
width: 27%;
padding: 0 0 0 10px;
`
const Width70 = styled.div`
width: 73%;
padding: 0 0 0 0px;
`
const ChatBoxDiv = styled.div`
  margin: 10px 5px;
  box-shadow: 1px 1px 10px #8080807a;
  height: 75vh;
  border-radius: 5px;
  position: relative;
  
  `
const SubHeader = styled.div`
padding: 10px;
    border-bottom: 1px solid #a8a8a879;
    height: 11vh;
    
    `
const CHatBoxDp = styled.div`
display: flex;
align-items: center;
width: 60%;
margin-left: 20px;
`
const ImageDp = styled.img`
`
const ChaterName = styled.div`
margin-left: 20px;
    
`