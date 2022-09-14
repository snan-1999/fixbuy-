import React from "react";
import Footer from "./Footer";
import Header from "./header";



const FAQ = () => {
    return(
        <>
        <Header/>
        <div class="container faq-container">
        <div class="for-center-faq">
            <div class="container-heading-faq">
                <span> ASKED QUESTIONS?</span>
            </div>
        </div>
        <div class="row p-0 m-0">
            <div class="col-md-8 col-12">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Who are sellers in Fixebuy ?
        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                                well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>,
                                though the transition does limit overflow.
                            </div>
                        </div>

                    </div>
                    <br />
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Why Should I Use Fixebuy?
        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>,
                                though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What If My Ads Posts Is Rejected?   
        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse  show active" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,
                                as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>,
                                though the transition does limit overflow.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-md-4 col-12">
                <div class="accordian-img">
                    <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_CeuefT.json" background="transparent" speed="1" class="faq-lottie" loop autoplay></lottie-player>
                    {/* <!--<img src="images/image/9.jpg" alt="hello user " class="accordian-imh-wh">--> */}
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
    )
}

export default FAQ;