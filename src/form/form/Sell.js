import React from "react";
import Footer from "./Footer";
import Header from "./header";
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sell = () => {
    // console.log(ElectronicId)
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
                                            <button type="button" class="setBtn_drop p-4 m-0 w-100  dropdown-toggle d-n set_white shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                <FontAwesomeIcon icon="fa-tv" className="sell-icon"></FontAwesomeIcon> Electronic & Appliances <FontAwesomeIcon icon="fa-chervon-right"></FontAwesomeIcon>
                                            </button>
                                            <ul className="UlSet w-100 dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <Link to="/sell/electronics/fridge" className="textLine">
                                                    <li className="w-100">Fridge</li>
                                                </Link>
                                                <Link to="/sell/electronics/cooler" className="textLine"><li>Cooler</li></Link >
                                                <Link to="/sell/electronics/fan" className="textLine"><li>Fan</li></Link >
                                                <Link to="/sell/electronics/ac" className="textLine"><li>A/C</li></Link>
                                                <Link to="/sell/electronics/television_&_led" className="textLine"><li>Television & Led</li></Link>
                                                <Link to="/sell/electronics/washing_machine" className="textLine"><li>Washing Machine</li></Link>
                                                <Link to="/sell/electronics/hard_disks_printer" className="textLine"><li>Hard Disks, Printer & Monitor</li></Link>
                                                <Link to="/sell/electronics/games" className="textLine"><li>Games</li></Link>
                                                <Link to="/sell/electronics/speakers" className="textLine"><li>Speakers</li></Link>
                                                <Link to="/sell/electronics/camera_&_lens" className="textLine"><li>Camera & Lens</li></Link>
                                                <Link to="/sell/electronics/kitchen_&_others" className="textLine"><li>Kitchen & Others</li></Link>
                                                <Link to="/sell/electronics/computer_accessories" className="textLine"><li>Computer Accessories</li></Link>
                                                <Link to="/sell/electronics/air_purifier" className="textLine"><li>Air Purifiers</li></Link>
                                                <Link to="/sell/electronics/water_purifier" className="textLine"><li>Water Purifiers</li></Link>
                                                <Link to="/sell/electronics/other_items" className="textLine"><li>Others</li></Link>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropTwo">
                                        <div class="btn-group dropend" style={{ width: "100%" }}>
                                            <button type="button" class="setBtn_drop p-4 m-0 w-100  dropdown-toggle d-n set_white shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                <FontAwesomeIcon icon="fa-laptop" className="sell-icon"></FontAwesomeIcon>PC , Laptop & Mobile
                                            </button>
                                            <ul class="UlSet w-100 dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <Link to='/sell/pc/mobile_phones' className="textLine"><li className="w-100">Mobile Phones</li></Link>
                                                <Link to='/sell/pc/tablets' className="textLine"><li>Tablets</li></Link>
                                                <Link to='/sell/pc/laptops' className="textLine"><li>Laptops</li>
                                                </Link>
                                                <Link to='/sell/pc/computers' className="textLine"><li>Computers</li></Link>
                                                <Link to='/sell/pc/accessories' className="textLine"><li>Accessories</li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropThree">
                                        <div class="btn-group dropend" style={{ width: "100%" }}>
                                            <button type="button" class="setBtn_drop p-4 m-0 w-100  dropdown-toggle d-n set_white shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                <FontAwesomeIcon icon="fa-tv" className="sell-icon"></FontAwesomeIcon>Furniture
                                            </button>
                                            <ul class="UlSet w-100 dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <Link to='/sell/furniture/home_decoration' className="textLine"><li className="w-100">Home Decoration</li></Link>
                                            <Link to='/sell/furniture/sofa_&_beds' className="textLine"><li>Sofa & Beds</li></Link>
                                            <Link to='/sell/furniture/chairs_&_tables' className="textLine"><li>Chairs & Tables</li></Link>
                                            <Link to='/sell/furniture/kids_furniture' className="textLine"><li>Kids Furniture</li></Link>
                                            <Link to='/sell/furniture/other_items' className="textLine"><li>Others</li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropFour">
                                        <div class="btn-group dropend" style={{ width: "100%" }}>
                                            <button type="button" class="setBtn_drop p-4 m-0 w-100  dropdown-toggle d-n set_white shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                <FontAwesomeIcon icon="fa-shirt" className="sell-icon"></FontAwesomeIcon>Fashion & CLothes
                                            </button>
                                            <ul class="UlSet w-100 dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <Link to='/sell/fashion/men' className="textLine"><li className="w-100">Men</li></Link>
                                            <Link to='/sell/fashion/women' className="textLine"><li>Women</li></Link>
                                            <Link to='/sell/fashion/kids' className="textLine"><li>Kids</li></Link>
                                            <Link to='/sell/fashion/fashion_&_beauty' className="textLine"><li>Fashion & Beauty</li></Link>
                                            <Link to='/sell/fashion/other_items' className="textLine"><li>Others</li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropFive">
                                        <div class="btn-group dropend" style={{ width: "100%" }}>
                                            <button type="button" class="setBtn_drop p-4 m-0 w-100  dropdown-toggle d-n set_white shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                <FontAwesomeIcon icon="fa-bell-concierge" className="sell-icon"></FontAwesomeIcon>Services
                                            </button>
                                            <ul class="UlSet w-100 dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <Link to='/sell/services/educations_&_classes' className="textLine"><li className="w-100">Educations & classes</li></Link>
                                            <Link to='/sell/services/electronics_&_computers' className="textLine"><li>Electronics & Computers</li></Link>
                                            <Link to='/sell/services/accountancy_services' className="textLine"><li>Accountancy Services</li></Link>
                                            <Link to='/sell/sevices/software_services' className="textLine"><li>Software Services</li></Link>
                                            <Link to='/sell/services/others_services' className="textLine"><li>Other Services</li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropSix">
                                        <div class="btn-group dropend" style={{ width: "100%" }}>
                                            <button type="button" class="setBtn_drop p-4 m-0 w-100  dropdown-toggle d-n set_white shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                <FontAwesomeIcon icon="fa-medal" className="sell-icon"></FontAwesomeIcon> Books & Sports
                                            </button>
                                            <ul class="UlSet1 w-100 dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <Link to='/sell/Books/books' className="textLine"><li className="w-100">Books</li></Link>
                                            <Link to='/sell/Books/gym' className="textLine"><li>Gym</li></Link>
                                            <Link to='/sell/Books/musical_instruments' className="textLine"><li>Musical Instruments</li></Link>
                                            <Link to='/sell/Books/sports_items' className="textLine"><li>Sports Items</li></Link>
                                            <Link to='/sell/Books/other_items' className="textLine"><li>Others</li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropSeven">
                                        <div class="btn-group dropend" style={{ width: "100%" }}>
                                            <button type="button" class="setBtn_drop p-3 m-0 w-100  dropdown-toggle d-n set_white shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                <FontAwesomeIcon icon="fa-car" className="sell-icon"></FontAwesomeIcon> Automobile
                                            </button>
                                            <ul class="UlSet2 w-100 dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <Link to='/sell/automobile/bikes' className="textLine"><li className="w-100">Bikes</li></Link>
                                            <Link to='/sell/automobile/car' className="textLine"><li>Cars</li></Link>
                                            <Link to='/sell/automobile/scooty' className="textLine"><li>Scooty</li></Link>
                                            <Link to='/sell/automobile/heavy_vehicle' className="textLine"><li>Heavy Vehicles</li></Link>
                                            <Link to='/sell/automobile/spare_parts' className="textLine"><li>Spare Parts</li></Link>
                                            <Link to='/sell/automobile/other_items' className="textLine"><li>Others</li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropEight">
                                        <div class="btn-group dropend MyDrop" style={{ width: "100%" }}>
                                            <button type="button" class="setBtn_drop p-3 m-0 w-100  dropdown-toggle d-n set_white shadow-none" data-bs-toggle="dropdown" aria-expanded="false">
                                                <FontAwesomeIcon icon="fa-tv" className="sell-icon"></FontAwesomeIcon> Properties
                                            </button>
                                            <ul class="UlSet3 w-100 dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <Link to='/sell/properties/for_rent' className="textLine"><li className="w-100">For Rent</li></Link>
                                            <Link to='/sell/properties/for_sales' className="textLine"><li>For Sales</li></Link>
                                            <Link to='/sell/properties/land_&_plots' className="textLine"><li>Land & Plots</li></Link>
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
            <Footer />
        </>
    )
}

export default Sell;