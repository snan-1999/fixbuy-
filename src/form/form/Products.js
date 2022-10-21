import React from "react"
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import Footer from "./Footer";
import Header from "./header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';

const Products = () => {
    return(
        <>
        <Header/>
        <div className="container">
        <div className="for-center-car">
            <div className="container-heading-car">
                <span>CAR ITEMS</span>
            </div>
        </div>
        <div className="container-1">
            <div className="row">
                    <div className="col-md-4 col-6 col-lg-3">
                        <Link to ='/shop'>
                            <div className="shadow p-3 mb-5 bg-white maindiv">
                                <div className="img-wh"><img src="" className="pdt-img" /></div>
                                <div className="pdt-details">
                                    <div className="price"></div>
                                    <div className="font-weight-light desc"></div>
                                    <div className="prd-name"></div>
                                    <div className="contain-adrs">
                                        <span className="adrs"></span>
                                        <span className="year"></span>
                                    </div>
                                    <div className="row p-0 m-0">
                                        <div className="col p-0">
                                            <div className="buy-bt"> 
                                            <Link to="/shop" className="buy-bttn">
                                                <FontAwesomeIcon icon="fa fa-shopping-cart">
                                            </FontAwesomeIcon>
                                            &nbsp;&nbsp;&nbsp;BUY NOW
                                                </Link></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                <input type="number" id="total_page_car" value="<?php echo $fetch_data_car['total-pages']; ?>" hidden />
                <input type="number" id="page_car" value="<?php echo $fetch_data_car['page']; ?>" hidden />
                <input type="text" id="link_car" value="product.php?&" hidden />
                <div id="pagination_car"></div>

                <div className="for-center-car">
                    <div className="container-heading-car">
                        <span>BIKE ITEMS</span> 
                    </div>
                </div>
                <div className="row p-0 m-0">
                        <div className="col-md-4 col-6 col-lg-3">
                            <a href="single-product.php?pdt_id=<?php echo $value['pdt_id']; ?>&main_category=<?php echo $value['main_category'] ?>" className="ancher">
                                <div className="shadow p-3 mb-5 bg-white maindiv">
                                    <div className="img-wh"><img src="" className="pdt-img" /></div>
                                    <div className="pdt-details">
                                        <div className="price"></div>
                                        <div className="font-weight-light desc"></div>
                                        <div className="prd-name"></div>
                                        <div className="contain-adrs">
                                            <span className="adrs"></span>
                                            <span className="year"></span>
                                        </div>
                                        <div className="row p-0 m-0">
                                            <div className="col p-0">
                                                <div className="buy-bt"> <a href="" className="buy-bttn">
                                                    <FontAwesomeIcon icon="fa fa-shopping-cart"></FontAwesomeIcon>
                                                    &nbsp;&nbsp;BUY NOW
                                                    </a></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                </div>

                <input type="number" id="total_page_bike" value="<?php echo $fetch_data_bike['total-pages']; ?>" hidden />
                <input type="number" id="page_bike" value="<?php echo $fetch_data_bike['page']; ?>" hidden />
                <input type="text" id="link_bike" value="product.php?" hidden />
                <div id="pagination_bike"></div>


                <div className="for-center-PHONE">
                    <div className="container-heading-PHONE">
                        <span>PHONE ITEMS</span>
                    </div>
                </div>
                <div className="row">
                        <div className="col-md-4 col-6 col-lg-3">
                            <a href="single-product.php?pdt_id=<?php echo $value['pdt_id']; ?>&main_category=<?php echo $value['main_category'] ?>" className="ancher">
                                <div className="shadow p-3 mb-5 bg-white maindiv">
                                    <div className="img-wh"><img src="" className="pdt-img" /></div>
                                    <div className="pdt-details">
                                        <div className="price"></div>
                                        <div className="font-weight-light desc"></div>
                                        <div className="prd-name"></div>
                                        <div className="contain-adrs">
                                            <span className="adrs"></span>
                                            <span className="year"></span>
                                        </div>
                                        <div className="row p-0 m-0">
                                            <div className="col p-0">
                                                <div className="buy-bt"> <a href="" className="buy-bttn">
                                                    <FontAwesomeIcon icon="fa fa-shopping-cart"></FontAwesomeIcon>
                                                    &nbsp;&nbsp;BUY NOW
                                                    </a></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                </div>
                <input type="number" id="total_page_phone" value="<?php echo $fetch_data_mobile['total-pages']; ?>" hidden />
                <input type="number" id="page_phone" value="<?php echo $fetch_data_mobile['page']; ?>" hidden />
                <input type="text" id="link_phone" value="product.php?" hidden />
                <div id="pagination_phone"></div>

                <div className="for-center-PHONE">
                    <div className="container-heading-ELECTRONIC">
                        <span>ELECTRONIC ITEMS</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-6 col-lg-3">
                            <a href="" className="ancher">
                                <div className="shadow p-3 mb-5 bg-white maindiv">
                                    <div className="img-wh"><img src="" className="pdt-img" /></div>
                                    <div className="pdt-details">
                                        <div className="price"></div>
                                        <div className="font-weight-light desc"></div>
                                        <div className="prd-name"></div>
                                        <div className="contain-adrs">
                                            <span className="adrs"></span>
                                            <span className="year"></span>
                                        </div>
                                        <div className="row p-0 m-0">
                                            <div className="col p-0">
                                                <div className="buy-bt"> <a href="" className="buy-bttn">
                                                    <FontAwesomeIcon icon="fa fa-shopping-cart"></FontAwesomeIcon>
                                                    &nbsp;&nbsp;BUY NOW
                                                    </a></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                </div>
                <input type="number" id="total_page_electronic" value="<?php echo $fetch_data_electronic['total-pages']; ?>" hidden />
                <input type="number" id="page_electronic" value="<?php echo $fetch_data_electronic['page']; ?>" hidden />
                <input type="text" id="link_electronic" value="product.php?" hidden />
                <div id="pagination_electronic"></div>

            </div>
        </div>
    </div>
        <Footer/>
        </>
    )
}

export default Products;

