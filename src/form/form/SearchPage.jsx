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
function SearchPage() {
    const { Lmore, setLmore, latitude, setlatitude, Longitude, setLongitude, SearchBar } = useContext(GlobalVariables)
    const searchData = useLocation()
    const [TotalPagess, setTotalPagess] = useState('');
    const [AllData, setAllData] = useState([])
    const [Loading, setLoading] = useState(false)
    console.log(searchData, 'dataSearch')
    const check = async () => {
        const { data } = await SearchHome(Longitude, latitude, searchData.state, Lmore)
        console.log(data, 'hello')
        setLoading(true)
        if (data.status) {
            setLoading(false)
            setTotalPagess(data.totalPages);
            setAllData([...AllData, ...data.data]);
            console.log(AllData, 'hello1')
        }
    }
    const LoadMOre = () => {
        setLmore(Lmore + 1)
        setLoading(true)
    }
    useEffect(() => {
        check()
    }, [searchData.state])
    return (
        <>
            <Header />
            <div className="row m-0 p-0">
                <div className="for-center flex-row justify-content-center align-items-center">

                    <div className="col-md-6">
                        <div class="container-heading-homeSearch">
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
            <div class="container" id="card_box" >
                <div class="row">
                    {
                        AllData?.map((automobileProduct, key) => {
                            return (
                                <div class="col-md-4 col-8 col-lg-3">
                                    <CardHeight>

                                        <Link to='/singleproductpage' state={automobileProduct} className="text-decor">
                                            <div class="shadow p-3 mb-4 bg-white maindiv overflow-hidden">
                                                {(automobileProduct.boostPlan.plan !== "free") ? <Ribbon>Featured</Ribbon> : <Ribbon style={{ opacity: 0 }}>Featured</Ribbon>}
                                                {(automobileProduct.sellerType == "user") ? "" : <img className="ShopLogo" src={shopIcon} />}
                                                <div class="img-wh overflow-hidden"><img src={`${baseUrl}/product/get/productImage/${automobileProduct.images[0]}`} class="pdt-img" /></div>
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
                       <ButtonCraete size='lg' variant='outline' colorScheme='teal' onClick={LoadMOre} disabled={TotalPagess == Lmore}>
                        {Loading && <div class="spinner-border spinner-border-sm me-2" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>}
                        Load More
                    </ButtonCraete>
                </div>
            </div>
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