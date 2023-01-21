import React, { useEffect, useState } from "react";
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import '../form/CopyCss.css'
import "../../index.css";
import logo from '../../assets/images/logo.png';
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./header";
import Footer from "./Footer";
import axios from 'axios'
import PaymentSuccess from "./PaymentSuccess";
import { BsArrowRight } from "react-icons/bs";
import { useMediaQuery } from "@chakra-ui/react";


const Packages = () => {
  const [isMobile] = useMediaQuery("(max-width : 600px)");
  const nav = useNavigate()
  const [showFunction, setShowFunction] = useState(false)
  const IdData = window.localStorage.getItem('token')
  const userPhone = JSON.parse(IdData).phone
  const userEmail = JSON.parse(IdData).email
  const username = JSON.parse(IdData).name
  const Type = JSON.parse(IdData).type;
  let ProfleId;
  if (IdData) {
    ProfleId = JSON.parse(IdData).token;
  }

  const { id, categories, sellertype } = useParams();
  console.log(id, 'id')
  console.log(categories, 'categories of package')
  console.log(sellertype, 'sellertype of package')
  const varification = async (data) => {
    try {
      const response = await axios.post("https://fixebuyofficial.in/payment/payVerify", {

        razorpay_order_id: data.razorpay_order_id,
        razorpay_payment_id: data.razorpay_payment_id,
        razorpay_signature: data.razorpay_signature
      })
      if(response.data.status === true){
        setShowFunction(true)
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  const checkoutHandler = async (amount, dayss) => {

    const key = "rzp_test_JhV4AghQnABYIb"

    const { data: { order } } = await axios.post("https://fixebuyofficial.in/payment/checkout", {
      amount: amount,
    })
    //  {data:{order}}
    console.warn(order, "order dadtaa is here")

    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "fixe Buy",
      description: "Test Transaction",
      image: '',
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // callback_url: "http://192.168.29.173:4000/payment/payVerify",
      "handler": function (response) {
        console.log(response)
        // setShowFunction(true)
        varification(response)

      },
      prefill: {
        name: username,
        email: userEmail,
        contact: userPhone
      },
      notes: {
        address: "Razorpay Corporate Office",
        pdt_id: id,
        user_id: ProfleId,
        price: amount,
        days: dayss,
        type: Type
      },
      theme: {
        color: "#3399cc"
      }
    };
    const razor = new window.Razorpay(options);

    razor.open();

  }
  useEffect(() => {
    if (IdData == null || IdData == undefined) {
      nav('/login')
    }
  }, [0])
  // const PakageDesign = {
  //   box-shadow: 0 0.5rem 1rem 0 rgb(0 ,0 ,0/ 30%)
  // }
  const ConditionCheck = [
    "car",
    "for_rent",
    "for_sale",
    "land_&_plots",
    "heavy_vehicle"

  ]

  // alert(ConditionCheck.includes(categories))
  return (
    <>
     <div className="overflow-hidden">
     <Header />
        <div className="for-center package-form">
          <div className="container-heading package-form">
            <span>Packages</span>
          </div>
        </div>
     </div>
      <div className="container my-cont border" style={{ overflow: 'hidden' }}>
        {
          (ConditionCheck.includes(categories) && sellertype == "user")
            ?
            <>
              <div className="Package-Heading">
                <span><BsArrowRight /> Car ,Properties , Heavy Vehicles </span>
              </div>
              <section className="pricing py-2">
                <div className="container-price">
                  <div className="row">
                    {/* //   <!-- Free Tier --> */}
                    <div className="col-lg-6 ">
                      <div className="card mb-5 mb-lg-0" id='setMargin1'>
                        <div className="card-body">
                          {/* <h5 className="card-title text-muted text-uppercase text-center">SILVER</h5> */}
                          <h6 className="card-price text-center">₹299<span className="period">+GST</span><span className="period">/3days</span></h6>
                          <hr />
                          <ul className="fa-ul">
                            {/* //   <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Boost your mobiles ads on top</li> --> */}
                            <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>For 3 days</li>
                            <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>2x more buyers</li>
                            <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>Customer engagements</li>
                            {/* <li><span className="fa-li"><i className="fas fa-check"></i></span>All
                        items boost</li> */}
                            {/* //       <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                          </ul>
                          <div className="d-grid">
                            <button style={{ border: "none", backgroundColor: "transparent" }}
                              onClick={() => checkoutHandler(299, 3)}>
                              <span className="btn btn-primary text-uppercase" id="rzp-button1">Boost Now</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* //   <!-- Plus Tier --> */}
                    <div className="col-lg-6">
                      <div className="card mb-5 mb-lg-0" id='setMargin2'>
                        <div className="card-body">
                          {/* <h5 className="card-title text-muted text-uppercase text-center">GOLD</h5> */}
                          <h6 className="card-price text-center">₹499<span className="period">+GST</span><span className="period">/5days</span></h6>
                          <hr />
                          <ul className="fa-ul">
                            {/* //   <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Boost your bikes ads on top</li> --> */}
                            <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>For 5 days</li>
                            <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>2x more buyers</li>
                            <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>Customer engagement</li>
                            {/* <li><span className="fa-li"><i className="fas fa-check"></i></span>All
                        items boosts</li> */}
                            {/* //       <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                          </ul>
                          <div className="d-grid">
                            <button style={{ border: "none", backgroundColor: "transparent" }}
                              onClick={() => checkoutHandler(499, 5)}>
                              <span className="btn btn-primary text-uppercase" id="rzp-button1">Boost Now</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <br />
              <br />
            </>
            :
            (!ConditionCheck.includes(categories) && sellertype == "user")
              ?
              <>

                <div className="Package-Heading">
                  <span><BsArrowRight /> All Other Items </span>
                </div>
                <section className="pricing py-2">
                  <div className="container-price">
                    <div className="row">
                      {/* //   <!-- Free Tier --> */}
                      <div className="col-lg-6 ">
                        <div className="card mb-5 mb-lg-0" id='setMargin1'>
                          <div className="card-body">
                            {/* <h5 className="card-title text-muted text-uppercase text-center">SILVER</h5> */}
                            <h6 className="card-price text-center">₹49<span className="period">+GST</span><span className="period">/3days</span></h6>
                            <hr />
                            <ul className="fa-ul">
                              {/* //   <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Boost your mobiles ads on top</li> --> */}
                              <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>For 3 days</li>
                              <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>2x more buyers</li>
                              <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>Customer engagements</li>
                              {/* <li><span className="fa-li"><i className="fas fa-check"></i></span>All
                        items boost</li> */}
                              {/* //       <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                            </ul>
                            <div className="d-grid">
                              <button style={{ border: "none", backgroundColor: "transparent" }}
                                onClick={() => checkoutHandler(49, 3)}>
                                <span className="btn btn-primary text-uppercase" id="rzp-button1" style={{ pointerEvents: "none" }}>Boost Now</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* //   <!-- Plus Tier --> */}
                      <div className="col-lg-6">
                        <div className="card mb-5 mb-lg-0" id='setMargin2'>
                          <div className="card-body">
                            {/* <h5 className="card-title text-muted text-uppercase text-center">GOLD</h5> */}
                            <h6 className="card-price text-center">₹99<span className="period">+GST</span><span className="period">/5days</span></h6>
                            <hr />
                            <ul className="fa-ul">
                              {/* //   <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Boost your bikes ads on top</li> --> */}
                              <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>For 5 days</li>
                              <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>2x more buyers</li>
                              <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>Customer engagement</li>
                              {/* <li><span className="fa-li"><i className="fas fa-check"></i></span>All
                        items boosts</li> */}
                              {/* //       <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                            </ul>
                            <div className="d-grid">
                              <button style={{ border: "none", backgroundColor: "transparent" }}
                                onClick={() => checkoutHandler(99, 5)}>
                                <span className="btn btn-primary text-uppercase" id="rzp-button1" style={{ pointerEvents: "none" }}>Boost Now</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>

              :   (!ConditionCheck.includes(categories) && sellertype == "shop")
              ?
              <>        <div className="Package-Heading">
                <span><BsArrowRight />  For Shop </span>
              </div>
                <section className="pricing py-2">
                  <div className="container-price">
                    <div className="row">
                      {/* //   <!-- Free Tier --> */}
                      <div className="col-lg-6 ">
                        <div className="card mb-5 mb-lg-0" id='setMargin1'>
                          <div className="card-body">
                            {/* <h5 className="card-title text-muted text-uppercase text-center">SILVER</h5> */}
                            <h6 className="card-price text-center">₹499<span className="period">+GST</span><span className="period">/30days</span></h6>
                            <hr />
                            <ul className="fa-ul">
                              {/* //   <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Boost your mobiles ads on top</li> --> */}
                              <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>For 3 days</li>
                              <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>2x more buyers</li>
                              <li><span className="fa-li"><FontAwesomeIcon icon="fas fa-check"></FontAwesomeIcon></span>Customer engagements</li>
                              {/* <li><span className="fa-li"><i className="fas fa-check"></i></span>All
                        items boost</li> */}
                              {/* //       <!-- <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                            </ul>
                            <div className="d-grid">
                              <button style={{ border: "none", backgroundColor: "transparent" }}
                                onClick={() => checkoutHandler(499, 3)}>
                                <span className="btn btn-primary text-uppercase" id="rzp-button1">Boost Now</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
              : ""

        }
        <PaymentSuccess showFunction={showFunction} setShowFunction={setShowFunction} />
        {/* {
          showFunction === true?
          <PaymentSuccess/>
          : null
        } */}
      </div>
      {
                !isMobile && <Footer />
            }
    </>
  )
}

export default Packages;