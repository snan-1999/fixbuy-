import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../form/form/header'
import { baseUrl, ImageView } from '../../functions/constant'
import shopIcon from '../../assets/images/shopIcon.png'
import load from '../../assets/images/load.gif';
import { useContext } from 'react'
import { GlobalVariables } from '../../Context/StateProvider'
import axios from 'axios'
import { useEffect } from 'react'
import NoData from '../../assets/images/NoData.gif'
import { Box, Image } from '@chakra-ui/react'
import Footer from '../../form/form/Footer'
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'

import { MdLocationOn } from 'react-icons/md'
import { AllDataCategory, FilterSubCategoryData, SubDataCategoryFun } from '../../functions/MainCategoryFun'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import useGeoLocation from '../../hooks/useGeoLoaction'
import BottomTop from '../../functions/BottomTop'
export default function SubProduct() {
    const { Lmore, setLmore, TotalPagess, setTotalPagess, latitude, Longitude, setHomeData, UserId, setUserId } = useContext(GlobalVariables)
    const Token = localStorage.getItem('token');
    const ParamLocate = useLocation()
    const TokenData = JSON.parse(Token)
    const Loacation = useGeoLocation()
    const [AllData, setAllData] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [PageNO, setPageNO] = useState(1);
    const [filters, setfilters] = useState(null)
    const [NOData, setNOData] = useState(false);
    const [FIlterPageNO, setFIlterPageNO] = useState(1); // filter Page No 
    // const [UserID, setUserID] = useState(null);
    const { maincategory, subcategory } = useParams();
    const GetMainCatogery = maincategory.replace(/ /g, "_").toLowerCase()
    const GetSubCatogery = subcategory.replace(/ /g, "_").toLowerCase()

    console.log(GetMainCatogery, GetSubCatogery, 'hy')
    // setid_user((TokenData) ? TokenData.token : null)
    const [Name, setName] = useState('Category');
    console.log(latitude, 'latituds')
    const MainCategoryDataFIlter = async () => {
        setFIlterPageNO(1)
        setAllData([])
        console.log(filters, 'filter')
        try {
            const { data } = await FilterSubCategoryData(GetMainCatogery, GetSubCatogery, latitude, Longitude, FIlterPageNO, filters)
            console.log(data, 'location')
            setAllData(data.data)
            setLoading(false)
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
            const { data } = await FilterSubCategoryData(GetMainCatogery, GetSubCatogery, latitude, Longitude, FIlterPageNO, filters)
            console.log(data, 'shopData')
            setAllData([...AllData, ...data.data])
            setLoading(false)
            // if(Diffrence == maincategory) {
            //     console.log(true , 'run')
            // }else{
            //     setAllData(data.data)
            //     console.log(false ,'run')
            // }
        } catch (error) {

        }
    }
    const LoadSubData = async () => {
        try {
            setLoading(true)
            const { data } = await SubDataCategoryFun(maincategory, GetSubCatogery, latitude, Longitude, PageNO, UserId)
            console.log(data, 'load')
            if (data.status) {
                setLoading(false)
                // if (data.totalPages > 1) {
                setAllData([...AllData, ...data.data])
                // }
            }
        } catch (error) {
            // alert(error.message)
        }
    }
    const SubDataCategory = async () => {
        // setAllData([])
        let api;
        // try {
        if (UserId == undefined || UserId == null) {
            api = `${baseUrl}/product/fetch/${maincategory}/${GetSubCatogery}/${latitude}/${Longitude}/${PageNO}`
        } else {
            api = `${baseUrl}/product/fetch/${maincategory}/${GetSubCatogery}/${latitude}/${Longitude}/${PageNO}?user_id=${UserId}`
        }

        const { data } = await axios.get(api);
        setLoading(true)
        console.log(data, 'location')
        console.log(api, 'location')
        if (data.status) {
            setLoading(false)
            if (data.totalPages > 1) {
                setAllData(data.data)
                // alert('load') 
                console.log(AllData, 'che')
            } else {
                setAllData(data.data)
                // alert('no dta')
            }
            setTotalPagess(data.totalPages)
            setNOData(false)
            console.log(api, 'check')
            console.log(data, 'hy')
            // setName(AllData[0].categories)
            console.log(Name, 'hy')

        } else {
            setLoading(false)
            setNOData(true)
            setAllData([])

            // alert('There is no Data')
        }
        // } catch (error) {
        //     alert(error.message, 'hy')
        // }
    }
    const LoadMOre = () => {
        setPageNO(PageNO + 1)
        setLoading(true)
    }
    const LoadMOreFIlter = async () => {
        setFIlterPageNO(FIlterPageNO + 1)
        setLoading(true)

    }
    let PriceLenght = 5;
    const numberWithCommas = price => {
        console.log(price , 'commaa')
        return parseInt(price).toLocaleString('en-US');
    };
    useEffect(() => {
        // setPageNO(1)
        MainCategoryDataFIlter()
    }, [filters])
    useEffect(() => {
        MainCategoryDataFIlterLoad()
    }, [FIlterPageNO])
    useEffect(() => {
        LoadSubData()
    }, [PageNO])
    const Max_length = 26;
    useEffect(() => {
        if (ParamLocate !== `/automobile/${GetSubCatogery}`) {
            setFIlterPageNO(1)
            setAllData([])
            setPageNO(1)
        }
            BottomTop()
        // setPageNO(1)
        SubDataCategory()
        console.log('run');
    }, [0, subcategory, latitude])
    // const SHare = () => {

    // }
    return (
        <>
            <Header />
            {/* <button onClick={SHare}>SHare</button> */}

            <div className="row m-0 p-0 overflow-hidden">
                <div className="for-center flex-row justify-content-center align-items-center" id='mob_head'>

                    <div className="col-6">
                        <div className="container-heading-Automibile">
                            <span>CATEGORY PRODUCTS</span>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
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
            <div className="container" id="card_box">
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
                        AllData?.map((automobileProduct, key) => {
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
                                                        <div className="col-md-6 col-8 setMobPadingProduct">
                                                        {
                                                                (automobileProduct.price).toString().length > PriceLenght ?
                                                                    <div className="price">₹ {`${numberWithCommas(automobileProduct.price.toString().substring(0, PriceLenght))}`}..</div>
                                                                    :
                                                                    <div className="price">₹ {numberWithCommas(automobileProduct.price)}</div>
                                                            }
                                                        </div>
                                                        <div className="col-md-6 col-4 setHeart d-flex justify-content-end">
                                                            {
                                                                (automobileProduct.saved) ? <FaHeart className="text-danger fs-6" /> : <FiHeart className="fs-6" />
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
                                                    <div>
                                                        <span className="date">{new Date(automobileProduct.createdAt).toDateString().split(' ').slice(1).join(' ')}</span>
                                                    </div>
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
                    <div className="row m-0 p-0 d-flex justify-content-center">
                        {
                            filters == 1 || filters == -1 ?
                                TotalPagess == FIlterPageNO ?
                                    <>
                                    </>
                                    :
                                    <ButtonCraete size='lg' variant='outline' colorScheme='teal' onClick={LoadMOreFIlter} disabled={TotalPagess == FIlterPageNO}>
                                        {Loading ? <div className="spinner-border spinner-border-sm me-1" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                            :
                                            <img src={load} />} &nbsp;&nbsp;
                                         Load More
                                    </ButtonCraete>
                                :
                                <ButtonCraete size='lg' variant='outline' colorScheme='teal' onClick={LoadMOre} disabled={TotalPagess == PageNO}>
                                    {Loading ? <div className="spinner-border spinner-border-sm me-1" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                        :
                                        <img src={load} />} &nbsp;&nbsp;
                                    Load More
                                </ButtonCraete>
                        }
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
    @media (max-width: 600px) {
        font-size: 12px; 
        width: 39%;
        // height: 55vh ;
      }
      @media screen and (min-width: 601px) and (max-width: 900px) {
        width: 25%;
        font-size: 12px;
      }
    
`
const CardHeight = styled.div`
               position: relative;
               top: 0;
               /* @media (max-width: 768px) {
                   display: none;
                 } */
                   height: auto ;
                   @media (max-width :600px){
                       height: auto ;
                   }
                   @media screen and (min-width: 601px) and (max-width: 900px) {
                    height: auto;
                   }
                   .ShopLogo{
                       height: 7vh;
                       position: absolute;
                       top: 2%;
                       right: 7%;
                       @media (max-width :600px){
                           height: 4vh;
                           position: absolute;
                           top: 2%;
                           right: 10%;
                       }
                       @media screen and (min-width: 601px) and (max-width: 900px) {
            height: 3vh;
            position: absolute;
            top: 3%;
            right: 8%;
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