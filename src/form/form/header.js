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
import { baseUrl } from "../../functions/constant";
import axios from "axios";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Label,
    useColorMode,
} from "@chakra-ui/react";
import Cookies from 'universal-cookie';


const Header = () => {
    const [LocalData, setLocalData] = useState("")
    const cookies = new Cookies();
    const IdData = window.localStorage.getItem('token')
    let ProfleId = JSON.parse(IdData).token;
    // const IdData = localStorage.getItem('token');
    console.log(cookies, 'new')
    const Type = JSON.parse(IdData).type;
    console.log(JSON.parse(IdData).type, 'localData');
    const [message, setMessage] = useState('');
    const [gstnumber, setGstNumber] = useState('');
    console.log(gstnumber);
    const [address, setAddress] = useState('');
    const [show, setShow] = useState('');
    const [errors, seterrors] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { toggleColorMode, colorMode } = useColorMode();
    const profileName = localStorage('token');
    console.log(localStorage('token'))
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

    const [Upstate, setUpstate] = useState(0)
    let id;
    const Update = async () => {
        console.log(Upstate, 'count')
        id = JSON.parse(profileName).token
        await UpdateApi(id).then((res) => {
            console.log(res);
            // setShow()
            console.log(res.status.data[0].profileImg);
            if (res.status) {
                window.localStorage.setItem(
                    'token',
                    JSON.stringify({
                        'token': res.status.data[0]._id,
                        'profileName': res.status.data[0].name,
                        'profileImg': res.status.profileImg,
                        'email': res.status.data[0].email,
                        'profileImg': res.status.data[0].profileImg,
                        'name': res.status.data[0].name,
                        'type': res.status.data[0].type,
                        'phone': res.status.data[0].phone
                    })
                )
                // console.log(LocalData)
            } else {

                // console.log(res)
            }
        })
    }
    // console.log(profileImg);   
    useEffect(() => {
        setLocalData(JSON.parse(profileName));
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
                onClose(true)
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
                        <a className="navbar-brand" href="">
                            <img src={logo} alt="logo" /></a>
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
                            <form className="form-inline my-2 my-lg-0 desk-version" action="search-result.php" method="get">
                                <input className="form-control mr-sm-2 " type="text" id="search" placeholder="Search Car, Bikes and Mobiles" name="search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" id="Search" type="submit" name="submit" value="true">Search</button>
                            </form>
                            <div className="row p-0 m-0 mob-cen">
                                <div className="col-12 mainbutton">
                                    <button className="btn btn-primary" onClick={sellLog}> + SELL</button>
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
                                            <li className="bghover"><Link to="/bike" className="dropdown_sub-category ">Bikes</Link></li>
                                            <li className="bghover"><Link to="/car" className="dropdown_sub-category ">Cars</Link></li>
                                            <li className="bghover"><Link to="/scooty" className="dropdown_sub-category" >Scooty</Link></li>
                                            <li className="bghover"><Link to="/heavyVehicle" className="dropdown_sub-category">Heavy Vehicle</Link></li>
                                            <li className="bghover"><Link to="/spareParts" className="dropdown_sub-category">Spare Parts</Link></li>
                                            <li className="bghover"><Link to="/others" className="dropdown_sub-category">Others</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Laptop&nbsp;&&nbsp;Mobiles
                                        <ul className="dropdown-category ">
                                            <li className="bghover">Mobile Phones</li>
                                            <li className="bghover">Tablets</li>
                                            <li className="bghover">Laptops</li>
                                            <li className="bghover">Computers</li>
                                            <li className="bghover">Accessories</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Furniture
                                        <ul className="dropdown-category">
                                            <li className="bghover">Home Decoration</li>
                                            <li className="bghover">Sofa & Beds</li>
                                            <li className="bghover">Chairs & Tables</li>
                                            <li className="bghover">Kids Furniture</li>
                                            <li className="bghover">Others</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Fashion&nbsp;&&nbsp;Clothes
                                        <ul className="dropdown-category">
                                            <li className="bghover">Men</li>
                                            <li className="bghover">Women</li>
                                            <li className="bghover">Kids</li>
                                            <li className="bghover">Fashion & Beauty Products</li>
                                            <li className="bghover">Others</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Services
                                        <ul className="dropdown-category">
                                            <li className="bghover">Educations & classes</li>
                                            <li className="bghover">Electronics & Computers</li>
                                            <li className="bghover">Accountancy Services</li>
                                            <li className="bghover">Software Services</li>
                                            <li className="bghover">Other Services</li>
                                        </ul>
                                    </div></div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Properties
                                        <ul className="dropdown-category">
                                            <li className="bghover">For Rent</li>
                                            <li className="bghover">For Sale</li>
                                            <li className="bghover">Land & Plots</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="disp">
                                    <div className="drop-down">
                                        Books&nbsp;&&nbsp;Sports
                                        <ul className="dropdown-category">
                                            <li className="bghover">Books</li>
                                            <li className="bghover">Gym</li>
                                            <li className="bghover">Musical Instruments</li>
                                            <li className="bghover">Sports Items</li>
                                            <li className="bghover">Others</li>
                                        </ul>
                                    </div></div>


                                <div className="col-2 disp">
                                    <div className="drop-down">
                                        Electronics&nbsp;&&nbsp;Appliances
                                        <ul className="dropdown-category catagry-color">
                                            <li className="bghover"><Link to="/fridge">Fridge</Link></li>
                                            <li className="bghover"><Link to="/cooler">Cooler</Link></li>
                                            <li className="bghover"><Link to="/ac">A/C</Link></li>
                                            <li className="bghover"><Link to="/tv">Television & Led</Link></li>
                                            <li className="bghover"><Link to="/washingmachine">Washing Machine</Link></li>
                                            <li className="bghover"><Link to="/printer">Hard Disks, Printer & Monitor</Link></li>
                                            <li className="bghover"><Link to="/games">Games</Link></li>
                                            <li className="bghover"><Link to="/speakers">Speakers</Link></li>
                                            <li className="bghover"><Link to="/camera">Cameras & Lens</Link></li>
                                            <li className="bghover"><Link to="/kitchen">Kitchen & Others</Link></li>
                                            <li className="bghover"><Link to="/computer">Computers Accessories</Link></li>
                                            <li className="bghover"><Link to="/air">Air Purifiers</Link></li>
                                            <li className="bghover"><Link to="/water">Water Purifiers</Link></li>
                                            <li className="bghover"><Link to="/other">Other Items</Link></li>
                                        </ul>
                                    </div>

                                    {/* <!-- end --> */}
                                </div>

                                <img src={LocalData?.profileImg} style={{ width: '3%', borderRadius: '45%', padding: '6px', marginLeft: '-20px' }} />

                                {
                                    (profileName) ?
                                        <button class="btn-secondary dropdown btn-dProfile" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            {(LocalData == null)
                                                ? 'Login' : (LocalData === undefined) ? <FontAwesomeIcon icon="fas-solid fa-right-from-bracket">'Login '</FontAwesomeIcon> : LocalData.profileName
                                            }

                                        </button>
                                        :

                                        <Link to="/login" class="secondary dropdown btn-dProfile">
                                            {(LocalData == null)
                                                ? 'Login' : (LocalData === undefined) ? <FontAwesomeIcon icon="fas-solid fa-right-from-bracket">'Login '</FontAwesomeIcon> : LocalData.profileName
                                            }
                                        </Link>



                                }



                                <ul className="Menu dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                    <li><Link to="/profile" class="dropdown-item "> <FontAwesomeIcon icon="fas fa-user"></FontAwesomeIcon>&nbsp;&nbsp;Profile</Link></li>

                                    <li><Link to='/posteditems' class="dropdown-item"> <FontAwesomeIcon icon="fa-solid fa-list"></FontAwesomeIcon>&nbsp;&nbsp;My Ads</Link></li>

                                    {
                                        (Type == 'user' || Type == 'shop') &&
                                        <>

                                            <FontAwesomeIcon icon="fa-solid fa-list" className="dropdown-item" />
                                            <Button onClick={onOpen} className="dropdown-item">Shop</Button>

                                            <Modal isOpen={isOpen} onClose={onClose}>
                                                <ModalOverlay />
                                                <ModalContent style={{ background: "blue", width: '15%', borderRadius: "10%" }}>

                                                    <ModalBody >
                                                        <FormControl>
                                                            <FormLabel>GST Number</FormLabel>
                                                            <Input placeholder='enter number' onChange={(e) => setGstNumber(e.target.value)} value={gstnumber} name='gst_no' />
                                                        </FormControl>

                                                        <FormControl>
                                                            <FormLabel>Address Number</FormLabel>
                                                            <Input placeholder='enter address' name='shop_address' value={address} onChange={(e) => setAddress(e.target.value)} />
                                                        </FormControl>
                                                    </ModalBody>

                                                    <ModalFooter>
                                                        <Button colorScheme='blue' mr={3} onClick={UpdateShop}>
                                                            Upgrade
                                                        </Button>
                                                        <Button colorScheme='white' mr={3} onClick={onClose}>
                                                            Close
                                                        </Button>

                                                    </ModalFooter>
                                                </ModalContent>
                                            </Modal>

                                        </>
                                    }

                                    <li><Link to='/packages' class="dropdown-item"> <FontAwesomeIcon icon="fa-solid fa-list"></FontAwesomeIcon>&nbsp;&nbsp;Packages</Link></li>

                                    <li className="dropdown-item">
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