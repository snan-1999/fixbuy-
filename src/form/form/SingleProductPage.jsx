import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import google from '../../assets/images/google.png'
import facebook from '../../assets/images/facebook.png'
import sunset from '../../assets/images/sunset.jpg';
import instagram from '../../assets/images/instagram.png';
import Header from "../../form/form/header";
import Footer from "../../form/form/Footer";
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios'
import { baseUrl } from '../../functions/constant';
import Home from './Home';
export default function SingleProductPage(props) {
    // const { id } = useParams()
    const [BntStatus, setBntStatus] = useState(null)
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const location = useLocation()
    console.log(location, 'single Data')
    // console.log(location , 'all')

    // console.log(id);
    // const { data, isFetching } = SingleProduct(productid)
    const [Data, setData] = useState(null)
    const [Images, setImages] = useState(`${baseUrl}/allcategories/get/productImage/${location.state.images[0]}`);
    const [imgChange, setimgChange] = useState('')
    // if (isFetching) {
    //     console.log(Data, 'yes Fetching')
    // }


    const getImgSrc = (source) => {
        setImages(source)
        // console.log(imgChange)
    }
    const UpdateData = () => {
        // console.log(productid)

    }

    // useEffect(() => {
    //     setImages(`${baseUrl}/allcategories/get/productImage/${location.state.images[0]}`);
    //     console.log(`${baseUrl}/allcategories/get/productImage/${location.state.images[0]}`)
    // }, [0])
    const [Loader, setLoader] = useState(false)



    return (
        <>
            <Header />
            <div className="main">
                <div className="main_heading">
                    <span className='d-inline-flex align-items-center headingclass'>
                        Products Details :
                    </span>
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
                                        location.state.images?.map((img, key) => {
                                            return (

                                                <img src={`${baseUrl}/allcategories/get/productImage/${img}`} className="border " onClick={() => getImgSrc(`${baseUrl}/allcategories/get/productImage/${img}`)} />

                                            )
                                        })
                                    }
                                </ScrollDiv>
                            </SmallImg>
                        </ImageSetion>

                    </div>
                    <div className="col-md-3 d-flex flex-column justify-content-center align-items-center ContentClass">
                        <DetailsData className=''>


                            <div className="brand">
                                {location.state.categories}
                            </div>


                            <div className="d-flex titleHead">
                                <h3> {location.state.title} </h3>
                                {/* <Heading fontSize='3xl' color='gray.700' textTransform='capitalize' mt='3'>{Data?.title}</Heading> */}
                            </div>
                            <div>
                                <div className='d-flex priceHead' >
                                    <h5>Rs.{location.state.price} </h5>
                                </div>
                                {/* <br/> */}
                                <div className='description'>
                                <label for="description">DESCRIPTION*</label>
                                <br/>
                                    <textarea name="description" id="" class="form-control" cols="80" rows="5" width="100%"> 
                                    {location.state.description}
                                    </textarea>
                                    {/* <Heading size='md' color='gray.700' mt='2'>Price :- {Data?.price}</Heading> */}
                                </div>
                            </div>
                            {/* <Stack direction='row' spacing={4} align='center' mt='4'>
                                <Button colorScheme='green' variant='solid' onClick={() => PostAdsStatus('approved')}>
                                    Accept
                                </Button>
                                <Button colorScheme='red' variant='outline' onClick={() => PostAdsStatus('reject')}>
                                    Reject
                                </Button>
                            </Stack> */}
                        </DetailsData>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
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