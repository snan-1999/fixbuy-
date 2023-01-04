import React, { useState, useRef, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import styled, { css } from 'styled-components'
import Footer from "../../src/form/form/Footer"
import Header from "../../src/form/form/header"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import one from "../../src/assets/images/one.png"
import { AiOutlineSend } from 'react-icons/ai';
import { GrGallery } from 'react-icons/gr';
import MessageScreen from './MessageScreen'
import MobChatFile from './MobChatFile'
import { useLocation } from 'react-router-dom'
import { ImageView } from '../functions/constant'
import axios from 'axios'
import Scrollbars from 'react-custom-scrollbars'
export default function MainChatFile() {

    const [allactiveuser, setAllActiveUser] = useState([])
    const [infoprofiledata, setInfoProfileData] = useState([])
    const Token = localStorage.getItem('token');
    const tokenid = JSON.parse(Token).token;
    const [selectedroom, setSelectedRoom] = useState(null)
    useEffect(() => {
        ShowActiveChat()
    }, [])
    const SellerUser = allactiveuser.filter((i) => {
        return (i[0].UserType === 'seller')
    })
    console.log(SellerUser, 'sellerUser')
    const BuyerUser = allactiveuser.filter((i) => {
        return (i[0].UserType === 'buyer')
    })
    console.log(BuyerUser, 'sellerUser2')

    const ShowActiveChat = async () => {
        let names = [];
        console.log(tokenid, 'tokenaj')
        await axios.get(`https://fixebuyofficial.in/room/active/${tokenid}`).then(function (response) {
            console.log(response, 'userrecieved')
            console.log("arr ", response.data.activeRooms);
            response.data.activeRooms.map((i) => {
                console.log('name', i)
                console.log("name", i.users[0].name, 'image', i.users[0].profileImg, "roomId", i.room._id);
                console.log("am", i.room.users[0])
                // users ko filter krne k liye h ye
                const userfilter = i.users.filter((e) => {
                    return e._id != tokenid
                })
                const TypeOfUser = i.room.users.filter((a) => {
                    if (a.userId !== tokenid) {
                        return a.userType
                    }
                })
                console.log(TypeOfUser[0]?.userType, 'typeofuser')
                names.push([{ name: userfilter[0]?.name, image: userfilter[0]?.profileImg, room_Id: i.room._id, UserType: TypeOfUser[0]?.userType }])
            })
        })
        setAllActiveUser(names)
        console.log('888888', names)
    }
    const handleUserChat = (data) => {
        setInfoProfileData(data)
        console.log(data, 'if0')
        // alert(data[0].room_Id)
        setSelectedRoom(data[0].room_Id)
        console.log(data[0].room_Id, 'UserRoomId')
    }

    let textData;
    const location = useLocation()
    console.log(location, 'state')
    // const addroom = location.state.roomId
    const [sendMess, setsendMess] = useState(false)
    const [active, setActive] = useState(0);
    const [activechat, setactivechat] = useState(0);
    const inputFile = useRef(null)

    const onButtonClick = () => {


        // `current` points to the mounted file input element
        inputFile.current.click();
    };

    // allactiveuser.filter((e)=>{
    // })

    return (
        <>



            <Header />

            <div class="containers deskChat">

                <div class="page-wrapper">

                    <div class="page-content">
                        <ChatMain className="ChatMain d-flex">
                            <div className='row m-0'>
                                <ListAll className='NamesColumn overflow-hidden'>
                                    <div className='mt-3 px-3'>
                                        <span className='chatheading'>CHATS</span>
                                    </div>

                                    <div className='d-flex justify-content-evenly text-center mt-4 sellerBuyer'>

                                        {
                                            ["Seller", "Buyer"].map((values, i) => {
                                                return (
                                                    <TabButton active={active == i} className='seller' onClick={() =>{ setActive(i); setactivechat(0)}}>{values}</TabButton>
                                                )
                                            })
                                        }

                                    </div>

                                    <div className='mt-3'>
                                        <ScrollDiv>
                                            {/* <div className='NameImageGap'> */}
                                            <ul class="list-group list-group-flush">

                                                {
                                                    allactiveuser.length > 0 ?
                                                        active === 0 ? SellerUser.map((i, index) => {
                                                            { console.log(index, 'index') }
                                                            { console.log(i, 'sellername') }
                                                            { console.log(i[0].name, 'sellername') }
                                                            // console.log(i[0], 'i is here ')
                                                            return (
                                                                
                                                                <ChatColor activechat={activechat == index} onClick={() => setactivechat(index)}>
                                                                    <li style={{ cursor: "pointer" , border:"none" , borderBottom:"1px solid lightgrey" }} activechat={activechat == index} class="list-group-item mt-2 " >
                                                                        <img src={`${ImageView}${i[0].image}`} style={{ width: '15%', height: '15%', borderRadius: "50%" }} />
                                                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="tabChatHead" onClick={() => { handleUserChat(i); }}>{i[0].name}</span>
                                                                    </li>
                                                                </ChatColor>
                                                            )
                                                        }) : BuyerUser.map((i, index) => {
                                                            { console.log(i[0], 'iiiiiiiiii[0]') }
                                                            { console.log(i[0].name, 'nmae') }
                                                            console.log(i[0], 'i is here ')
                                                            return (
                                                                <ChatColor activechat={activechat == index} onClick={() => setactivechat(index)}>
                                                                    <li class="list-group-item mt-2" style={{ cursor: "pointer" , border:"none" , borderBottom:"1px solid lightgrey" }}>
                                                                        <img src={`${ImageView}${i[0].image}`} style={{ width: '15%', height: '15%', borderRadius: "50%" }} />
                                                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className='tabChatHead' activechat={activechat == index} onClick={() => { handleUserChat(i)}}>{i[0].name}</span>

                                                                    </li>
                                                                </ChatColor>
                                                            )
                                                        }) : null
                                                }
                                            </ul>
                                            {/* </div> */}
                                        </ScrollDiv>
                                    </div>
                                </ListAll>
                            </div>
                            {
                                location.state === null && infoprofiledata.length == 0 ? <div className='demomessage'>Connect with us through chat</div> : <MessageScreen infoprofiledata={infoprofiledata} location={location} selectedroom={selectedroom} />
                            }



                        </ChatMain>
                    </div>
                </div>
            </div>
            <div className='mobViewChat'>
                <MobChatFile />
            </div>
            {/* <Footer /> */}
        </>
    )
}

const TabButton = styled.button`
all: unset;
gap:10px;
width: 30%;
padding: 1% 10%;
height: 6vh;
border: none;
border-radius: 15px;
color:black;
// margin: ;
${({ active }) => active && css`
background: linear-gradient( #345276 ,100%,#497993 ,100% ,transparent);
color:white;

`

    }
`

const ChatColor = styled.div`
all: unset;
border: none;
// border-radius: 15px;
color:black;
// margin: 12% 23%;
${({ activechat }) => activechat && css`
background : linear-gradient( #345276 ,100%,#497993 ,100% ,transparent) !important;
color:white;
z-index : 10;
`
    }
.list-group-item{
    // all : unset !important;
    // color : red !important;
    ${({ activechat }) => activechat && css`
    background : linear-gradient( #345276 ,100%,#497993 ,100% ,transparent) !important;
    color:white !important;
    z-index : 10;
    `
    }
}
`
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
  margin: 10px 20px;
  box-shadow: 1px 1px 10px #8080807a;
  height: 76vh;
  border-radius: 5px;
  width: 98vw;
  position: fixed;
  padding: 10px;
//   overflow: auto;

@media screen and (min-width: 601px) and (max-width: 900px) {
    margin: 10px 9px;
}
`
const ListAll = styled.div`
     margin: 10px 5px;
  box-shadow: 1px 1px 10px #8080807a;
  height: 70vh;
  width: 25vw;
  border-radius: 5px;
  padding: 10px;
  margin-left: 1%;
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

const ScrollDiv = styled.div`
height : 45vh;
// border: 1px solid grey;
overflow : scroll;

`