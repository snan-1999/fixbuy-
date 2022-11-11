import React, { useEffect, useState } from "react"
import Header from "./header";
import { Swiper, SwiperSlide } from "swiper/react";
import poster1 from "../../assets/images/Poster1.jpg";
import poster2 from "../../assets/images/Poster2.jpg";
import poster3 from "../../assets/images/Poster3.jpg";
import facebook from '../../assets/images/facebook.png';
import google from '../../assets/images/google.png';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../form/header.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { baseUrl } from "../../functions/constant";
import axios from 'axios';
import { HomeAllData, SearchHome } from "../../functions/HomeFun";
import styled from "styled-components";
import shopIcon from '../../assets/images/shopIcon.png'
import { BiRefresh } from 'react-icons/bi'
import { Button, Spinner } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalVariables } from "../../Context/StateProvider";
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
// import CategorySlider from "./corousel/CategorySlider";

const Home = () => {

    const [automobile, setAutomobile] = useState([]);
    const [MoreData, setMoreData] = useState([]);
    const [TotalPagess, setTotalPagess] = useState('');
    const [Loading, setLoading] = useState(false)
    const { Lmore, setLmore, latitude, setlatitude, Longitude, setLongitude, setHomeData } = useContext(GlobalVariables)

    const homeDataAll = async () => {
        const { data } = await HomeAllData(Longitude, latitude, Lmore)
        console.log(data, 'homeData')
        setLoading(true)
        console.log(Loading)
        if (data.status) {
            setAutomobile([...automobile, ...data.data]);
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
        setLmore(Lmore + 1)
        setLoading(true)
    }
    // window.onscroll = function () {
    //     LoadMOre()
    //     homeDataAll()
    //     if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
    //     }
    // }

    let Max_length = 27;
    useEffect(() => {
        homeDataAll()
    }, [Lmore])
    return (
        <>
            {/* <div className="row p-0 m-0"> */}
            <Header />
               
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
                <div className="mobile-Categoryslider">
                {/* <CategorySlider /> */}
                </div>

            {/* <!-- products section */}

            <div className="row m-0 p-0">
                <div className="for-center flex-row justify-content-center align-items-center">

                    <div className="col-md-12">
                        <div class="container-heading">
                            <span>ALL PRODUCTS</span>
                        </div>
                    </div>

                </div>
            </div>



            <div class="container" id="card_box">

                <div class="row p-0 m-0">
                    {
                        automobile?.map((automobileProduct, key) => {
                            return (
                                <div class="col-md-4 col-6 col-lg-3" onClick={() => setHomeData(automobileProduct.saved)}>
                                    <CardHeight>

                                        <Link to='/singleproductpage' state={{ automobileProduct, key }} className="text-decor">
                                            <div class="shadow p-3 mb-4 bg-white maindiv overflow-hidden">
                                                {(automobileProduct.boostPlan.plan !== "free") ? <Ribbon>Featured</Ribbon> : <Ribbon style={{ opacity: 0 }}>Featured</Ribbon>}
                                                {(automobileProduct.sellerType == "user") ? "" : <img className="ShopLogo" src={shopIcon} />}
                                                <div class="img-wh overflow-hidden"><img src={`${baseUrl}/product/get/productImage/${automobileProduct.images[0]}`} class="pdt-img" /></div>
                                                <div class="pdt-details">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div class="price">₹ {automobileProduct.price}</div>
                                                        </div>
                                                        <div className="col-md-6 setHeart">
                                                            {
                                                                (automobileProduct.saved) ? <FaHeart className="text-danger" /> : <FiHeart />
                                                            }
                                                        </div>
                                                    </div>

                                                    {/* <div class="font-weight-light desc">{automobileProduct.description}</div> */}

                                                    {
                                                        (automobileProduct.title).length > Max_length ?
                                                            <div class="prd-name">
                                                                {`${automobileProduct.title.substring(0, Max_length)}...`}
                                                            </div>
                                                            :
                                                            <div class="prd-name text-capitalize">{automobileProduct.title}</div>
                                                    }
                                                    <div class="contain-adrs">
                                                        <span class="adrs text-capitalize">{automobileProduct.location.state}</span>
                                                        <span class="year"></span>
                                                    </div>
                                                    <div class="row p-0 m-0">
                                                        <div class="col p-0">
                                                            <div class="buy-bt">
                                                                <Link to="/singleproductpage" class="buy-bttn"><FontAwesomeIcon icon="fa fa-shopping-cart"></FontAwesomeIcon>&nbsp;&nbsp;Buy Now</Link>
                                                            </div>
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
                    <div className="row m-0 p-0">

                        <ButtonCraete size='lg' variant='outline' colorScheme='teal' onClick={LoadMOre} disabled={TotalPagess == Lmore}>
                            {Loading && <div class="spinner-border spinner-border-sm me-2" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>}
                            Load More
                        </ButtonCraete>
                        {/* </div> */}
                    </div>
                </div>


            </div >
            <Footer />
            {/* </div> */}
        </>
    )
}

export default Home;
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
const CardHeight = styled.div`
position: relative;
top: 0;
/* @media (max-width: 768px) {
    display: none;
  } */
    height: 70vh ;
    .ShopLogo{
        height: 5vh;
        position: absolute;
        top: 2%;
        right: 7%;
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