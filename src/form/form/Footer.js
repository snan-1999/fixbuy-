import React from "react"
import "../form/header.css";
import "./css/custom.css";
import "./css/iofrm-style.css";
import logo from "../../assets/images/FB-white.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";
import android from '../../assets/images/android.png'
import apple from '../../assets/images/apple.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@react-md/divider";
import { Link } from "react-router-dom";
import Playstore from '../../assets/images/Playstore.png';
import Appstore from '../../assets/images/Appstore.png';
import styled from "styled-components";
import Support from "../../ChatSeller/Support";
import { Box, Heading, Image, List, ListIcon, ListItem, Stack, Text } from "@chakra-ui/react";
import { TbPoint } from "react-icons/tb";
import { useMediaQuery } from '@chakra-ui/media-query'

const Footer = () => {
    const [isMobile] = useMediaQuery("(max-width : 600px)");
    console.log(isMobile, 'yes')
    return (
        <>
            <Footers>

                {/* <div className="footer">
                    <div className="row p-0 m-0 w-100 des-footer">
                        <div className="col-md-4 col-12  mob-heading-logo">
                            <div className="footerlogo">
                                <Link to=""><img src={logo} alt="logo" className="footer-logo" /></Link>
                            </div>
                            <div className="pp">
                                <p><FontAwesomeIcon icon="fa-address-card" />&nbsp;&nbsp;&nbsp;Ghookna, Ghaziabad,<br />
                                    &nbsp;&nbsp;  Uttar Pradesh, 201003</p>
                                <p><FontAwesomeIcon icon="fas fa-phone-volume " />&nbsp;&nbsp;&nbsp; 8527720760
                                </p>
                                <p><FontAwesomeIcon icon="fas fa-envelope-open-text " />&nbsp;&nbsp;&nbsp; info@fixebuy.in</p>
                            </div>
                        </div>





                        <div className="col-md-4 col-12 gettouch" >
                            <div className="subhead" >
                                GET IN TOUCH
                            </div>
                            <div className="social" >
                                <a href="https://www.instagram.com/fixebuy.official/" target='_blank'><img src={instagram} /></a>
                                <a href="https://twitter.com/FixebuyOfficial"><img src={twitter} /></a>
                                <a href="https://www.facebook.com/FixeBuy-Pvt-Ltd-101284785886394"><img src={facebook} /></a>
                            </div>
                            <br />
                            <br />
                            <div className="LinkClass1 d-lg-block d-md-none d-none d-sm-none">
                                <div className="d-flex">
                                <div><Link to="" className="FooterLink">Download App for IOS
                                </Link></div>&nbsp;&nbsp;
                                <div><img src={Appstore} style={{ width: '2vw' }} /></div>
                                </div>
                                 
                                 <div className="d-flex">
                                <div><Link to="" className="FooterLink">Download App for Android
                                </Link> </div>&nbsp;&nbsp;
                                <div><img src={Playstore} style={{ width: '2vw' }} /></div>
                                </div>
                            </div>
                        </div>

                        <div className="mob-headContainer">
                            <div className="row m-0 p-0">


                                <div className="col-md-4-lg-6 col-12">
                                    <div className="d-flex footer-mob">
                                        <div className="col-md-4 col-12">
                                            <div className="pp1 mt-1 mt-lg-0 mt-md-0">
                                                <p><FontAwesomeIcon icon="fa-address-card" />&nbsp;&nbsp;&nbsp;Ghookna, Ghaziabad,<br />
                                                    &nbsp;&nbsp;&nbsp;  Uttar Pradesh, 201003</p>
                                                <p><FontAwesomeIcon icon="fas fa-phone-volume " />&nbsp;&nbsp;&nbsp; 8527720760
                                                </p>
                                                <p><FontAwesomeIcon icon="fas fa-envelope-open-text " />&nbsp;&nbsp;&nbsp; info@fixebuy.in</p>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-12 tabLink">
                                            <div className="social1">
                                                <a href="www.instagram.com/fixebuy.official/"><img src={instagram} /></a>
                                                <a href="https://twitter.com/FixebuyOfficial"><img src={twitter} /></a>
                                                <a href="https://www.facebook.com/FixeBuy-Pvt-Ltd-101284785886394"><img src={facebook} /></a>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="LinkClass">
                                        <div>
                                        <Link to="" className="FooterLink">Download App for Android</Link>
                                        </div>
                                        <div><img src={Playstore} className='appicon' /></div>

                                        <div>
                                        <Link to="" className="FooterLink">Download App for IOS&nbsp;&nbsp;
                                        </Link>
                                        </div>
                                        <div><img src={Appstore} className='appicon1' /></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col py-0 menuClass">
                      
                        <div class="container ">
                            <div class="row MenuClass">
                                <ul className="d-flex justify-content-center">
                                    <li class="py-4"><Link to='/' className="footerLink">HOME</Link></li>
                                    <li class="py-4"><Link to='/about' className="footerLink">ABOUT US</Link></li>
                                    <li class="py-4"><Link to='/contact' className="footerLink">CONTACT US</Link></li>
                                    <li class="py-4"><Link to='/faq' className="footerLink">F.A.Q</Link></li>
                                    <li class="py-4"><Link to='/shop' className="footerLink">SHOP</Link></li>
                                    <li class="py-4"><Link to='/blogs' className="footerLink">BLOGS</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                </div>
 
                
                <div className="copyright">
                    <div className="row copyrightt p-0 m-0">
                        <div className="col-md-12 col-12 foocet">@Copyright 2022 - Fixebuy.in </div>
                    </div>
                    <div className="learn-more">
                        <Link to="/privacy" className="col-md-6 col-6 ">Privacy Policy</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/terms" className="col-md-6 col-6 ">Term & Condition</Link>
                    </div> 
                </div> */}
                {/* <div onClick={() => {
                    window.scrollTo({
                        top : 0,
                        left :0,
                        behavior : 'smooth'
                    })
                }}>
                    kjlk
                </div> */}

                <div className="row mt-4 mx-0 pt-4">
                    <div className=" col-lg-2 col-md-2 SetCols">
                        <Stack direction='column' display='flex' alignItems={isMobile ? 'center' : 'flex-start'}>
                            <Heading fontSize={isMobile ? '15px' : '13px'} fontWeight='600' textAlign={isMobile ? 'center' : 'left'} margin={isMobile ? '0' : '0'}>POPULAR LOCATIONS</Heading>
                            <List spacing='5' marginTop={!isMobile ? '0' : '0px'} display='flex' flexDirection={'column'} alignItems={isMobile ? 'center' : 'flex-start'}>
                                <ListItem fontSize='12px' >
                                    <ListIcon as={TbPoint} me='4' opacity={1} display={isMobile ? 'none' : 'inline'} />
                                    Noida
                                </ListItem>
                                <ListItem fontSize='12px'>
                                    <ListIcon as={TbPoint} display={isMobile ? 'none' : 'inline'} me='4' />
                                    Delhi
                                </ListItem>
                                <ListItem fontSize='12px'>
                                    <ListIcon as={TbPoint} display={isMobile ? 'none' : 'inline'} me='4' />
                                    Gurugram
                                </ListItem>
                                <ListItem fontSize='12px'>
                                    <ListIcon as={TbPoint} display={isMobile ? 'none' : 'inline'} me='4' />
                                    Banglore
                                </ListItem>
                                <ListItem fontSize='12px'>
                                    <ListIcon as={TbPoint} display={isMobile ? 'none' : 'inline'} me='4' />
                                    Mumbai
                                </ListItem>
                            </List>
                        </Stack>
                    </div>
                    <div className="col-lg-2 col-md-2 SetCols ">
                        <Stack direction='column' display='flex' alignItems={isMobile ? 'center' : 'flex-start'} marginTop={isMobile ? '20px' : 0}>
                            <Heading fontSize={isMobile ? '15px' : '13px'} fontWeight='600' textAlign={isMobile ? 'center' : 'left'} margin={isMobile ? '0' : '0'}>Fixebuy</Heading>
                            <List spacing='5' marginTop={!isMobile ? '0' : '0px'} display='flex' flexDirection={'column'} alignItems={isMobile ? 'center' : 'flex-start'}>
                                <ListItem fontSize='12px' _hover={{ color: '#253b52', transition: 'all 400ms ease', cursor: 'pointer' }}>
                                    <ListIcon as={TbPoint} display={isMobile ? 'none' : 'inline'} me='4' />
                                    <Link to="/about" className="text-decoration-none" style={{ color: '#37577A' }}>About Us</Link>
                                </ListItem>
                                <ListItem fontSize='12px' _hover={{ color: '#253b52', transition: 'all 400ms ease', cursor: 'pointer' }} display={isMobile ? 'none' : 'block'}>
                                    <ListIcon as={TbPoint} display={isMobile ? 'none' : 'inline'} me='4' />
                                    <Link to="/privacy" className="text-decoration-none" style={{ color: '#37577A' }}>Legal & Privacy</Link>
                                </ListItem>
                                <ListItem fontSize='12px' _hover={{ color: '#253b52', transition: 'all 400ms ease', cursor: 'pointer' }}>
                                    <ListIcon as={TbPoint} display={isMobile ? 'none' : 'inline'} me='4' />
                                    <Link to="/terms" className="text-decoration-none" style={{ color: '#37577A' }}>Term & Condition</Link>
                                </ListItem>
                            </List>
                        </Stack>
                    </div>
                    <div className="col-lg-2 col-md-4  SetCols">
                        <Stack direction='column' display='flex' alignItems={isMobile ? 'center' : 'flex-start'} marginTop={isMobile ? '20px' : 0}>
                            <Heading fontSize={isMobile ? '15px' : '13px'} fontWeight='600' textAlign={isMobile ? 'center' : 'left'} margin={isMobile ? '0' : '0'}>Support</Heading>
                            <List spacing='5' marginTop={!isMobile ? '0' : '0px'} display='flex' flexDirection={'column'} alignItems={isMobile ? 'center' : 'flex-start'}>
                                <ListItem fontSize='12px' textTransform='capitalize' _hover={{ color: '#253b52', transition: 'all 400ms ease', cursor: 'pointer' }} display={isMobile ? 'none' : 'block'}>
                                    <ListIcon as={TbPoint} display={isMobile ? 'none' : 'inline'} me='4' />
                                    Building no-9  hindan vihar<br />
                                    <Text p='0' m='0' ms={!isMobile ? '18' : '0'}> ghaziabad 201001</Text>
                                </ListItem>
                                {/* <ListItem fontSize='12px' _hover={{ color: '#253b52', transition: 'all 400ms ease', cursor: 'pointer' }}>
                                    <ListIcon as={TbPoint} display={isMobile ? 'none' : 'inline'} me='4' />
                                </ListItem> */}
                                {/* <ListItem fontSize='12px' _hover={{ color: '#253b52', transition: 'all 400ms ease', cursor: 'pointer' }}>
                                    <ListIcon as={TbPoint} display={isMobile ? 'none' : 'inline'} me='4' />
                                    8527720760
                                </ListItem> */}
                                <ListItem fontSize='12px' _hover={{ color: '#253b52', transition: 'all 400ms ease', cursor: 'pointer' }}>
                                    <ListIcon as={TbPoint} display={isMobile ? 'none' : 'inline'} me='4' />
                                    info@fixebuy.in
                                </ListItem>
                            </List>
                        </Stack>
                    </div>
                    <div className=" col-lg-2 col-md-2 SetCols" >
                        <Stack direction='column' display={isMobile ? 'none' : 'flex'} alignItems={isMobile ? 'center' : 'flex-start'} marginTop={isMobile ? '20px' : 0}>
                            <Heading fontSize={isMobile ? '15px' : '13px'} fontWeight='600' textAlign={isMobile ? 'center' : 'left'} margin={isMobile ? '0' : '0'} textTransform='capitalize'>Mobile app</Heading>
                            <List spacing='5' marginTop={!isMobile ? '0' : '0px'} display='flex' flexDirection={'column'} alignItems={isMobile ? 'center' : 'flex-start'}>
                                <ListItem fontSize='12px' display='flex' flexDirection='column' _hover={{ color: '#253b52', transition: 'all 400ms ease', cursor: 'pointer' }} >
                                    {/* <ListIcon as={TbPoint} display={isMobile ? 'none' : 'inline'} me='4' /> */}
                                    <Image src={android} width='100px' />

                                </ListItem>
                                <ListItem fontSize='12px' display='flex' flexDirection='column' _hover={{ color: '#253b52', transition: 'all 400ms ease', cursor: 'pointer' }} >
                                    {/* <ListIcon as={TbPoint} display={isMobile ? 'none' : 'inline'} me='4' /> */}
                                    <Image src={apple} width='100px' />

                                </ListItem>
                            </List>
                        </Stack>
                    </div>
                    <div className="col-lg-4 col-md-2 SetCols SetCols">
                        <Stack direction='column' display='flex' alignItems={isMobile ? 'center' : 'flex-start'} marginTop={isMobile ? '20px' : 0}>
                            <Heading fontSize={isMobile ? '15px' : '13px'} fontWeight='600' textAlign={isMobile ? 'center' : 'left'} margin={isMobile ? '0' : '0'} textTransform='capitalize'>social media  </Heading>
                            <List spacing='5 ' marginTop={!isMobile ? 'auto' : '0px'} display='flex' flexDirection={isMobile ? 'row' : 'column'} alignItems={isMobile ? 'center' : 'center'} w='100%' justifyContent={isMobile ? 'space-around' : 'center'}>
                                <ListItem fontSize='12px' _hover={{ color: '#253b52', transition: 'all 400ms ease', cursor: 'pointer' }}>
                                    <a href="www.instagram.com/fixebuy.official/"> <Image
                                        boxSize='20px'
                                        objectFit='cover'
                                        src={instagram}
                                        alt='Instagram'
                                    /></a>
                                </ListItem>
                                <ListItem fontSize='12px' _hover={{ color: '#253b52', transition: 'all 400ms ease', cursor: 'pointer' }}>
                                    <a href="https://twitter.com/FixebuyOfficial">
                                        <Image
                                            boxSize='25px'
                                            objectFit='cover'
                                            src={twitter}
                                            alt='twitter'
                                        /></a>
                                </ListItem>
                                <ListItem fontSize='12px' _hover={{ color: '#253b52', transition: 'all 400ms ease', cursor: 'pointer' }}>
                                    <a href="https://www.facebook.com/FixeBuy-Pvt-Ltd-101284785886394">
                                        <Image
                                            boxSize='20px'
                                            objectFit='cover'
                                            src={facebook}
                                            alt='facebook'
                                        /></a>
                                </ListItem>
                            </List>
                        </Stack>
                    </div>
                </div>
                <Support />
                <Stack mt={10}>
                    <Box w='100%' h='40px' style={{
                        backgroundImage: "linear-gradient(#487792,#37577A)"
                    }} display='flex' justifyContent='center' alignItems='center' textTransform='capitalize' flexDirection='column' >
                        <Text color="#fff" fontSize='10px' fontWeight='light' m={0} mb='3' display={!isMobile ? 'none' : 'block'}>
                            <Link to="/privacy" className="text-white text-decoration-none" style={{ color: '#37577A' }}>Legal & Privacy</Link>
                        </Text>
                        <Text color="#fff" fontSize='12px' fontWeight='light' m={0}>
                            All rights reserved ©2022 FixeBuy
                        </Text>
                    </Box>
                </Stack>
            </Footers>
        </>
    )
}

export default Footer;
const Footers = styled.div`
.SetCols{
    display: flex;
    justify-content: center;
    color: ${props => props.theme.colors.primary};
}
 background-color: #d2e7fc5e;
    .MenuClass li{
        width  : 10%;
    }
`