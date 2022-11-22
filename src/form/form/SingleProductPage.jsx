import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import google from '../../assets/images/google.png'
import facebook from '../../assets/images/facebook.png'
import sunset from '../../assets/images/sunset.jpg';
import instagram from '../../assets/images/instagram.png';
import Header from "../../form/form/header";
import Footer from "../../form/form/Footer";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
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
    useToast,
    Button,

} from '@chakra-ui/react'

import { FaHeart } from 'react-icons/fa'
import { useContext } from 'react';
import { GlobalVariables } from '../../Context/StateProvider';
import { FiHeart } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
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
    // const toast = useToast()
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
        if (data.status) {
            toast(data.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                // transition: 'zoom',
                theme: "colored",
                type: 'success'
            });
        }
        console.log(data, 'homeData')
    }
    let Max_length = 60;
    useEffect(() => {
        setUseData(location.state)
    }, [SavedItem])
    return (
        <>
            <Header />
            <ToastContainer />
            <div className="main ">
                <div className="row m-0 p-0">
                    <div className="for-center flex-row justify-content-center align-items-center">
                        <div className="col-md-12">
                            <div className="container-heading-pr">
                                <span>PRODUCTS DETAILS :-</span>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row m-0 p-0">
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
                                                <img src={`${baseUrl}/product/get/productImage/${img}`} className="border " onClick={() => getImgSrc(`${baseUrl}/product/get/productImage/${img}`)} />
                                            )
                                        })
                                    }
                                </ScrollDiv>
                            </SmallImg>
                        </ImageSetion>

                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center ContentClass ">
                        <DetailsData className=''>

                            <table className="table table-striped table-hover"  >
                                <thead>
                                    <tr>
                                        <th scope="col">  Category - </th>
                                        <th className='text-capitalize'>   {UseData.automobileProduct.categories}</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="col">   Title  - </th>
                                        <th className='text-capitalize'>  {UseData.automobileProduct.title} </th>
                                    </tr>
                                    <tr>
                                        <th scope="col">   Price  - </th>
                                        <th>  ₹ {UseData.automobileProduct.price} </th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Short Description - </th>

                                        {
                                            (UseData.automobileProduct.description.length > Max_length ?
                                                <th className='text-capitalize'>{`${UseData.automobileProduct.description.substring(0, Max_length)}...`}</th>
                                                :
                                                <th className='text-capitalize'> {UseData.automobileProduct.description}</th>
                                            )
                                        }

                                    </tr>
                                    <tr className=''>
                                        <th scope="col">   Status  - </th>
                                        <th>   <div className='heartBtn'>
                                            {
                                                (HomeData) ? <>
                                                    <Button className='fs-6' leftIcon={<FaHeart className="text-danger" />} colorScheme='teal' variant='solid' border='none' size='xs' onClick={SavedItem}>
                                                        Saved
                                                    </Button>
                                                </>
                                                    :
                                                    <>
                                                        <Button className='fs-6' leftIcon={<FiHeart onClick={SavedItem} />} colorScheme='teal' variant='solid' border='none' size='xs' onClick={SavedItem}>
                                                            UnSaved
                                                        </Button></>
                                            }
                                        </div> </th>
                                    </tr>

                                </tbody>
                            </table>
                            {/* <div className="brand">

                            </div> */}



                            <div className="Btns d-flex justify-content-between">
                                <Link to='/sellerProfile' state={UseData.automobileProduct.user_id}><button className='sellerButton '>User Profile</button></Link>
                                <Link to='/sellerProfile' state={UseData.automobileProduct.user_id}><button className='sellerButton '>Report Ads</button></Link>

                            </div>
                        </DetailsData>
                    </div>

                </div>
                <br />
                <br />
                <Footer className="mt-4 position-relative top-0" />
            </div>
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
        .heartBtn{
            font-size: 1.3rem;
            animation-name: heartss;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            :hover{
                margin: 0;
                padding: 0;
                font-size: 1.3rem;
                /* transform: scale(1); */
                transition: transform 500ms ease;

            }
        }
      
`
const MainSlide = styled.div`
        width: 100%;
    height: 37vh;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        border-radius: 10px;
    }
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
        border-radius: 10px;
    }
`