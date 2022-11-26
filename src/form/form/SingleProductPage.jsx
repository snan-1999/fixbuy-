import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import google from '../../assets/images/google.png'
import facebook from '../../assets/images/facebook.png'
import sunset from '../../assets/images/sunset.jpg';
import instagram from '../../assets/images/instagram.png';
import Header from "../../form/form/header";
import Footer from "../../form/form/Footer";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { baseUrl, ImageView } from '../../functions/constant';
import Home from './Home';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    useToast,
    Button,

} from '@chakra-ui/react'

import { FaHeart } from 'react-icons/fa'
import { useContext } from 'react';
import { GlobalVariables } from '../../Context/StateProvider';
import { FiHeart, FiShare2 } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import ShareLink from './Share/ShareLink';
import { TiLocation } from 'react-icons/ti'
import ShareProuctsModal from './Modals/ShareProduct';
import { TbMessageReport } from 'react-icons/tb';
import { MdReport } from 'react-icons/md';
export default function SingleProductPage(props) {
    const { id } = useParams()
    const [isOpen, setisOpen] = useState(false)
    const Onclose = () => setisOpen(false)
    const OnOpen = () => setisOpen(true)
    const [BntStatus, setBntStatus] = useState(null)
    const [title, setTitle] = useState('');
    const [SellerDetails, setSellerDetails] = useState([]);
    const [description, setDescription] = useState('');
    const location = useLocation()
    // console.log(location.state, 'single Data')
    // console.log(location , 'all')
    const Token = localStorage.getItem('token');
    const { HomeData, setHomeData, UserId } = useContext(GlobalVariables);
    // console.log(location.state, 'homeData')
    // console.log(HomeData, 'homeData')
    // const { data, isFetching } = SingleProduct(productid)

    const [TokenID, setTokenID] = useState(JSON.parse(Token)?.token)
    // const [Data, setData] = useState(location.state.automobileProduct)
    // const [UseData, setUseData] = useState(location.state)
    const [AllData, setAllData] = useState([])

    const [HeartShow, setHeartShow] = useState('')
    // console.log(typeof [Data], Data, "allDataSIngle");
    // console.log(UseData, 'homeData')
    // const toast = useToast()
    const nav = useNavigate()
    const getImgSrc = (source) => {
        setImages(source)
        // console.log(imgChange) 
    }
    const SingleData = async () => {
        let api;
        try {
            if (UserId == undefined || UserId == null) {
                api = `${baseUrl}/product/getSingle/${id}`
            } else {
                api = `${baseUrl}/product/getSingle/${id}?user_id=634123e8832860cfb6788fde`
            }
            const { data } = await axios.get(api);

            console.log(data.data, 'ggs')
            // if (SellerDetails) {
            setLoader(true)
            // } else {
            // }
            if (data.status) {
                setAllData(data.data)
                setHEart(HomeData)
                // if(HomeData){setHeartShow()}
                sellerDetails(data.data.user_id)
                console.log(AllData, 'singleDatas')
                setLoader(false)
                setImages(data.data.images[0])
            }
            console.log(data, 'singleData')
        } catch (error) {

        }
    }
    // console.log(location.state.automobileProduct.saved , 'hear')
    const [HEart, setHEart] = useState(HomeData)
    console.log(HEart, 'hear')
    const [Images, setImages] = useState(`${AllData?.images}`);


    const UpdateData = () => {
        // console.log(productid)

    }

    const [Loader, setLoader] = useState(false)
    const SendData = {
        "ad_id": AllData?._id,
        "saveStatus": HEart
    }
    console.log(SendData, 'hear')
    let heartColor;
    const SavedItem = async () => {
        Run()

        if (Token === null) {
            nav('/login')
        } else {

            console.log(HomeData, 'homeData')

            console.log(HomeData, 'homeData')
        }
    }
    const Run = async () => {
        const api = `${baseUrl}/users/savedItems/${TokenID}`
        const { data } = await axios.post(api, SendData);
        console.log(SendData.saveStatus, 'homeData')
        if (data.status) {
            setHEart(!HEart)
            setHomeData(!HomeData)
            toast(data.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                type: 'success'
            });
        }
        console.log(data, 'homeData')
    }
   
    // seller Profile details api 
    const sellerDetails = async (usrId) => {
        const api = (`${baseUrl}/users/getprofile/${usrId}`);
        // alert(SellerDetails)
        setLoader(true)
        await axios.get(api).then((res) => {
            if (res.status) {
                setLoader(false)
                // console.log(res.data ,'sellerDetalis');
                setSellerDetails(res);
                // if (!SellerDetails) {
                //     alert('hai')
                // } else {
                //     alert('nahi hai')
                // }
                console.log(SellerDetails, 'sellerDetalis');
                console.log(res, 'sellerDetalis');
            }
        })
    }
    // end
    useEffect(() => {
        SingleData()
        // sellerDetails()
    }, [0])
    let ShareLinkParam = window.location.href
    
    console.log(window.location.href, 'copy')
    let Max_length = 60;
    // useEffect(() => {
    //     setUseData(location.state)
    // }, [SavedItem])
    if (Loader) {
        return <ButtonCraete size='lg' variant='outline' colorScheme='teal' >
            <div className="spinner-border spinner-border-sm me-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            Load More
        </ButtonCraete>
    }
    return (
        <>
            <Header />
            <ToastContainer />
            <ShareProuctsModal isOpen={isOpen} setisOpen={setisOpen} Onclose={Onclose} OnOpen={OnOpen} ShareLinkParam={ShareLinkParam} />

            <div className="main ">
                <div className="row m-0 p-0">
                    <div className="for-center flex-row justify-content-center align-items-center">
                        <div className="col-md-12">
                            <div className="container-heading-pr text-white">
                                <span>PRODUCTS DETAILS :-</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row m-0 p-0">
                    <div className="col-md-6 ">
                        <ImageSetion>

                            <MainSlide>
                                <img src={`${ImageView}${Images}`} alt="" className='' id="img_main" />
                            </MainSlide>

                            <SmallImg className='d-flex'>
                                <ScrollDiv>

                                    {
                                        AllData.images?.map((img, key) => {
                                            return (
                                                <img src={`${ImageView}${img}`} className="border " onClick={() => getImgSrc(`${img}`)} />
                                            )
                                        })
                                    }
                                </ScrollDiv>
                            </SmallImg>
                            <div className="shareDetails d-flex align-items-center mt-4">
                                <div className="col-md-4">
                                    <div className="locations d-flex align-items-center">
                                        <TiLocation />
                                        <div className='ms-2'>{`${AllData.location?.city} ,${AllData.location?.state}`}</div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="Shareset d-flex align-items-center" >
                                        <FiShare2 />
                                        <div className='ms-2' >Share</div>
                                        <ShareLink ShareLinkParam={ShareLinkParam} />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="ReportAds d-flex align-items-center justify-content-end">
                                        <MdReport className='fs-4' />
                                        <div className='ms-1' >Report</div>
                                    </div>
                                </div>
                            </div>
                        </ImageSetion>

                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center ContentClass ">
                        <DetailsData className=''>
                            <div className="d-flex justify-content-center heading-box w-100">
                                <div className="row w-100 d-flex align-items-center" style={{ overflow: 'hidden' }}>
                                    <div className="col-md-3 h-100">
                                        <div className="">
                                            <div className="SellerImgSingle">
                                                <img src={SellerDetails.data?.profileImg} style={{ height: '9vh' }} />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-9 p-0 d-flex align-items-start flex-row ">
                                        <div className="detailsSeller">
                                            <h4 className='posted mb-1'>Posted By</h4>
                                            <h4 className='fs-5 mb-1'>{SellerDetails.data?.data[0].name}</h4>
                                            <Link to='/sellerProfile' state={AllData?.user_id}><h6>See Profile</h6></Link>
                                        </div>
                                    </div>
                                </div>
                                {/* <span className="report-message">*If you find this user inappropriate/fake. You can report here.</span> */}
                            </div>
                            <div>
                                <div className=' TitleSet text-capitalize'>  {AllData?.title} </div>
                            </div>
                            <div>
                                <div className='priceSet text-capitalize'>₹ {AllData?.price} </div>
                            </div>
                            <div>
                                <div className='disSet text-capitalize'>description</div>
                            </div>
                            <div className='discriptionSet'>

                                {
                                    (AllData?.description?.length > Max_length ?
                                        <th className='text-capitalize'>{`${AllData?.description.substring(0, Max_length)}...`}</th>
                                        :
                                        <th className='text-capitalize'> {AllData?.description}</th>
                                    )
                                }
                            </div>

                            <div className='heartBtn'>
                                {
                                    (HomeData) ? <>
                                        <Button className='fs-6' leftIcon={<FaHeart className="text-danger" />} colorScheme='teal' variant='solid' border='none' size='xs' onClick={SavedItem}>
                                            Saved
                                        </Button>
                                    </>
                                        :
                                        <>
                                            <Button className='fs-6' leftIcon={<FiHeart onClick={SavedItem} />} colorScheme='teal' variant='solid' border='none' size='xs' onClick={SavedItem}>
                                                UnSaved
                                            </Button></>
                                }
                            </div>
                            <div className="Btns d-flex justify-content-between">
                               
                                {/* <Link to=   '/sellerProfile' state={AllData?.user_id}><button className='sellerButton '>Report Ads</button></Link> */}
                            </div>
                        </DetailsData>
                    </div>

                </div>
                <br />
                <br />
                <Footer className="mt-4 position-relative top-0" />
            </div>
        </>
    )
}

const ButtonCraete = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    /* all: unset; */  
    font-size: 15px; 
    font-weight: 600;
    color: grey;
    border: none;
    background-color: transparent;
    border-radius: 4px;
    padding: 0.3rem 1.2rem;
    margin: 1rem;
`
const DetailsData = styled.div`
.SellerImgSingle {
    display: flex;
    justify-content: center;
}
    .TitleSet{
        margin-top: 1rem;
        font-size: 0.9rem;
        font-weight: 300 !important;
        color : ${props => props.theme.colors.primary}
    }
    .priceSet{
        
        margin: .4rem 0 .6rem 0;
        color : ${props => props.theme.colors.secondary};
        font-size: 1.3rem;
        -webkit-text-stroke: 1px  ${props => props.theme.colors.secondary};

    }
    .disSet{
        
        margin: .4rem 0 .1rem 0;
        color : ${props => props.theme.colors.secondary};
        font-size: 1rem;
        /* -webkit-text-stroke: 1px  ${props => props.theme.colors.secondary}; */

    }
    .discriptionSet{
        
        margin: .1rem 0 .1rem 0;
        color : ${props => props.theme.colors.secondary};
        font-size: .8rem;
        /* -webkit-text-stroke: 1px  ${props => props.theme.colors.secondary}; */

    }
.detailsSeller h6{
    color: #2472e6;
    font-size: .6rem;
    :hover{
        text-decoration: underline;
        cursor: pointer;
    }
}
.heading-box {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 10px #80808039;
    height: 15vh;
    width: 80%;
    margin: 0;
}
    .posted{
        color: #b4b4b4;
        font-size: .8rem;
    }
    .SellerImgSingle img {
        display: flex;
        justify-content: center;
        align-items: center;
    padding: 5px;
    border: 1px solid  #b4b4b4;
    border-radius: 50%;
}
    margin-top: .3rem;
    .brand{
        padding: .4rem 1rem;
        background-color: green;
        color: white;
        border-radius: 4px;
        margin-bottom: 2%;
        width: 50%;
        text-align: center;     
        }
        .heartBtn{
            font-size: 1.3rem;
            animation-name: heartss;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            :hover{
                margin: 0;
                padding: 0;
                font-size: 1.3rem;
                /* transform: scale(1); */
                transition: transform 500ms ease;

            }
        }
        width: 80%;
`
const MainSlide = styled.div`
        width: 100%;
    height: 37vh;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        border-radius: 10px;
    }
`
const SmallImg = styled.div`
margin-top: 4%
`
const ImageSetion = styled.div`
.shareDetails{
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
}
#img_main{
    height: 20vh !important;
}
position: relative;
top: 1.5rem;
margin-left : 20%;
`
const ScrollDiv = styled.div`
cursor: pointer;
    overflow: auto;
    width: 100%;
    display: flex;
    img{
        width: 100px;
        height: 80px;
        margin: 10px;
        border-radius: 10px;
    }
`