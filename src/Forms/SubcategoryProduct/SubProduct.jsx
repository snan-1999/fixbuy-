import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../form/form/header'
import { baseUrl } from '../../functions/constant'
import shopIcon from '../../assets/images/shopIcon.png'
import { useContext } from 'react'
import { GlobalVariables } from '../../Context/StateProvider'
import axios from 'axios'
import { useEffect } from 'react'
import NoData from '../../assets/images/NoData.gif'
import { Box, Image } from '@chakra-ui/react'
import Footer from '../../form/form/Footer'
export default function SubProduct() {
    const { Lmore, setLmore } = useContext(GlobalVariables)
    const [AllData, setAllData] = useState([]);
    const [Loading, setLoading] = useState(false)
    const [NOData, setNOData] = useState(false)
    const { maincategory, subcategory } = useParams();
    const GetMainCatogery = maincategory.replace(/ /g, "_").toLowerCase()
    const GetSubCatogery = subcategory.replace(/ /g, "_").toLowerCase()
    
    console.log(GetMainCatogery, GetSubCatogery, 'hy')
    const [Name, setName] = useState('Category')
    const SubDataCategory = async () => {
        try {
            const api = `${baseUrl}/product/fetch/${maincategory}/${GetSubCatogery}/28.6126687/77.37787/${Lmore}`
            const { data } = await axios.get(api);
            setLoading(true)
            if (data.status) {
                setLoading(false)
                setAllData(data.data)
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
        } catch (error) {
            alert(error.message)
        }
    }
    useEffect(() => {
        SubDataCategory()
    }, [0, GetSubCatogery])

    return (
        <>
            <Header />

            <div className="row m-0 p-0">
                <div className="for-center flex-row justify-content-center align-items-center">

                    <div className="col-md-6">
                        <div class="container-heading-Automibile">
                            <span>CATEGORY PRODUCTS</span>
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
                    {Loading && <button className='bg-transparent border-0 d-flex align-items-center justify-content-center'>
                        <div class="spinner-border spinner-border-lg me-2 text-secondary" role="status">
                        </div>
                        <span class="text-secondary">Loading...</span>
                    </button>
                    }
                    {
                        NOData && <Box display='flex' justifyContent='center' mt='-10%' zIndex='-3'>
                            {/* <Image src={NoData} alt='Dan Abramov' boxSize='80vh'/> */}
                            <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_rdjfuniz.json"  background="transparent"  speed="1"  style={{width: '600px' , height: '600px'}}  loop  autoplay></lottie-player>
                            {/* <Image src='https://lottiefiles.com/97434-no-data-available' alt='Dan Abramov' boxSize='80vh'/> */}
                        </Box>

                    }

                    {
                        AllData?.map((automobileProduct, key) => {
                            return (
                                <div class="col-md-4 col-8 col-lg-3">
                                    <CardHeight>

                                        <Link to='/singleproductpage' state={automobileProduct} className="text-decor">
                                            <div class="shadow p-3 mb-4 bg-white maindiv overflow-hidden">
                                                {(automobileProduct.boostPlan.plan !== "free") ? <Ribbon>Featured</Ribbon> : <Ribbon style={{ opacity: 0 }}>Featured</Ribbon>}
                                                {(automobileProduct.sellerType == "user") ? "" : <img className="ShopLogo" src={shopIcon} />}
                                                <div class="img-wh overflow-hidden"><img src={`${baseUrl}/allcategories/get/productImage/${automobileProduct.images[0]}`} class="pdt-img" /></div>
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