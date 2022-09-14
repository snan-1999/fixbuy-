import React from "react";
// import "./css/boostrap.min.css";
import "./css/custom.css";
// import "./css/fontawesome-all.min.css";
import "./css/iofrm-style.css";
// import "./css/iofrm-theme12.css";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
// import Facebook from "../../Facebook";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    navigate
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';

function Login() {

    const navigate = useNavigate();

    // const OnLogInClickHandler  = ()=>{
    //     navigate('/home/dashboard');
    //  }

    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj, "response ");
    }

    const responseFacebook = (response) => {
        console.log(response);
      }

    return (
        <div className="form-body">
            {/* <Facebook /> */}
            <div className="row">
                <div className="form-holder">
                    <div className="form-content">
                        <div className="form-items">
                            <div className="website-logo-inside">
                                <a href="../seller/">
                                    <div className="logo">
                                        <img className="logo-size" src="images/logo-light.svg" alt="" />
                                        <h1 className="fw-bold text-white">Welcome to FixeBuy</h1>
                                    </div>
                                </a>
                            </div>
                            <h3 className="text-center">Login </h3>
                            {/* <p>Access to the most powerfull tool in the entire design and web industry.</p> */}
                            <div className="page-links">
                                {/* <Link to="/login" className="active">Login</Link> */}
                                {/* <Link to='/signup'>Register</Link> */}

                            </div>
                            <form method="post">
                                <input className="form-control text-dark shadow-none" type="text" name="user_email" placeholder="E-mail Address / Phone Number" required />
                                <input className="form-control text-dark shadow-none" type="password" name="password" placeholder="Enter Code" required />
                                <input type="hidden" name="role" value="0" />
                                <div className="form-button">
                                    <button id="submit" type="submit" value="true" name="login" className="ibtn w-100 p-2 login-bt" onClick={() => navigate("/Home")}>Login</button>
                                </div>
                            </form>
                            <div className="other-links">
                                {/* <img src={google}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                                <GoogleLogin
                                    clientId="324948735477-4b5krtnmgmebukda5taosq0tik52hptb.apps.googleusercontent.com"
                                    // buttonText=""
                                    onSuccess={(response)=>{
                                        console.log("on success");
                                        console.log(response)
                                    }}
                                    onFailure={(response)=>{
                                        console.log("on failure");
                                        console.log(response)
                                    }}
                                    cookiePolicy={"single_host_origin"}
                                />
                                {/* <FacebookLogin
                                    appId='1065038731035070'
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    // onClick={componentClicked}
                                    callback={responseFacebook} /> */}
                            </div>

                            <div className="forgot">
                                <p>forgot password?</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;

