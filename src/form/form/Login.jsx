import React, { useEffect, useRef, useState, useContext } from "react";
import "./css/custom.css";
import "./css/iofrm-style.css";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    // navigate
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { gapi } from 'gapi-script';
import { generateOtp } from "../../functions/generateOtp";
import { VerifyOtp } from "../../functions/VerifyOtp";
import { facebookAuth, googleAuth } from '../../functions/LoginAuth';
import { GlobalVariables } from "../../Context/StateProvider";
import FacebookLogin from 'react-facebook-login';
import styled from "styled-components";
import { VscRefresh } from 'react-icons/vsc'
import logo1 from '../../assets/images/logo1.png'
import Vector_login from '../../assets/images/Vector_login.png'
import { BsArrowRight } from "react-icons/bs";
import UserDeleteModal from "./Modals/DeleteModal";
function Login() {

    const nav = useNavigate();
    const { type, setType } = useContext(GlobalVariables)
    // console.log(type);
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const [otp, setOtp] = useState('');
    const [profileName, setProfileName] = useState()
    const [profileImg, setProfileImg] = useState()
    const [LocalData, setLocalData] = useState("")
    const [email, setEmail] = useState("");
    const [picture, setPicture] = useState("");
    const [loginStatus, setLoginStatus] = useState(false);
    const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
    const [counter, setCounter] = useState(0);
    const [TImer, setTimer] = useState(false);
    const [Resend, setResend] = useState(false);



    const handlePhone = async () => {
        let mobRegex = new RegExp('^[6-9]{1}[0-9]{9}$');
        // console.log("function started");
        if (phone.trim().length > 0 && phone.trim().match(mobRegex)) {
            let status = await generateOtp(phone, "login").then((res) => {
                setShow(res.status)
                setCounter(59)
                setTimer(true)
                console.log(res.status, "response");
            });
        } else {

            setError('Invalid Phone Number');
            // phoneRef.current.setNativeProps({borderColor: 'red'});
        }
        // }

    }

    const handleResendOtp = async () => {
        const EnterResponse = await generateOtp(phone);
        console.log("enterResponse", EnterResponse.status)
        if (EnterResponse.status === true) {
            setCounter(59)
            setResend(false)
            console.log("resend otp send successfully after login")
        }

    }


    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        console.log(counter, 'TImer')
        if (counter == 1) {
            setResend(true)
            console.log(Resend, 'TImer')
        }
        return () => clearInterval(timer)
    }, [counter, handleResendOtp])



    const verify = async () => {

        let response = await VerifyOtp(otp, phone).then((res) => {

            console.log(res, "login")
            setType(res.status.data[0].type)
            if (res.status) {
                setProfileName(res.status.data[0].name)

                nav("/");
                window.localStorage.setItem('token',
                    JSON.stringify({
                        'token': res.status.data[0]._id,
                        'profileName': res.status.data[0].name,
                        'type': res.status.data[0].type,
                        'phone': res.status.data[0].phone,
                        'profileImg': res.status.data[0].profileImg,
                        'status': "logIn"
                    })
                )
                window.localStorage.setItem('loginThrough', JSON.stringify({ 'loginCome': 'phone' }))
            }
            else {
                setError(res.message);
                // console.log(Error);
            }
            console.log(type, 'type');
        });
    }

    const google = async (respon) => {
        await googleAuth(JSON.stringify(respon)).then((res) => {
            console.log(respon, 'this is res');
            console.log(res, 'this is res');
            if (res.data.status) {
                // RemoveCookie('usrin');
                setEmail(res.data.data.email);
                setName(res.data.data[0].name);
                setProfileImg(res.data.data[0].profileImg);
                setError();
                nav('/')
                setLoginStatus(true);
                window.localStorage.setItem('token',
                    JSON.stringify({
                        'token': res.data.data[0]._id,
                        'email': res.data.data[0].email,
                        'profileImg': res.data.data[0].profileImg,
                        // 'profileImg': profileObj.imageUrl,
                        'profileName': res.data.data[0].name,
                        'status': "logIn",

                        // 'type' : res.data.data.type  
                    })
                )
                window.localStorage.setItem('loginThrough', JSON.stringify({ 'loginCome': 'google' }))
            }
            else {
                setError(res.message)
                console.log(error.res.data);
            }


        })
    }

    const facebook = async (respon) => {

        console.log(respon, respon.name, respon.email, respon.picture.data.url, 'response for facebook function is here ')
        console.log("response data.response", respon.name)
        console.log("response data.response", respon.email)
        console.log("response data.response", respon.picture.data.url)

        await facebookAuth(JSON.stringify(respon)).then((res) => {
            console.log(respon, 'facebook response');
            console.log(res, 'response data for login page');
            console.log(res.data.status)
            console.log(res.data.data[0].email)
            console.log(res.data.data[0].name)
            console.log(res.data.data[0].profileImg)
            if (res.data.status) {

                setEmail(res.data.data[0].email);
                setName(res.data.data[0].name);
                setProfileImg(res.data.data[0].profileImg);
                nav('/')
                setLoginStatus(true);
                window.localStorage.setItem('token',
                    JSON.stringify({
                        'email': res.data.data[0].email,
                        'profileImg': res.data.data[0].name,
                        'profileName': res.data.data[0].profileImg,
                        "token": res.data.data[0]._id,
                        "type": res.data.data[0].type,
                        "status": "login"
                    })
                )
                window.localStorage.setItem('loginThrough', JSON.stringify({ 'loginCome': 'facebook' }))
            }
            else {
                setError(res.message);
                console.log(error.res.data);
            }
        })
    }
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: '1027005252783-c1bgr9lhfnosk72js31lokbia3356jk0.apps.googleusercontent.com',
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });


    const responseFacebook = (response) => {
        console.log(response);
        facebook(response);
    }
    const componentClicked = (data) => {
        console.log(data);
        console.log(window)
    }
 

    // window.FB.getLoginStatus(function (response) {
    //     // statusChangeCallback(response);
    //     console.log(response)
    // });
    // function checkLoginState() {
    //     window.FB.getLoginStatus(function (response) {
    //         // statusChangeCallback(response);
    //         console.log(response)
    //     });
    // }

    return (
        <>
      
            <div className="form-body">

                <div className="row m-0 p-0 ">
                    <div className="col-md-7 d-flex justify-content-center align-items-center">

                        <img src={Vector_login} className='VectorLogo' />
                    </div>
                    <div className="col-md-5">
                        <div className="form-holder">
                            <div className="form-content">
                                <div className="form-items">
                                    <div className="website-logo-inside">
                                        <Link to="/">
                                            <div className="logo">
                                                <img className="logo-size" src={logo1} />
                                                {/* <h1 className="fw-bold text-white">Welcome to<br/> FixeBuy</h1> */}
                                            </div>
                                        </Link>
                                    </div>
                                    <h3 className="text-center">Login/Sign Up</h3>
                                    <div className="page-links">
                                        {/* <Link to="/login" className="active">Login</Link> */}
                                        {/* <Link to='/signup'>Register</Link> */}

                                    </div>
                                    {/* <form method="post"> */}
                                    <input className="form-control text-dark shadow-none" type="text" name="phone_number" placeholder="Phone Number"
                                        onChange={(e) => {
                                            console.log(e.target.value)
                                            setPhone(e.target.value);
                                            setError("")
                                        }}
                                        required />

                                    {
                                        show && <input className="form-control text-dark shadow-none" type="text" name="password" placeholder="Enter Code" required
                                            onChange={(e) => {
                                                setOtp(e.target.value);
                                                console.log(e.target.value);
                                                setError("")
                                            }}
                                        />
                                    }
                                    <div className="text" style={{ color: "red" }}>{error}</div>

                                    <input type="hidden" name="role" value="0" />
                                    <div className="form-button">
                                        {
                                            (!show) ?
                                                <button id="submit" type="button" value="true" name="login" className="ibtn  login-bt" onClick={handlePhone} >Get OTP</button>
                                                :
                                                <button id="submit" type="button" value="true" name="login" className="ibtn w-100 p-2 login-bt" onClick={verify} >Login</button>
                                        }



                                    </div>
                                    <CountdownBtn>

                                        <div className="countdown-text">
                                            {
                                                TImer &&
                                                <p>Didn't recieve code?</p>
                                            }


                                        </div>
                                        <div className="set_m-resend flex justify-content-center">

                                            <div>
                                                {
                                                    TImer &&
                                                    <span className="counter" style={{ color: 'white' }}>00:{counter}</span>
                                                }
                                            </div>
                                            <div>
                                                {
                                                    (Resend !== false) ?
                                                        <button className="btn  resendButton"
                                                            onClick={() => handleResendOtp()}
                                                        >
                                                            <VscRefresh /> Resend
                                                        </button>
                                                        :
                                                        ""
                                                }
                                            </div>
                                        </div>
                                    </CountdownBtn>

                                    {/* </form> */}
                                    <div className="other-links">

                                        <GoogleLogin
                                            clientId="1027005252783-c1bgr9lhfnosk72js31lokbia3356jk0.apps.googleusercontent.com"
                                            onSuccess={(response) => google(response)}
                                            onFailure={(response) => {
                                                console.log("on failure");
                                                console.log(response)
                                            }}

                                            cookiePolicy={"single_host_origin"}
                                            isSignedIn={true}
                                            className="GoogleBtn"
                                        />
                                        <FacebookLogin
                                            appId="2217693241739570"
                                            autoLoad={false}
                                            fields="name,email,picture"
                                            onClick={componentClicked}
                                            callback={responseFacebook}
                                            icon="fa-facebook fbLogo"
                                        />
                                        <Link to="/"><div className="goToweb">
                                            <p>Go To Our Website <BsArrowRight /></p>
                                        </div></Link>
                                        {/* <FacebookLogin
                                    appId='817702366092567'
                                    autoLoad={true}
                                    fields="name,email,picture"
                                     onClick={componentClicked}
                                     callback={responseFacebook}
                                    /> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Login;
const CountdownBtn = styled.div`
.set_m-resend{

    margin-top: -1rem !important;
}
.countdown-text{
}
    p{
        margin-top: -1rem;
        font-size: .7rem;
        font-weight: 300;
    }
    button.btn.resendButton {
    border-radius: 6px;
    padding: 6px 11px;
    font-size: .9rem;
    font-weight: 700;
    margin-left: 10px;
    border: 0;
    /* border: 1px solid white; */
    color: #fff;
}
`
