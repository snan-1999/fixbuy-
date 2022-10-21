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

const PostedItems = () => {
    return(
        <>
        <Header/>
        <div class="container my-cont border">
      {/* <div class="alert alert-success" role="alert">
        your payment has been succesfully done.
      </div> */}
    <div class="for-center service-form">
      <div class="container-heading service-form">
        <span>Posted Items</span>
      </div>
    </div>
    <div class="page-wrapper">
      <div class="page-content">
        <div class="card-body card radius-10">
          <div class="table-responsive">
            <table class="table align-middle mb-0">
              <thead class="table-light">
                <tr>
                  <th>category</th>
                  <th>Ad title</th>
                  {/* <!-- <th>Product Image</th> --> */}
                  <th>Selling Price</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Deletion</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                {/* <?php
                foreach ($fetch_data as $value) {
                ?> */}
                  <tr>
                    <span>
                      <td></td>
                    </span>
                    <td></td>
                    {/* <!-- <td><img style="height:50px; width=auto;" src="" alt=""></td> --> */}
                    <td></td>

                    <td>
                      

                        {/* <span class=" btn btn-warning  status approve" name="status" value="review">Review</span>';
                     <span class=" btn btn-success  status" name="status" value="Approve">Approve</span>';
                       <span class=" btn btn-danger  status" name="status" value="Reject" >
                                            Reject</span>'; */}
                       

                    </td>
                    <td class="deletebtn" data-pdtid="<?php echo $value['pdt_id']; ?>" data-category="<?php echo $value['main_category']; ?>" data-user="<?php echo $value['user_id']; ?>"><i class="fa fa-trash" aria-hidden="true"></i>
                    </td>
                    {/* <td class="d-flex align-items-center padding-td">
                      <div class="me-3 px-1"> <a href="single-product.php?pdt_id=<?php echo $value['pdt_id']; ?>&main_category=<?php echo $value['main_category'] ?>" class=" btn color-btn text-decoration-none view-more-btn"> View more</a></div>

                    </td> */}

                  </tr>
                
              </tbody>
            </table>
          </div>
        </div>
        {/* <!-- Button trigger modal --> */}


        {/* <!-- Modal --> */}
        <div class="modal fade" id="delete-product" tabindex="-1" aria-labelledby="delete-product" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Are you sure?</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    
                        <input type="hidden" name="pdt_id" id="pdt_delete" />
                        <input type="hidden" name="main_category" id="category_delete" />
                        <input type="hidden" name="user_id" id="user_delete" />
                        <div class="modal-body delete">
                            Do you really want delete this item?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="submit" class="btn btn-danger" name="delete-product">Yes</button>
                        </div>
                    
                </div>
            </div>
        </div>


        {/* // <!--end row--> */}
        {/* // <!-- price chart section --> */}
        <section class="pricing py-5">
          <div class="container-price">
            <div class="row">
            {/* //   <!-- Free Tier --> */}
              <div class="col-lg-4">
                <div class="card mb-5 mb-lg-0">
                  <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">SILVER</h5>
                    <h6 class="card-price text-center">₹49<span class="period">/5days</span></h6>
                    <hr/>
                    <ul class="fa-ul">
                    {/* //   <!-- <li><span class="fa-li"><i class="fas fa-check"></i></span>Boost your mobiles ads on top</li> --> */}
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>For 5 days</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>Single user</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>High Customer engagement</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>All
                        items boost</li>
                {/* //       <!-- <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                    </ul>
                    <div class="d-grid">
                      <a href="api/boost-product-api.php?price=49" class="btn btn-primary text-uppercase" id="rzp-button1">Pay Now</a>
                    </div>
                  </div>
                </div>
              </div>
            {/* //   <!-- Plus Tier --> */}
              <div class="col-lg-4">
                <div class="card mb-5 mb-lg-0">
                  <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">GOLD</h5>
                    <h6 class="card-price text-center">₹99<span class="period">/12days</span></h6>
                    <hr />
                    <ul class="fa-ul">
                    {/* //   <!-- <li><span class="fa-li"><i class="fas fa-check"></i></span>Boost your bikes ads on top</li> --> */}
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>For 12 days</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>Single user</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>High Customer engagement</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>All
                        items boosts</li>
                {/* //       <!-- <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                    </ul>
                    <div class="d-grid">
                      <a href="api/boost-product-api.php?price=99" class="btn btn-primary text-uppercase" id="rzp-button1">Pay Now</a>
                    </div>
                  </div>
                </div>
              </div>
            {/* //   <!-- Pro Tier --> */}
              <div class="col-lg-4">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">DIAMOND</h5>
                    <h6 class="card-price text-center">₹199<span class="period">/1month</span></h6>
                    <hr />
                    <ul class="fa-ul">
                    {/* //   <!-- <li><span class="fa-li"><i class="fas fa-check"></i></span>Boost your cars ads on top</li> --> */}
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>For 1 month</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>Single user</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>High Customer engagement</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>All
                        items boost</li>
                {/* //       <!-- <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated
                // technical Support</li> --> */}
                    </ul>
                    <div class="d-grid">
                      <a href="api/boost-product-api.php?price=199" class="btn btn-primary text-uppercase" id="rzp-button1">Pay Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* // <!-- END price chart section --> */}
      </div>
    </div>
  </div>
        <Footer/>
        </>
    )
}

  export default PostedItems;