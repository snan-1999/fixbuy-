import React, { useEffect, useState } from "react";
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import logo from '../../assets/images/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { localStorage } from "../../functions/Local";
import { VerifyOtp } from "../../functions/VerifyOtp";
import { UpdateApi } from "../../functions/UpdateApi";
import { GoogleLogout } from "react-google-login";
import { baseUrl, ImageView } from "../../functions/constant";
import axios from "axios";
import ShopModal from "./Modals/ShopModal";
import { AnimatePresence } from "framer-motion";
import { Button } from "@chakra-ui/react";
import { FcShop } from 'react-icons/fc'
import { GlobalVariables } from "../../Context/StateProvider";
import { useContext } from "react";
import { SearchHome } from "../../functions/HomeFun";
import { FaHeart } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";


const Header = () => {
    const { Lmore, setLmore, latitude, setlatitude, Longitude, setLongitude, UserId, setUserId } = useContext(GlobalVariables)
    const [LocalData, setLocalData] = useState("")

    let ProfleId;
    let IdData;
    let Type;
    IdData = window.localStorage.getItem('token');
    if (IdData) {

        ProfleId = JSON.parse(IdData).token;
        Type = JSON.parse(IdData).type;
    }
    // const IdData = localStorage.getItem('token');

    // console.log(JSON.parse(IdData).type, 'localData');
    const [message, setMessage] = useState('');
    const [gstnumber, setGstNumber] = useState('');
    console.log(gstnumber);
    const [address, setAddress] = useState('');
    const [show, setShow] = useState('');
    const [errors, seterrors] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);
    const [isOpen, setisOpen] = useState(false)
    const Onclose = () => setisOpen(false)
    const OnOpen = () => setisOpen(true)
    // if(profileName){}
    const profileName = localStorage('token');
    // console.log(localStorage('token'))
    const nav = useNavigate();
    const sellLog = () => {
        // console.log('work ')
        if (profileName === null) {
            // console.log('work1 ')
            nav('/login')
        } else {
            // console.log('work 2')
            nav('/sell')
        }
    }
    const profilefunction = () => {
        if (profileName === null) {
            nav('/login')
        }
        
    }
    const [Upstate, setUpstate] = useState(0)

    let id;
    const Update = async () => {
        // console.log(setSearch, 'count')
        id = JSON.parse(profileName).token
        await UpdateApi(id).then((res) => {
            console.log(res, 'iupdate');
            // setShow()
            console.log(res.status.data[0].profileImg);
            if (res.status) {
                window.localStorage.setItem(
                    'token',
                    JSON.stringify({
                        'token': res.status.data[0]._id,
                        'profileName': res.status.data[0].name,
                        'email': res.status.data[0].email,
                        'profileImg': res.status.data[0].profileImg,
                        'profileImg': res.status.profileImg,
                        'name': res.status.data[0].name,
                        'type': res.status.data[0].type,
                        'phone': res.status.data[0].phone,
                        'status': 'login'
                    })
                )
                setUserId(res.status.data[0]._id)
                // console.log(LocalData)
            } else {

                // console.log(res)
            }
        })
    }
    const [search, setSearch] = useState("")
    const [SearchData, setSearchData] = useState([])
    //search 
    console.log(search)
    // const SearchBar = async () => {
    //     const { data } = await SearchHome(Longitude, latitude, search, Lmore)
    //     setSearchData(data.data)
    //     console.log(data, 'searchResult')
    //     console.log(search, 'search')

    // }
    // console.log(profileImg);   
    useEffect(() => {
        // setLocalData(JSON.parse(profileName));
        (id !== null) && Update()
        setUpstate(Upstate + 1)
        console.log(LocalData, 'first')
    }, [0]);
    useEffect(() => {
        setTimeout(() => {
            setLocalData(JSON.parse(profileName));
            Update()
            console.log('hi')
        }, 1000)
        console.log(LocalData, 'second')
        console.log('sevcond')
    }, [Upstate])

    const SearchBar = () => { }

    const UpdateShop = async () => {
        console.log(gstnumber, address, 'checkihn')
        // let data = {}
        const api = (`${baseUrl}/users/updateUser/toShop/${ProfleId}`);
        await axios.put(api, {
            gst_no: gstnumber,
            shop_address: address
        }).then((response) => {
            console.log(response, "shop user");
            if (response.status) {

                setMessage('Upgraded!');
                seterrors(true);
            }
        }, error => {
            // console.log(error.response);
        },)
    }



    return (
        <>
            {/* <button onClick={()=> setcheck('nandita')}>onClick</button> */}

            <nav className="navbar navbar-expand-lg headerr">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <!-- <span className="navbar-toggler-icon"></span> --> */}
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="logo">
                        <Link to="/" className="navbar-brand" >
                            <img src={logo} alt="logo" /></Link>
                    </div>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="inline-menu">
                            <div className="setmnu">
                                <ul className="navbar-nav menu">
                                    <li className="nav-item aa">
                                        <Link to="/" className="nav-link active" aria-current="page">HOME</Link>
                                    </li>
                                    <li className="nav-item aa">
                                        <Link to="/shop" className="nav-link">SHOP</Link>
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
                                    <li className="nav-item aa">
                                        <Link to="/blogs" className="nav-link">BLOGS</Link>
                                    </li>
                                    <li className=" nav-item aa mob-login">
                                    </li>
                                </ul>
                            </div>
                            <div className="form-inline my-2 my-lg-0 desk-version">
                                <input className="form-control mr-sm-2 " type="text" id="search" placeholder="Search Car, Bikes and Mobiles" name="search" onChange={(e) => setSearch(e.target.value)} />
                                <Link to="/search-home-result" state={search}><button className="btn btn-outline-success my-2 my-sm-0" id="Search" onClick={SearchBar}>Search</button></Link>
                            </div>
                            <div className="row p-0 m-0 mob-cen">
                                <div className="col-12 mainbutton">
                                    <button className="btn btn-primary" onClick={sellLog}> + SELL</button>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>

            </nav>
            {/* mobile  nav*/}
            <nav>
                <div className="inline-menu1">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >


                        <div className="collapse navbar-collapse" id="navbarSupportedContent">


                            <div className="inline-menu1">
                                <div className="setmnu">
                                    <ul className="navbar-nav menu">
                                        <li className="nav-item aa">
                                            <Link to="/" className="nav-link active" aria-current="page">HOME</Link>
                                        </li>
                                        <li className="nav-item aa">
                                            <Link to="/shop" className="nav-link">SHOP</Link>
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
                                        <li className="nav-item aa">
                                            <Link to="/blogs" className="nav-link">BLOGS</Link>
                                        </li>
                                        <li className="nav-item aa mob-login">
                                            <Link to="/profile" className="nav-link" onClick={profilefunction}>PROFILE</Link>
                                        </li>
                                        {
                                            (Type == "user" || Type == "shop") &&

                                            <li onClick={OnOpen}>
                                                <li className="nav-item aa mob-login">
                                                    <Link to="/shop" className="nav-link">SHOP</Link>
                                                </li>
                                            </li>
                                        }
                                        <li className="nav-item aa mob-login">
                                            <Link to="/posteditems" className="nav-link" onClick={profilefunction}>MY ADS</Link>
                                        </li>
                                        <li className="nav-item aa mob-login">
                                            <Link to="/packages" className="nav-link" onClick={profilefunction}>PACKAGES</Link>
                                        </li>
                                        <li className="nav-item aa mob-login">
                                            <Link to='/login' className='nav-link'>{!LocalData ? 'LOGIN' : <div onClick={() => window.localStorage.removeItem('token')}>LOGOUT</div>}</Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* mobile  nav end*/}
            <div className="mob-version search-box col-12">
                <form className="form-inline my-2 my-lg-0" action="search-result.php" method="get">
                    <div className="mob-search">
                        <input className="form-control mr-sm-2 col-12" type="text" id="search" placeholder="Search Car, Bikes and Mobiles" name="search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
                        <Link to="/search-home-result" state={search}><BiSearchAlt className="SearchBtn" onClick={SearchBar} /></Link>
                    </div>
                </form>
                {/* <div className="row p-0 m-0 mob-version">
                    <div className="col-12 mobileversion">
                        <button className="btnSell" onClick={sellLog}> + SELL</button>
                    </div>
                </div> */}
            </div>

            {/* <!-- category --> */}
            <div className="desk-category">
                <div className="row m-0 p-0">
                    <div className="col  p-0">
                        <div className="catagry">

                            {/* <div className="row catagry-color p-0 m-0"> */}
                            <div className="category-section">
                                {/* <div className="disp catagry-color"><FontAwesomeIcon icon="fas fa-grip-lines"></FontAwesomeIcon>&nbsp;&nbsp;<Link to="/product">ALL</Link></div> */}
                                <div className=" disp">
                                    <div className="drop-down">
                                        Automobiles
                                        <ul className="dropdown-category dropdown-category-bikes">
                                            <Link to="/automobile/all/all-product" className="dropdown_sub-category" ><li className="bghover"> All</li></Link>
                                            <Link to="/automobile/bikes" className="dropdown_sub-category" ><li className="bghover"> Bikes</li></Link>
                                            <Link to="/automobile/car" className="dropdown_sub-category" ><li className="bghover"> Cars</li></Link>
                                            <Link to="/automobile/scooty" className="dropdown_sub-category" ><li className="bghover">Scooty</li></Link>
                                            <Link to="/automobile/heavy vehicle" className="dropdown_sub-category" ><li className="bghover">Heavy Vehicle</li></Link>
                                            <Link to="/automobile/spare parts" className="dropdown_sub-category" ><li className="bghover">Spare Parts</li></Link>
                                            <Link to="/automobile/other items" className="dropdown_sub-category" ><li className="bghover">Others</li></Link>
                                        </ul>
                                    </div>
                                </div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Laptop&nbsp;&&nbsp;Mobiles
                                        <ul className="dropdown-category ">
                                            <Link to="/mobiles/all/all-product" className="dropdown_sub-category" ><li className="bghover"> All</li></Link>
                                            <Link to="/mobiles/mobiles phones" className="dropdown_sub-category "><li className="bghover">Mobile Phones</li></Link>
                                            <Link to="/mobiles/tablets" className="dropdown_sub-category "><li className="bghover">Tablets</li></Link>
                                            <Link to="/mobiles/laptops" className="dropdown_sub-category "><li className="bghover">Laptops</li></Link>
                                            <Link to="/mobiles/computers" className="dropdown_sub-category "><li className="bghover">Computers</li></Link>
                                            <Link to="/mobiles/accessories" className="dropdown_sub-category "><li className="bghover">Accessories</li></Link>
                                        </ul>
                                    </div>
                                </div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Furniture

                                        <ul className="dropdown-category">
                                            <Link to="/furnitures/all/all-product" className="dropdown_sub-category" ><li className="bghover"> All</li></Link>
                                            <Link to="/furnitures/home decoration" className="dropdown_sub-category "><li className="bghover">Home Decoration</li></Link>
                                            <Link to="/furnitures/sofa & beds" className="dropdown_sub-category "><li className="bghover">Sofa & Beds</li></Link>
                                            <Link to="/furnitures/chairs & tables" className="dropdown_sub-category "><li className="bghover">Chairs & Tables</li></Link>
                                            <Link to="/furnitures/kids furniture" className="dropdown_sub-category "><li className="bghover">Kids Furniture</li></Link>
                                            <Link to="/furnitures/other items" className="dropdown_sub-category "><li className="bghover">Others</li></Link>
                                        </ul>
                                    </div>
                                </div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Fashions
                                        <ul className="dropdown-category">
                                            <Link to="/Fashions/all/all-product" className="dropdown_sub-category" ><li className="bghover"> All</li></Link>
                                            <Link to="/Fashions/men" className="dropdown_sub-category "><li className="bghover">Men</li></Link>
                                            <Link to="/Fashions/women" className="dropdown_sub-category "><li className="bghover">Women</li></Link>
                                            <Link to="/Fashions/kids" className="dropdown_sub-category "><li className="bghover">Kids</li></Link>
                                            <Link to="/Fashions/fashion & beauty" className="dropdown_sub-category "><li className="bghover">Fashion & Beauty Products</li></Link>
                                            <Link to="/Fashions/other items" className="dropdown_sub-category "><li className="bghover">Others</li></Link>
                                        </ul>
                                    </div>
                                </div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Services
                                        <ul className="dropdown-category">
                                            <Link to="/Services/all/all-product" className="dropdown_sub-category" ><li className="bghover"> All</li></Link>
                                            <Link to="/Services/education & classes" className="dropdown_sub-category "><li className="bghover">Educations & classes</li></Link>
                                            <Link to="/Services/electronics & computers" className="dropdown_sub-category "><li className="bghover">Electronics & Computers</li></Link>
                                            <Link to="/Services/accountancy services" className="dropdown_sub-category "><li className="bghover">Accountancy Services</li></Link>
                                            <Link to="/Services/software services" className="dropdown_sub-category "><li className="bghover">Software Services</li></Link>
                                            <Link to="/Services/other services" className="dropdown_sub-category "><li className="bghover">Other Services</li></Link>
                                        </ul>
                                    </div></div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Properties
                                        <ul className="dropdown-category">
                                            <Link to="/properties/all/all-product" className="dropdown_sub-category" ><li className="bghover"> All</li></Link>
                                            <Link to="/properties/for rent" className="dropdown_sub-category "><li className="bghover">For Rent</li></Link>
                                            <Link to="/properties/for sale" className="dropdown_sub-category "><li className="bghover">For Sale</li></Link>
                                            <Link to="/properties/land & plots" className="dropdown_sub-category "><li className="bghover">Land & Plots</li></Link>
                                        </ul>
                                    </div>
                                </div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Books&nbsp;&&nbsp;Sports
                                        <ul className="dropdown-category">
                                            <Link to="/booksAndSports/all/all-product" className="dropdown_sub-category" ><li className="bghover"> All</li></Link>
                                            <Link to="/booksAndSports/books" className="dropdown_sub-category "><li className="bghover">Books</li></Link>
                                            <Link to="/booksAndSports/gym" className="dropdown_sub-category "><li className="bghover">Gym</li></Link>
                                            <Link to="/booksAndSports/musical instruments" className="dropdown_sub-category "><li className="bghover">Musical Instruments</li></Link>
                                            <Link to="/booksAndSports/sports items" className="dropdown_sub-category "><li className="bghover">Sports Items</li></Link>
                                            <Link to="/booksAndSports/other items" className="dropdown_sub-category "><li className="bghover">Others</li></Link>
                                        </ul>
                                    </div></div>


                                <div className="col-2 disp">
                                    <div className="drop-down">
                                        Electronics&nbsp;&&nbsp;Appliances
                                        <ul className="dropdown-category catagry-color">
                                            <Link to="/electronics/all/all-product" className="dropdown_sub-category" ><li className="bghover"> All</li></Link>
                                            <Link to="/electronics/fridge"><li className="bghover">Fridge</li></Link>
                                            <Link to="/electronics/cooler"><li className="bghover">Cooler</li></Link>
                                            <Link to="/electronics/fan"><li className="bghover">Cooler</li></Link>
                                            <Link to="/electronics/ac"><li className="bghover">A/C</li></Link>
                                            <Link to="/electronics/television & led"><li className="bghover">Television & Led</li></Link>
                                            <Link to="/electronics/washing machine"><li className="bghover">Washing Machine</li></Link>
                                            <Link to="/electronics/hard disks printer"><li className="bghover">Hard Disks, Printer & Monitor</li></Link>
                                            <Link to="/electronics/games"><li className="bghover">Games</li></Link>
                                            <Link to="/electronics/speakers"><li className="bghover">Speakers</li></Link>
                                            <Link to="/electronics/cameras & lens"><li className="bghover">Cameras & Lens</li></Link>
                                            <Link to="/electronics/kitchen & others"><li className="bghover">Kitchen & Others</li></Link>
                                            <Link to="/electronics/computer accessories"><li className="bghover">Computers Accessories</li></Link>
                                            <Link to="/electronics/air purifiers"><li className="bghover">Air Purifiers</li></Link>
                                            <Link to="/electronics/water purifiers"><li className="bghover">Water Purifiers</li></Link>
                                            <Link to="/electronics/other items"><li className="bghover">Other Items</li></Link>
                                        </ul>
                                    </div>

                                    {/* <!-- end --> */}
                                </div>
                                <div className="profiles d-flex align-items-center justify-content-start">



                                    {
                                        (profileName) ?
                                            <>
                                                <button className="btn-secondary dropdown btn-dProfile" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <img src={`${LocalData?.profileImg}`} style={{ width: '14%', borderRadius: '45%', padding: '6px', marginLeft: '-20px' }} />
                                                    {(LocalData == null)
                                                        ? 'Login' : (LocalData === undefined) ? <FontAwesomeIcon icon="fas-solid fa-right-from-bracket">'Login '</FontAwesomeIcon> : LocalData.profileName
                                                    }

                                                </button>
                                            </>
                                            :

                                            <Link to="/login" className="secondary dropdown btn-dProfile">
                                                {(LocalData == null)
                                                    ? 'Login' : (LocalData === undefined) ? <FontAwesomeIcon icon="fas-solid fa-right-from-bracket">'Login '</FontAwesomeIcon> : LocalData.profileName
                                                }
                                            </Link>



                                    }



                                    <ul className="Menu dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                        <li><Link to="/profile" className="dropdown-item "> <FontAwesomeIcon icon="fas fa-user"></FontAwesomeIcon>&nbsp;&nbsp;Profile</Link></li>

                                        <li><Link to='/posteditems' className="dropdown-item"> <FontAwesomeIcon icon="fa-solid fa-list"></FontAwesomeIcon>&nbsp;&nbsp;My Ads</Link></li>
                                        {/* <li><Link to='/demo' className="dropdown-item"> <FontAwesomeIcon icon="fa-solid fa-list"></FontAwesomeIcon>&nbsp;&nbsp;demo</Link></li> */}
                                        <li><Link to='/saved-items' className="dropdown-item"> <FaHeart />&nbsp;&nbsp;Saved Items</Link></li>


                                        <li><Link to='/packages' className="dropdown-item"> <FontAwesomeIcon icon="fa-solid fa-list"></FontAwesomeIcon>&nbsp;&nbsp;Packages</Link></li>

                                        {
                                            (Type == "user") &&

                                            <li onClick={OnOpen}>
                                                <Link to="" className="dropdown-item">
                                                    <FcShop />
                                                    <span className=" ms-2 ">Shop</span>
                                                </Link>
                                            </li>
                                        }
                                        <Link to="" className="dropdown-item" id="Hov">
                                            <li >
                                                <FontAwesomeIcon icon="fas fa-sign-out-alt" />
                                                <GoogleLogout
                                                    clientId="1027005252783-c1bgr9lhfnosk72js31lokbia3356jk0.apps.googleusercontent.com"
                                                    buttonText="Logout"
                                                    onLogoutSuccess={() => {
                                                        window.localStorage.removeItem('token');
                                                        nav("/login")
                                                    }}
                                                    icon={false}
                                                    className='setGoogleLog'
                                                />

                                            </li>
                                        </Link>

                                    </ul>

                                </div>


                                <ShopModal Onclose={Onclose} OnOpen={OnOpen} isOpen={isOpen} setisOpen={setisOpen} Type={Type} UpdateShop={UpdateShop} gstnumber={gstnumber} setGstNumber={setGstNumber} address={address} setAddress={setAddress} />

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