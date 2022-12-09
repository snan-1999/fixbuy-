import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalVariables } from '../../Context/StateProvider';
import { SearchHome } from '../../functions/HomeFun';
import Header from './header'
import shopIcon from '../../assets/images/shopIcon.png'
import { baseUrl } from '../../functions/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdLocationOn } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Footer from './Footer';
function SearchPage() {
    const { latitude, Longitude } = useContext(GlobalVariables)
    const searchData = useLocation()
    const [TotalPagess, setTotalPagess] = useState('');
    const [AllData, setAllData] = useState([])
    const [PageNO, setPageNO] = useState(1)
    const [Loading, setLoading] = useState(false)
    const [searchWord, setsearchWord] = useState(null)

    console.log(searchData.state, 'dataSearch')
    const OneTImeData = async () => {
        setLoading(true, 'dataSearch')
        const { data } = await SearchHome(Longitude, latitude, searchData.state, PageNO)
        console.log(data, 'hello')

        setLoading(false)
        if (data.status) {
            setTotalPagess(data.totalPages);
            setAllData(data.data);
            console.log(AllData, 'hello1')
        }
    }
    const LoadDataFun = async () => {
        const { data } = await SearchHome(Longitude, latitude, searchData.state, setPageNO)
        console.log(data, 'hello')
        setLoading(true, 'dataSearch')

        if (data.status) {
            setLoading(false)
            setTotalPagess(data.totalPages);
            setAllData([...AllData, ...data.data]);
            console.log(AllData, 'hello1')
        }
    }
    const LoadMOre = () => {
        setPageNO(PageNO + 1)
        setLoading(true)
    }
    useEffect(() => {
        setsearchWord(searchData.state)
        // check()
        OneTImeData()
        if (searchWord == searchData.state) {
            LoadDataFun()
            console.log(true, 'dataSearch')
        } else {

            console.log(false, 'dataSearch')
        }
    }, [searchData.state, PageNO])
    let Max_length = 26;
    return (
        <>
            <div className="overflow-hidden">
                <Header />
            </div>
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
            <div className="container" id="card_box" >
                <div className="row">
                    {
                        AllData?.map((automobileProduct, key) => {
                            return (
                                <div className="col-md-4 col-6 col-lg-3">
                                    <CardHeight>

                                        <Link to={`/singleproductpage/${automobileProduct._id}`} state={{ automobileProduct, key }} className="text-decor">
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
                    <div className="row m-0 p-0 d-flex justify-content-center">

                        <ButtonCraete size='lg' variant='outline' colorScheme='teal' onClick={LoadMOre} disabled={TotalPagess == setPageNO}>
                            {Loading && <div className="spinner-border spinner-border-sm me-2" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>}
                            Load More
                        </ButtonCraete>
                    </div>
                </div>
            </div>
            <Footer />
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
    @media (max-width: 768px) {
        font-size: 13px; 
        width: 32%;
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