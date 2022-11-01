import React, { useEffect, useState } from "react";
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import "../../index.css";
import logo from '../../assets/images/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./header";
import Footer from "./Footer";

const Packages = () => {
    return(
        <>
        <Header/>
        <div class="container my-cont border">
        <div class="for-center package-form">
      <div class="container-heading package-form">
        <span>Packages</span>
      </div>
    </div>

<div class="Package-Heading">
        <span>1. Car ,Properties , Heavy Vehicle </span>
      </div>
    <section class="pricing py-2">
          <div class="container-price">
            <div class="row">
            {/* //   <!-- Free Tier --> */}
              <div class="col-lg-6 ">
                <div class="card mb-5 mb-lg-0" id='setMargin1'>
                  <div class="card-body">
                    {/* <h5 class="card-title text-muted text-uppercase text-center">SILVER</h5> */}
                    <h6 class="card-price text-center">₹299<span className="period">+GST</span><span class="period">/5days</span></h6>
                    <hr/>
                    <ul class="fa-ul">
                    {/* //   <!-- <li><span class="fa-li"><i class="fas fa-check"></i></span>Boost your mobiles ads on top</li> --> */}
                      <li><span class="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>For 3 days</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>2x more buyers</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>Customer engagements</li>
                      {/* <li><span class="fa-li"><i class="fas fa-check"></i></span>All
                        items boost</li> */}
                {/* //       <!-- <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                    </ul>
                    <div class="d-grid">
                      <a href="api/boost-product-api.php?price=49" class="btn btn-primary text-uppercase" id="rzp-button1">Boost Now</a>
                    </div>
                  </div>
                </div>
              </div>
            {/* //   <!-- Plus Tier --> */}
              <div class="col-lg-6">
                <div class="card mb-5 mb-lg-0" id='setMargin2'>
                  <div class="card-body">
                    {/* <h5 class="card-title text-muted text-uppercase text-center">GOLD</h5> */}
                    <h6 class="card-price text-center">₹499<span className="period">+GST</span><span class="period">/12days</span></h6>
                    <hr />
                    <ul class="fa-ul">
                    {/* //   <!-- <li><span class="fa-li"><i class="fas fa-check"></i></span>Boost your bikes ads on top</li> --> */}
                      <li><span class="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>For 5 days</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>2x more buyers</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>Customer engagement</li>
                      {/* <li><span class="fa-li"><i class="fas fa-check"></i></span>All
                        items boosts</li> */}
                {/* //       <!-- <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                    </ul>
                    <div class="d-grid">
                      <a href="api/boost-product-api.php?price=99" class="btn btn-primary text-uppercase" id="rzp-button1">Boost Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br/>
        <br/>

        <div class="Package-Heading">
        <span>2. All Other Items </span>
      </div>
    <section class="pricing py-2">
          <div class="container-price">
            <div class="row">
            {/* //   <!-- Free Tier --> */}
              <div class="col-lg-6 ">
                <div class="card mb-5 mb-lg-0" id='setMargin1'>
                  <div class="card-body">
                    {/* <h5 class="card-title text-muted text-uppercase text-center">SILVER</h5> */}
                    <h6 class="card-price text-center">₹49<span className="period">+GST</span><span class="period">/5days</span></h6>
                    <hr/>
                    <ul class="fa-ul">
                    {/* //   <!-- <li><span class="fa-li"><i class="fas fa-check"></i></span>Boost your mobiles ads on top</li> --> */}
                      <li><span class="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>For 3 days</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>2x more buyers</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>Customer engagements</li>
                      {/* <li><span class="fa-li"><i class="fas fa-check"></i></span>All
                        items boost</li> */}
                {/* //       <!-- <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                    </ul>
                    <div class="d-grid">
                      <a href="api/boost-product-api.php?price=49" class="btn btn-primary text-uppercase" id="rzp-button1">Boost Now</a>
                    </div>
                  </div>
                </div>
              </div>
            {/* //   <!-- Plus Tier --> */}
              <div class="col-lg-6">
                <div class="card mb-5 mb-lg-0" id='setMargin2'>
                  <div class="card-body">
                    {/* <h5 class="card-title text-muted text-uppercase text-center">GOLD</h5> */}
                    <h6 class="card-price text-center">₹99<span className="period">+GST</span><span class="period">/12days</span></h6>
                    <hr />
                    <ul class="fa-ul">
                    {/* //   <!-- <li><span class="fa-li"><i class="fas fa-check"></i></span>Boost your bikes ads on top</li> --> */}
                      <li><span class="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>For 5 days</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>2x more buyers</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>Customer engagement</li>
                      {/* <li><span class="fa-li"><i class="fas fa-check"></i></span>All
                        items boosts</li> */}
                {/* //       <!-- <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                    </ul>
                    <div class="d-grid">
                      <a href="api/boost-product-api.php?price=99" class="btn btn-primary text-uppercase" id="rzp-button1">Boost Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br/>
        <br/>

        <div class="Package-Heading">
        <span>3. For Shop </span>
      </div>
    <section class="pricing py-2">
          <div class="container-price">
            <div class="row">
            {/* //   <!-- Free Tier --> */}
              <div class="col-lg-6 ">
                <div class="card mb-5 mb-lg-0" id='setMargin1'>
                  <div class="card-body">
                    {/* <h5 class="card-title text-muted text-uppercase text-center">SILVER</h5> */}
                    <h6 class="card-price text-center">₹499<span className="period">+GST</span><span class="period">/5days</span></h6>
                    <hr/>
                    <ul class="fa-ul">
                    {/* //   <!-- <li><span class="fa-li"><i class="fas fa-check"></i></span>Boost your mobiles ads on top</li> --> */}
                      <li><span class="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>For 3 days</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>2x more buyers</li>
                      <li><span class="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>Customer engagements</li>
                      {/* <li><span class="fa-li"><i class="fas fa-check"></i></span>All
                        items boost</li> */}
                {/* //       <!-- <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                    </ul>
                    <div class="d-grid">
                      <a href="api/boost-product-api.php?price=49" class="btn btn-primary text-uppercase" id="rzp-button1">Boost Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
         </div>
        <Footer/>
        </>
    )
}

export default Packages;