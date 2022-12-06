import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import google from '../../assets/images/google.png'
import facebook from '../../assets/images/facebook.png'
import sunset from '../../assets/images/sunset.jpg';
import instagram from '../../assets/images/instagram.png';
import Header from "../../form/form/header";
import shopIcon from '../../assets/images/shopIcon.png'
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
import { MdLocationOn, MdReport } from 'react-icons/md';
import ReportAds from './Modals/ReportAds';
import { BsChatDots } from 'react-icons/bs';
import { AllDataCategory } from '../../functions/MainCategoryFun';
import useGeoLocation from '../../hooks/useGeoLoaction';
export default function SingleProductPage(props) {
    const { id } = useParams()
    const [isOpen, setisOpen] = useState(false)
    const Onclose = () => setisOpen(false)
    const OnOpen = () => setisOpen(true)
    const [Loading, setLoading] = useState(false)
    const [TotalPagess, setTotalPagess] = useState('')
    const [PageNO, setPageNO] = useState(1);
    const [RelatedData, setRelatedData] = useState([]);
    const [SellerDetails, setSellerDetails] = useState([]);
    const [description, setDescription] = useState('');
    const location = useLocation()
    const Geolocation = useGeoLocation();
    // console.log(location.state, 'single Data')
    // console.log(location , 'all')
    const Token = localStorage.getItem('token');
    const { HomeData, setHomeData, UserId, latitude, Longitude } = useContext(GlobalVariables);
    // console.log(location.state, 'homeData')
    console.log(latitude, 'ltitude')
    // const { data, isFetching } = SingleProduct(productid)

    const [TokenID, setTokenID] = useState({
        'ID': JSON.parse(Token)?.token,
        'Name': JSON.parse(Token)?.name,
        'Email': JSON.parse(Token)?.email,
        'Phone': JSON.parse(Token)?.phone,

    })
    // const [Data, setData] = useState(location.state.automobileProduct)
    // const [UseData, setUseData] = useState(location.state)
    const [AllData, setAllData] = useState([])

    const [Reason, setReason] = useState('')
    // console.log(typeof [Data], Data, "allDataSIngle");
    // console.log(UseData, 'homeData')
    // const toast = useToast()
    const nav = useNavigate()
    const getImgSrc = (source) => {
        setImages(source)
        // console.log(imgChange) 
    }
    let Max_length = 85;
    let Max_lengthDisc = 27;
    const SingleData = async () => {
        let api;
        try {
            if (UserId == undefined || UserId == null) {
                api = `${baseUrl}/product/getSingle/${id}`
            } else {
                api = `${baseUrl}/product/getSingle/${id}?user_id=${TokenID.ID}`
            }
            const { data } = await axios.get(api);
            setLoader(true)
            if (data.status) {
               { latitude &&  await RelatedProducts(data.data.mainCategories)}
                console.log(data.data, 'slkfsdjflksd')
                setAllData(data.data)
                setHEart(HomeData)
                sellerDetails(data.data.user_id)
                console.log(AllData, 'singleDatas')
                setLoader(false)
                setImages(data.data.images[0])
            }
            console.log(data.data, 'singleData')
            let validField = ['price', 'title', 'plotArea', 'furnishing', 'length', 'breadth', 'projectName', 'bedrooms', 'bathrooms', 'builtUpArea', 'floors', 'maintenance', 'parking', 'bachelorsAllowed', 'years', 'fuel'
                , 'transmission', 'kmDriven', 'No_of_owner'];
            let arr = [];
            for (let i in data.data) {
                // console.log(i, 'singleData')
                if (validField.includes(i)) {
                    // {
                    //     alert(data.data[i]).includes(data.data['price'])
                    //     console.log(!description.includes(data.data['description']))
                    // }
                    arr.push(

                        <div className='row d-flex w-100 mb-1 KeyBox'>
                            <div className='col-md-3 '>

                                <p className="setKeys w-100 text-capitalize">
                                    {i}
                                </p>
                            </div>
                            <div className='col-md-9 text-capitalize setKeysVal'>
                                {
                                    (data.data[i]) == (data.data['title'])
                                        ?
                                        (data.data['title']).length > Max_length
                                            ?
                                            (data.data['title'].substring(0, Max_length))
                                            :
                                            (data.data['title'])
                                        :
                                        String(data.data[i])
                                }
                            </div>
                        </div>
                    )
                }
            }
            setDescription(() => {
                return (<>
                    {/* <table className="table table-striped table-hover"  >
                        <tbody> */}
                    <div>

                        {arr}
                    </div>
                    {/* </tbody>
                    </table> */}
                </>)
            })
            // for (let i in data.data) {
            //     setDescription(<div><p>{i}: {String(data.data[i])}</p></div>);
            //     console.log(i, 'loop items');
            // }
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
        const api = `${baseUrl}/users/savedItems/${TokenID.ID}`
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
    const SnedReportData = {

        "user_id": TokenID.ID,
        "name": TokenID?.Name,
        "email": TokenID?.Email,
        "phone": TokenID?.Phone,
        "reason": Reason,
        "ad_id": id,
        "title": AllData?.title,
        "description": AllData?.description,
        "price": AllData?.price,
        "category": AllData?.categories

    }
    const ReportApi = async () => {
        console.log(SnedReportData, 'Report Data')
        // console.log(AllData, 'Report Data')
        const api = `${baseUrl}/users/report/ads`
        const { data } = await axios.post(api, SnedReportData)
        console.log(data, 'Report Data')
        if (data.status) {
            setisOpen(false)
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
    const print = () => {
        return description;
    } 
    // end
    const LoadMOre = async () => {
        setPageNO(PageNO + 1)
        setLoading(true)
    }
    const RelatedProducts = async (MainCategory) => {
        console.log('run' ,'main')
        try {
            const { data } = await AllDataCategory(MainCategory, latitude, Longitude, PageNO, UserId);
            if (data.status) { 
                setTotalPagess(data.totalPages)
                setRelatedData([...RelatedData, ...data.data])
                setLoading(false)
            }
            console.log(data, 'ltitude')
        } catch (error) {
            console.log(error , 'main')
        }
    }

    useEffect(() => {
        SingleData()
        // sellerDetails()
    }, [0 ,latitude ,PageNO])
    let ShareLinkParam = window.location.href

    console.log(window.location.href, 'copy')
    // useEffect(() => {
    //     setUseData(location.state)
    // }, [SavedItem])
    // if (Loader) {
    //     return <ButtonCraete size='lg' variant='outline' colorScheme='teal' >
    //         <div className="spinner-border spinner-border-sm me-2" role="status">
    //             <span className="visually-hidden">Loading...</span>
    //         </div>
    //         Load More
    //     </ButtonCraete>
    // }
    return (
        <>
            <Header />
            <ToastContainer />
            <ReportAds {
                ...{
                    ReportApi,
                    isOpen,
                    setisOpen,
                    Onclose,
                    OnOpen,
                    setReason
                }
            } />
            {/* GeoLocation start */}
            <div className="inline-block mr-auto pt-1">
                {
                    Geolocation.loaded &&
                    JSON.stringify(Geolocation)

                }
            </div>
            {/* Geolocation end */}
            <div className="main ">
                <Head>

                    <div className="row m-0 p-0">
                        <div className="for-center flex-row justify-content-center align-items-center">
                            <div className="col-md-12">
                                <div className="container-heading-pr text-white">
                                    <span>PRODUCTS DETAILS :-</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </Head>

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
                                <div className="col-md-6">
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
                                <div className="col-md-2">
                                    <div className="ReportAds d-flex align-items-center justify-content-end" >
                                        <MdReport className='fs-4' />
                                        <div className='ms-1' onClick={OnOpen}>Report</div>
                                    </div>

                                </div>
                            </div>
                            <div className="reasondiv">
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
                            {
                                description
                            }

                            {/* <div>
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
                            </div> */}

                            <div className='heartBtn'>
                                <div className='row d-flex w-100 KeyBox1'>
                                    <div className='col-md-3'>

                                        <p className='fs-6 setKeys w-100 text-capitalize'>Status</p>

                                    </div>
                                    <div className='col-md-9 text-capitalize setKeysVal'>
                                        {(HomeData) ?
                                            <>

                                                <th>

                                                    <Button className='fs-6' leftIcon={<FaHeart className="text-danger" />} border='none' size='xs' onClick={SavedItem}>
                                                        Saved
                                                    </Button>
                                                </th>

                                            </>
                                            :
                                            <>
                                                <td>
                                                    <Button className='fs-6' leftIcon={<FiHeart onClick={SavedItem} />} border='none' size='xs' onClick={SavedItem}>
                                                        UnSaved
                                                    </Button>
                                                </td>
                                            </>
                                        }
                                    </div>
                                </div>

                            </div>
                            <div className="Btns d-flex justify-content-between">

                                {/* <Link to=   '/sellerProfile' state={AllData?.user_id}><button className='sellerButton '>Report Ads</button></Link> */}
                            </div>
                        </DetailsData>
                    </div>
                </div>
                <div className="setMarginDiv">
                    <div className="row">
                        <div className="ChatBtnProduct mt-1">
                            <button className='d-flex justify-content-center align-items-center '> <BsChatDots className='fs-5 me-2' />Chat With Seller</button>
                        </div>
                    </div><br />
                    <div className="row m-0 p-0">
                        <div className="col-md-6 col-12">
                            <Descrip className=''>
                                <div>Description</div>
                                <p className='text-capitalize'> {AllData?.description}</p>

                            </Descrip>
                        </div>
                        <div className="col-md-6 col-12">

                        </div>

                    </div>

                </div>
                <div className="row m-0 p-0">
                    <div className="for-center flex-row justify-content-center align-items-center">

                        <div className="col-md-12">
                            <div className="container-heading-related">
                                <span>RELATED PRODUCTS</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container" id="card_box">

                    <div className="row p-0 m-0">
                        {
                            RelatedData?.map((automobileProduct, key) => {
                                return (
                                    <div className="col-md-4 col-6 col-lg-3" onClick={() => setHomeData(automobileProduct.saved)}>
                                        <CardHeight>

                                            <Link to={`/singleproductpage/${automobileProduct._id}`} state={{ automobileProduct, key }} className="text-decor">
                                                <div className="shadow p-3 mb-4 bg-white maindiv overflow-hidden">
                                                    {(automobileProduct.boostPlan.plan !== "free") ? <Ribbon>Featured</Ribbon> : <Ribbon style={{ opacity: 0 }}>Featured</Ribbon>}
                                                    {(automobileProduct.sellerType == "user") ? "" : <img className="ShopLogo" src={shopIcon} />}
                                                    <div className="img-wh overflow-hidden"><img src={`${ImageView}${automobileProduct.images[0]}`} className="pdt-img" /></div>
                                                    <div className="pdt-details">
                                                        <div className="row d-flex align-items-center">
                                                            <div className="col-md-6 col-8 ">
                                                                <div className="price">₹ {automobileProduct.price}</div>
                                                            </div>
                                                            <div className="col-md-6 col-4 setHeart">
                                                                {
                                                                    (automobileProduct.saved) ? <FaHeart className="text-danger fs-5" /> : <FiHeart className="fs-5" />
                                                                }
                                                            </div>
                                                        </div>

                                                        {/* <div className="font-weight-light desc">{automobileProduct.description}</div> */}

                                                        {
                                                            (automobileProduct.title).length > Max_lengthDisc ?
                                                                <div className="prd-name">
                                                                    {`${automobileProduct.title.substring(0, Max_lengthDisc)}...`}
                                                                </div>
                                                                :
                                                                <div className="prd-name text-capitalize">{automobileProduct.title}</div>
                                                        }
                                                        <div className="contain-adrs d-flex align-items-left justify-content-left mt-1">
                                                            <span className="adrs text-capitalize fs-6">   <MdLocationOn className="fs-6" />{automobileProduct.location.state}</span>
                                                            <span className="year"></span>
                                                        </div>
                                                        <div className="row p-0 m-0">
                                                            <div className="col p-0">

                                                                {/* <div className="buy-bt">
                                                <Link to="/singleproductpage" className="buy-bttn"><FontAwesomeIcon icon="fa fa-shopping-cart"></FontAwesomeIcon>&nbsp;&nbsp;Buy Now</Link>
                                            </div> */}
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </Link>
                                        </CardHeight>
                                    </div>
                                )

                            })
                        }
                        {/* <div className="d-grid place-items-center"> */}
                        <br />
                        <div className="row m-0 p-0 d-flex justify-content-center">
                            {
                                (TotalPagess == PageNO) ?
                                    <></>
                                    :
                                    <ButtonCraete size='lg' variant='outline' colorScheme='teal' onClick={LoadMOre} disabled={TotalPagess == PageNO}>
                                        {Loading && <div className="spinner-border spinner-border-sm me-2" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>}
                                        Load More
                                    </ButtonCraete>
                            }

                            {/* </div> */}
                        </div>
                    </div>


                </div >
                <br />
                <br />
                <Footer className="mt-4 position-relative top-0" />
            </div>

        </>
    )
}
const CardHeight = styled.div`
position: relative;
top: 0;
@media (max-width: 768px) {
    // height: 55vh ;
  }
    // height: 60vh ;
    .ShopLogo{
        height: 5vh;
        position: absolute;
        top: 2%;
        right: 7%;
        @media screen and (max-width: 600px){
            height: 3vh;
        position: absolute;
        top: 2%;
        right: 7%;
        }
        @media screen and (min-width: 601px) and (max-width: 1000px) {
            height: 3vh;
        position: absolute;
        top: 2%;
        right: 3%;
        }
    }
`
const Ribbon = styled.div`
    /* margin-left: -10px; */
    font:  10px sans-serif;
    color: #3D6182;
    text-transform: uppercase;
    text-align: center;
    -webkit-transform: rotate(-45deg);
    -moz-transform:    rotate(-45deg);
    -ms-transform:     rotate(-45deg);
    -o-transform:      rotate(-45deg);
    position: relative;
    padding: 4px 0;
    top: 10px;
    left: -40px;
    width: 120px;
    background-color: #3D6182;
    color: #fff;
  
`
const ButtonCraete = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    /* all: unset; */  
    font-size: 15px; 
    font-weight: 600;
    color: white;
    border: none;
    background: linear-gradient(${(props) => props.theme.colors.primary} , ${(props) => props.theme.colors.secondary});
    border-radius: 4px;
    padding: 0.5rem 1.2rem;
    margin: 1rem;
    width: 15%;
`
const Head = styled.div`
    .for-center {
        width: 100%;
    display: flex;
    margin: 50px 0px 97px 0px !important;
    margin-left: 6% !important;
    }
`
const Descrip = styled.div`
margin-top: 1rem;
    p{
        font-size: .8rem;
        color: #646464df;
    }
`
// const ButtonCraete = styled.button`
//                             display: flex;
//                             justify-content: center;
//                             align-items: center;
//                             /* all: unset; */
//                             font-size: 15px;
//                             font-weight: 600;
//                             color: grey;
//                             border: none;
//                             background-color: transparent;
//                             border-radius: 4px;
//                             padding: 0.3rem 1.2rem;
//                             margin: 1rem;
//                             `
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
                            box-shadow: none;
                            height: 15vh;
                            width: 80%;
                            margin: 0;
                            margin-bottom: 1rem;
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