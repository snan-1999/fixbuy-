import React, { useEffect, useState } from "react";
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import "../../index.css";
import logo from '../../assets/images/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./header";
import Footer from "./Footer";
import google from '../../assets/images/google.png';
import { baseUrl } from "../../functions/constant";
import axios from 'axios';

const PostedItems = () => {
  const IdData = window.localStorage.getItem('token')
  let ProfleId = JSON.parse(IdData).token;
  const [automobile, setAutomobile] = useState([]);
  const [Upstate, setUpstate] = useState(0);



  const Myads = async () => {
    const api = (`${baseUrl}/users/listed/items/${ProfleId}`);
    await axios.get(api).then((res) => {

      // let date = '0000-00-00T00:00:00.000Z'
      // if (res.data.data[0].createdAt) {
      //   date = res.data.data[0].createdAt.split('T')[0]
      // }
      // else {
      //   date = date.split('T')[0]
      // }

      console.log(res.data.data);
      if (res.data) {
        setAutomobile(res.data.data);
        // setAutomobile(date);
        console.log(automobile, 'automobile Started')
      }

    })
  }

  
  const deleteUser = async (idDelete) => {
    console.log(idDelete);
    const api = (`${baseUrl}/product/delete/${idDelete}`);
    console.log(`${baseUrl}/product/delete/${idDelete}`);
    await axios.delete(api).then((res) => {
      console.log(res.data, 'delete');
      setUpstate(Upstate + 1)
    })
  }
  
  useEffect(() => {
    Myads();

  }, [0 , Upstate])

  return (
    <>
      <Header />
      <div class="container my-cont border">
        {/* <div class="alert alert-success" role="alert">
        your payment has been succesfully done.
      </div> */}
        <div class="for-center service-form">
          <div class="container-heading service-form">
            <span>My Ads</span>
          </div>
        </div>
        <div class="container" id="card_box">

          {/* <!-- Mobile products --> */}
          <div class="row">
            {
              automobile.map((automobileProduct, key) => {
                return (
                  <div class="col-md-4 col-8 col-lg-3">
                    <Link to='' state={automobileProduct} className="text-decor">
                      <div class="shadow p-3 mb-4 bg-white maindiv">
                        <div class="img-wh"><img src={`${baseUrl}/allcategories/get/productImage/${automobileProduct.images[0]}`} class="pdt-img" /></div>
                        <div class="pdt-details">
                          <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                            <div class="price">₹{automobileProduct.price}</div>
                            <div className="status">
                              {
                                (automobileProduct.status == 'pending') ?
                                  <span className="sts" style={{ backgroundColor: 'grey' }}>{automobileProduct.status}</span>
                                  : (automobileProduct.status == 'reject') ?
                                    <span className="sts" style={{ backgroundColor: 'red' }}>{automobileProduct.status}</span>
                                    : (automobileProduct.status == 'approved') ?
                                      <span className="sts" style={{ backgroundColor: 'green' }}>{automobileProduct.status}</span>
                                      :
                                      ""
                              }
                            </div>
                          </div>
                          <div class="font-weight-light desc">{automobileProduct.description}</div>
                          <div class="prd-name">{automobileProduct.title}</div>
                          <div class="contain-adrs">
                            <span class="adrs">{automobileProduct.location.state}</span>
                            <span class="year"></span>
                          </div>
                          <div class="row p-0 m-0">
                            <div class="col p-0">
                              <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                                <div class="buy-bt">
                                  <Link to="" class="buy-bttn">&nbsp;&nbsp;Boost Now</Link>
                                </div>
                                <div className="edit" style={{ marginTop: '5%' }} >
                                  <span className="ed"><FontAwesomeIcon icon="fas fa-pen"></FontAwesomeIcon></span>
                                </div>

                                <div className="delete" style={{ marginTop: '5%' }} onClick={() => deleteUser(automobileProduct._id)}>
                                  <span className="dl"><FontAwesomeIcon icon="fas fa-trash-can"></FontAwesomeIcon></span>
                                </div>
                              </div>
                              <div>
                                <span className="date">{new Date(automobileProduct.createdAt).toDateString()}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )

              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PostedItems;