import { Box } from '@chakra-ui/react';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalVariables } from '../../Context/StateProvider';
import Footer from '../../form/form/Footer';
import Header from '../../form/form/header';
import shopIcon from '../../assets/images/shopIcon.png'
import { AllDataCategory, FilterMainCategoryData } from '../../functions/MainCategoryFun'
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import { baseUrl } from '../../functions/constant';
import axios from 'axios'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
export default function MainProducts() {
    const Max_length = 26;
    const { Lmore, setLmore, TotalPagess, setTotalPagess, setHomeData, latitude, Longitude, UserId } = useContext(GlobalVariables)
    const [AllData, setAllData] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [PageNO, setPageNO] = useState(1);
    const [NOData, setNOData] = useState(false)
    const [Diffrence, setDiffrence] = useState(null)
    const [filters, setfilters] = useState(null)
    const { maincategory, subcategory } = useParams();
    const GetMainCatogery = maincategory.replace(/ /g, "_").toLowerCase()
    const GetSubCatogery = subcategory.replace(/ /g, "_").toLowerCase()
    // filter one time
    const MainCategoryDataFIlter = async () => {
        setAllData([])
        console.log(filters, 'filter')
        try {
            const { data } = await FilterMainCategoryData(GetMainCatogery, latitude, Longitude, PageNO, filters, UserId)
            console.log(data, 'shopData')
            setAllData(data.data)
            // if(Diffrence == maincategory) {
            //     console.log(true , 'run')
            // }else{
            //     setAllData(data.data)
            //     console.log(false ,'run')
            // }
        } catch (error) {

        }
    }
    // filter Load More
    const MainCategoryDataFIlterLoad = async () => {
        // setAllData([])
        console.log(filters, 'filter')
        try {
            const { data } = await FilterMainCategoryData(GetMainCatogery, latitude, Longitude, PageNO, filters, UserId)
            console.log(data, 'shopData')
            setAllData([...AllData, ...data.data])
            // if(Diffrence == maincategory) {
            //     console.log(true , 'run')
            // }else{
            //     setAllData(data.data)
            //     console.log(false ,'run')
            // }
        } catch (error) {

        }
    }
    // useEffect(() => {
    //     MainCategoryDataFIlter()
    // }, [filters])
    // end filter
    const MainData = async () => {
        console.log('run')
        setDiffrence(maincategory)
        // setAllData([])
        let api
        if (UserId == undefined || UserId == null) {
            api = `${baseUrl}/product/fetch/${GetMainCatogery}/${latitude}/${Longitude}/${PageNO}`
        } else {
            api = `${baseUrl}/product/fetch/${GetMainCatogery}/${latitude}/${Longitude}/${PageNO}?user_id=${UserId}`
        }
        const { data } = await axios.get(api)
        console.log(data, 'run')
        console.log(api, 'run')
        if (data.status) {
            setLoading(false)
            if (Diffrence == maincategory) {
                console.log(true, 'run')
            } else {
                setAllData(data.data)
                console.log(false, 'run')
            }
            // setAllData([...AllData, ...data.data])
            // if(GetMainCatogery == maincategory){
            //     alert('add')
            // }{
            //     alert('one')
            //     setAllData(data.data)

            // }
            setNOData(false)
        } else {
            setLoading(false)
            setNOData(true)
        }

    }
    const LoadMOre = async () => {
        setPageNO(PageNO + 1)
        setLoading(true)

    }
    const LoadMoreDataMain = async () => {
        const { data } = await AllDataCategory(GetMainCatogery, latitude, Longitude, PageNO, UserId)
        setTotalPagess(data.totalPages)
        console.log(data.totalPages)
        console.log(data, 'main')
        setLoading(true)
        if (data.status) {
            setLoading(false)
            // if (data.totalPages > 1) {
            setAllData([...AllData, ...data.data])
            // setAllData(data.data)
            // alert('load') 
            //     console.log(AllData, 'che')
            // } else {
            //     setAllData(data.data)
            //     // alert('no dta')
            // }
            setNOData(false)
            // setName(AllData[0].categories)


        } else {
            setLoading(false)
            setNOData(true)
            setAllData([])

            // alert('There is no Data')
        }
    }
    useEffect(() => {
        LoadMoreDataMain()
    }, [PageNO])
    useEffect(() => {
        MainCategoryDataFIlter()
    }, [filters])
    useEffect(() => {
        MainCategoryDataFIlterLoad()
    }, [PageNO])
    useEffect(() => {
        // MainCategoryDataFIlter()

        // MainCategoryDataFIlter()
        setPageNO(1)
        MainData()
        console.log('run')
    }, [maincategory ,latitude])

    return (
        <>
            <Header />
            <div className="row m-0 p-0">
                <div className="for-center flex-row justify-content-center align-items-center">

                    <div className="col-md-6">
                        <div className="container-heading-Automibile">
                            <span>CATEGORY PRODUCTS</span>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className=" pt-4">
                            <div className="col-md-6 position-relative ">
                                <div className="filter_bt  ">
                                    <div className="dropdown setDrop">
                                        <button className="btn btn-secondary dropdown-toggle shadow-none btn-outline-success" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Filter
                                        </button>
                                        <ul className="dropdown-menu SetHover">
                                            <div className="priceFilter ">
                                                Price
                                            </div>

                                            <li className="dropdown-item" onClick={() => setfilters(1)}><BsArrowUp className='me-2' />Low To High</li>
                                            <li className="dropdown-item" onClick={() => setfilters(-1)}><BsArrowDown className='me-2' />High To Low</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" id="card_box" >
                <div className="row">
                    {/* {Loading && <button className='bg-transparent border-0 d-flex align-items-center justify-content-center'>
                        <div className="spinner-border spinner-border-lg me-2 text-secondary" role="status">
                        </div>
                        <span className="text-secondary">Loading...</span>
                    </button>
                    } */}
                    {
                        NOData && <Box display='flex' justifyContent='center' mt='-10%' zIndex='-3'>
                            {/* <Image src={NoData} alt='Dan Abramov' boxSize='80vh'/> */}
                            <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_rdjfuniz.json" background="transparent" speed="1" style={{ width: '600px', height: '600px' }} loop autoplay></lottie-player>
                            {/* <Image src='https://lottiefiles.com/97434-no-data-available' alt='Dan Abramov' boxSize='80vh'/> */}
                        </Box>
                    }
                    {
                        // .filter((value , index) => {
                        //     if (value.price == )
                        // })
                        AllData?.map((automobileProduct, key) => {
                                return (
                                    <div className="col-md-4 col-8 col-lg-3" onClick={() => setHomeData(automobileProduct.saved)}>
                                        <CardHeight>

                                            <Link to='/singleproductpage' state={{ automobileProduct, key }} className="text-decor">
                                                <div className="shadow p-3 mb-4 bg-white maindiv overflow-hidden">
                                                    {(automobileProduct.boostPlan.plan !== "free") ? <Ribbon>Featured</Ribbon> : <Ribbon style={{ opacity: 0 }}>Featured</Ribbon>}
                                                    {(automobileProduct.sellerType == "user") ? "" : <img className="ShopLogo" src={shopIcon} />}
                                                    <div className="img-wh overflow-hidden"><img src={`${baseUrl}/product/get/productImage/${automobileProduct.images[0]}`} className="pdt-img" /></div>
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
                                                        {
                                                            (automobileProduct.title).length > Max_length ?
                                                                <div className="prd-name">
                                                                    {`${automobileProduct.title.substring(0, Max_length)}...`}
                                                                </div>
                                                                :
                                                                <div className="prd-name text-capitalize">{automobileProduct.title}</div>
                                                        }
                                                        <div className="contain-adrs">
                                                            <span className="adrs fs-6"><MdLocationOn className="fs-6" />{automobileProduct.location.state}</span>
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
                    <div className="row m-0 p-0">

                        <ButtonCraete size='lg' variant='outline' colorScheme='teal' onClick={LoadMOre} disabled={TotalPagess == PageNO}>
                            {Loading && <div className="spinner-border spinner-border-sm me-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>}
                            Load More
                        </ButtonCraete>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <Footer />
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
const CardHeight = styled.div`
position: relative;
top: 0;
/* @media (max-width: 768px) {
    display: none;
  } */
    height: 70vh ;
    .ShopLogo{
        height: 7vh;
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