import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalVariables } from '../../Context/StateProvider';
import { SearchHome } from '../../functions/HomeFun';
import load from '../../assets/images/load.gif';
import Header from './header'
import shopIcon from '../../assets/images/shopIcon.png'
import { baseUrl, ImageView } from '../../functions/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdLocationOn } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Footer from './Footer';
import { Box } from '@chakra-ui/react';
import { flushSync } from 'react-dom';
import { ProfileStore } from '../../store';
function SearchPage({ LoadMOreSearch, AllDataSearch,  Loading, setLoading ,TotalPagesSearch ,SearchPAgeNo ,NoDataSearch}) {
    const searchData = useLocation()
    const { latitude, Longitude } = useContext(GlobalVariables);
    const SearchData = ProfileStore(state => state.SearchData)
    // useEffect(() => {
    //     flushSync(() => {
    //         setSearchSend(searchData.state)
    //     })
    // }, [])
    console.log(AllDataSearch.length , 'gyys')
    // ProfileStore.setState({StoreSearch : searchData.state})
    const [SearchSend, setSearchSend] = useState(searchData.state);
    const [TotalPagess, setTotalPagess] = useState('');
    const [AllData, setAllData] = useState([])
    const [PageNO, setPageNO] = useState(1)
    // const [Loading, setLoading] = useState(false)
    const [NoData, setNoData] = useState(false)
    const [searchWord, setsearchWord] = useState(null)

    console.log(searchData.state, 'dataSearch')
    console.log(PageNO, 'dataSearch')
    const OneTImeData = async () => {
        setLoading(true)
        const { data } = await SearchHome(Longitude, latitude, SearchSend, PageNO)
        console.log(data, 'hello')

        setLoading(false)
        if (data.status) {
            setTotalPagess(data.totalPages);
            setAllData(data.data);
            // console.log(AllData, 'hello1')
        } else {
            setNoData(true)
        }
    }

    const LoadDataFun = async () => {
        const { data } = await SearchHome(Longitude, latitude, SearchSend, PageNO)
        console.log(data, 'helloLoad')
        setLoading(true, 'dataSearch')

        if (data.status) {
            setLoading(false)
            setTotalPagess(data.totalPages);
            setAllData([...AllData, ...data.data]);
            console.log(AllData, 'hello1')
        }
    }
    const LoadMOre = () => {
        LoadMOreSearch()
        // setPageNO(PageNO + 1)
        // setLoading(true)
    }
    let PriceLenght = 5;
    const numberWithCommas = price => {
        console.log(price, 'commaa')
        return parseInt(price).toLocaleString('en-US');
    };
    console.log(SearchData, 'serachkey')
    // useEffect(() => {
    //     setsearchWord(SearchSend)
    //     // check()
    //     OneTImeData()
    //     if (searchWord == SearchSend) {
    //         LoadDataFun()
    //         console.log(true, 'dataSearch')
    //     } else {

    //         console.log(false, 'dataSearch')
    //     }
    // }, [searchData.state, PageNO])
    let Max_length = 26;
    return (
        <>
            <div className="overflow-hidden">
                <Header />

                <div className="row m-0 p-0 overflow-hidden">
                    <div className="for-center flex-row justify-content-center align-items-center">

                        <div className="col-md-6">
                            <div className="container-heading-homeSearch">
                                <span>Search PRODUCTS</span>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <div className=" pt-4">
                                {/* <RefreshBtn>
                                <abbr title="Refresh Data"><BiRefresh className='ref' onClick={() => { RefTog() }} /></abbr>
                            </RefreshBtn> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" id="card_box" >
                <div className="row">
                    {
                        AllDataSearch?.map((automobileProduct, key) => {
                            return (
                                <div className="col-md-4 col-6 col-lg-3">
                                    <CardHeight>

                                        <Link to={`/singleproductpage/${automobileProduct._id}`} state={{ automobileProduct, key }} className="text-decor">
                                            <div className="shadow p-3 mb-4 bg-white maindiv overflow-hidden">
                                                {(automobileProduct.boostPlan.plan !== "free") ? <Ribbon>Featured</Ribbon> : <Ribbon style={{ opacity: 0 }}>Featured</Ribbon>}
                                                {(automobileProduct.sellerType == "user") ? "" : <img className="ShopLogo" src={shopIcon} />}
                                                <div className="img-wh overflow-hidden"><img src={`${ImageView}${automobileProduct.images[0]}`} className="pdt-img" /></div>
                                                <div className="pdt-details">
                                                    <div className="row d-flex align-items-center">
                                                        <div className="col-md-6 col-8 ">
                                                            {
                                                                (automobileProduct.price).toString().length > PriceLenght ?
                                                                    <div className="price">₹ {`${numberWithCommas(automobileProduct.price.toString().substring(0, PriceLenght))}`}..</div>
                                                                    :
                                                                    <div className="price">₹ {numberWithCommas(automobileProduct.price)}</div>
                                                            }
                                                            {/* <div className="price">₹ {numberWithCommas(automobileProduct.price)}</div> */}
                                                        </div>
                                                        <div className="col-md-6 col-4 setHeart">
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
                        !NoDataSearch ?
                            <div className="row m-0 p-0 d-flex justify-content-center">
                                {
                                    TotalPagesSearch == SearchPAgeNo ?
                                        <></>
                                        :
                                        <ButtonCraete size='lg' variant='outline' colorScheme='teal' onClick={LoadMOre} disabled={TotalPagesSearch == SearchPAgeNo}>
                                            {Loading ? <div className="spinner-border spinner-border-sm me-1" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                                :
                                                <img src={load} />} &nbsp;&nbsp;
                                            Load More
                                        </ButtonCraete>
                                }
                            </div>
                            :
                            <Box display='flex' justifyContent='center' mt='-10%' zIndex='-3'>
                                <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_rdjfuniz.json" background="transparent" speed="1" style={{ width: '600px', height: '600px' }} loop autoplay></lottie-player>

                            </Box>
                    }
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default SearchPage;
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