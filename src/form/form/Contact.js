import React, { useEffect, useRef, useState } from "react";
import Footer from './Footer'
import Header from './header'
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { baseUrl } from "../../functions/constant";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";
import BottomTop from "../../functions/BottomTop";


const Contact = () => {
    const [messages, setMessages] = useState('');
    const [error, setError] = useState('');
    const [errors, seterrors] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');
    const [Loader, setLoader] = useState(false);
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const EmailRef = useRef();
    const MobileRef = useRef();
    const MessageRef = useRef();


    const Validations = [
        firstName,
        lastName,
        email,
        mobile,
        message

    ]
    const contactApi = async () => {
        // console.log(mobile , 'errorrs')
        // Validations.map((val) => {
        //     console.log(val , 'errorr')
        //     return val
        // }) !== "" ?  seterrors(true) : seterrors(false) ;console.log(errors , 'errorr')
        const api = `${baseUrl}/contact/form/create`;
        await axios.post(api, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobile: mobile,
            message: message
        }).then((response) => {
            console.log(response.data, 'erere');
            if (response.data) {
                setLoader(false)
                // setMessages('Your message has been sent !');
                toast('Message Sent.', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    type: 'success'
                });
                seterrors(false)
                setFirstName('')
                setLastName('')
                setEmail('')
                setMobile('')
                setMessage('')
            } else {
                setLoader(true)
            }
        }, error => {
            seterrors(true)
            console.log(error.response.data, 'check');
        },)
    }
    // setLoader(false)
    useEffect(() => {
        BottomTop()
    }, [0])

    return (
        <>
            <ToastContainer />
            <div className="row m-0 p-0 overflow-hidden">
            <Header />


                <div className="for-center-contact flex-row justify-content-center align-items-center">

                    <div className="col-md-6">
                        <div className="container-heading-contact">
                            {/* <span>LET'S CONVERSATION!</span> */}
                            <span>CONTACT US!</span>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className=" pt-4">
                            {/* <RefreshBtn>
                                <abbr title="Refresh Data"><BiRefresh className='ref' onClick={() => { RefTog() }} /></abbr>
                            </RefreshBtn> */}
                        </div>
                    </div>
                </div>
          
            {/* <form action="<?php echo $server_name; ?>/api-call/contact-us-api-call.php" method="post"> */}
            <div className="form-set position-relative top-0">
                <div className="row p-0 m-0 form-group">
                    <div className="col-md-6 col-12">
                        <input type="text" name="first_name" placeholder="First Name" className="form-control imput-paddin" required
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)
                                firstNameRef.current.style.borderColor = "#ced4da";
                                setError("")
                            }}
                            ref={firstNameRef}
                        />
                    </div>
                    <div className="col-md-6 col-12 form-group">
                        <input type="text" name="last_name" placeholder="Last Name" className="form-control imput-paddin" required
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                                lastNameRef.current.style.borderColor = "#ced4da";
                                setError("")
                            }}
                            ref={lastNameRef}
                        />
                    </div>
                </div>
                <div className="row p-0 m-0 form-group">
                    <div className="col-md-12 col-12">
                        <input type="email" name="email" placeholder="Your Email" className="form-control imput-paddin" required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                EmailRef.current.style.borderColor = "#ced4da";
                                setError("")
                            }}
                            ref={EmailRef}
                        />
                    </div>
                </div>
                <div className="row p-0 m-0 form-group">
                    <div className="col-md-12 col-12">
                        <input type="text" name="mobile_no" placeholder="Mobile Number" className="form-control imput-paddin" required
                            value={mobile}
                            onChange={(e) => {
                                setMobile(e.target.value)
                                MobileRef.current.style.borderColor = "#ced4da";
                                setError("")
                            }}
                            ref={MobileRef}
                        />
                    </div>
                </div>
                <div className="row p-0 m-0 form-group">
                    <div className="col-md-12 col-12">
                        <textarea name="message" id="" className="textareaa form-control" required placeholder="Enter Your Message"
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value)
                                MessageRef.current.style.borderColor = "#ced4da";
                                setError("")
                            }}
                            ref={MessageRef}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="d-flex">
                    <input type="submit" name="submit" value="submit" className="btn contact-btnn text-uppercase" onClick={contactApi} />

                </div>
                {errors &&
                    <div class=" ms-4 mt-4 alert alert-danger" role="alert">
                        Invalid Fields
                    </div>
                }
            </div>
            </div>
            {/* </form> */}


            {/* <!-- map --> */}
            <section className="mapp">
                <div className="map-container">
                    <div className="row p-0 m-0">
                        <div className="col-md-4 col-12 mapss">


                            <div className="get-in-touch">
                                <h3 className="get-in"> GET IN TOUCH</h3>
                                <p><FontAwesomeIcon icon="fa-address-card" />&nbsp;&nbsp;&nbsp;&nbsp; Ghookna, Ghaziabad,<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uttar Pradesh, 201003</p>
                                <p><FontAwesomeIcon icon="fas fa-phone-volume" />&nbsp;&nbsp;&nbsp;&nbsp; 8527720760
                                </p>
                                <p><FontAwesomeIcon icon="fas fa-envelope-open-text " />&nbsp;&nbsp;&nbsp;&nbsp; info@fixebuy.in</p>
                            </div>

                        </div>
                        <div className="col-md-8 col-12 maapss">
                            <div className="mapembed">
                                <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=fixebuy&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com">
                                </a><br />
                            </div></div>
                    </div>
                </div>
            </section>
            {/* <Footer /> */}
        </>
    )
}

export default Contact;
const ErrorMsg = styled.div`

`