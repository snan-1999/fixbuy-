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





const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="row p-0 m-0 w-100">
                    {/* <div className="mob-version-footer"> */}
                    <div className="col-md-4 col-12 mob-heading-logo">
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



                    <div className="col-md-4 col-12">
                        <div className="subhead">
                            MENU
                        </div>
                        <div className="menuu">
                            <ul className="submenuu">
                                <li><Link to="/" aria-current="page">HOME</Link></li>
                                {/* <li><Link to="/product">PRODUCTS</Link></li> */}
                                <li><Link to="/about">ABOUT US</Link></li>
                                <li><Link to="/contact">CONTACT US</Link></li>
                                <li><Link to="/faq">F.A.Q</Link></li>
                                <li><Link to="/privacy">PRIVACY POLICY</Link></li>
                                <li><Link to="/terms">TERM & CONDITION</Link></li>
                            </ul>
                        </div>



                    </div>

                    <div className="col-md-4 col-12">
                        <div className="subhead" >
                            GET IN TOUCH
                        </div>
                        <div className="social" >
                            <a href="https://www.instagram.com/fixebuy.official/"><img src={instagram} /></a>
                            <a href="https://twitter.com/FixebuyOfficial"><img src={twitter} /></a>
                            <a href="https://www.facebook.com/FixeBuy-Pvt-Ltd-101284785886394"><img src={facebook} /></a>
                        </div>
                    </div>

                    <div className="mob-headContainer">
                        <div className="row m-0 p-0">


                            <div className="col-md-4 col-12">
                                <div className="d-flex footer-mob" style={{ width: "50%" }}>
                                    <div className="col-md-4 col-12">
                                        <div className="pp1 mt-1 mt-lg-0 mt-md-0">
                                            <p><FontAwesomeIcon icon="fa-address-card" />&nbsp;&nbsp;&nbsp;Ghookna, Ghaziabad,<br />
                                                &nbsp;&nbsp;&nbsp;  Uttar Pradesh, 201003</p>
                                            <p><FontAwesomeIcon icon="fas fa-phone-volume " />&nbsp;&nbsp;&nbsp; 8527720760
                                            </p>
                                            <p><FontAwesomeIcon icon="fas fa-envelope-open-text " />&nbsp;&nbsp;&nbsp; info@fixebuy.in</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4 col-12">
                                        {/* <div className="subhead2">
                            GET IN TOUCH
                         </div> */}
                                        <div className="social1">
                                            <a href="https://www.instagram.com/fixebuy.official/"><img src={instagram} /></a>
                                            <a href="https://twitter.com/FixebuyOfficial"><img src={twitter} /></a>
                                            <a href="https://www.facebook.com/FixeBuy-Pvt-Ltd-101284785886394"><img src={facebook} /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="copyright border border-light">
                <div className="row copyrightt p-0 m-0">
                    <div className="col-md-12 col-12 foocet">@Copyright 2022 - Fixebuy.in </div>
                </div>
                <div className="learn-more">
                    <Link to="/privacy" className="col-md-6 col-6 ">Privacy Policy</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/terms" className="col-md-6 col-6 ">Term & Condition</Link>
                </div>
            </div>
        </>
    )
}

export default Footer;