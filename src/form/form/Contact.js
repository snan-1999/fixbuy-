import React , {useRef, useState} from "react";
import Footer from './Footer'
import Header from './header'
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { baseUrl } from "../../functions/constant";
import axios from "axios";




 const Contact = () => {
    const [messages, setMessages] = useState('');
    const [error, setError] = useState('');
    const [errors, seterrors] = useState(false);
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [email , setEmail] = useState('');
    const [mobile , setMobile] = useState('');
    const [message , setMessage] = useState('');
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const EmailRef = useRef();
    const MobileRef = useRef();
    const MessageRef = useRef();


    const contactApi = async() => {
             
            const api = `${baseUrl}/contact/form/create`;
        await axios.post(api , {
            firstName: firstName,
            lastName : lastName,
            email : email ,
            mobile : mobile , 
            message : message
        }).then((response) => {
            console.log(response.data);
            if(response.data){
                setMessages('Your message has been sent !');
                seterrors(true);
                setFirstName('')
                setLastName('')
                setEmail('')
                setMobile('')
                setMessage('')
            }
        }, error => {
            console.log(error.response.data);
        },)
    }
 
    
    return (
        <>
            <Header />
            <div class="container">
                <div class="for-center-contact">
                    <div class="container-heading-contact">
                        <span> LET'S CONVERSATION!</span>
                    </div>
                </div>
            </div>
            {/* <form action="<?php echo $server_name; ?>/api-call/contact-us-api-call.php" method="post"> */}
                <div class="form-set">
                    <div class="row p-0 m-0 form-group">
                        <div class="col-md-6 col-12">
                            <input type="text" name="first_name" placeholder="First Name" class="form-control imput-paddin" required
                            value={firstName} 
                            onChange={(e) => {
                            setFirstName(e.target.value)
                            firstNameRef.current.style.borderColor = "#ced4da";
                            setError("")
                        }}
                        ref={firstNameRef}
                        />
                        </div>
                        <div class="col-md-6 col-12 form-group">
                            <input type="text" name="last_name" placeholder="Last Name" class="form-control imput-paddin" required 
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
                    <div class="row p-0 m-0 form-group">
                        <div class="col-md-12 col-12">
                            <input type="email" name="email" placeholder="Your Email" class="form-control imput-paddin" required 
                            value={email} 
                            onChange={(e) => {
                            setEmail(e.target.value)
                            EmailRef.current.style.borderColor = "#ced4da";
                            setError("")
                        }}
                        ref={EmailRef}
                            />
                        </div>
                    </div><br />
                    <div class="row p-0 m-0 form-group">
                        <div class="col-md-12 col-12">
                            <input type="text" name="mobile_no" placeholder="Mobile Number" class="form-control imput-padding" required 
                            value={mobile} 
                            onChange={(e) => {
                            setMobile(e.target.value)
                            MobileRef.current.style.borderColor = "#ced4da";
                            setError("")
                        }}
                        ref={MobileRef}
                            />
                        </div>
                    </div><br />
                    <div class="row p-0 m-0 form-group">
                        <div class="col-md-12 col-12">
                            <textarea name="message" id="" class="textareaa form-control" required 
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
                    <input type="submit" name="submit" value="submit" class="btn contact-btnn text-uppercase" onClick={contactApi} />
                
                {errors &&
                        <div class="contactMessage" role="alert" style={{color : 'green'}}>
                            {messages}
                        </div>
                    }
                    </div>
                    </div>

            {/* </form> */}


            {/* <!-- map --> */}
            <section class="mapp">
                <div class="map-container">
                    <div class="row p-0 m-0">
                        <div class="col-md-4 col-12 mapss">


                            <div class="get-in-touch">
                                <h3 class="get-in"> GET IN TOUCH</h3>
                                <p><FontAwesomeIcon icon="fa-address-card" />&nbsp;&nbsp;&nbsp;&nbsp; Ghookna, Ghaziabad,<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uttar Pradesh, 201003</p>
                                <p><FontAwesomeIcon icon="fas fa-phone-volume" />&nbsp;&nbsp;&nbsp;&nbsp; 8527720760
                                </p>
                                <p><FontAwesomeIcon icon="fas fa-envelope-open-text " />&nbsp;&nbsp;&nbsp;&nbsp; info@fixebuy.in</p>
                            </div>

                        </div>
                        <div class="col-md-8 col-12 maapss">
                            <div class="mapembed">
                            <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=fixebuy&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.whatismyip-address.com">
                                </a><br />
                                </div></div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
 }

   export default Contact;