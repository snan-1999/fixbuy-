import axios from 'axios';
import React, { useEffect } from 'react'
import { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalVariables } from '../../Context/StateProvider';
import { baseUrl, ImageView } from '../../functions/constant'
import Header from './header';
import shopIcon from '../../assets/images/shopIcon.png'
import { useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import Footer from './Footer';
export default function SavedItems() {
    const { setHomeData, HomeData } = useContext(GlobalVariables)
    const [Data, setData] = useState([])
    const Token = localStorage.getItem('token');
    const ID = JSON.parse(Token).token
    const SavedItem = async () => {
        try {
            const api = `${baseUrl}/users/getall/savedItems/${ID}`
            const { data } = await axios.get(api);
            setData(data.data)
            console.log(data, 'saved')
        } catch (error) {
            console.log(error.message, 'saved')
        }
    }
    let PriceLenght = 5;
    const numberWithCommas = price => {
        console.log(price , 'commaa')
        return parseInt(price).toLocaleString('en-US');
    };
    const Max_length = 26;
    useEffect(() => {
        SavedItem()
    }, [0])

    return (
        <>
        <div className="overflow-hidden">
      
            <Header />
            <div className="row m-0 p-0">
                <div className="for-center flex-row justify-content-center align-items-center">

                    <div className="col-md-12">
                        <div className="container-heading-savedItem">
                            <span>Saved Items </span>
                        </div>
                    </div>

                </div>
            </div>
            </div>
            <div className="container" id="card_box">

                <div className="row p-0 m-0">
                    {
                        Data?.map((automobileProduct, key) => {
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

                                                    {/* <div className="font-weight-light desc">{automobileProduct.description}</div> */}

                                                    {
                                                        (automobileProduct.title).length > Max_length ?
                                                            <div className="prd-name">
                                                                {`${automobileProduct.title.substring(0, Max_length)}...`}
                                                            </div>
                                                            :
                                                            <div className="prd-name text-capitalize">{automobileProduct.title}</div>
                                                    }
                                                    <div className="contain-adrs d-flex align-items-left justify-content-left mt-1">
                                                        <span className="adrs text-capitalize fs-6">   <MdLocationOn className="fs-6" />{automobileProduct.location.state}</span>
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
                </div>


            </div >
            <Footer />

        </>
    )
}
const CardHeight = styled.div`
position: relative;
top: 0;
@media (max-width: 768px) {
    /* height: 55vh ; */
  }
    /* height: 60vh ; */
    .ShopLogo{
        height: 3vh;
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