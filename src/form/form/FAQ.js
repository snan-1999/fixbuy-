import { useMediaQuery } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {BottomTop, CheckParam } from "../../functions/BottomTop";
import Footer from "./Footer";
import Header from "./header";



const FAQ = () => {
    const [isMobile] = useMediaQuery("(max-width : 600px)");
    useEffect(() => {
        CheckParam()
        BottomTop()
    }, [0])
    return (
        <>

            <div className="row m-0 p-0 overflow-hidden">
                <Header />
                <div className="for-center-faq  flex-row justify-content-center align-items-center">

                    <div className="col-md-6">
                        <div className="container-heading-faq">
                            <span>ASKED QUESTIONS?</span>
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

                <div className="container faq-container">


                    <div className="row p-0 m-0">
                        <div className="col-md-8 col-12">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How do I share location in chat?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show active" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                    Start a chat, either private or public. Use the Share live location option under Attach Location. Choose the time frame for which you want to disclose your current location. Following the set period of time, sharing of your live location will end.

                                        </div>
                                    </div>

                                </div>
                                <br />
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Why am I not seeing my chats?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            If you're experiencing trouble turning on chat capabilities and your device and carrier network support it, try the following steps:
                                            <ul style={{ all: 'unset' }} list-style-type='square'>
                                                <li>
                                                    Check the status of your chat features: Activate the Messages app. Touch More More, followed by Settings and Chat functions. Check the status of the chat features. Tap Retry if you're not connected.
                                                </li>
                                                <li>Important: Chat features must be enabled for everyone participating in a conversation (1-on-1 or group).
                                                </li>
                                                <li>Verify your data connection. Ensure that your Android device can send and receive SMS and is online.</li>
                                                <li>Verify the messaging app's version: Verify that both you and the person you're conversing with are using the most recent Messages app release.
                                                </li>
                                                <li>
                                                    Examine your default messaging programme: Ensure that the default SMS app on your smartphone is Messages.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Items/Services not allowed on Fixebuy Platform?

                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse  " aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Devices that have just been released, those that have just been purchased without a bill, Jio Phones, etc. burglary tools Freely giving of one's time or goods for charitable purposes. hazardous chemicals,  materials & compounds, pharmaceuticals (prescription or not), restricted, perishable commodities, etc.

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingfour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                            How do I edit my profile?

                                        </button>
                                    </h2>
                                    <div id="collapsefour" className="accordion-collapse collapse  " aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul style={{ all: 'unset' }}>
                                                <li>On your Android tablet or phone, open the Settings app.
                                                </li>
                                                <li>Choose Google, Personal information, then Manage your Google Account.
                                                </li>
                                                <li>Under "Basic information," tap Photo. You could be asked to sign in by someone.
                                                </li>
                                                <li>Then choose Set Profile Picture.After taking or choosing a new picture for your profile, drag the one you currently have to the centre of the square.
                                                </li>
                                                <li>Hit "accept."
                                                </li>
                                                <li>Tip: In most areas where your photo appears, you may tap and modify your profile picture.
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            How to create Account?

                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse  " aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul style={{ all: 'unset' }}>
                                                <li>Visit the Google Account login page.
                                                </li>
                                                <li>Select Create Account.</li>
                                                <li>your name here.</li>
                                                <li>Fill up the "Username" section with your username.
                                                </li>
                                                <li>Your password must be entered twice.
                                                </li>
                                                <li>Observe that the initial letter is not case-sensitive when entering a password on a mobile device.
                                                </li>
                                                <li>Select Next.Add and validate a phone number for your account, if you choose.
                                                </li>
                                                <li>Select Next.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            How do I change my phone number?


                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse  " aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul style={{ all: 'unset' }}>
                                                <li>Open the Settings app on your Android smartphone or tablet, go to Google, and then select Manage your Google Account.

                                                </li>
                                                <li>Tap Personal details in the header.
                                                </li>
                                                <li>Tap Phone number, followed by your phone number, under "Contact details."
                                                </li>
                                                <li>Here are some options:

                                                </li>
                                                <li>Including a phone, number Choose Add recovery phone from the list under "Your phone numbers." (If you haven't already, we advise adding a recovery phone number.)

                                                </li>
                                                <li>Your phone number has changed: Tap Edit Edit, followed by Update number, next to your number.

                                                </li>
                                                <li>Delete your contact information: Tap Delete next to your number, followed by Remove number.

                                                </li>
                                                <li>Observe the directions on the screen.

                                                </li>
                                                <li>
                                                    Only some Google services are impacted by changing the phone number in your Google Account.

                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                            How do I change My password?



                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse  " aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Make a new password.
                                            <ul style={{ all: 'unset' }}>
                                                <li>
                                                    Create a Google account. Perhaps you'll have to log in.

                                                </li>
                                                <li>Choose Signing in to Google under "Security."
                                                </li>
                                                <li>Select Password.Perhaps you should log in again.
                                                </li>
                                                <li>Click Change Password once you've entered your new password.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEight">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                            How do I delete my Account?



                                        </button>
                                    </h2>
                                    <div id="collapseEight" className="accordion-collapse collapse  " aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">

                                            <ul style={{ all: 'unset' }}>
                                                <li>
                                                    Register with your account.


                                                </li>
                                                <li>Visit your settings page or click on your profile picture in the top right corner and choose "Settings."

                                                </li>
                                                <li>Delete the Account by clicking in the lower-left corner.
                                                </li>
                                                <li>Your user profile is closed and your account is deleted as a result. Any startup profiles you are linked to are not deleted.

                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingNine">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                            Why Fixebuy deleted my account?
                                        </button>
                                    </h2>
                                    <div id="collapseNine" className="accordion-collapse collapse  " aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">

                                            If you discover that you are receiving a message that your account has been banned, this implies that either you have violated one of our posting guidelines or that another Fixebuy user has reported you for reasons like money taken but item/service not provided to the buyer.


                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTEn">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTEn" aria-expanded="false" aria-controls="collapseTEn">
                                            Technical Issue reporting!

                                        </button>
                                    </h2>
                                    <div id="collapseTEn" className="accordion-collapse collapse  " aria-labelledby="headingTEn" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">

                                            <ul style={{ all: 'unset' }}>
                                                <li>
                                                    Register with your account.
                                                </li>
                                                <li>Visit your settings page or click on your profile picture in the top right corner and choose "Settings."

                                                </li>
                                                <li>Delete the Account by clicking in the lower-left corner.
                                                </li>
                                                <li>Your user profile is closed and your account is deleted as a result. Any startup profiles you are linked to are not deleted.

                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="accordian-img">
                                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_CeuefT.json" background="transparent" speed="1" className="faq-lottie" loop autoplay></lottie-player>
                                {/* <!--<img src="images/image/9.jpg" alt="hello user " className="accordian-imh-wh">--> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
        !isMobile && <Footer />
      }

        </>
    )
}

export default FAQ;