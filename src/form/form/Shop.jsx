import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalVariables } from '../../Context/StateProvider'
import { baseUrl, ImageView } from '../../functions/constant'
import { FilterShopData, ShopProductData } from '../../functions/ShopFun'
import Footer from './Footer'
import Header from './header'
import shopIcon from '../../assets/images/shopIcon.png'
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import load from '../../assets/images/load.gif';
import { FaHeart } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import useGeoLocation from '../../hooks/useGeoLoaction'
export default function Shop() {
    const location = useGeoLocation();
    const { latitude, Longitude, setHomeData, UserId } = useContext(GlobalVariables)
    const [AllData, setAllData] = useState([])
    const [filters, setfilters] = useState(null)
    const [PageNO, setPageNO] = useState(1)
    const [FIlterPageNO, setFIlterPageNO] = useState(1); // filter Page No 
    const [Loading, setLoading] = useState(false)
    const [TotalPagess, setTotalPagess] = useState('')
    // initial
    console.log(latitude, 'lat')
    const ShopData = async () => {
        try {
            const { data } = await ShopProductData(latitude, Longitude, PageNO, UserId)
            console.log(data, 'shopData')
            console.log(UserId, 'shopData')
            if (data.status) {
                setLoading(false)
                setHomeData(data.data)
                setTotalPagess(data.totalPages);
                setAllData(data.data)
            }
        } catch (error) {

        }
    }
    // Load More
    const ShopDataLoadMore = async () => {
        try {
            const { data } = await ShopProductData(latitude, Longitude, PageNO, UserId)
            console.log(data, 'shopData')
            console.log(UserId, 'shopData')
            if (data.status) {
                setLoading(false)
                setTotalPagess(data.totalPages);
                setAllData([...AllData, ...data.data])
            }
        } catch (error) {

        }
    }
    // const FilterSet = (FilterNumber) => {
    //     console.log(FilterNumber, 'fil')
    // }
    let PriceLenght = 6;
    // Simple Load
    const ShopDataFIlter = async () => {
        setFIlterPageNO(1)
        setAllData([])
        console.log(filters, 'filter')
        try {
            const { data } = await FilterShopData(latitude, Longitude, FIlterPageNO, filters, UserId)
            console.log(data, 'shopData initial')
            setAllData(data.data)
        } catch (error) {

        }
    }
    //  Load mOre Filter
    const ShopDataFIlterLoadMore = async () => {
        console.log(filters, 'filter')
        try {
            const { data } = await FilterShopData(latitude, Longitude, FIlterPageNO, filters, UserId)
            console.log(data, 'shopData')
            setAllData([...AllData, ...data.data])
        } catch (error) {

        }
    }
    const numberWithCommas = price => {
        console.log(price, 'commaa')
        return parseInt(price).toLocaleString('en-US');
    };
    const LoadMOre = () => {
        setPageNO(PageNO + 1)
        console.log(TotalPagess, PageNO, "HomeData")
        setLoading(true)
    }
    const LoadMOreFIlter = () => {
        setFIlterPageNO(FIlterPageNO + 1)
        console.log(TotalPagess, FIlterPageNO, "HomeData")
        setLoading(true)
    }
    useEffect(() => {
        ShopDataFIlter()
    }, [filters])
    useEffect(() => {
        ShopDataLoadMore()

    }, [PageNO])
    useEffect(() => {

        ShopDataFIlterLoadMore()
    }, [FIlterPageNO])
    useEffect(() => {
        latitude && ShopData()
    }, [latitude])
    const Max_length = 26;

    return (
        <>
            <div className="overflow-hidden">
                <Header />
                <br />
                {/* GeoLocation start */}
                <div className="inline-block mr-auto">
                    {
                        location.loaded &&
                        JSON.stringify(location)

                    }
                </div>
                {/* Geolocation end */}


                <div className="row m-0 p-0 ">
                    <div className="for-center flex-row justify-content-center align-items-center" id='mob_head'>

                        <div className="col-6 border-1">
                            <div className="container-heading-shop">
                                <span>SHOP PRODUCTS</span>
                            </div>
                        </div>
                        <div className="col-6 position-relative ">
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

                <br />
                <div className="container" id="card_box">

                    <div className="row">
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
                                                        <div>
                                                            <span className="date">{new Date(automobileProduct.createdAt).toDateString().split(' ').slice(1).join(' ')}</span>
                                                        </div>
                                                        <div className="contain-adrs">
                                                            <span className="adrs fs-6"><MdLocationOn className="fs-6" />{automobileProduct.location.state}</span>
                                                            <span className="year"></span>
                                                        </div>
                                                        {/* <div className="row p-0 m-0">
                                                            <div className="col p-0">
                                                                <div className="buy-bt">
                                                                    <Link to="/singleproductpage" className="buy-bttn"><FontAwesomeIcon icon="fa fa-shopping-cart"></FontAwesomeIcon>&nbsp;&nbsp;Buy Now</Link>
                                                                </div>
                                                            </div>

                                                        </div> */}
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
                                        // Filter Loadmore
                                        <ButtonCraete size='lg' variant='outline' colorScheme='teal' onClick={LoadMOreFIlter} disabled={TotalPagess == FIlterPageNO}>
                                            {Loading ? <div className="spinner-border spinner-border-sm me-2" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                                :
                                                <img src={load} />} &nbsp;&nbsp;
                                            Load More
                                        </ButtonCraete>
                                    :
                                    <ButtonCraete size='lg' variant='outline' colorScheme='teal' onClick={LoadMOre} disabled={TotalPagess == PageNO}>
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
    @media (max-width: 768px) {
        font-size: 12px; 
        width: 39%;
        // height: 55vh ;
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
        display: flex;
    justify-content: center !important;
        height: auto ;
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