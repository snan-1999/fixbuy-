import React, { useEffect, useState } from "react";
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import "../../index.css";
import "../../form/form/CopyCss.css";
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
      <div className="container my-cont border">
        {/* <div className="alert alert-success" role="alert">
        your payment has been succesfully done.
      </div> */}
        <div className="for-center service-form">
          <div className="container-heading service-form">
            <span>My Ads</span>
          </div>
        </div>
        <div className="container" id="card_box">

          {/* <!-- Mobile products --> */}
          <div className="row">
            {
              automobile.map((automobileProduct, key) => {
                return (
                  <div className="col-md-4 col-6 col-lg-3">
                    <Link to='' state={automobileProduct} className="text-decor">
                      <div className="shadow p-3 mb-4 bg-white maindiv">
                        <div className="img-wh"><img src={`${baseUrl}/allcategories/get/productImage/${automobileProduct.images[0]}`} className="pdt-img" /></div>
                        <div className="pdt-details">
                          <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                            <div className="price">₹{automobileProduct.price}</div>
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
                          <div className="font-weight-light desc">{automobileProduct.description}</div>
                          <div className="prd-name">{automobileProduct.title}</div>
                          <div className="contain-adrs">
                            <span className="adrs">{automobileProduct.location.state}</span>
                            <span className="year"></span>
                          </div>
                          <div className="row p-0 m-0">
                            <div className="col p-0">
                              <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                                <div className="buy-bt">
                                  <Link to="" className="buy-bttn">&nbsp;&nbsp;Boost Now</Link>
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