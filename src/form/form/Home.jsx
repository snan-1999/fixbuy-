import React, { useEffect, useState } from "react"
import Header from "./header";
import { Swiper, SwiperSlide } from "swiper/react";
import poster1 from "../../assets/images/Poster1.jpg";
import poster2 from "../../assets/images/Poster2.jpg";
import poster3 from "../../assets/images/Poster3.jpg";
import facebook from '../../assets/images/facebook.png';
import load from '../../assets/images/load.gif';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../form/header.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl, ImageView } from "../../functions/constant";
import fot from '../../assets/images/fot.png'
import axios from 'axios';
import { HomeAllData, SearchHome } from "../../functions/HomeFun";
import styled from "styled-components";
import shopIcon from '../../assets/images/shopIcon.png'
import { MdLocationOn } from 'react-icons/md'
import { Button, Spinner } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalVariables } from "../../Context/StateProvider";
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import android from '../../assets/images/android.png'
import apple from '../../assets/images/apple.png'
import CategorySlider from "./corousel/CategorySlider";
import useGeoLocation from "../../hooks/useGeoLoaction";
// import DownloadModal from "./Modals/DownloadModal";

const Home = () => {
    const location = useGeoLocation();
    const [isOpen, setisOpen] = useState(false)
    const Onclose = () => setisOpen(false)
    const OnOpen = () => setisOpen(true)
    const Token = localStorage.getItem('token');
    const TokenData = JSON.parse(Token)
    const nav = useNavigate();
    console.log(TokenData, 'token');
    const profileName = JSON.parse(Token)
    const [automobile, setAutomobile] = useState([]);
    const [MoreData, setMoreData] = useState([]);
    const [TotalPagess, setTotalPagess] = useState('');
    const [PageNo, setPageNo] = useState(1);
    const [Loading, setLoading] = useState(false)
    const { Lmore, setLmore, latitude, setlatitude, Longitude, setLongitude, setHomeData, UserId, setUserId } = useContext(GlobalVariables)
    console.log(latitude, Longitude, 'Location')
    setUserId((TokenData) ? TokenData.token : null)
    const homeDataAll = async () => {
        console.log(UserId, 'UserId')
        const { data } = await HomeAllData(Longitude, latitude, PageNo, UserId)
        console.log(data, 'homeData')
        setLoading(true)
        console.log(Loading)
        if (data.status) {
            setAutomobile([...automobile, ...data.data]);
            // setAutomobile(data.data);
            setLoading(false)
            setHomeData(data.data)
            console.log(Loading)
            setMoreData(data.data);
            setTotalPagess(data.totalPages);
            console.log(MoreData, 'moreDaat')
            console.log(TotalPagess)
            console.log(Lmore)
        }
    }
    const LoadMOre = () => {
        setPageNo(PageNo + 1)
        console.log(TotalPagess, PageNo, "HomeData")
        setLoading(true)
    }
    // window.onscroll = function () {
    //     LoadMOre()
    //     homeDataAll()
    //     if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
    //     }
    // }
    const sellLog = () => {

        if (profileName === null) {

            nav('/login')
        } else {

            nav('/sell')
        }
    }


    const [isVisible, setIsVisible] = useState(true);
    const [height, setHeight] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [])

    const listenToScroll = () => {
        let heightToHideFrom = 1800;
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;
        setHeight(winScroll);

        if (winScroll > heightToHideFrom) {
            isVisible && setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };
    window.onload = function () {
        setTimeout(function () {
            OnOpen()
        }, 5000);
    };
    let Max_length = 27;
    // const DAte = new Date();
    // alert(DAte.toDateString().split(' ').slice(1).join(' '))
    useEffect(() => {
        latitude && homeDataAll()
    }, [PageNo, UserId, latitude])
    return (
        <>
            {/* <div className="row p-0 m-0"> */}
            <div className="overflow-hidden">
                <Header />
                {/* {
                 <DownloadModal  Onclose={Onclose} OnOpen={OnOpen} isOpen={isOpen} setisOpen={setisOpen} />
            } */}
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        className: "swiper-pagination-bullet-active",
                    }}
                    navigation={true}
                    // effect={'fade'}
                    // slidesPerView={1}
                    loop
                    modules={[Pagination, Navigation]}
                    // modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {/* <div className="swiper-wrapper"> */}
                    <SwiperSlide className="swiper-slide" id="poster1">
                        <img src={poster1} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" id="poster2">
                        <img src={poster2} />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" id="poster3">
                        <img src={poster3} />
                    </SwiperSlide>
                    <div className="swiper-pagination"></div>
                    {/* </div> */}
                </Swiper>
            </div>
            <div className="mobile-Categoryslider">
                <CategorySlider />
            </div>
            {/* GeoLocation start */}
            <div className="inline-block mr-auto pt-1">
                {
                    location.loaded &&
                    JSON.stringify(location)

                }
            </div>
            {/* Geolocation end */}
            {/* <!-- products section */}

            <div className="row m-0 p-0">
                <div className="for-center flex-row justify-content-center align-items-center">

                    <div className="col-md-12">
                        <div className="container-heading">
                            <span>ALL PRODUCTS</span>
                        </div>
                    </div>

                </div>
            </div>



            <div className="container" id="card_box">

                <div className="row p-0 m-0">
                    {
                        automobile?.map((automobileProduct, key) => {
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
                                                                (automobileProduct.saved) ? <FaHeart className="text-danger fs-6 fs-md-5 fs-lg-5" /> : <FiHeart className="fs-6 fs-md-5 fs-lg-5" />
                                                            }
                                                        </div>
                                                    </div>

                                                    {/* <div className="font-weight-light desc">{automobileProduct.description}</div> */}

                                                    {
                                                        (automobileProduct.title).length > Max_length ?
                                                            <div className="prd-name">
                                                                {`${automobileProduct.title.substring(0, Max_length)}...`}
                                                            </div>
                                                            :
                                                            <div className="prd-name text-capitalize">{automobileProduct.title}</div>
                                                    }
                                                    <div>
                                                        <span className="date">{new Date(automobileProduct.createdAt).toDateString().split(' ').slice(1).join(' ')}</span>
                                                    </div>
                                                    <div className="contain-adrs d-flex align-items-center justify-content-left mt-1">
                                                        <span className="adrs text-capitalize">   <MdLocationOn className="fs-6 SetLocIcon" />{automobileProduct.location.state}</span>
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
                    {

                    }
                    <div className="row m-0 p-0 d-flex justify-content-center">
                        {
                            (TotalPagess == PageNo) ?
                                <></>
                                :
                                <ButtonCraete size='lg' variant='outline' colorScheme='teal' onClick={LoadMOre} disabled={TotalPagess == PageNo}>
                                    {Loading ? <div className="spinner-border spinner-border-sm me-2" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                        :
                                        <img src={load} />} &nbsp;&nbsp;
                                    Load More
                                </ButtonCraete>
                        }

                        {/* </div> */}
                    </div>
                </div>


            </div >
            {
                isVisible
                &&
                <div className="row p-0 m-0 d-flex justify-content-center mob-version ">
                    <div className="col-12 mobileversion">
                        <button className="btnSell" onClick={sellLog} > + SELL</button>
                    </div>
                </div>
            }
            <LastSection>
                <div className="row m-0 p-0">
                    <div className="col-md-4 col-12">
                        <div className="imgFot">
                            <img src={fot} alt="" />
                        </div>
                    </div>
                    <div className="col-md-5 col-12">
                        <br />
                        <div className="FotHead">
                            <h2>TRY THE FIXEBUY APP</h2>
                            <p>Buy , Sell and find just about anything using the app on your website</p>

                        </div>
                    </div>
                    <div className="col-md-3 col-12 setBr">
                        <div className="android">
                            <h3>Get our App today</h3>
                            <div className="heads">
                                <img src={android} alt="" />
                                <img src={apple} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </LastSection>
            <Footer />
            {/* </div> */}
        </>
    )
}

export default Home;
const LastSection = styled.div`
overflow: hidden;
margin-bottom: -1rem;
/* .setBr{
    border-left: 1px solid red;
} */
.heads img{
     padding: 5px 8px;
     /* gap: 80px; */
    }
    .android{
        text-transform: capitalize;
        margin-top: 3.2rem;
        height: 30%;
        border-left: 1px solid #7a7a7a7a;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .android img{
        width: 10vw;
    }
    .android h3{
        font-size: 1.4rem;
        color: ${props => props.theme.colors.secondary};
    }
    height: 30vh;
    background-color: #d2e7fc5e;
    /* margin-bottom: 2rem; */
    
    .imgFot img{
        /* width: 50vw; */
        margin-top: -6rem;
        height: 60vh;
        transform: rotate(-20deg);
        /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    }
    .FotHead{

        text-transform: capitalize;
        height: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        margin-top: 2rem;

    }
    .FotHead h2{
        color: ${props => props.theme.colors.secondary};
    }
    .FotHead p{
        font-size: .8rem;
        color: ${props => props.theme.colors.primary};
    }
    @media screen and (max-width :600px ){
        height: 85vh;
        .imgFot img{
        /* width: 50vw; */
        margin-top: -0rem;
        height: 43vh;
        transform: rotate(-20deg);
        /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
    }
    .android{
        text-transform: capitalize;
        margin-top: 1rem;
        height: 30%;
        border-left: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .android img{
        width: 40vw;
    }
    }
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
    img{
        rotate: 30px;
        margin-left: -10px;
        width: 25px;
        height: 25px;
    }
    @media (max-width: 768px) {
        font-size: 12px; 
        width: 39%;
        // height: 55vh ;
      }
    
`
const CardHeight = styled.div`
position: relative;
top: 0;
@media (max-width: 768px) {
    // height: 55vh ;
    .date{
        /* margin-top: 6px; */
    }
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
const RefreshBtn = styled.div`
margin-top: 15px;
  cursor: pointer;
  font-size: 2.5rem;
  color:  #3D6182;
  margin-left: 1rem;
  .ref:hover{
    -ms-transform: rotate(-360deg); /* IE 9 */
    transform: rotate(-360deg);
    transition : all 1000ms ease;
    cursor: pointer;
}
`