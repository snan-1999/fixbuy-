import React from "react"
import "../form/header.css";
import "./css/custom.css";
import "./css/iofrm-style.css";
import logo from "../../assets/images/FB-white.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@react-md/divider";
import { Link } from "react-router-dom"; 
import Playstore from '../../assets/images/Playstore.png';
import Appstore from '../../assets/images/Appstore.png';
import styled from "styled-components";
import Support from "../../ChatSeller/Support";





const Footer = () => {
    return (
        <>
            <Footers>

                <div className="footer">
                    <div className="row p-0 m-0 w-100 des-footer">
                        {/* <div className="mob-version-footer"> */}
                        <div className="col-md-4 col-12  mob-heading-logo">
                            <div className="pp">
                                <p><FontAwesomeIcon icon="fa-address-card" />&nbsp;&nbsp;&nbsp;Ghookna, Ghaziabad,<br />
                                    &nbsp;&nbsp;  Uttar Pradesh, 201003</p>
                                <p><FontAwesomeIcon icon="fas fa-phone-volume " />&nbsp;&nbsp;&nbsp; 8527720760
                                </p>
                                <p><FontAwesomeIcon icon="fas fa-envelope-open-text " />&nbsp;&nbsp;&nbsp; info@fixebuy.in</p>
                            </div>
                        </div>





                        <div className="col-md-4 col-12 gettouch" >
                            <div className="footerlogo">
                                <Link to=""><img src={logo} alt="logo" className="footer-logo" /></Link>
                            </div>
                            <div className="subhead" >
                                GET IN TOUCH
                            </div>
                            <div className="social" >
                                <Link to="https://www.instagram.com/fixebuy.official/" ><img src={instagram} /></Link>
                                <Link to="https://twitter.com/FixebuyOfficial"><img src={twitter} /></Link>
                                <Link to="https://www.facebook.com/FixeBuy-Pvt-Ltd-101284785886394"><img src={facebook} /></Link>
                            </div>
                            <br />
                            <br />
                            <div className="col-md-4 col-12 LinkClass1 d-lg-block d-md-none d-none d-sm-none">
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
                                            {/* <div className="subhead2">
                            GET IN TOUCH
                        </div> */}
                                            <div className="social1">
                                                <Link to="https://www.instagram.com/fixebuy.official/"><img src={instagram} /></Link>
                                                <Link to="https://twitter.com/FixebuyOfficial"><img src={twitter} /></Link>
                                                <Link to="https://www.facebook.com/FixeBuy-Pvt-Ltd-101284785886394"><img src={facebook} /></Link>
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
                        {/* <div className="subhead">
                            MENU
                        </div> */}
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

                <Support />
                <div className="copyright">
                    <div className="row copyrightt p-0 m-0">
                        <div className="col-md-12 col-12 foocet">@Copyright 2022 - Fixebuy.in </div>
                    </div>
                    <div className="learn-more">
                        <Link to="/privacy" className="col-md-6 col-6 ">Privacy Policy</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="/terms" className="col-md-6 col-6 ">Term & Condition</Link>
                    </div>
                </div>
            </Footers>
        </>
    )
}

export default Footer;
const Footers = styled.div`
    .MenuClass li{
        width  : 10%;
    }
`