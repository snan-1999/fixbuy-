import React from 'react'
import Footer from './Footer'
import Header from './header'
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import mountain from "../../assets/images/mountain.png";
import service from "../../assets/images/service.png";
import fairytale from "../../assets/images/fairytale.png";




export default function About() {
  return (
    <>
      <Header />
      <div class="container faq-container">
        {/* <!-- <div class="for-center-faq">
            <div class="container-heading-about">
                <span> ABOUT US </span>
            </div>
        </div> --> */}
        <div class="about-text">
          <div class="about-main-text">
            <div class="accordian-img-about-us">
              <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_rla70rwp.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
            </div>

        <div class="about-main-text-block">
          <div class="about-heading">
            <div>ABOUT US</div>
          </div>
          <ul>
            <li>Fixebuy is here to fix all your problems in one go. Its unique structure brings you the best platform for quickly buying and selling brand-new automobiles, phones, and gadgets.
              <br />
              We have a wide range of refurbished and brand-new products just a click away!
            </li>
            <br />
            <li>Suppose you’re looking to sell or buy your used automobile, phone, or any electronic gadget. Now you know where to head to, Fixebuy. </li>
            <br />
            <li>With Fixebuy, we want you to only worry about what to buy next, then how to buy what you want. You don’t need to drill a hole in your pocket to complete your wishlist. Come to us, and we will solve all your problems. </li>
          </ul>
          {/* </div> */}
          </div>
        </div>

        <div class="service">
          <div class="row m-0 p-0">
            <div class="col-md-4 about-tabs">
              <div class="card-service">
                <div class="about-heading">
                  <img src={mountain} alt="img" />
                  {/* <!-- <div>Our Mission</div> --> */}
                </div>
                <div class="des-service">
                  With Fixebuy, we aspire to make customer journeys easy. They can find all types of automobiles on our website. We not only provide brand new products but also use them. So budget would never be an issue with us. The Fixebuy ecosystem is specially designed to easily access all the products, either used or newly available to you.
                </div>
              </div>
            </div>
            <div class="col-md-4 about-tabs">
              <div class="card-service ">
                <div class="about-heading">
                  <img src={service} alt="img" />
                  {/* <!-- <div>Our Service</div> --> */}
                </div>
                <div class="des-service">
                  Our services range from selling old and used automobiles, phones, and various gadgets. <br />
                  Customers can upload their used automobiles, gadgets, and phones. And you can get good deals on them
                  <br />
                  <br />
                  Some of our services include selling the following products:
                  <ul>
                    <li> Old cars</li>

                    <li> bikes</li>

                    <li>Used phone</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-4 about-tabs">
              <div class="card-service">
                <div class="about-heading">
                  <img src={fairytale} alt="img" />
                  {/* <!-- <div>Our Story</div> --> */}
                </div>
                <div class="des-service">
                  Fixebuy exists for people who think twice before buying their favorite gadget or automobile. We bring you a plethora of options under your budget—so there is no need to check your bank account before making a purchase. Fixebuy endeavors to make selling automobiles, phones, and gadgets readily available to its customers at prices that would want you to have everything at once.
                  <br />
                  {/* <br> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="last-text-about-us">Fixebuy brings you everything that you’re looking for under one umbrella. And you don’t have only to trust our words, get fixebuy and see the magic unfold in front of your own eyes.</div>
      </div>
      <Footer />

    </>
  )
}
