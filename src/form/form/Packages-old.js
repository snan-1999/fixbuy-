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
        <div className="container my-cont border">
        <div className="for-center package-form">
      <div className="container-heading package-form">
        <span>Packages</span>
      </div>
    </div>

<div className="Package-Heading">
        <span>1. Car ,Properties , Heavy Vehicle </span>
      </div>
    <section className="pricing py-2">
          <div className="container-price">
            <div className="row">
            {/* //   <!-- Free Tier --> */}
              <div className="col-lg-6 ">
                <div className="card mb-5 mb-lg-0" id='setMargin1'>
                  <div className="card-body">
                    {/* <h5 className="card-title text-muted text-uppercase text-center">SILVER</h5> */}
                    <h6 className="card-price text-center">₹299<span className="period">+GST</span><span className="period">/5days</span></h6>
                    <hr/>
                    <ul className="fa-ul">
                    {/* //   <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Boost your mobiles ads on top</li> --> */}
                      <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>For 3 days</li>
                      <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>2x more buyers</li>
                      <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>Customer engagements</li>
                      {/* <li><span className="fa-li"><i className="fas fa-check"></i></span>All
                        items boost</li> */}
                {/* //       <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                    </ul>
                    <div className="d-grid">
                      <a href="api/boost-product-api.php?price=49" className="btn btn-primary text-uppercase" id="rzp-button1">Boost Now</a>
                    </div>
                  </div>
                </div>
              </div>
            {/* //   <!-- Plus Tier --> */}
              <div className="col-lg-6">
                <div className="card mb-5 mb-lg-0" id='setMargin2'>
                  <div className="card-body">
                    {/* <h5 className="card-title text-muted text-uppercase text-center">GOLD</h5> */}
                    <h6 className="card-price text-center">₹499<span className="period">+GST</span><span className="period">/12days</span></h6>
                    <hr />
                    <ul className="fa-ul">
                    {/* //   <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Boost your bikes ads on top</li> --> */}
                      <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>For 5 days</li>
                      <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>2x more buyers</li>
                      <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>Customer engagement</li>
                      {/* <li><span className="fa-li"><i className="fas fa-check"></i></span>All
                        items boosts</li> */}
                {/* //       <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                    </ul>
                    <div className="d-grid">
                      <a href="api/boost-product-api.php?price=99" className="btn btn-primary text-uppercase" id="rzp-button1">Boost Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br/>
        <br/>

        <div className="Package-Heading">
        <span>2. All Other Items </span>
      </div>
    <section className="pricing py-2">
          <div className="container-price">
            <div className="row">
            {/* //   <!-- Free Tier --> */}
              <div className="col-lg-6 ">
                <div className="card mb-5 mb-lg-0" id='setMargin1'>
                  <div className="card-body">
                    {/* <h5 className="card-title text-muted text-uppercase text-center">SILVER</h5> */}
                    <h6 className="card-price text-center">₹49<span className="period">+GST</span><span className="period">/5days</span></h6>
                    <hr/>
                    <ul className="fa-ul">
                    {/* //   <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Boost your mobiles ads on top</li> --> */}
                      <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>For 3 days</li>
                      <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>2x more buyers</li>
                      <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>Customer engagements</li>
                      {/* <li><span className="fa-li"><i className="fas fa-check"></i></span>All
                        items boost</li> */}
                {/* //       <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                    </ul>
                    <div className="d-grid">
                      <a href="api/boost-product-api.php?price=49" className="btn btn-primary text-uppercase" id="rzp-button1">Boost Now</a>
                    </div>
                  </div>
                </div>
              </div>
            {/* //   <!-- Plus Tier --> */}
              <div className="col-lg-6">
                <div className="card mb-5 mb-lg-0" id='setMargin2'>
                  <div className="card-body">
                    {/* <h5 className="card-title text-muted text-uppercase text-center">GOLD</h5> */}
                    <h6 className="card-price text-center">₹99<span className="period">+GST</span><span className="period">/12days</span></h6>
                    <hr />
                    <ul className="fa-ul">
                    {/* //   <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Boost your bikes ads on top</li> --> */}
                      <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>For 5 days</li>
                      <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>2x more buyers</li>
                      <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>Customer engagement</li>
                      {/* <li><span className="fa-li"><i className="fas fa-check"></i></span>All
                        items boosts</li> */}
                {/* //       <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                    </ul>
                    <div className="d-grid">
                      <a href="api/boost-product-api.php?price=99" className="btn btn-primary text-uppercase" id="rzp-button1">Boost Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br/>
        <br/>

        <div className="Package-Heading">
        <span>3. For Shop </span>
      </div>
    <section className="pricing py-2">
          <div className="container-price">
            <div className="row">
            {/* //   <!-- Free Tier --> */}
              <div className="col-lg-6 ">
                <div className="card mb-5 mb-lg-0" id='setMargin1'>
                  <div className="card-body">
                    {/* <h5 className="card-title text-muted text-uppercase text-center">SILVER</h5> */}
                    <h6 className="card-price text-center">₹499<span className="period">+GST</span><span className="period">/5days</span></h6>
                    <hr/>
                    <ul className="fa-ul">
                    {/* //   <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Boost your mobiles ads on top</li> --> */}
                      <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>For 3 days</li>
                      <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>2x more buyers</li>
                      <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>Customer engagements</li>
                      {/* <li><span className="fa-li"><i className="fas fa-check"></i></span>All
                        items boost</li> */}
                {/* //       <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                    </ul>
                    <div className="d-grid">
                      <a href="api/boost-product-api.php?price=49" className="btn btn-primary text-uppercase" id="rzp-button1">Boost Now</a>
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