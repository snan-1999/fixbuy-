import React, { useState, useEffect, useContext } from "react";
import Footer from "./Footer";
import Header from "./header";
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import { ProfileData, updateProfile } from "../../functions/ProfileData";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../functions/constant";
import axios from "axios";
import { GlobalVariables } from "../../Context/StateProvider";


const Profile = () => {
    // const {type} = useContext(GlobalVariables);
    // console.log(type , 'check')
    const IdData = localStorage.getItem('token');
    const Type = JSON.parse(IdData).type;
    console.log(JSON.parse(IdData).type);
    let ProfleId = JSON.parse(IdData).token;
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    // const data = ProfileStore(state => state);
    const [name, setName] = useState('');
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState('');
    const [profileImg2, setProfileImg2] = useState(null);
    const [profileImg, setProfileImg] = useState('');
    const [id, setId] = useState('');
    const [city, setcity] = useState('')
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDOB] = useState('');
    const [about_us, setAbout_us] = useState('');
    const [gstnumber, setGstNumber] = useState('');
    const [message, setMessage] = useState('');
    const [errors, seterrors] = useState(false);


    const nav = useNavigate();



    const handleImageUpload = e => {
        // setImg(response.data.data[0].img);
        setProfileImg2(e.target.files[0])
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = e => {
                current.src = e.target.result;
                // console.log(file, "bruno")
            };
            reader.readAsDataURL(file);
        }
    };


    const handleProfileData = async () => {
        let response = await ProfileData(ProfleId);
        console.log(response)
        // console.log(response.data.data[0].profileImg);

        // console.log(response.data.data[0].date_of_birth.split('T')[0])
        let date = '0000-00-00T00:00:00.000Z'
        if (response.data.data[0].date_of_birth) {
            date = response.data.data[0].date_of_birth.split('T')[0]
        }
        else{
            date = date.split('T')[0]
        }
        // // console.log(response.data.data[0].name);
        if (response.status) {
            setName(response.data.data[0].name);
            setEmail(response.data.data[0].email);
            setPhone(response.data.data[0].phone);
            setProfileImg(response.data.profileImg);
            setcity(response.data.data[0].city);
            setGstNumber(response.data.data[0].gst_no);
            setAddress(response.data.data[0].shop_address);
            // console.log(new ,"date");
            setDOB(date);
            console.log(dob)
            setGender(response.data.data[0].gender)
            // setDOB(response.data.data[0].date_of_birth)
            setId(response.data.data[0]._id);
            console.log(response.data.profileImg2)
        }

    };
    
    const UpadateUser = async () => {


        const formData = new FormData();
        const config = {
            headers: {
                Accept: 'application/json , text/plain, /',
                'Content-type': 'multipart/form-data',
            },
        };
        if (profileImg2 != null) {
            formData.append("profileImg", profileImg2);
        }
        if (name != null) {
            formData.append('name', name);
        }
        if (email != null){
            formData.append('email', email)
        }
        if (phone != null){
            formData.append('phone', phone)
        }
        if (city != null){
            formData.append('city', city)
        }
        if (address != null){
            formData.append('address', address)
        }
        if (dob != null){
            formData.append('date_of_birth', dob)
        }
        if (gender != null){
            formData.append('gender', gender)
        }
        if(about_us != null){
            formData.append('about_us', about_us)
        }
        const api = `${baseUrl}/users/update/profile/${ProfleId}`;
        await axios.put(api, formData, config).then((response) => {
            console.log(response.data);
            if(response.data.status){
                setMessage('Profile Updated!');
                seterrors(true);
            }
        }, error => {
            console.log(error.response.data);
        },)
    }

    useEffect(() => {
        console.log(new Date(dob).toDateString())
        console.log(dob)
        // console.log(handleProfileData);
        handleProfileData();
        // date();
        // console.log(data);
        // UpadateUser()
    }, [0])
    useEffect(() => {
        console.log(profileImg2, "profileData");
    }, [profileImg2])


    return (
        <>
            <Header />
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

                            <form method="post" enctype="multipart/form-data">
                                <div class="card-body">

                                    <div class="myi">
                                        <div class="row">
                                            <div class="col d-flex align-items-center justify-content-center m-4 p-2">
                                                <div class="preview-container shadow shadowclass">
                                                    <span class="fileName d-block my-2"></span>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleImageUpload}
                                                        ref={imageUploader}
                                                        style={{
                                                            display: "none"
                                                        }}
                                                        dataURLKey="data_url"
                                                    />
                                                    <div
                                                        style={{
                                                            height: "180px",
                                                            width: "180px",
                                                            borderRadius: "50%",

                                                        }}
                                                        onClick={() => imageUploader.current.click()}

                                                    >
                                                        <img
                                                            src={profileImg}
                                                            name={profileImg}
                                                            value={profileImg}
                                                            // ref={uploadedImage}

                                                            style={{
                                                                width: "100%",
                                                                height: "100%",
                                                                borderRadius: "50%"
                                                                //   position: "absolute"
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    
                                    <div class="row mb-3">
                                        <div class="col-sm-3 ">
                                            <h6 class="mb-0">Full Name</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" class="form-control shadow-none text-capitalize" placeholder="Full Name" contenteditable="true" name="username" value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Email</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" class="form-control shadow-none" placeholder="Email" contenteditable="true" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Phone</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" class="form-control shadow-none" placeholder="Phone" contenteditable="true" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">D.O.B</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="date" class="form-control shadow-none" placeholder="Date of Birth " name="date_of_birth" id="" contenteditable="true" value={dob} onChange={(e) => { console.log(e.target.value); setDOB(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Gender</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" class="form-control shadow-none" placeholder="Gender" name="gender" id="" contenteditable="true" value={gender} onChange={(e) => setGender(e.target.value)} />
                                        </div>
                                    </div>
                                    {/* <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">City</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" class="form-control shadow-none" placeholder="City Name" contenteditable="true" name="city" value={city} onChange={(e) => setcity(e.target.value)} />
                                        </div>
                                    </div> */}
                                 {
                                    (Type !== 'user') &&
                                     
                                    <>
                                        <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Shop Address</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" class="form-control shadow-none" placeholder="Full address" contenteditable="true" name="shop_address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">Gst Number</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" class="form-control shadow-none" placeholder="Gst Number" contenteditable="true" name="gst_no" value={gstnumber} onChange={(e) => setGstNumber(e.target.value)} />
                                        </div>
                                    </div>
                                    
                                    </>
}
                                       
                                    <div class="row">
                                        <div class="col-sm-3"></div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="button" name="update" class="btn btn-color  px-4 submitBtn text-uppercase" value="Update" onClick={UpadateUser} /><br/>
                                           
                                            {errors &&
                        <div class="messageClass" role="alert" style={{color : 'green'}}>
                            {message}
                        </div>
                    }
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>

                        {/* <!-- end row --> */}
                    </div>
                </div>

            </div>
            <Footer />
        </>

    )
}

export default Profile;