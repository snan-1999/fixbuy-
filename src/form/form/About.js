import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './header'
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import mountain from "../../assets/images/mountain.png";
import service from "../../assets/images/service.png";
import fairytale from "../../assets/images/fairytale.png";
import BottomTop from '../../functions/BottomTop';
import Poster2 from "../../assets/images/Poster2.jpg";
import { Stack } from '@chakra-ui/layout';



export default function About() {
  useEffect(() => {
    BottomTop()
  }, [0])
  return (
    <>
      <div className="overflow-hidden">
        <Header />

        <Stack className='ImgAbout'>
                <img src={Poster2} className='AboutImg'/>
            </Stack>
        <div className="container faq-container">
          <div className="about-text">
            <div className="about-main-text">
              <div className="accordian-img-about-us">
                <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_rla70rwp.json" background="transparent" speed="1" loop autoplay></lottie-player>
              </div>

              <div className="about-main-text-block">
                <div className="about-heading">
                  <div>ABOUT US</div>
                </div>
                <ul>
                  <li>Fixebuy is a platform that connects two individual buyers and sellers, who want to buy and sell their used product.
                    <br />
                    Since its inception, fixebuy has been dedicated to providing its users with an easy and hassle-free online buying and selling experience. From the convenience of their own homes, customers can search for items, compare prices, and find the best deals available.
                  </li>
                  <br />
                  <li>They're also able to take advantage of the platform's secure payment system, which ensures financial security for both buyers and sellers. </li>
                  {/* <br />
                  <li>With Fixebuy, we want you to only worry about what to buy next, then how to buy what you want. You don’t need to drill a hole in your pocket to complete your wishlist. Come to us, and we will solve all your problems. </li> */}
                </ul>
                {/* </div> */}
              </div>
            </div>

            <div className="service">
              <div className="row m-0 p-0">
                <div className="col-md-4 about-tabs">
                  <div className="card-service">
                    <div className="about-heading">
                      <img src={mountain} alt="img" />
                      {/* <!-- <div>Our Mission</div> --> */}
                    </div>
                    <div className="des-service">
                      Fixebuy works on both C2C (consumer to consumer) and B2C (business to consumer) models. This means that if you wish to buy something, you can buy from an individual as well as from a business. This is great news for buyers, as you get to choose from a wider selection of products at competitive prices.It not only allows you to buy and sell products, but also helps you find the best deal that suits your needs. With their unique structure, you can quickly buy and sell brand-new automobiles, phones, and gadgets with just a few clicks.
                    </div>
                  </div>
                </div>
                <div className="col-md-4 about-tabs">
                  <div className="card-service ">
                    <div className="about-heading">
                      <img src={service} alt="img" />
                      {/* <!-- <div>Our Service</div> --> */}
                    </div>
                    <div className="des-service">
                      At Fixebuy, they understand that buying and selling used products can be a tedious task. That’s why the team has made it super easy for you to buy and sell your used product and get the best deal in the process. Fixebuy provides you with a wide range of refurbished and brand-new products to choose from.
                      In addition to convenience and security, fixebuy offers customers a wide range of other benefits. For one, they can take advantage of the platform's loan and service facility.

                    </div>
                  </div>
                </div>
                <div className="col-md-4 about-tabs">
                  <div className="card-service">
                    <div className="about-heading">
                      <img src={fairytale} alt="img" />
                      {/* <!-- <div>Our Story</div> --> */}
                    </div>
                    <div className="des-service">

                      Through this, customers can get additional financial assistance when buying products and services in bulk. Small firms and entrepreneurs who need to buy things in bulk but lack the funding to do so will particularly benefit from this.
                      Fixebuy also have a wide range of payment options available, which makes the buying and selling process simpler and easier. You can choose from various payment options like credit/debit cards, net banking, UPI, and more.
                      <br />
                      {/* <br> */}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="last-text-about-us">
            <b>Wrapping Up</b><br />
            <br />Overall, fixebuy is the perfect platform for anyone looking to purchase or sell products and services in bulk. With its easy-to-use platform, secure payment system, and loan and service facility, it's no wonder that fixebuy has become the go-to source for many individuals and businesses. With their unique structure, wide range of products, and amazing customer service, we promise to make your buying and selling experience a breeze.</div>
        </div>
      </div>
      <Footer />

    </>
  )
}
