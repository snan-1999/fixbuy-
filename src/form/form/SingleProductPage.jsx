import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import google from '../../assets/images/google.png'
import facebook from '../../assets/images/facebook.png'
import sunset from '../../assets/images/sunset.jpg';
import instagram from '../../assets/images/instagram.png';
import Header from "../../form/form/header";
import Footer from "../../form/form/Footer";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { baseUrl } from '../../functions/constant';
import Home from './Home';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

import { FaHeart } from 'react-icons/fa'
import { useContext } from 'react';
import { GlobalVariables } from '../../Context/StateProvider';
import { FiHeart } from 'react-icons/fi';
export default function SingleProductPage(props) {
    // const { id } = useParams()
    const [BntStatus, setBntStatus] = useState(null)
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const location = useLocation()
    console.log(location.state, 'single Data')
    // console.log(location , 'all')
    const Token = localStorage.getItem('token');
    const { HomeData, setHomeData } = useContext(GlobalVariables);
    console.log(location.state, 'homeData')
    console.log(HomeData, 'homeData')
    // const { data, isFetching } = SingleProduct(productid)
    const [TokenID, setTokenID] = useState(JSON.parse(Token)?.token)
    const [Data, setData] = useState(location.state.automobileProduct)
    const [UseData, setUseData] = useState(location.state)
    const [HEart, setHEart] = useState(location.state.automobileProduct.saved)
    const [Images, setImages] = useState(`${baseUrl}/product/get/productImage/${location.state.automobileProduct.images[0]}`);
    const [imgChange, setimgChange] = useState('')
    console.log(typeof [Data], Data, "allDataSIngle");
    console.log(UseData, 'homeData')
    const nav = useNavigate()
    const getImgSrc = (source) => {
        setImages(source)
        // console.log(imgChange)
    }
    const UpdateData = () => {
        // console.log(productid)

    }

    // useEffect(() => {
    //     setImages(`${baseUrl}/allcategories/get/productImage/${location.state.automobileProduct.images[0]}`);
    //     console.log(`${baseUrl}/allcategories/get/productImage/${location.state.automobileProduct.images[0]}`)
    // }, [0])
    const [Loader, setLoader] = useState(false)

    // for (let getData in Data) {
    //     console.log(`${getData} : ${Data[getData]}`, 'check')
    // }
    const SendData = {
        "ad_id": location.state.automobileProduct._id,
        "saveStatus": HEart
    }
    let heartColor;
    const SavedItem = async () => {
        if (Token === null) {
            nav('/login')
        } else {

            console.log(HomeData, 'homeData')
            setHomeData(!HEart)
            setHEart(!HEart)
            console.log(HomeData, 'homeData')
            Run()
        }
    }
    const Run = async () => {
        const api = `${baseUrl}/users/savedItems/${TokenID}`
        const { data } = await axios.post(api, SendData);
        console.log(SendData.saveStatus, 'homeData')
        console.log(data, 'homeData')
        const HeartIcon = document.getElementById('heart');
        // if (location.state.automobileProduct.saved) {
        //     heartColor = HeartIcon.style.color = "red"
        // } else {
        //     heartColor = HeartIcon.style.color = "transparent";
        //     heartColor = HeartIcon.style.border = "1px solid black";
        // }
    }
    useEffect(() => {
        setUseData(location.state)
    }, [SavedItem])
    return (
        <>
            <Header />
            <div className="main overflow-hidden">
                <div className="row m-0 p-0">
                    <div className="for-center flex-row justify-content-center align-items-center">

                        <div className="col-md-6">
                            <div className="container-heading-pr">
                                <span>PRODUCTS DETAILS :-</span>
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

                <div className="row">
                    <div className="col-md-6 ">
                        <ImageSetion>

                            <MainSlide>
                                <img src={Images} alt="" className='h-100' id="img_main" />
                            </MainSlide>

                            <SmallImg className='d-flex'>
                                <ScrollDiv>

                                    {
                                        location.state.automobileProduct.images?.map((img, key) => {
                                            return (
                                                <img src={`${baseUrl}/product/get/productImage/${img}`} className="border " onClick={() => getImgSrc(`${baseUrl}/allcategories/get/productImage/${img}`)} />
                                            )
                                        })
                                    }
                                    {/* {
                                        for(getData in Data){
                                        <div>{getData}</div>
                                    } */}

                                    {/* {
                                        location.state.automobileProduct.map((dataa) => {
                                            return (
                                                <div>{dataa.title}</div>
                                            )
                                        })
                                    } */}
                                </ScrollDiv>
                            </SmallImg>
                        </ImageSetion>

                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-center align-items-center ContentClass">
                        <DetailsData className=''>
                            <div>
                                {
                                    (HomeData) ? <FaHeart className="text-danger" onClick={SavedItem} /> : <FiHeart onClick={SavedItem} />
                                }
                                {/* <FaHeart className={heartColor} id='heart' onClick={SavedItem} /> */}
                            </div>
                            <table className="table table-striped table-hover"  >
                                <thead>
                                    <tr>
                                        <th scope="col">  Category - </th>
                                        <th className='text-capitalize'>   {UseData.automobileProduct.categories}</th>

                                    </tr>
                                </thead>
                                <tbody>


                                    <tr>
                                        <th scope="col">   Price  - </th>
                                        <th>  ₹ {UseData.automobileProduct.price} </th>
                                    </tr>
                                    <tr>
                                        <th scope="col">   DESCRIPTION  - </th>
                                        <th>  {UseData.automobileProduct.description} </th>
                                    </tr>
                                    {/* <tr>
                                        <th scope="col">   Status  - </th>
                                        <th>  {UseData.automobileProduct.description} </th>
                                    </tr> */}

                                </tbody>
                            </table>
                            <div className="brand">

                            </div>



                            <div>

                                {/* <br/> */}
                                <div className='description'>
                                    {/* <label for="description"></label> */}
                                    {/* <br /> */}
                                    {/* : -{UseData.automobileProduct.description} */}
                                    {/* <Heading size='md' color='gray.700' mt='2'>Price :- {Data?.price}</Heading> */}
                                </div>
                            </div>
                            {/* <div className="status">
                                {
                                    (location.state.status == 'pending') ?
                                        <span className="sts" style={{ backgroundColor: 'grey' }}>{location.state.status}</span>
                                        : (location.state.status == 'reject') ?
                                            <span className="sts" style={{ backgroundColor: 'red' }}>{location.state.status}</span>
                                            : (location.state.status == 'approved') ?
                                                <span className="sts" style={{ backgroundColor: 'green' }}>{location.state.status}</span>
                                                :
                                                ""
                                }
                            </div> */}
                        </DetailsData>
                    </div>

                </div>
            </div>
            <Footer className="mt-4 position-relative top-0" />
        </>
    )
}

const DetailsData = styled.div`
    margin-top: .3rem;
    .brand{
        padding: .4rem 1rem;
        background-color: green;
        color: white;
        border-radius: 4px;
        margin-bottom: 2%;
        width: 50%;
        text-align: center;

    
}
`
const MainSlide = styled.div`
        width: 100%;
    height: 37vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SmallImg = styled.div`
margin-top: 4%
`
const ImageSetion = styled.div`
position: relative;
top: 1.5rem;
margin-left : 20%;
`
const ScrollDiv = styled.div`
cursor: pointer;
    overflow: auto;
    width: 100%;
    display: flex;
    img{
        width: 100px;
        height: 80px;
        margin: 10px;
    }
`