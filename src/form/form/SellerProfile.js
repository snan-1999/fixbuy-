import React, { useEffect, useState } from "react";
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import '../form/CopyCss.css';
import './CopyCss.css'
import "../../index.css";
import Header from "./header";
import Footer from "./Footer";
import sellerIcon from '../../assets/images/sellerIcon.png';
import locationIcon from '../../assets/images/locationIcon.png';
// import facebook from '../../assets/images/facebook.png';
import { baseUrl, ImageView } from "../../functions/constant";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
// import { NewSubscriber } from "../../functions/Subscriber";
import { useContext } from "react";
import { GlobalVariables } from "../../Context/StateProvider";
import styled from "styled-components";
import ReportModal from "./Modals/ReportModal";
import { MdLocationOn } from "react-icons/md";

import { ToastContainer, toast } from 'react-toastify';
import { Button } from "@chakra-ui/react";


const SellerProfile = () => {
    const MAX_LENGTH = 25;
    const IdData = localStorage.getItem('token');
    let Type;
    let PhoneNumber;
    let Name;
    if (IdData) {
        Type = JSON.parse(IdData).type;
        PhoneNumber = JSON.parse(IdData).phone;
        Name = JSON.parse(IdData).name;

    }
    let ProfleId = JSON.parse(IdData)?.token;
    console.log(ProfleId, "profile");
    console.log(IdData, 'data');
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    const [Upstate, setUpstate] = useState(1);
    const [postedproduct, setpostedproduct] = useState([]);
    const [sellername, setsellername] = useState('');
    const [sellerimage, setsellerimage] = useState('');
    const [selleremail, setselleremail] = useState('');
    const [sellerphone, setsellerphone] = useState('');
    const [reason, setreason] = useState('');
    const [show, setShow] = useState();
    const [isOpen, setisOpen] = useState(false)
    const Onclose = () => setisOpen(false)
    const OnOpen = () => setisOpen(true)
    // const [subscribe , setsubscribe , unsubscribe , setunsubscribe] = useContext(GlobalVariables);
    const nav = useNavigate()
    const location = useLocation()
    console.log(location, 'seller Data')


    // seller Profile details api 
    const sellerDetails = async () => {
        const api = (`${baseUrl}/users/getprofile/${location.state}`);
        await axios.get(api).then((res) => {
            if (res.data) {
                console.log(res.data);
                setsellername(res.data.data[0].name);
                setsellerimage(res.data.profileImg);
                setselleremail(res.data.data[0].email);
                setsellerphone(res.data.data[0].phone);
            }
        })
    }

    // Ads posted by seller api
    const PostedAds = async () => {
        const api = (`${baseUrl}/users/listeditem/filter/approved/${location.state}`);
        await axios.get(api).then((res) => {
            if (res.data) {
                console.log(res.data);
                setpostedproduct(res.data.data)
            }
        })
    }

    useEffect(() => {
        sellerDetails()
        PostedAds()
    }, [0])

    // Subscribe api
    const Subscribe = async () => {
        if(Type){

            const api = `${baseUrl}/subscriber/add/NewSubscriber`;
            await axios.post(api, {
                shop_id: location.state,
                subscriber_id: ProfleId
            }).then((res) => {
                if (res.data) {
                    toast(res.data.message, {
                        position: "bottom-right",
                        autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    type: 'success'
                });
                // CheckSubscribe()
                setShow(true)
                setUpstate(Upstate + 1)
                console.log(res, 'subscribe');
            }
        })
    }else{
        nav('/login')
    }

    }

    // UnSubscribe api
    const Unsubscribe = async () => {
        const api = `${baseUrl}/subscriber/unsubscribe`;
        await axios.post(api, {
            shop_id: location.state,
            subscriber_id: ProfleId
        }).then((res) => {
            if (res.data) {
                console.log(res, 'subscribe');
                toast(res.data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    type: 'success'
                });
                // CheckSubscribe()
                setUpstate(Upstate + 1)
                setShow(false)
                // console.log(res.data, 'subs')
            }
        })
    }

    // check Subscriber api
    const CheckSubscribe = async () => {
        const api = `${baseUrl}/subscriber/get/checkSubscribed`;
        await axios.post(api, {
            shop_id: location.state,
            subscriber_id: ProfleId
        }).then((res) => {
            if (res.data) {
                if (res.data.message == "you are subscriber") {
                    setShow(true)
                    window.localStorage.setItem('Subscribe', true)
                } else {

                    setShow(false)
                    window.localStorage.setItem('Subscribe', false)
                }
                console.log(res.data.message, 'subscirbe')
            }
        })
    }

    useEffect(() => {
        CheckSubscribe()
    }, [0])
    const ShowBtn = localStorage.getItem('Subscribe')
    console.log(ShowBtn, 'show')
    const Reportapi = async () => {
        console.log('report api call....')
        setisOpen(false)
        const api = `${baseUrl}/users/report/user`;
        await axios.post(api, {
            "from_user_id": ProfleId,
            "from_name": Name,
            "from_email": '',
            "from_phone": PhoneNumber,
            "to_user_id": location.state,
            "to_name": sellername,
            "to_email": selleremail,
            "to_phone": sellerphone,
            "reason": reason
        }).then((res) => {
            if (res.data) {
                toast(res.data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    type: 'success'
                });
                console.log(res.data , 'Report');
                setreason("")
            }
        })
    }


    return (
        <>
            <Header />
            <ToastContainer />
            <div class="containers">

                <div class="page-wrapper">

                    <div class="page-content ">
                        {/* <h1>Seller Profile</h1> */}
                        <div className="desk-view">
                            <div className="d-flex justify-content-center heading-box">
                                <div className="row w-100" style={{ overflow: 'hidden' }}>
                                    <div className="col-md-4 col-4 h-100">
                                        <div className="d-flex h-100 justify-content-center align-items-center text-end">
                                            <div className="image-box">
                                                <img src={sellerimage} style={{ width: '100%', height: '100%' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-8 px-3 d-flex align-items-start flex-row heading-text ">
                                        <div className="seller-name">
                                            <h4>{sellername}</h4>
                                        </div>
                                        <div className="report-button d-flex">
                                            <img src={sellerIcon} style={{ width: "30px", height: "30px", background: "#345276", borderRadius: '35%' }} className="report-Image" />

                                            <button className="report-text" onClick={() => { setisOpen(true) }}>Report User</button>

                                        </div>

                                        {
                                            (Type == "user" || Type == 'shop') ?
                                                <div className="subc-button">
                                                    {

                                                        (show == false) ?
                                                            <button className="subcribe-button"
                                                                onClick={() => {
                                                                    Subscribe()
                                                                }
                                                                }>
                                                                <span className="subscribe-color">Subscribe</span>
                                                            </button>
                                                            :

                                                            <button className="subcribe-button" onClick={() => {
                                                                Unsubscribe()
                                                            }
                                                            }>
                                                                <span className="subscribe-color">Unsubscribe</span>
                                                            </button>


                                                    }
                                                </div>
                                                :
                                                ""
                                        }
                                    </div>
                                    <span className="report-message">*If you find this user inappropriate/fake. You can report here.</span>
                                </div>
                            </div>
                            <div className="second-box">
                                <div className="col box2">
                                </div>
                                <div class="container" id="card_box">
                                    <span className="ads-head">Ads Posted by this user()</span>
                                    <div className="row">
                                        {
                                            postedproduct?.map((ProductDetails, key) => {
                                                return (
                                                    <div class="col-md-4 col-6 col-lg-3">
                                                        {/* <CardHeight> */}
                                                        <div class="shadow p-2 mb-4 bg-white maindiv">
                                                            <div >
                                                                <div class="img-wh overflow-hidden"><img src={`${ImageView}${ProductDetails.images[0]}`} class="pdt-img" /></div>
                                                                <div class="pdt-details">
                                                                    <div class="price">₹{(ProductDetails.price).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
                                                                    {/* <div class="font-weight-light desc">{ProductDetails.description}</div> */}
                                                                    {
                                                                        (ProductDetails.title).length > MAX_LENGTH ?
                                                                            <div class="prd-name" style={{ overflow: 'hidden' }}>
                                                                                {`${ProductDetails.title.substring(0, MAX_LENGTH)}...`}</div>
                                                                            :
                                                                            <div className="'prd-name" style={{ overflow: 'hidden' }}>{ProductDetails.title}</div>
                                                                    }
                                                                    <div>
                                                                        <span className="date">{new Date(ProductDetails.createdAt).toDateString()}</span>
                                                                    </div>
                                                                    <div className="contain-adrs">
                                                                        <span className="adrs fs-6"><MdLocationOn className="fs-6" />{ProductDetails.location.state}</span>
                                                                        <span className="year"></span>
                                                                    </div>
                                                                    <div class="row p-0 m-0">
                                                                        <div class="col p-0">
                                                                            <div class="buy-bt">
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* </CardHeight> */}
                                                        </div>
                                                    </div>
                                                )

                                            })
                                        }
                                    </div>
                                </div>
                                {
                                    isOpen &&
                                    <ReportModal Onclose={Onclose} OnOpen={OnOpen} isOpen={isOpen} setisOpen={setisOpen} Type={Type}
                                        Reportapi={Reportapi} setreason={setreason} reason={reason} />
                                }
                            </div>
                        </div>


                        {/* mobile view start */}
                        <div className="mob-view">
                            <div className="d-flex justify-content-center heading-box">
                                <div className="row w-100">
                                    <div className="col-md-4 h-100" style={{ overflow: 'hidden', margintop: '-2%' }}>
                                        <div className="d-flex h-100 text-end1" style={{ paddingBottom: '8px' }}>
                                            <div className="image-box" >
                                                <img src={sellerimage} style={{ width: '100%', height: '100%' }} />
                                            </div>
                                            <div className="col-md-8 px-3 align-items-start flex-row heading-text1 ">
                                                <div className="seller-name1">
                                                    <h4>{sellername}</h4>
                                                </div>
                                                <div className="report-button1">
                                                    <img src={sellerIcon} style={{ width: "30px", height: "30px", background: "#345276", borderRadius: '35%' }} className="report-Image" />
                                                    <button className="report-text1" onClick={() => { setisOpen(true) }} >Report User</button>
                                                </div>

                                                {
                                                    // (Type == 'user' || Type == 'shop') ?
                                                        <div className="subc-button1">
                                                            {
                                                                (show == false) ?
                                                                    <Button
                                                                        className="subscribe-button1"
                                                                        onClick={() =>
                                                                            Subscribe()
                                                                        }
                                                                    >

                                                                        <span className="subscribe-color1">Subscribe</span>
                                                                        {/* <button 
                                                                   >
                                                                </button> */}
                                                                    </Button>
                                                                    :
                                                                    (show == true) ?
                                                                        <button className="subscribe-button1" onClick={() => Unsubscribe()}>
                                                                            <span className="subscribe-color1">UnSubscribe</span>
                                                                        </button>
                                                                        :
                                                                        ""
                                                            }
                                                        </div>
                                                        // :
                                                        // ''
                                                    //    nav()
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className="report-message">*If you find this user inappropriate/fake. You can report here.</span>
                            </div>
                            <div className="second-box">
                                <div className="col box3">
                                    <span className="ads-head">Ads Posted by this user()</span>
                                </div>
                                <div class="container" id="card_box">
                                    <div class="row">
                                        {
                                            postedproduct?.map((ProductDetails, key) => {
                                                return (
                                                    <div class="col-md-4 col-6 col-lg-3">
                                                        <div class="shadow p-2 mb-4 bg-white maindiv">
                                                            {/* <CardHeight> */}
                                                            <Link to={`/singleproductpage/${ProductDetails._id}`} state={{ ProductDetails, key }} className="text-decor">
                                                                <div class="img-wh overflow-hidden"><img src={`${baseUrl}/allcategories/get/productImage/${ProductDetails.images[0]}`} class="pdt-img" /></div>
                                                                <div style={{ height: '18vh' }} >
                                                                    <div class="pdt-details">
                                                                        <div class="price">₹{(ProductDetails.price).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
                                                                        {/* <div class="font-weight-light desc">{ProductDetails.description}</div> */}
                                                                        {
                                                                            (ProductDetails.title).length > MAX_LENGTH ?
                                                                                <div class="prd-name" style={{ overflow: 'hidden' }}>
                                                                                    {`${ProductDetails.title.substring(0, MAX_LENGTH)}...`}</div>
                                                                                :
                                                                                <div className="'prd-name" style={{ overflow: 'hidden' }}>{ProductDetails.title}</div>
                                                                        }
                                                                        <div>
                                                                            <span className="date">{new Date(ProductDetails.createdAt).toDateString()}</span>
                                                                        </div>

                                                                        <div className="contain-adrs">
                                                                            <span className="adrs fs-6"><MdLocationOn className="fs-6" />{ProductDetails.location.state}</span>
                                                                            <span className="year"></span>
                                                                        </div>
                                                                        <div class="row p-0 m-0">
                                                                            <div class="col p-0">
                                                                                <div class="buy-bt">
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>


                                                                </div>
                                                            </Link>
                                                            {/* </CardHeight> */}
                                                        </div>
                                                    </div>
                                                )

                                            })
                                        }
                                    </div>


                                </div>
                                {
                                    isOpen &&
                                    <ReportModal Onclose={Onclose} OnOpen={OnOpen} isOpen={isOpen} setisOpen={setisOpen} Type={Type}
                                        Reportapi={Reportapi} setreason={setreason} reason={reason} />
                                }

                            </div>
                        </div>
                        {/* mobile view end */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SellerProfile;

const CardHeight = styled.div`
position: relative;
top: 0;
    height: 50vh ;
    
`