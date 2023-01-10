import React, { useEffect } from "react";
import BottomTop from "../../functions/BottomTop";
import Footer from "./Footer";
import Header from "./header";



const FAQ = () => {
    useEffect(() => {
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
            </div>
            <div className="container faq-container">


                <div className="row p-0 m-0">
                    <div className="col-md-8 col-12">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Who are sellers in Fixebuy ?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                                        well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>,
                                        though the transition does limit overflow.
                                    </div>
                                </div>

                            </div>
                            <br />
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Why Should I Use Fixebuy?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,
                                        as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>,
                                        though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What If My Ads Posts Is Rejected?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse  show active" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,
                                        as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>,
                                        though the transition does limit overflow.
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
            <Footer />
        </>
    )
}

export default FAQ;