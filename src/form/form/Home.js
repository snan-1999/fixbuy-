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


const Home = () => {

    const [automobile, setAutomobile] = useState([]);
    

    const getAllProduct = async () => {
        const api = `${baseUrl}/automobile/getProducts/all`;
        await axios.get(api).then((res) => {
            console.log(res.data.data, '1');
            if (res.data) {
                setAutomobile(res.data.data);
                console.log(automobile, 'autoData')

            }
        })

    }

    useEffect(() => {

        getAllProduct();

    }, [0])

    // const pagination = async () => {
    //     const api = `${baseUrl}/admin/boost/allproduct/1`
    //     await axios.get(api).then((res) =>{
    //         if()
    //     })
    // }


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

            <div class="for-center">
                <div class="container-heading">
                    <span>ALL PRODUCTS</span>
                </div>
            </div>
            <div class="container" id="card_box">

                {/* <!-- Mobile products --> */}
                <div class="row">
                    <div class="col-md-4 col-6 col-lg-3">
                        <Link to='/singleproductpage'>
                            <div class="shadow p-3 mb-5 bg-white maindiv">
                                <div class="img-wh"><img src={google} class="pdt-img" /></div>
                                <div class="pdt-details">
                                    <div class="price"></div>
                                    <div class="font-weight-light desc"></div>
                                    <div class="prd-name"></div>
                                    <div class="contain-adrs">
                                        <span class="adrs"></span>
                                        <span class="year"></span>
                                    </div>
                                    <div class="row p-0 m-0">
                                        <div class="col p-0">
                                            <div class="buy-bt">
                                                <Link to="/singleproductpage" className="buy-bttn" ><FontAwesomeIcon icon="fa fa-shopping-cart">
                                                </FontAwesomeIcon>&nbsp;&nbsp;Buy Now</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
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
                                    <Link to='/singleproductpage' state={automobileProduct} className="text-decor">
                                        <div class="shadow p-3 mb-4 bg-white maindiv">
                                            <div class="img-wh"><img src={`${baseUrl}/allcategories/get/productImage/${automobileProduct.images[0]}`} class="pdt-img" /></div>
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
                </div>
                        )
                        
                    })
                }
                </div>
                {/* <!-- <div class="for-center-car">
        <div class="container-heading-car">
            <span>BIKE ITEMS</span>
        </div>
    </div> -->

    <!-- car products --> */}

                <div class="row">
                    <div class="col-md-4 col-8 col-lg-3">
                        <Link to='/singleproductpage'>
                            <div class="shadow p-3 mb-5 bg-white maindiv">
                                <div class="img-wh"><img src="" class="pdt-img" /></div>
                                <div class="pdt-details">
                                    <div class="price"></div>
                                    <div class="font-weight-light desc"></div>
                                    <div class="prd-name"></div>
                                    <div class="contain-adrs">
                                        <span class="adrs"></span>
                                        <span class="year"></span>
                                    </div>
                                    <div class="row p-0 m-0">
                                        <div class="col p-0">
                                            <div class="buy-bt"> <Link to='/singleproductpage' class="buy-bttn"><FontAwesomeIcon icon="fa fa-shopping-cart"></FontAwesomeIcon>&nbsp;&nbsp;Buy Now</Link></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>

                {/* <!-- electronics products --> */}
                <div class="row">
                    <div class="col-md-4 col-6 col-lg-3">
                        <Link to='/singleproductpage'>
                            <div class="shadow p-3 mb-5 bg-white maindiv">
                                <div class="img-wh"><img src="" class="pdt-img" /></div>
                                <div class="pdt-details">
                                    <div class="price"></div>
                                    <div class="font-weight-light desc"></div>
                                    <div class="prd-name"></div>
                                    <div class="contain-adrs">
                                        <span class="adrs"></span>
                                        <span class="year"></span>
                                    </div>
                                    <div class="row p-0 m-0">
                                        <div class="col p-0">
                                            <div class="buy-bt"> <Link to='/singleproductpage' class="buy-bttn"><FontAwesomeIcon icon="fa fa-shopping-cart"></FontAwesomeIcon>&nbsp;&nbsp;Buy Now</Link></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Home;
