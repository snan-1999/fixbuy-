import React from "react";
import Footer from "./Footer";
import Header from "./header";
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";


const Profile = () => {
    return(
        <>
        <Header/>
        <div class="container">

        <div class="page-wrapper">

            <div class="page-content ">
                <br />
            {/* <?php
            if(isset($_GET['status']))
            {
            ?>
            <div class="alert alert-success">
                    <strong>Update Success!</strong>
            </div>
            <?php
            }
            ?> */}


                <h5 class="my-2">User Profile</h5>



                <div class="card">

                <form action="api-call/profile-update-api-call.php?user_id=<?php echo $fetch_user_data['data']['user_id'] ?>&status=true" method="post" enctype="multipart/form-data">
                    <div class="card-body">
                        
                        <div class="myi">
                            <div class="row">
                                <div class="col d-flex align-items-center justify-content-center">
                                    <div class=" image-upload my-2 p-2 border  bg-white ">
                                        <div class="preview-container shadow">
                                            {/* <img src="<?php if($fetch_user_data['data']['user_image']!=null){ if (file_exists("image/profile-image/".$fetch_user_data['data']['user_image'])) {echo "image/profile-image/".$fetch_user_data['data']['user_image'];}else{ echo $fetch_user_data['data']['user_image']; }}else{echo "image/testo/1.png";}  ?>" > */}
                                            <span class="fileName d-block my-2"></span>
                                            <div class="icon-container bg-secondary ">
                                                <i class="fas fa-times icon text-white"></i>
                                            </div>
                                        </div>
                                        <input type="file" name="user_image"  class="form-control w-100 my-2 shadow-none fileUpload" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Full Name</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <input type="text" class="form-control shadow-none text-capitalize" placeholder="Full Name" contenteditable="true" name="username" value=""/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Email</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <input type="text" class="form-control shadow-none" placeholder="Email" contenteditable="true" name="user_email" value="" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Phone</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <input type="text" class="form-control shadow-none" placeholder="Phone" contenteditable="true" name="phone" value=""/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">D.O.B</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <input type="date" class="form-control shadow-none text-secondary" placeholder="Date of Birth " name="date_of_birth" id="" contenteditable="true" value="" />
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0">Address</h6>
                            </div>
                            <div class="col-sm-9 text-secondary">
                                <input type="text" class="form-control shadow-none" placeholder="Full address" contenteditable="true" name="address" value=""/>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-sm-3">
                                <h6 class="mb-0" >Adhaar Number </h6>
                            </div>
                        
                            <div class="col-sm-9 text-secondary">
                                <input type="text" class="form-control" name="adhaar_no" placeholder="Number" value="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3"></div>
                            <div class="col-sm-9 text-secondary">
                                <input type="submit" name="update" class="btn btn-color  px-4 submitBtn text-uppercase" value="Update"  />
                            </div>
                        </div>
                        
                    </div>
                    </form>
                </div>

                {/* <!-- end row --> */}
            </div>
        </div>

    </div>
    <Footer/>
    </>

    )
}

export default Profile;