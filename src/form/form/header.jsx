import React, { useEffect, useState } from "react";
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import logo from '../../assets/images/logo.png';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { localStorage } from "../../functions/Local";
import { VerifyOtp } from "../../functions/VerifyOtp";
import { UpdateApi } from "../../functions/UpdateApi";
import { GoogleLogout } from "react-google-login";
import { baseUrl, ImageView } from "../../functions/constant";
import axios from "axios";
import ShopModal from "./Modals/ShopModal";
import { AnimatePresence } from "framer-motion";
import { Button, Stack, useMediaQuery } from "@chakra-ui/react";
import { FcShop } from 'react-icons/fc'
import { GlobalVariables } from "../../Context/StateProvider";
import { useContext } from "react";
import { SearchHome } from "../../functions/HomeFun";
import { FaHeart } from "react-icons/fa";
import { BsChatQuoteFill, BsFillChatRightDotsFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import UserDeleteModal from "./Modals/DeleteModal";
import LogoutModal from "./Modals/LogoutModal";
import { IoIosRocket } from 'react-icons/io';

const Header = () => {

    const { Lmore, setLmore, latitude, setlatitude, Longitude, ProfileUpdate, UserId, setUserId } = useContext(GlobalVariables)
    const [LocalData, setLocalData] = useState("")
    const UserLogin = window.localStorage.getItem('loginThrough');
    console.log(UserLogin, 'userlogin data')

    const LoginthroughData = JSON.parse(UserLogin)?.loginCome;
    console.log(LoginthroughData, 'loginthroughData')
    let ProfleId;
    let IdData;
    let Type;
    let userProfileName;
    let userProfileImg;
    IdData = window.localStorage.getItem('token');
    // console.log(userProfileImg, 'userProfileName')
    console.log(userProfileName, 'userProfileName')
    if (IdData) {
        userProfileName = JSON.parse(IdData).profileName;
        userProfileImg = JSON.parse(IdData).profileImg;

        ProfleId = JSON.parse(IdData).token;
        Type = JSON.parse(IdData).type;
    }
    // const IdData = localStorage.getItem('token');

    // console.log(JSON.parse(IdData).type, 'localData');
    const [message, setMessage] = useState('');
    const [gstnumber, setGstNumber] = useState('');
    console.log(gstnumber);
    const [address, setAddress] = useState('');
    const [show, setShow] = useState('');
    const [errors, seterrors] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);
    const [isOpen, setisOpen] = useState(false)
    const Onclose = () => setisOpen(false)
    const OnOpen = () => setisOpen(true)
    // if(profileName){}
    const profileName = localStorage('token');
    let lastname = window.localStorage.getItem('token');
    console.log(lastname, 'tokenData')
    const nav = useNavigate();
    const sellLog = () => {
        // console.log('work ')
        if (profileName === null) {
            // console.log('work1 ')
            nav('/login')
        } else {
            // console.log('work 2')
            nav('/sell')
        }
    }
    const profilefunction = () => {
        const checkk = !window.localStorage.getItem('token')
        console.log(checkk, 'tokenData')
        if (window.localStorage.getItem('token') == null) {
            // alert('yes')
            nav('/login')
        }

    }
    const [Upstate, setUpstate] = useState(0)

    let id;
    const Update = async () => {
        // console.log(setSearch, 'count')
        id = JSON.parse(profileName).token
        await UpdateApi(id).then((res) => {
            console.log(res, 'iupdate');
            // setShow()
            console.log(res.status.data[0].profileImg);
            if (res.status) {
                window.localStorage.setItem(
                    'token',
                    JSON.stringify({
                        'token': res.status.data[0]._id,
                        'profileName': res.status.data[0].name,
                        'email': res.status.data[0].email,
                        'profileImg': res.status.data[0].profileImg,
                        'profileImg': res.status.profileImg,
                        'name': res.status.data[0].name,
                        'type': res.status.data[0].type,
                        'phone': res.status.data[0].phone,
                        'status': 'login'
                    })
                )
                setUserId(res.status.data[0]._id)
                // console.log(LocalData)
            } else {

                // console.log(res)
            }
        })
    }
    const [search, setSearch] = useState("")
    const [SearchData, setSearchData] = useState([])
    //search 
    console.log('jjjjj')
    // const SearchBar = async () => {
    //     const { data } = await SearchHome(Longitude, latitude, search, Lmore)
    //     setSearchData(data.data)
    //     console.log(data, 'searchResult')
    //     console.log(search, 'search')

    // }
    // console.log(profileImg);
    const AutoSearch = (e) => {
        // SearchEl.addEventListener("keyup", async (e) => {
        console.log(e.keyCode, 'keyVal')
        if (e.keyCode == 13) {
            console.log("enter is pressed", 'serachData')
            nav('/search-home-result', { state: search })
        }
        // })
    }
    useEffect(() => {
        // setLocalData(JSON.parse(profileName));
        (id !== null) && Update()
        setUpstate(Upstate + 1)
        console.log(LocalData, 'first')
    }, [0]);
    useEffect(() => {
        setTimeout(() => {
            setLocalData(JSON.parse(profileName));
            Update()
            console.log('hi')
        }, 100)
        console.log(LocalData, 'second')
        console.log('sevcond')
    }, [Upstate, userProfileImg])

    const SearchBar = () => { }

    const UpdateShop = async () => {
        console.log(gstnumber, address, 'checkihn')
        // let data = {}
        const api = (`${baseUrl}/users/updateUser/toShop/${ProfleId}`);
        await axios.put(api, {
            gst_no: gstnumber,
            shop_address: address
        }).then((response) => {
            console.log(response, "shop user");
            if (response.status) {
                toast(response.data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    type: 'success'
                });
                Onclose()
                setMessage('Upgraded!');
                seterrors(true);
            }
        }, error => {
            // console.log(error.response);
        },)
    }
    const [ListData, setListData] = useState([])
    const SubData = [
        "All",
        "Machinery",
        "Component parts",
        "Major equipment",
        "Accessories equipment"
    ]
    const SubData1 = [
        "All",
        "Lithium-ion battery",
        "Sli batteries",
        "Hydride battery",
        "Silver calcium battery"
    ]
    let SubMenuEl = document.getElementById('SubMenu')
    let SubMenuCategroyEl = document.getElementById('subItemss')
    let SubMenuEl1 = document.getElementById('SubMenu1')
    let SubMenuCategroyEl1 = document.getElementById('subItemss1')
    const ShowHide = () => {
        SubMenuCategroyEl.classList.add('activeAdd')
        SubMenuCategroyEl1.classList.remove('activeAdd')
        setListData(
            SubData.map((res) => {
                return (
                    <>
                        <li className="bghover">{res}</li>
                    </>
                )
            })
        )

    }
    const ShowHide1 = () => {
        SubMenuCategroyEl1.classList.remove('activeAdd')
        SubMenuCategroyEl1.classList.add('activeAdd')
        setListData(
            SubData1.map((res) => {
                return (
                    <>
                        <li className="bghover">{res}</li>
                    </>
                )
            })
        )

    }
    // SubMenuCategroyEl1.classList.add('activeAdd')
    const HideShow = () => {
        SubMenuCategroyEl.classList.remove('activeAdd')
        // SubMenuCategroyEl1.classList.remove('activeAdd')
        // SubMenuCategroyEl.style.display = "none"
    }
    if (SubMenuEl) {
        SubMenuEl.addEventListener('mouseenter', ShowHide)
        SubMenuEl1.addEventListener('mouseenter', ShowHide1)
        // SubMenuEl.addEventListener('mouseleave', HideShow)
        SubMenuCategroyEl.addEventListener('mouseenter', ShowHide)
        SubMenuCategroyEl.addEventListener('mouseleave', HideShow)
        // SubMenuEl1.addEventListener('mouseleave', HideShow)
    }
    const [ModalOpen, setModalOpen] = useState(false)
    const [LogoutOpen, setLogoutOpen] = useState(false)
    const MOdalOpenFun = () => {
        setModalOpen(true)
    }
    const MOdalOpenFunLogout = () => {
        setLogoutOpen(true);

    }
    const [isMobile] = useMediaQuery("(max-width : 600px)");
    const [scrollPosition, setScrollPosition] = useState(false);
    const handleScroll = () => {
        const position = window.pageYOffset;
        // setScrollPosition(position);
        console.log(position, 'position')
    
        if (position > 100) { 
            setScrollPosition(true)  
        } else if (position < 150) {

            setScrollPosition(false) 
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const DeleteData = () => {
        //   setDelId(id)
    }
    //    if( window.scrollTo('10px',"10px")){
    //         alert(true)
    //     } 
    // let scrollHeight = Math.max(
    //     document.body.scrollHeight, document.documentElement.scrollHeight,
    //     document.body.offsetHeight, document.documentElement.offsetHeight,
    //     document.body.clientHeight, document.documentElement.clientHeight
    // );
    // console.log(window.pageYOffset, 'scrollHeight')
    // const [NavHideShow, setNavHideShow] = useState(false)
    // console.log(document.body.scrollTop, 'fjfj')
    // const listenToScroll = () => {

    //     console.log(document.documentElement.scrollTop, 'fjfj')
    //     if(document.documentElement.scrollTop > 20){
    //         setNavHideShow(true)  
    //         console.log('yesss')
    //     }else{
    //         setNavHideShow(false)  
    //         console.log('yess1')
    //     }
    // }
    // useEffect(() => {

    //     window.addEventListener("scroll", listenToScroll);

    // }, [])

    // useEffect(() => {

    // }, [document.documentElement.scrollTop])

    // useEffect(() => { 

    //     if (window.pageYOffset == 100) {
    //         setNavHideShow(true)

    //     } else { 
    //         setNavHideShow(false)

    //     }
    // } , [window.pageYOffset])

    // const[sellerid,setSellerid] = useState(null)
    // const Token = localStorage.getItem('token');
    // var userid;
    // if(Token){
    //  userid=JSON.parse(Token).token
    // } 
    // const [TokenID, setTokenID] = useState({
    //     'ID': JSON.parse(Token)?.token,
    //     'Name': JSON.parse(Token)?.name,
    //     'Email': JSON.parse(Token)?.email,
    //     'Phone': JSON.parse(Token)?.phone,
    // })
    // const ChatSeller = async() => {
    //     if (Token === null) {
    //         nav('/login')
    //     } else {


    //         const api =` ${baseUrl}/room/initiate`;
    //         // console.log(chatRoomId,'chatRoomId')

    //     try{
    //         console.log(TokenID.ID,sellerid,'sellerid')
    //         //  63777f0e14f32ec739050bae 634123e8832860cfb6788fde
    //         const response = await axios.post(api,{
    //             "users" : [{"userId":userid,"userType":"buyer"},{"userId":sellerid,"userType":"seller"}],
    //             "type" : 'consumer-to-consumer'
    //         })
    //         const chatRoomId = response.data.chatRoom.chatRoomId;
    //         // console.log("9999",response.data.chatRoom.chatRoomId)
    //         // console.log(response,'room')
    //         // console.log(response.data.success,'success')
    //         if(response.data.success ===  true){
    //             try{
    //                 const dataresponse =  await axios.get(`https://fixebuyofficial.in/room/${chatRoomId}`)
    //                 console.log(dataresponse,'dataresponse')
    //                 // console.log(dataresponse.data.users,'44555')
    //                 const filterdataofuser = dataresponse.data.users.filter((i)=>{
    //                          return i._id !== TokenID.ID
    //                 })
    //                 console.log(filterdataofuser,'filter')
    //                 // alert(chatRoomId)
    //                 console.log(filterdataofuser[0].profileImg,filterdataofuser[0].name,'44555')
    //                 nav("/mainchatfile",{state:{name:filterdataofuser[0].name,
    //                 image:filterdataofuser[0].profileImg,roomId:chatRoomId}})

    //             }
    //             catch(e){
    //                 console.log(e,'room')

    //             }
    //         }

    //     }
    //     catch(e){
    //         console.log(e)

    //     }
    // }

    //     }

    return (
        <>
            {/* <button onClick={()=> setcheck('nandita')}>onClick</button> */}
            <UserDeleteModal
                {
                ...{
                    ModalOpen,
                    setModalOpen,
                    DeleteData,

                }
                }
            />
            {/* Logout Modal */}
            <LogoutModal
                {
                ...{
                    LogoutOpen,
                    setLogoutOpen,
                    MOdalOpenFunLogout,

                }
                }
            />
              <ShopModal Onclose={Onclose} OnOpen={OnOpen} isOpen={isOpen} setisOpen={setisOpen} Type={Type} UpdateShop={UpdateShop} gstnumber={gstnumber} setGstNumber={setGstNumber} address={address} setAddress={setAddress} />

            <ToastContainer />
            <div className="FullMain m-0 position-relative p-0 p-md-auto p-lg-auto">
                {/* FOr mob */}
                {
                    // !scrollPosition ?
                        <div className=" d-block d-md-block d-lg-block mobnvfixedWork" >
                            <nav className="navbar navbar-expand-lg headerr" >
                                <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
                                        <i className="fas fa-bars"></i>
                                    </button>
                                    <div className="logo">
                                        <Link to="/" className="navbar-brand" >
                                            <img src={logo} alt="logo" /></Link>
                                    </div>


                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <div className="inline-menu">
                                            <div className="setmnu">
                                                <ul className="navbar-nav menu">
                                                    <li className="nav-item aa">
                                                        <Link to="/" className="nav-link active" aria-current="page">HOME</Link>
                                                    </li>
                                                    <li className="nav-item aa">
                                                        <Link to="/shop" className="nav-link">SHOP</Link>
                                                    </li>
                                                    <li className="nav-item aa">
                                                        <Link to="/about" className="nav-link">ABOUT US</Link>
                                                    </li>
                                                    <li className="nav-item aa">
                                                        <Link to="/faq" className="nav-link">F.A.Q</Link>
                                                    </li>
                                                    <li className="nav-item aa">
                                                        <Link to="/blogs" className="nav-link">BLOGS</Link>
                                                    </li>
                                                    <li className="nav-item aa">
                                                        <Link to="/contact" className="nav-link">CONTACT US</Link>
                                                    </li>
                                                    <li className=" nav-item aa mob-login">
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="form-inline my-2 my-lg-0 desk-version">
                                                <input className="form-control mr-sm-2 " type="text" id="search" placeholder="Search Car, Bikes and Mobiles" name="search" onKeyUp={AutoSearch} onChange={(e) => setSearch(e.target.value)} />
                                                <Link to="/search-home-result" state={search}><button className="btn btn-outline-success my-2 my-sm-0 shadow-none" id="Search" onClick={SearchBar}>Search</button></Link>
                                            </div>
                                            <div className="row p-0 m-0 mob-cen">
                                                <div className="col-12 mainbutton">
                                                    <button className="btn btn-primary shadow-none" onClick={sellLog}> + SELL</button>
                                                </div>
                                            </div>

                                        </div>


                                    </div>

                                </div>

                            </nav>
                            {/* mobile  nav*/}
                            {/* <Stack display={isMobile ? 'block' : 'block'}>

                            </Stack> */}


                            <nav className="setMobBox">
                                <div className="inline-menu1">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >


                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">


                                            <div className="inline-menu1" style={{display : scrollPosition ? 'none' : 'block'}}>
                                                <div className="setmnu">
                                                    <ul className="navbar-nav menu">
                                                        <li className="nav-item aa">
                                                            <Link to="/" className="nav-link active" aria-current="page">HOME</Link>
                                                        </li>
                                                        <li className="nav-item aa">
                                                            <Link to="/shop" className="nav-link">SHOP</Link>
                                                        </li>
                                                        <li className="nav-item aa">
                                                            <Link to="/about" className="nav-link">ABOUT US</Link>
                                                        </li>
                                                        <li className="nav-item aa">
                                                            <Link to="/faq" className="nav-link">F.A.Q</Link>
                                                        </li>
                                                        <li className="nav-item aa">
                                                            <Link to="/blogs" className="nav-link">BLOGS</Link>
                                                        </li>
                                                        <li className="nav-item aa">
                                                            <Link to="/contact" className="nav-link">CONTACT US</Link>
                                                        </li>
                                                        <li className="nav-item aa" onClick={profilefunction}>
                                                            <Link to="/profile" className="nav-link" >PROFILE</Link>
                                                        </li>
                                                        {/* {
                                                            (Type == "user" || Type == "shop") &&

                                                            <li onClick={OnOpen}>
                                                                <li className="nav-item aa">
                                                                    <Link to="/shop" className="nav-link">SHOP</Link>
                                                                </li>
                                                            </li>
                                                        } */}
                                                        <li className="nav-item aa" onClick={profilefunction}>
                                                            <Link to='/saved-items' className="nav-link text-uppercase"> Saved Items</Link></li>
                                                        <li className="nav-item aa" onClick={profilefunction}>
                                                            <Link to="/posteditems" className="nav-link">MY ADS</Link>
                                                        </li>
                                                        <li className="nav-item aa" onClick={profilefunction}>
                                                            <Link to="/packages/view" className="nav-link">PACKAGES</Link>
                                                        </li>
                                                        <li className="nav-item aa">
                                                            {LocalData ? <div onClick={MOdalOpenFunLogout}>LOGOUT</div> : <Link to="/login" className="text-decoration-none">LOGIN/SIGNUP</Link>}
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        // :
                        // <></>
                }
                {/* For Desktop */}
                {

                    <div className="mobnvfixedWork d-block d-md-none d-lg-none"  style={{position: 'fixed', top : 0 ,transform : scrollPosition ? 'translateY(-100%)' : 'translateY(0%)' , transition : 'all 200ms ease' , zIndex: 20} }>
                        <nav className="navbar navbar-expand-lg headerr" >
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
                                    <i className="fas fa-bars"></i>
                                </button>
                                <div className="logo">
                                    <Link to="/" className="navbar-brand" >
                                        <img src={logo} alt="logo" /></Link>
                                </div>


                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className="inline-menu">
                                        <div className="setmnu">
                                            <ul className="navbar-nav menu">
                                                <li className="nav-item aa">
                                                    <Link to="/" className="nav-link active" aria-current="page">HOME</Link>
                                                </li>
                                                <li className="nav-item aa">
                                                    <Link to="/shop" className="nav-link">SHOP</Link>
                                                </li>
                                                <li className="nav-item aa">
                                                    <Link to="/about" className="nav-link">ABOUT US</Link>
                                                </li>
                                                <li className="nav-item aa">
                                                    <Link to="/faq" className="nav-link">F.A.Q</Link>
                                                </li>
                                                <li className="nav-item aa">
                                                    <Link to="/blogs" className="nav-link">BLOGS</Link>
                                                </li>
                                                <li className="nav-item aa">
                                                    <Link to="/contact" className="nav-link">CONTACT US</Link>
                                                </li>
                                                <li className=" nav-item aa mob-login">
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="form-inline my-2 my-lg-0 desk-version">
                                            <input className="form-control mr-sm-2 " type="text" id="search" placeholder="Search Car, Bikes and Mobiles" name="search" onKeyUp={AutoSearch} onChange={(e) => setSearch(e.target.value)} />
                                            <Link to="/search-home-result" state={search}><button className="btn btn-outline-success my-2 my-sm-0 shadow-none" id="Search" onClick={SearchBar}>Search</button></Link>
                                        </div>
                                        <div className="row p-0 m-0 mob-cen">
                                            <div className="col-12 mainbutton">
                                                <button className="btn btn-primary shadow-none" onClick={sellLog}> + SELL</button>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </div>

                        </nav>
                        {/* mobile  nav*/}
                        {/* <Stack display={isMobile ? 'block' : 'block'}>

                            </Stack> */}


                        <nav>
                            <div className="inline-menu1">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent" >


                                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">


                                            <div className="inline-menu1">
                                                <div className="setmnu">
                                                    <ul className="navbar-nav menu">
                                                        <li className="nav-item aa">
                                                            <Link to="/" className="nav-link active" aria-current="page">HOME</Link>
                                                        </li>
                                                        <li className="nav-item aa">
                                                            <Link to="/shop" className="nav-link">SHOP</Link>
                                                        </li>
                                                        <li className="nav-item aa">
                                                            <Link to="/about" className="nav-link">ABOUT US</Link>
                                                        </li>
                                                        <li className="nav-item aa">
                                                            <Link to="/faq" className="nav-link">F.A.Q</Link>
                                                        </li>
                                                        <li className="nav-item aa">
                                                            <Link to="/blogs" className="nav-link">BLOGS</Link>
                                                        </li>
                                                        <li className="nav-item aa">
                                                            <Link to="/contact" className="nav-link">CONTACT US</Link>
                                                        </li>
                                                        <li className="nav-item aa" onClick={profilefunction}>
                                                            <Link to="/profile" className="nav-link" >PROFILE</Link>
                                                        </li>
                                                        {
                                                            (Type == "user" || Type == "shop") &&

                                                            <li onClick={OnOpen}>
                                                                <li className="nav-item aa">
                                                                    <Link to="/shop" className="nav-link">SHOP</Link>
                                                                </li>
                                                            </li>
                                                        }
                                                        <li className="nav-item aa" onClick={profilefunction}>
                                                            <Link to='/saved-items' className="nav-link"> Saved Items</Link></li>
                                                        <li className="nav-item aa" onClick={profilefunction}>
                                                            <Link to="/posteditems" className="nav-link">MY ADS</Link>
                                                        </li>
                                                        <li className="nav-item aa" onClick={profilefunction}>
                                                            <Link to="/packages/view" className="nav-link">PACKAGES</Link>
                                                        </li>
                                                        <li className="nav-item aa">
                                                            {LocalData ? <div onClick={MOdalOpenFunLogout}>LOGOUT</div> : <Link to="/login" className="text-decoration-none">LOGIN/SIGNUP</Link>}
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                        </div> */}
                                </div>
                            </div>
                        </nav>
                    </div>

                }
                <div className="extraSpace">

                </div>
              
                <div className="setMainHead w-100" style={{
                    position: scrollPosition ? 'fixed' : 'relative',
                    top: scrollPosition ? 0 : 'auto',
                    zIndex: isMobile && scrollPosition ? 10 : 2,
                    display: 'flex',
                    height: scrollPosition && '11vh'
                }}>
                    {/* mobile  nav end*/}
                    <div className="mob-version search-box col-12" >
                        <div className="form-inline my-2 my-lg-0" >
                            <div className="mob-search">
                                <input className="form-control mr-sm-2 col-12" type="text" id="search" placeholder="Search Car, Bikes and Mobiles" name="search" onKeyUp={AutoSearch} aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
                                <Link to="/search-home-result" state={search}><BiSearchAlt className="SearchBtn" onClick={SearchBar} /></Link>
                            </div>
                        </div>

                    </div>

                    {/* <!-- category --> */}
                    <div className="desk-category"  style={{transform : scrollPosition ? 'translateY(-100%)' : 'translateY(0%)' , transition : 'all 500ms ease' } }>
                        <div className="row m-0 p-0">
                            <div className="col  p-0">
                                <div className="catagry ">

                                    {/* <div className="row catagry-color p-0 m-0"> */}
                                    <div className="category-section">
                                        <div className="d-flex gap-3">
                                            {/* <div className="disp catagry-color"><FontAwesomeIcon icon="fas fa-grip-lines"></FontAwesomeIcon>&nbsp;&nbsp;<Link to="/product">ALL</Link></div> */}
                                            <div className=" disp">
                                                <div className="drop-down">
                                                    Automobiles
                                                    <ul className="dropdown-category dropdown-category-bikes">
                                                        <Link to="/automobile/all/all-product" className="dropdown_sub-category" ><li className="bghover"> All</li></Link>
                                                        <Link to="/automobile/bikes" className="dropdown_sub-category" ><li className="bghover"> Bikes</li></Link>
                                                        <Link to="/automobile/car" className="dropdown_sub-category" ><li className="bghover"> Cars</li></Link>
                                                        <Link to="/automobile/scooty" className="dropdown_sub-category" ><li className="bghover">Scooty</li></Link>
                                                        <Link to="/automobile/heavy vehicle" className="dropdown_sub-category" ><li className="bghover">Heavy Vehicle</li></Link>
                                                        <Link to="/automobile/spare parts" className="dropdown_sub-category" ><li className="bghover">Spare Parts</li></Link>
                                                        <Link to="/automobile/other items" className="dropdown_sub-category" ><li className="bghover">Other Items</li></Link>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="disp">
                                                <div className="drop-down">
                                                    Laptop&nbsp;&&nbsp;Mobiles
                                                    <ul className="dropdown-category ">
                                                        <Link to="/mobiles/all/all-product" className="dropdown_sub-category" ><li className="bghover"> All</li></Link>
                                                        <Link to="/mobiles/mobiles phones" className="dropdown_sub-category "><li className="bghover">Mobile Phones</li></Link>
                                                        <Link to="/mobiles/tablets" className="dropdown_sub-category "><li className="bghover">Tablets</li></Link>
                                                        <Link to="/mobiles/laptops" className="dropdown_sub-category "><li className="bghover">Laptops</li></Link>
                                                        <Link to="/mobiles/computers" className="dropdown_sub-category "><li className="bghover">Computers</li></Link>
                                                        <Link to="/mobiles/accessories" className="dropdown_sub-category "><li className="bghover">Accessories</li></Link>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="disp">
                                                <div className="drop-down">
                                                    Furniture

                                                    <ul className="dropdown-category">
                                                        <Link to="/furnitures/all/all-product" className="dropdown_sub-category" ><li className="bghover"> All</li></Link>
                                                        <Link to="/furnitures/home decoration" className="dropdown_sub-category "><li className="bghover">Home Decoration</li></Link>
                                                        <Link to="/furnitures/sofa & beds" className="dropdown_sub-category "><li className="bghover">Sofa & Beds</li></Link>
                                                        <Link to="/furnitures/chairs & tables" className="dropdown_sub-category "><li className="bghover">Chairs & Tables</li></Link>
                                                        <Link to="/furnitures/kids furniture" className="dropdown_sub-category "><li className="bghover">Kids Furniture</li></Link>
                                                        <Link to="/furnitures/other items" className="dropdown_sub-category "><li className="bghover">Other Items</li></Link>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="disp">
                                                <div className="drop-down">
                                                    Fashion&nbsp;&&nbsp;Clothes
                                                    <ul className="dropdown-category">
                                                        <Link to="/Fashions/all/all-product" className="dropdown_sub-category" ><li className="bghover"> All</li></Link>
                                                        <Link to="/Fashions/men" className="dropdown_sub-category "><li className="bghover">Men</li></Link>
                                                        <Link to="/Fashions/women" className="dropdown_sub-category "><li className="bghover">Women</li></Link>
                                                        <Link to="/Fashions/kids" className="dropdown_sub-category "><li className="bghover">Kids</li></Link>
                                                        <Link to="/Fashions/fashion & beauty" className="dropdown_sub-category "><li className="bghover">Fashion & Beauty Products</li></Link>
                                                        <Link to="/Fashions/other items" className="dropdown_sub-category "><li className="bghover">Other Items</li></Link>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="disp">
                                                <div className="drop-down">
                                                    Services
                                                    <ul className="dropdown-category">
                                                        <Link to="/Services/all/all-product" className="dropdown_sub-category" ><li className="bghover"> All</li></Link>
                                                        <Link to="/Services/education & classes" className="dropdown_sub-category "><li className="bghover">Educations & classes</li></Link>
                                                        <Link to="/Services/electronics & computers" className="dropdown_sub-category "><li className="bghover">Electronics & Computers</li></Link>
                                                        <Link to="/Services/accountancy services" className="dropdown_sub-category "><li className="bghover">Accountancy Services</li></Link>
                                                        <Link to="/Services/software services" className="dropdown_sub-category "><li className="bghover">Software Services</li></Link>
                                                        <Link to="/Services/other services" className="dropdown_sub-category "><li className="bghover">Other Services</li></Link>
                                                    </ul>
                                                </div></div>

                                            <div className="disp">
                                                <div className="drop-down">
                                                    Properties
                                                    <ul className="dropdown-category">
                                                        <Link to="/properties/all/all-product" className="dropdown_sub-category" ><li className="bghover"> All</li></Link>
                                                        <Link to="/properties/for rent" className="dropdown_sub-category "><li className="bghover">For Rent</li></Link>
                                                        <Link to="/properties/for sale" className="dropdown_sub-category "><li className="bghover">For Sale</li></Link>
                                                        <Link to="/properties/land & plots" className="dropdown_sub-category "><li className="bghover">Land & Plots</li></Link>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="disp">
                                                <div className="drop-down">
                                                    Books&nbsp;&&nbsp;Sports
                                                    <ul className="dropdown-category">
                                                        <Link to="/booksAndSports/all/all-product" className="dropdown_sub-category" ><li className="bghover"> All</li></Link>
                                                        <Link to="/booksAndSports/books" className="dropdown_sub-category "><li className="bghover">Books</li></Link>
                                                        <Link to="/booksAndSports/gym" className="dropdown_sub-category "><li className="bghover">Gym</li></Link>
                                                        <Link to="/booksAndSports/musical instruments" className="dropdown_sub-category "><li className="bghover">Musical Instruments</li></Link>
                                                        <Link to="/booksAndSports/sports items" className="dropdown_sub-category "><li className="bghover">Sports Items</li></Link>
                                                        <Link to="/booksAndSports/other items" className="dropdown_sub-category "><li className="bghover">Other Items</li></Link>
                                                    </ul>
                                                </div>
                                            </div>


                                            <div className="disp">
                                                <div className="drop-down">
                                                    Electronics&nbsp;&&nbsp;Appliances
                                                    <ul className="dropdown-category catagry-color">
                                                        <Link to="/electronics/all/all-product" className="dropdown_sub-category" ><li className="bghover"> All</li></Link>
                                                        <Link to="/electronics/fridge"><li className="bghover">Fridge</li></Link>
                                                        <Link to="/electronics/cooler"><li className="bghover">Cooler</li></Link>
                                                        <Link to="/electronics/fan"><li className="bghover">Fan</li></Link>
                                                        <Link to="/electronics/ac"><li className="bghover">A/C</li></Link>
                                                        <Link to="/electronics/television & led"><li className="bghover">Television & Led</li></Link>
                                                        <Link to="/electronics/washing machine"><li className="bghover">Washing Machine</li></Link>
                                                        <Link to="/electronics/hard disks printer"><li className="bghover">Hard Disks, Printer & Monitors</li></Link>
                                                        <Link to="/electronics/games"><li className="bghover">Games</li></Link>
                                                        <Link to="/electronics/speakers"><li className="bghover">Speakers</li></Link>
                                                        <Link to="/electronics/cameras & lens"><li className="bghover">Cameras & Lens</li></Link>
                                                        <Link to="/electronics/kitchen & others"><li className="bghover">Kitchen & Others</li></Link>
                                                        <Link to="/electronics/computer accessories"><li className="bghover">Computers Accessories</li></Link>
                                                        <Link to="/electronics/air purifiers"><li className="bghover">Air Purifiers</li></Link>
                                                        <Link to="/electronics/water purifiers"><li className="bghover">Water Purifiers</li></Link>
                                                        <Link to="/electronics/other items"><li className="bghover">Other Items</li></Link>
                                                    </ul>
                                                </div>

                                                {/* <!-- end --> */}
                                            </div>
                                            <div className="disp">
                                                <div className="drop-down">
                                                    More
                                                    <ul className="dropdown-category catagry-color">
                                                        <Link to="/" id="SubMenu"><li className="bghover drop-down "  >Industrial Goods</li></Link>

                                                        <div className="subMenuItem " id="subItemss" >
                                                            <ul className="catagry-color">
                                                                {ListData}
                                                                {/* <Link to="/" className="dropdown_sub-category" ><li className="bghover">Machinery </li></Link>
                                                        <Link to="/" className="dropdown_sub-category" ><li className="bghover">Component Parts </li></Link>
                                                        <Link to="/" className="dropdown_sub-category" ><li className="bghover">Major Equipment</li></Link>
                                                        <Link to="/" className="dropdown_sub-category" ><li className="bghover">Accessories Equipment</li></Link> */}
                                                            </ul>
                                                        </div>

                                                        <Link to="/" className="dropdown_sub-category" ><li className="bghover" id="SubMenu1">EV Batteries</li></Link>
                                                        <div className="subMenuItem " id="subItemss1" >
                                                            <ul className="catagry-color">
                                                                <Link to="/" className="dropdown_sub-category" ><li className="bghover">All </li></Link>
                                                                <Link to="/" className="dropdown_sub-category" ><li className="bghover">Lithium-ion battery </li></Link>
                                                                <Link to="/" className="dropdown_sub-category" ><li className="bghover">Sli batteries</li></Link>
                                                                <Link to="/" className="dropdown_sub-category" ><li className="bghover">Hydride battery</li></Link>
                                                                <Link to="/" className="dropdown_sub-category" ><li className="bghover">Silver calcium battery</li></Link>
                                                            </ul>
                                                        </div>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profiles">



                                            {
                                                (profileName) ?
                                                    <>
                                                        {
                                                            LoginthroughData === 'facebook' ?
                                                                <button className="btn-secondary dropdown btn-dProfile" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                                                                    <div className="d-flex align-items-center ">
                                                                        <div className="profileSmall">
                                                                            <img src={`${userProfileImg}`} />
                                                                        </div>
                                                                        {(LocalData == null)
                                                                            ? 'Login/ SIGNUP' : (LocalData === undefined) ? <FontAwesomeIcon icon="fas-solid fa-right-from-bracket">Login/ SIGNUP </FontAwesomeIcon> : userProfileName
                                                                        }
                                                                    </div>
                                                                </button>
                                                                :
                                                                <button className="btn-secondary dropdown btn-dProfile" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                    <div className="d-flex align-items-center ">
                                                                        <div className="profileSmall">
                                                                            <img src={`${LocalData?.profileImg}`} />
                                                                        </div>
                                                                        {(LocalData == null)
                                                                            ? 'Login/ SIGNUP' : (LocalData === undefined) ? <FontAwesomeIcon icon="fas-solid fa-right-from-bracket">Login/ SIGNUP</FontAwesomeIcon> : LocalData.profileName
                                                                        }
                                                                    </div>

                                                                </button>
                                                        }

                                                    </>
                                                    :

                                                    <Link to="/login" className="secondary dropdown btn-dProfile">
                                                        {(LocalData == null)
                                                            ? 'Login / Signup' : (LocalData === undefined) ? <FontAwesomeIcon icon="fas-solid fa-right-from-bracket">Login/ SIGNUP</FontAwesomeIcon> : LocalData.profileName
                                                        }
                                                    </Link>



                                            }


                                            <ul className="Menu dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                                <li><Link to="/profile" className="dropdown-item "> <FontAwesomeIcon icon="fas fa-user"></FontAwesomeIcon>&nbsp;&nbsp;Profile</Link></li>

                                                <li><Link to='/posteditems' className="dropdown-item"> <FontAwesomeIcon icon="fa-solid fa-list"></FontAwesomeIcon>&nbsp;&nbsp;My Ads</Link></li>
                                                {/* <li><Link to='/demo' className="dropdown-item"> <FontAwesomeIcon icon="fa-solid fa-list"></FontAwesomeIcon>&nbsp;&nbsp;demo</Link></li> */}
                                                <li><Link to='/saved-items' className="dropdown-item"> <FaHeart />&nbsp;&nbsp;Saved Items</Link></li>

                                                <li><Link to='/mainchatfile' className="dropdown-item"><BsFillChatRightDotsFill />&nbsp;&nbsp;Chat</Link></li>


                                                <li><Link to='/packages/view' className="dropdown-item"> <IoIosRocket className="fs-6" />&nbsp;&nbsp;Packages</Link></li>
                                                {/* <li><Link to='/mainchatfile' className="dropdown-item"> <BsChatQuoteFill />&nbsp;&nbsp;Chats</Link></li> */}


                                                {
                                                    (Type == "user") &&

                                                    <li onClick={OnOpen}>
                                                        <Link to="" className="dropdown-item">
                                                            <FcShop />
                                                            <span className=" ms-2 ">Shop</span>
                                                        </Link>
                                                    </li>
                                                }
                                                {/* <Link to="" className="dropdown-item" id="Hov"> */}
                                                <li>
                                                    <Link to="" className="dropdown-item" onClick={MOdalOpenFunLogout}> <FontAwesomeIcon icon="fas fa-sign-out-alt" className=" me-2 " />Logout</Link>
                                                    {/* <GoogleLogout
                                                clientId="1027005252783-c1bgr9lhfnosk72js31lokbia3356jk0.apps.googleusercontent.com"
                                                buttonText="Logout"
                                                onLogoutSuccess={() => {
                                                    window.localStorage.removeItem('token');
                                                    nav("/")
                                                }}
                                                icon={false}
                                                className='setGoogleLog'
                                            /> */}

                                                </li>
                                                {/* </Link> */}

                                            </ul>

                                        </div>


                                      
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header;