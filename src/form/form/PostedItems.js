import React, { useEffect, useState } from "react";
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import "../../index.css";
import "../../form/form/CopyCss.css";
import logo from '../../assets/images/logo.png';
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./header";
import Footer from "./Footer";
import google from '../../assets/images/google.png';
import { baseUrl, ImageView } from "../../functions/constant";
import axios from 'axios';
import styled from "styled-components";
import UserDeleteModal from "./Modals/DeleteModal";
import { toast, ToastContainer } from "react-toastify";

const PostedItems = () => {

  // console.log(sellertype , 'sellertype')
  const MAX_LENGTH = 15;
  const IdData = window.localStorage.getItem('token')
  let ProfleId;
  if (IdData) {
    ProfleId = JSON.parse(IdData).token;
  }
  console.log(ProfleId, 'TokenData')
  const [automobile, setAutomobile] = useState([]);
  const [Upstate, setUpstate] = useState(0);

  const navigate = useNavigate();

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

      console.warn(res.data.data, "response data warning by ajay");
      // console.warn(res.data.data[0]._id,"user id is here ")
      if (res.data) {
        setAutomobile(res.data.data);
        // setAutomobile(date);
        console.log(automobile, 'automobile Started')
      }

    })
  }


  const [DelId, setDelId] = useState('')
  const DeleteData = async () => {
    console.log(DelId);
    const api = (`${baseUrl}/product/delete/${DelId}`);
    console.log(`${baseUrl}/product/delete/${DelId}`);
    await axios.delete(api).then((res) => {
      console.log(res.data, 'delete');
      toast('Product Deleted', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        type: 'success'
      });
      setUpstate(Upstate + 1)
      setModalOpen(false)
    })
  }
  const [ModalOpen, setModalOpen] = useState(false)

  const OpenDelete = (id) => {
    setModalOpen(true)
    setDelId(id)
  }
  useEffect(() => {
    if (IdData == null || IdData == undefined) {
      // console.log('yes' , 'tokenData')
      navigate('/login')
    }
    Myads();

  }, [0, Upstate])

  return (
    <>
      <Header />
      <ToastContainer />
      <UserDeleteModal
        {
        ...{
          ModalOpen,
          setModalOpen,
          DeleteData,
          DelId
        }
        }
      />
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
                    {/* <div className="mob-cardWidth"> */}

                    <div className="shadow p-3 mb-4 bg-white maindiv-ads overflow-hidden">
                      {(automobileProduct.boostPlan.plan !== "free") ? <Ribbon>Featured</Ribbon> : <Ribbon style={{ opacity: 0 }}>Featured</Ribbon>}
                      <Link to={`/singleproductpage/${automobileProduct._id}`} state={automobileProduct} className="text-decor"> <div className="img-wh"><img src={`${ImageView}${automobileProduct.images[0]}`} className="pdt-img" /></div></Link>
                      <div className="pdt-details">
                        <Link to={`/singleproductpage/${automobileProduct._id}`} state={automobileProduct} className="text-decor">
                          <div className="d-flex" style={{ justifyContent: 'space-between' }}>
                            <div className="price">₹ {(automobileProduct.price).toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
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
                          {/* <div className="font-weight-light desc">{automobileProduct.description}</div> */}
                          {
                            (automobileProduct.title).length > MAX_LENGTH ?
                              <div className="prd-name">
                                {`${automobileProduct.title.substring(0, MAX_LENGTH)}...`}
                              </div>
                              :
                              <div className="prd-name text-capitalize">{automobileProduct.title}</div>

                          }
                          <div className="contain-adrs">
                            <span className="adrs">{automobileProduct.location.state}</span>
                            <span className="year"></span>
                          </div>
                        </Link>
                        {/* </Link> */}
                        <div className="row p-0 m-0">
                          <div className="col p-0">
                            <div className="d-flex" style={{ justifyContent: "space-between" }}>
                              <div className="buy-bt">
                                {/* <Link to={`/packages/${automobileProduct._id}/${automobileProduct.categories}/${automobileProduct.sellerType}`} className="buy-bttn">Boost Now</Link> */}
                                {
                                  (automobileProduct.boostPlan.plan === 'free') ?
                                    (automobileProduct.status === 'approved') ?
                                      <Link to={`/packages/${automobileProduct._id}/${automobileProduct.categories}/${automobileProduct.sellerType}`} className="buy-bttn">Boost Now</Link>
                                      :
                                      <Link to='' className="buy-bttn" disabled style={{ opacity: 0.8 }}>Boost Now</Link>
                                    :
                                    <Link to='' className="buy-bttn" disabled>Boosted</Link>
                                }
                                {console.log(automobileProduct.categories)}
                                {/* <span onClick={()=>handleClickSpan()} className="buy-bttn">Boost Now</span> */}
                              </div>
                              {/* <div className="edit" style={{ marginTop: '5%' }} >
                                  <span className="ed"><FontAwesomeIcon icon="fas fa-pen"></FontAwesomeIcon></span>
                                </div> */}

                              <div className="delete" onClick={() => OpenDelete(automobileProduct._id)}>
                                <span className="dl"><FontAwesomeIcon icon="fas fa-trash-can" className="iconSize"></FontAwesomeIcon></span>
                              </div>
                            </div>
                            <Link to={`/singleproductpage/${automobileProduct._id}`} state={automobileProduct} className="text-decor">
                              <div>
                                {
                                  (automobileProduct.boostPlan.expireDate) ?
                                    <span className="date">Expire : {new Date(automobileProduct.boostPlan.expireDate).toDateString()}</span>
                                    :
                                    <span className="date">{new Date(automobileProduct.createdAt).toDateString()}</span>
                                }
                              </div>

                              {/* {
                                (automobileProduct.boostPlan.plan !== 'free') ?
                                  :
                                  ""
                              } */}

                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                )

              })
            }
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default PostedItems;
const Ribbon = styled.div`
    /* margin-left: -10px; */
    font:  10px sans-serif;
    color: #3D6182;
    text-transform: uppercase;
    text-align: center;
    -webkit-transform: rotate(-45deg);
    -moz-transform:    rotate(-45deg);
    -ms-transform:     rotate(-45deg);
    -o-transform:      rotate(-45deg);
    position: relative;
    padding: 4px 0;
    top: 10px;
    left: -40px;
    width: 120px;
    background-color: #3D6182;
    color: #fff;
  
`