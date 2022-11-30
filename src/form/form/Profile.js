import React, { useState, useEffect, useContext } from "react";
import Footer from "./Footer";
import Header from "./header";
import "./css/custom.css";
import "./css/iofrm-style.css";
import "../form/header.css";
import { ProfileData, updateProfile } from "../../functions/ProfileData";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../functions/constant";
// import ShopModal from "./Modals/ShopModal";
// import axios from "axios";
import { GlobalVariables } from "../../Context/StateProvider";
import axios from "axios";
import ProfileNumber from "./Modals/ProfileNumber";


const Profile = () => {
    const nav = useNavigate();
    // const {type} = useContext(GlobalVariables);
    // console.log(type , 'check')
    const IdData = localStorage.getItem('token');
    let ProfleId;
    let PhoneNumber;
    let Type;
    if(IdData){
        // console.log('hai')
        ProfleId = JSON.parse(IdData).token;
        PhoneNumber = JSON.parse(IdData).phone;
        Type = JSON.parse(IdData)?.type;
    }else{
        console.log('nahi hai')
        nav('/')
    }
    
    // console.log(JSON.parse(IdData) , 'tokenData');
  
    console.log(PhoneNumber);
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    // const data = ProfileStore(state => state);
    const [name, setName] = useState('');
    const [otp , setOtp] = useState('');
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(PhoneNumber);
    const [numberchange , setNumberChange] = useState(PhoneNumber);
    const [ModalSellerPhone, setModalSellerPhone] = useState(PhoneNumber);
    const [profileImg2, setProfileImg2] = useState(null);
    const [profileImg, setProfileImg] = useState('');
    const [id, setId] = useState('');
    const [hasError, setError] = useState('')
    const [city, setcity] = useState('')
    const [shop_address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDOB] = useState('');
    const [about_us, setAbout_us] = useState('');
    const [gst_no, setGstNumber] = useState('');
    const [message, setMessage] = useState('');
    const [errors, seterrors] = useState(false);
    const [isOpen, setisOpen] = useState(false)
    const [OtpCondition, setOtpCondition] = useState(false);
    const Onclose = () => {
        setOtp('')
        setisOpen(false)
        setOtpCondition(false)
    }
    const OnOpen = () => setisOpen(true)


  



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
            console.log(id);
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
        // if (name != null) {
            formData.append('name', name);
            console.log('run')
            console.log({formData})
        // }
        if (email != null){
            formData.append('email', email)
        }   
        if (phone != null){
            formData.append('phone', phone)
        }
        if (city != null){
            formData.append('city', city)
        }
        if (dob != null){
            formData.append('date_of_birth', dob)
        }
        if (gender != null){
            formData.append('gender', gender)
        }
        if(gst_no != null){
            formData.append('gst_no', gst_no)
        }
        if(shop_address != null){
            formData.append('shop_address' , shop_address)
        }
        const api = `${baseUrl}/users/update/profile/${ProfleId}`;
        console.log(formData.entries() , "profile")
        // console.log(formData , "profile")
        console.log(name , "profile")
        await axios.put(api, formData).then((response) => {
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
        if(IdData == null || IdData == undefined){
          nav('/login')
        }
        handleProfileData();
    }, [0])
    useEffect(() => {
        console.log(profileImg2, "profileData");
    }, [profileImg2])

   


    return (
        <>
            <Header />
            <div className="container">

                <div className="page-wrapper">

                    <div className="page-content ">
                        <br />
                        {/* <?php
            if(isset($_GET['status']))
            {
            ?>
            <div className="alert alert-success">
                    <strong>Update Success!</strong>
            </div>
            <?php
            }
            ?> */}


                        <h5 className="my-2">User Profile</h5>



                        <div className="card">

                            <form method="post" enctype="multipart/form-data">
                                <div className="card-body">

                                    <div className="myi">
                                        <div className="row">
                                            <div className="col d-flex align-items-center justify-content-center m-4 p-2">
                                                <div className="preview-container shadow shadowclass">
                                                    <span className="fileName d-block my-2"></span>
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
                                    
                                    <div className="row mb-3">
                                        <div className="col-sm-3 ">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control shadow-none text-capitalize" placeholder="Full Name" contenteditable="true" name="username" value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control shadow-none" placeholder="Email" contenteditable="true" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="row mb-1">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control shadow-none" placeholder="Phone"  name="phone" value={ModalSellerPhone} contenteditable='false' 
                                                 />
                                        </div>
                                        {
                        !phone && <div className="text-danger">please add your number</div>
                    }
                    <div className="UpdateNum w-100">
                        {
                            !phone ? <p className="fs-6 float-end text-primary" onClick={OnOpen}>Add Your Number</p> :
                                <p className=" float-end text-primary" onClick={OnOpen}>Update Your Number</p>
                        }
                    </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">D.O.B</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="date" className="form-control shadow-none" placeholder="Date of Birth " name="date_of_birth" id="" contenteditable="true" value={dob} onChange={(e) => { console.log(e.target.value); setDOB(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Gender</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control shadow-none" placeholder="Gender" name="gender" id="" contenteditable="true" value={gender} onChange={(e) => setGender(e.target.value)} />
                                        </div>
                                    </div>
                                    
                                 {
                                    (Type == 'shop') &&
                                     
                                    <>
                                        <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Shop Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control shadow-none" placeholder="Full address" contenteditable="true" name="shop_address" value={shop_address} onChange={(e) => setAddress(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Gst Number</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text" className="form-control shadow-none" placeholder="Gst Number" contenteditable="true" name="gst_no" value={gst_no} onChange={(e) => setGstNumber(e.target.value)} />
                                        </div>
                                    </div>
                                    
                                    </>
}                     
                                    
                                    <div className="row">
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="button" name="update" className="btn btn-color  px-4 submitBtn text-uppercase" value="Update" 
                                            onClick={() => {
                                                UpadateUser()
                                                }} />
                                                <br/>
                                           
                                            {errors &&
                        <div className="messageClass" role="alert" style={{color : 'green'}}>
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
                <ProfileNumber  {
                                    ...{
                                        email,
                                        otp,
                                        setOtp,
                                        OtpCondition, setOtpCondition,
                                        setModalSellerPhone,
                                        profileImg,
                                        setPhone,
                                        name,
                                        phone,
                                        id,
                                        isOpen,
                                        setisOpen,
                                        Onclose,
                                        OnOpen
                                    }
                                    } />

            </div>
            <Footer />
        </>

    )
}

export default Profile;