import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GlobalVariables } from '../../Context/StateProvider'
import { baseUrl } from '../../functions/constant'
import { FilterShopData, ShopProductData } from '../../functions/ShopFun'
import Footer from './Footer'
import Header from './header'
import shopIcon from '../../assets/images/shopIcon.png'
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'
export default function Shop() {
    const { latitude, Longitude, Lmore } = useContext(GlobalVariables)
    const [AllData, setAllData] = useState([])
    const [filters, setfilters] = useState(null)
    const ShopData = async () => {
        try {
            const { data } = await ShopProductData(latitude, Longitude, Lmore)
            console.log(data, 'shopData')
            setAllData(data.data)
        } catch (error) {

        }
    }
    // const FilterSet = (FilterNumber) => {
    //     console.log(FilterNumber, 'fil')
    // }
    const ShopDataFIlter = async () => {
        console.log(filters, 'filter')
        try {
            const { data } = await FilterShopData(latitude, Longitude, Lmore, filters)
            console.log(data, 'shopData')
            setAllData(data.data)
        } catch (error) {

        }
    }
    useEffect(() => {
 
        ShopDataFIlter()
    }, [filters])
    useEffect(() => {
        ShopData()
    }, [0])

    return (
        <>
            <Header />
            <br />
            <div className="overflow-hidden">


                <div className="row m-0 p-0 ">
                    <div className="for-center flex-row justify-content-center align-items-center">

                        <div className="col-md-6 border-1">
                            <div class="container-heading-shop">
                                <span>SHOP PRODUCTS</span>
                            </div>
                        </div>
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

                                        <li className="dropdown-item" onClick={() => setfilters(1)}><BsArrowUp className='me-2'  />Low To High</li>
                                        <li className="dropdown-item"  onClick={() => setfilters(-1)}><BsArrowDown className='me-2' />High To Low</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br />
                <div class="container" id="card_box">

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

                    </div>


                </div >
            </div>
            <Footer />
        </>
    )
}
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