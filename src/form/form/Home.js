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
import { HomeAllData } from "../../functions/HomeFun";
import styled from "styled-components";
import shopIcon from '../../assets/images/shopIcon.png'
import { BiRefresh } from 'react-icons/bi'

const Home = () => {

    const [automobile, setAutomobile] = useState([]);


    // const getAllProduct = async () => {

    //     const api = `${baseUrl}/automobile/getProducts/all`;
    //     axios.get(api).then((res) => {
    //         console.log(res.data.data, '1');
    //         if (res.data) {
    //             setAutomobile(res.data.data);
    //             console.log(automobile, 'autoData')

    //         }
    //     })

    // }
    const homeDataAll = async () => {
        const { data } = await HomeAllData()
        console.log(data)
        console.log(data.data[4].boostPlan.plan, "homeData")
        if (data.status) {
            setAutomobile(data.data);

        }
    }

    useEffect(() => {
        homeDataAll()


    }, [0])

    // const pagination = async () => {
    //     const api = `${baseUrl}/admin/boost/allproduct/1`
    //     await axios.get(api).then((res) =>{
    //         if()
    //     })
    // }

    const RefTog = () => {
        homeDataAll()
    }
    return (
        <>

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
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* <div className="swiper-wrapper"> */}
                <SwiperSlide className="swiper-slide">
                    <img src={poster1} />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src={poster2} />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src={poster3} />
                </SwiperSlide>
                <div className="swiper-pagination"></div>
                {/* </div> */}
            </Swiper>


            {/* <!-- products section */}

            <div className="row m-0 p-0">
                <div className="for-center flex-row justify-content-center align-items-center">

                    <div className="col-md-6">
                        <div class="container-heading">
                            <span>ALL PRODUCTS</span>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className=" pt-4">
                            <RefreshBtn>
                                <abbr title="Refresh Data"><BiRefresh className='ref' onClick={() => { RefTog() }} /></abbr>
                            </RefreshBtn>
                        </div>
                    </div>
                </div>
            </div>



            <div class="container" id="card_box">

                {/* <!-- Mobile products --> */}

                {/* <!-- <div class="for-center-car">
        <div class="container-heading-car">
            <span>CAR ITEMS</span>
        </div>
    </div> --> */}

                {/* <!-- car products --> */}
                <div class="row">
                    {
                        automobile?.map((automobileProduct, key) => {
                            return (
                                <div class="col-md-4 col-8 col-lg-3">
                                    <CardHeight>

                                        <Link to='/singleproductpage' state={automobileProduct} className="text-decor">
                                            <div class="shadow p-3 mb-4 bg-white maindiv overflow-hidden">
                                                {(automobileProduct.boostPlan.plan !== "free") ? <Ribbon>Featured</Ribbon> : <Ribbon style={{ opacity: 0 }}>Featured</Ribbon>}
                                                {(automobileProduct.sellerType == "user") ? "" : <img className="ShopLogo" src={shopIcon} />}
                                                <div class="img-wh overflow-hidden"><img src={`${baseUrl}/allcategories/get/productImage/${automobileProduct.images[0]}`} class="pdt-img" /></div>
                                                <div class="pdt-details">
                                                    <div class="price">{automobileProduct.price}</div>
                                                    <div class="font-weight-light desc">{automobileProduct.description}</div>
                                                    <div class="prd-name">{automobileProduct.title}</div>
                                                    <div class="contain-adrs">
                                                        <span class="adrs">{automobileProduct.location.state}</span>
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
                </div>


            </div >
            <Footer />
        </>
    )
}

export default Home;
const CardHeight = styled.div`
position: relative;
top: 0;

    height: 70vh ;
    .ShopLogo{
        height: 7vh;
        position: absolute;
        top: 2%;
        right: 7%;
    }
`
const Ribbon = styled.div`
  
    font:  10px sans-serif;
    color: #3D6182;
    text-align: center;
    -webkit-transform: rotate(-45deg);
    -moz-transform:    rotate(-45deg);
    -ms-transform:     rotate(-45deg);
    -o-transform:      rotate(-45deg);
    position: relative;
    padding: 7px 0;
    top: -5px;
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