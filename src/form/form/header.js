import React from "react";
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import LoginSession from "./LoginSession";
// const Automobile = [
//     {
//         path : 
//     }
// ]


const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg headerr">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="logo">
                        <a className="navbar-brand" href="<?php echo $server_name;?>">
                            <img src={logo} alt="logo" /></a>
                    </div>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="inline-menu">
                            <div className="setmnu">
                                <ul className="navbar-nav menu">
                                    <li className="nav-item aa">
                                        <Link to="/home" className="nav-link active" aria-current="page">HOME</Link>
                                    </li>
                                    <li className="nav-item aa">
                                        <Link to="/product" className="nav-link">PRODUCT</Link>
                                    </li>
                                    <li className="nav-item aa">
                                        <Link to="/about" className="nav-link">ABOUT US</Link>
                                    </li>
                                    <li className="nav-item aa">
                                        <Link to="/contact" className="nav-link">CONTACT US</Link>
                                    </li>
                                    <li className="nav-item aa">
                                        <Link to="/faq" className="nav-link">F.A.Q</Link>
                                    </li>
                                    <li className=" nav-item aa mob-login">
                                    </li>
                                </ul>
                            </div>
                            <form className="form-inline my-2 my-lg-0 desk-version" action="search-result.php" method="get">
                                <input className="form-control mr-sm-2 " type="text" id="search" placeholder="Search Car, Bikes and Mobiles" name="search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" id="Search" type="submit" name="submit" value="true">Search</button>
                            </form>
                            <div className="row p-0 m-0 mob-cen">
                                <div className="col-12 mainbutton">
                                    <Link to="/sell" className="btn btn-primary"> + SELL</Link>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

            </nav>
            <div className="mob-version search-box col-12">
                <form className="form-inline my-2 my-lg-0" action="search-result.php" method="get">
                    <div className="mob-search">
                        <input className="form-control mr-sm-2 col-12" type="text" id="search" placeholder="Search Car, Bikes and Mobiles" name="search" aria-label="Search" />
                        <i className="fa-solid fa-magnifying-glass search-iconm"></i>
                    </div>
                </form>
            </div>

            {/* <!-- category --> */}
            <div className="desk-category">
                <div className="row m-0 p-0">
                    <div className="col  p-0">
                        <div className="catagry">

                            {/* <div className="row catagry-color p-0 m-0"> */}
                            <div className="category-section">
                                <div className="disp catagry-color"><FontAwesomeIcon icon="fas fa-grip-lines"></FontAwesomeIcon>&nbsp;&nbsp;<Link to="/product">ALL</Link></div>
                                <div className=" disp">
                                    <div className="drop-down">
                                        Automobiles
                                        <ul className="dropdown-category dropdown-category-bikes">
                                            <li><Link to="/bike" className="dropdown_sub-category ">Bikes</Link></li>
                                            <li><Link to="/car" className="dropdown_sub-category ">Cars</Link></li>
                                            <li><Link to="/scooty" className="dropdown_sub-category" >Scooty</Link></li>
                                            <li><Link to="/heavyVehicle" className="dropdown_sub-category">Heavy Vehicle</Link></li>
                                            <li><Link to="/spareParts" className="dropdown_sub-category">Spare Parts</Link></li>
                                            <li><Link to="/others" className="dropdown_sub-category">Others</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Laptop&Mobiles
                                        <ul className="dropdown-category ">
                                            <li>Mobile Phones</li>
                                            <li>Tablets</li>
                                            <li>Laptops</li>
                                            <li>Computers</li>
                                            <li>Accessories</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Furniture
                                        <ul className="dropdown-category">
                                            <li>Home Decoration</li>
                                            <li>Sofa & Beds</li>
                                            <li>Chairs & Tables</li>
                                            <li>Kids Furniture</li>
                                            <li>Others</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Fashion&Clothes
                                        <ul className="dropdown-category">
                                            <li>Men</li>
                                            <li>Women</li>
                                            <li>Kids</li>
                                            <li>Fashion & Beauty Products</li>
                                            <li>Others</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Services
                                        <ul className="dropdown-category">
                                            <li>Educations & classes</li>
                                            <li>Electronics & Computers</li>
                                            <li>Accountancy Services</li>
                                            <li>Software Services</li>
                                            <li>Other Services</li>
                                        </ul>
                                    </div></div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Properties
                                        <ul className="dropdown-category">
                                            <li>For Rent</li>
                                            <li>For Sale</li>
                                            <li>Land & Plots</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Books&Sports
                                        <ul className="dropdown-category">
                                            <li>Books</li>
                                            <li>Gym</li>
                                            <li>Musical Instruments</li>
                                            <li>Sports Items</li>
                                            <li>Others</li>
                                        </ul>
                                    </div></div>


                                <div className="col-2 disp">
                                    <div className="drop-down">
                                        Electronics&Appliances
                                        <ul className="dropdown-category catagry-color">
                                            <li><Link to="/fridge">Fridge</Link></li>
                                            <li><Link to="/cooler">Cooler</Link></li>
                                            <li><Link to="/ac">A/C</Link></li>
                                            <li><Link to="/tv">Television & Led</Link></li>
                                            <li><Link to="/washingmachine">Washing Machine</Link></li>
                                            <li><Link to="/printer">Hard Disks, Printer & Monitor</Link></li>
                                            <li><Link to="/games">Games</Link></li>
                                            <li><Link to="/speakers">Speakers</Link></li>
                                            <li><Link to="/camera">Cameras & Lens</Link></li>
                                            <li><Link to="/kitchen">Kitchen & Others</Link></li>
                                            <li><Link to="/computer">Computers Accessories</Link></li>
                                            <li><Link to="/air">Air Purifiers</Link></li>
                                            <li><Link to="/water">Water Purifiers</Link></li>
                                            <li><Link to="/other">Other Items</Link></li>
                                        </ul>
                                    </div>

                                    {/* <!-- end --> */}
                                </div>
                                {/* <!-- <div className="disp"><a href="#"></a></div> --> */}
                                {/* <div className="disp"><Link to="/login" className="active">Login</Link></div> */}
                                {/* <div className="page-links"> */}
                                <FontAwesomeIcon icon="fas-solid fa-right-from-bracket"></FontAwesomeIcon>
                                <button class="btn btn-secondary dropdown btn-d" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Logout
                                    <div class="text-capitalize ancor-container">
                                        {/* <div class="profile-icon"><img src=<?php if($_SESSION['user_image']!=null){ if (file_exists("image/profile-image/".$_SESSION['user_image'])) {echo "image/profile-image/".$_SESSION['user_image'];}else{ echo $_SESSION['user_image']; }}else{echo "image/testo/1.png";}  ?>></div>
                    <span><?php echo $_SESSION['username']; ?></span>
                </a>
                </div> */}
                                    </div>
                                </button>
                                <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                    <li><Link to="/profile" class="dropdown-item "> <FontAwesomeIcon icon="fas fa-user"></FontAwesomeIcon>&nbsp;&nbsp;Profile</Link></li>

                                    <li><a class="dropdown-item" href="membership.php"> <FontAwesomeIcon icon="fas fa-landmark"></FontAwesomeIcon>&nbsp;&nbsp;Membership</a></li>

                                    <li><a class="dropdown-item" href="posted-items.php?user_id=<?php echo $_SESSION['user_id'];?>"> <FontAwesomeIcon icon="fa-solid fa-list"></FontAwesomeIcon>&nbsp;&nbsp;Posted Items</a></li>

                                    <li><a class="dropdown-item" href="form/logout.php"><FontAwesomeIcon icon="fas fa-sign-out-alt"></FontAwesomeIcon>&nbsp;&nbsp;Logout</a></li>
                                    {/* <!-- <li><a class="dropdown-item" href="#">Something else here</a></li> --> */}
                                </ul>
                                <div className="col-3 desk-login">
                                </div>

                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header;