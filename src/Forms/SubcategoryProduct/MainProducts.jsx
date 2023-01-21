import { Box, useMediaQuery } from '@chakra-ui/react';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import load from '../../assets/images/load.gif';
import { GlobalVariables } from '../../Context/StateProvider';
import Footer from '../../form/form/Footer';
import Header from '../../form/form/header';
import shopIcon from '../../assets/images/shopIcon.png'
import { AllDataCategory, FilterMainCategoryData } from '../../functions/MainCategoryFun'
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { MdLocationOn } from 'react-icons/md';
import { baseUrl, ImageView } from '../../functions/constant';
import axios from 'axios'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import useGeoLocation from '../../hooks/useGeoLoaction';
import {BottomTop } from '../../functions/BottomTop';
import { ProfileStore } from '../../store';
export default function MainProducts({ AllDataMainCategory, LoadMOreMainCategory, MainCategoryPageNO, filtersMaincategory, setfiltersMaincategory, LoadMOreFIlterMainCategory, Loading, setLoading ,FIlterPageNOMainCategory, setFIlterPageNOMainCategory ,setMainCategoryPageNO ,setAllDataMainCategory ,TotalPagesMainCategory ,NODataMainCategory}) {
    const { Lmore, setLmore, TotalPagess, setTotalPagess, setHomeData, latitude, Longitude, UserId } = useContext(GlobalVariables)
    console.log(TotalPagesMainCategory
         ,FIlterPageNOMainCategory , 'chekign')
      
        const [isMobile] = useMediaQuery("(max-width : 600px)");
    const Loacation = useGeoLocation()
    console.log(Loacation, 'latitudes')
    const ParamLocate = useLocation()
    const chekc = ProfileStore(state => state.MainCategoryParam);
    console.log(ParamLocate.pathname, 'statttte')
    const Max_length = 26;
    const [AllData, setAllData] = useState([]);
    // const [Loading, setLoading] = useState(false);
    const [PageNO, setPageNO] = useState(1);
    const [FIlterPageNO, setFIlterPageNO] = useState(1); // filter Page No 
    const [NOData, setNOData] = useState(false)
    const [Diffrence, setDiffrence] = useState(null)
    const [filters, setfilters] = useState(null)
    const { maincategory, subcategory } = useParams();
    const GetMainCatogery = maincategory.replace(/ /g, "_").toLowerCase()
    ProfileStore.setState({ MainCategoryName: GetMainCatogery })
    ProfileStore.setState({ MainCategoryParam: maincategory })
    const GetSubCatogery = subcategory.replace(/ /g, "_").toLowerCase()
    // filter one time
    console.log(chekc, 'latituds')

    const MainCategoryDataFIlter = async () => {
        setFIlterPageNO(1)
        setAllData([])
        console.log(FIlterPageNO, 'filter')
        try {
            const { data } = await FilterMainCategoryData(GetMainCatogery, latitude, Longitude, FIlterPageNO, filters, UserId)
            console.log(data, 'shopData')
            // setFIlterPageNO(1)
            setLoading(false)

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
            const { data } = await FilterMainCategoryData(GetMainCatogery, latitude, Longitude, FIlterPageNO, filters, UserId)
            console.log(data, 'shopData')
            setLoading(false)

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
        ProfileStore.setState({ StoreSearch: 1 })
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
                setAllData(data.data)
            } else {
                setAllData(data.data)
                console.log(false, 'run')
            }
            setNOData(false)
        } else {
            setLoading(false)
            setNOData(true)
        }

    }

    console.log(chekc, 'chekc')
    const LoadMOre = async () => {
        LoadMOreMainCategory()
        // setPageNO(PageNO + 1)
        // setLoading(true)

    }
    const LoadMOreFIlter = async () => {
        LoadMOreFIlterMainCategory()
        // setFIlterPageNO(FIlterPageNO + 1)
        // setLoading(true)

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
    let PriceLenght = 5;
    const numberWithCommas = price => {
        console.log(price, 'commaa')
        return parseInt(price).toLocaleString('en-US');
    };
    // useEffect(() => {
    //     LoadMoreDataMain()
    // }, [PageNO])
    // useEffect(() => {
    //     MainCategoryDataFIlter()
    // }, [filters])
    // useEffect(() => {
    //     MainCategoryDataFIlterLoad()
    // }, [FIlterPageNO])
    useEffect(() => {
        // if (ParamLocate !== '/automobile/all/all-product') {
        //     setFIlterPageNOMainCategory(1)
        //     setMainCategoryPageNO(1)
        //     setAllDataMainCategory([])
        // }

        // MainData()
        // BottomTop()
        // console.log('run')
    }, [maincategory])

    return (
        <>
            <Header />
            <div className="row m-0 p-0 overflow-hidden">
                <div className="for-center flex-row justify-content-center align-items-center" id='mob_head'>

                    <div className="col-6">
                        <div className="container-heading-Automibile">
                            <span>CATEGORY PRODUCTS</span>
                        </div>
                    </div>
                    <div className="inline-block mr-auto">
                        {
                            Location.loaded &&
                            JSON.stringify(Location)

                        }
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

                                            <li className="dropdown-item" onClick={() => {setfiltersMaincategory(1)} }><BsArrowUp className='me-2' />Low To High</li>
                                            <li className="dropdown-item" onClick={() => setfiltersMaincategory(-1)}><BsArrowDown className='me-2' />High To Low</li>

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
                        NODataMainCategory && <Box display='flex' justifyContent='center' mt='-10%' zIndex='-3'>
                            <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_rdjfuniz.json" background="transparent" speed="1" style={{ width: '600px', height: '600px' }} loop autoplay></lottie-player>

                        </Box>
                    }
                    {

                        AllDataMainCategory?.map((automobileProduct, key) => {
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
                    {
                        // !NODataMainCategory &&
                        <div className="row m-0 p-0 d-flex justify-content-center">
                            {
                                filtersMaincategory == 1 || filtersMaincategory == -1 ?

 
                                    <ButtonCraete size='lg' variant='outline' colorScheme='teal' onClick={LoadMOreFIlter} disabled={TotalPagesMainCategory == FIlterPageNOMainCategory}>
                                        
                                        {Loading ? <div className="spinner-border spinner-border-sm me-1" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                            :
                                            <img src={load} />} &nbsp;&nbsp;
                                    Load More
                                    </ButtonCraete>
                                    :
                                    <ButtonCraete size='lg' variant='outline' colorScheme='teal' onClick={LoadMOre} disabled={TotalPagesMainCategory == MainCategoryPageNO}>
                                        {Loading ? <div className="spinner-border spinner-border-sm me-1" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                            :
                                            <img src={load} />} &nbsp;&nbsp;
                                        Load More
                                    </ButtonCraete>
                            }
                            {/* </div> */}
                        </div>
                    }
                </div>
            </div>
            {
            !isMobile && <Footer />
        }
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
    /* height: 70vh ; */
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