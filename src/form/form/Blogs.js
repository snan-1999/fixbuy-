import React, { useEffect, useState } from "react";
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import logo from '../../assets/images/logo.png';
import facebook from '../../assets/images/facebook.png';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./header";
import Footer from "./Footer";

const Blogs = () => {
    return (

      <>
      <Header/>

       <div class="container faq-container">
        <div class="about-text">


            <div class="blog-heading">
                {/* <img src={facebook} alt="img" /> */}
                <div>BLOGS</div>
            </div>
                   </div>
            <div class="service">
                <div class="row m-5 p-0">
                   
                 <div class="col-md-4 about-tabs">
                        <div class="main-blog-container">
                            <div class="blog-image">
                                <img src="" alt="img" />
                            </div>
                            <div class="blog-card-headings">
                            <div>Artificial intelligence is being asked to predict the future of AI</div>
                            </div>
                            <div class="blog-content-text">
                                Artificial intelligence model predictions from historical data on how AI research would develop over five years matched reality with more than 99 per cent accuracy – soon they will be asked what comes next
                                <a href="#">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 about-tabs">
                        <div class="main-blog-container">
                            <div class="blog-image">
                                <img src="" alt="img" />
                            </div>
                            <div class="blog-card-headings">
                            <div>Artificial intelligence is being asked to predict the future of AI</div>
                            </div>
                            <div class="blog-content-text">
                                Artificial intelligence model predictions from historical data on how AI research would develop over five years matched reality with more than 99 per cent accuracy – soon they will be asked what comes next
                                <a href="#">Read more</a>
                            </div>
                        </div>
                    </div> 
                   </div>
                   </div>
                   </div>
                   <Footer/>
      
                   </>
    )
}

export default Blogs;