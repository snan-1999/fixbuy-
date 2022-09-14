import React from "react";
import Footer from "./Footer";
import Header from "./header";
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import { Link } from "react-router-dom";

const Sell = () => {
    return (
        <>
            <Header />
            <div class="container">

                <div class="page-wrapper">

                    <div class="page-content d-flex justify-content-center mt-4 mb-4">
                        <br />

                        <div class="myi">
                            <div class="row">
                                <div class="col d-flex align-items-center justify-content-center">
                                    <div class="preview-container shadow">
                                        <span class="fileName d-block my-2"></span>
                                        <div class="icon-container bg-secondary ">
                                            <i class="fas fa-times icon text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-Div">
                            <div className="row p-0 m-0  h-100 w-100">
                                <div className="col-6 setRightBr">
                                    <div className="dropOne">
                                        <div class="btn-group dropend" style={{ width: "100%" }}>
                                            <button type="button" class="setBtn_drop p-2 m-0 w-100  dropdown-toggle set_white shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                Electronic & Appliances
                                            </button>
                                            <ul class="UlSet w-100 dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <Link to="/fridge"><li className="w-100">Fridge</li></Link>
                                                <li>Cooler</li>
                                                <li>A/C</li>
                                                <li>Television & Led</li>
                                                <li>Washing Machine</li>
                                                <li>Hard Disks, Printer & Monitor</li>
                                                <li>Games</li>
                                                <li>Speakers</li>
                                                <li>Camera & Lens</li>
                                                <li>Kitchen & Others</li>
                                                <li>Computer Accessories</li>
                                                <li>Air Purifiers</li>
                                                <li>Water Purifiers</li>
                                                <li>Others</li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropTwo">
                                        <div class="btn-group dropend" style={{ width: "100%" }}>
                                            <button type="button" class="setBtn_drop p-2 m-0 w-100  dropdown-toggle set_white shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                Laptop & Mobile
                                            </button>
                                            <ul class="UlSet w-100 dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li className="w-100">Mobile Phones</li>
                                                <li>Tablets</li>
                                                <li>Laptops</li>
                                                <li>Computers</li>
                                                <li>Accessories</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropThree">
                                        <div class="btn-group dropend" style={{ width: "100%" }}>
                                            <button type="button" class="setBtn_drop p-2 m-0 w-100  dropdown-toggle set_white shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                Furniture
                                            </button>
                                            <ul class="UlSet w-100 dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li className="w-100">Home Decoration</li>
                                                <li>Sofa & Beds</li>
                                                <li>Chairs & Tables</li>
                                                <li>Kids Furniture</li>
                                                <li>Others</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropFour">
                                        <div class="btn-group dropend" style={{ width: "100%" }}>
                                            <button type="button" class="setBtn_drop p-2 m-0 w-100  dropdown-toggle set_white shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                Fashion & CLothes
                                            </button>
                                            <ul class="UlSet w-100 dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li className="w-100">Men</li>
                                                <li>Women</li>
                                                <li>Kids</li>
                                                <li>Fashion & Beauty Products</li>
                                                <li>Others</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropFive">
                                        <div class="btn-group dropend" style={{ width: "100%" }}>
                                            <button type="button" class="setBtn_drop p-2 m-0 w-100  dropdown-toggle set_white shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                Services
                                            </button>
                                            <ul class="UlSet w-100 dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li className="w-100">Educations & classes</li>
                                                <li>Electronics & Computers</li>
                                                <li>Accountancy Services</li>
                                                <li>Software Services</li>
                                                <li>Other Services</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropSix">
                                        <div class="btn-group dropend" style={{ width: "100%" }}>
                                            <button type="button" class="setBtn_drop p-2 m-0 w-100  dropdown-toggle set_white shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                Books & Sports
                                            </button>
                                            <ul class="UlSet w-100 dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li className="w-100">Books</li>
                                                <li>Gym</li>
                                                <li>Musical Instruments</li>
                                                <li>Sports Items</li>
                                                <li>Others</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropSeven">
                                        <div class="btn-group dropend" style={{ width: "100%" }}>
                                            <button type="button" class="setBtn_drop p-2 m-0 w-100  dropdown-toggle set_white shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                Automation
                                            </button>
                                            <ul class="UlSet w-100 dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li className="w-100">Bikes</li>
                                                <li>Cars</li>
                                                <li>Scooty</li>
                                                <li>Heavy Vehicles</li>
                                                <li>Spare Parts</li>
                                                <li>Others</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropEight">
                                        <div class="btn-group dropend" style={{ width: "100%" }}>
                                            <button type="button" class="setBtn_drop p-2 m-0 w-100  dropdown-toggle set_white shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                Properties
                                            </button>
                                            <ul class="UlSet w-100 dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <li className="w-100">For Rent</li>
                                                <li>For Sales</li>
                                                <li>Land & Plots</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-3">

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Sell;