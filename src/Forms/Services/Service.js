import React, { useState, useRef } from "react";
import Footer from "../../form/form/Footer";
import Header from "../../form/form/header";
import ImageUploading from 'react-images-uploading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import facebook from '../../assets/images/facebook.png'
// import { ElectronicsFunc } from "../../functions/ElectronicsApi";
import { baseUrl } from "../../functions/constant";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalVariables } from "../../Context/StateProvider";
import OtpPop from "../../form/form/Modals/OtpPop";
import { ToastContainer, toast } from 'react-toastify';
import styled from "styled-components";
import CropImage2 from "../CropImage2";
import { Spinner, Stack, Text } from "@chakra-ui/react";

const Service = () => {
    const [AllErrors, setAllErrors] = useState(false)
    const { latitude, Longitude } = useContext(GlobalVariables)
    const { category2 } = useParams();
    const IdData = localStorage.getItem('token');
    let ProfileNameForm = JSON.parse(IdData).profileName;
    let PhoneNumber = JSON.parse(IdData).phone;
    let ProfileImage = JSON.parse(IdData).profileImg;
    let ProfleId = JSON.parse(IdData).token;
    const Type = JSON.parse(IdData).type;
    console.log(ProfleId);
    const [isOpen, setisOpen] = useState(false)
    const Onclose = () => {
        setOtp('')
        setisOpen(false)
        setOtpCondition(false)
    }
    const OnOpen = () => setisOpen(true)
    const [otp, setOtp] = useState('');
    const [otpError, setotpError] = useState('');
    const [OtpCondition, setOtpCondition] = useState(false);
    const [ModalSellerPhone, setModalSellerPhone] = useState(PhoneNumber);
    const [user_id, setUser_id] = useState(ProfleId)
    const [img, setImg] = useState('');
    const [pincode, setPincode] = useState('');
    const [title, setTitle] = useState('');
    const [sellerphone, setSellerPhone] = useState(PhoneNumber);
    // const [categories, setCategories] = useState('fridge');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [sellername, setSellerName] = useState(ProfileNameForm);
    const [sellerType, setSellerType] = useState(Type);
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [neighbourhood, setNeighbourhood] = useState('');
    const [message, setMessage] = useState('');
    const [errors, seterrors] = useState(false);
    const [posted, setposted] = useState('');
    const [hasError, setError] = useState('')
    const titleRef = useRef();
    const cityRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();
    const neighbourhoodRef = useRef();
    const descriptionRef = useRef();
    const stateRef = useRef();
    const sellernameRef = useRef();
    const pincodeRef = useRef();
    const sellerphoneRef = useRef();
    const maxNumber = 20;
    const [Loader, setLoader] = useState(false)
    const [imageError, setimageError] = useState('');
    const [cropdata, setCropData] = useState([])
    const [titleerror, setTitleError] = useState('');
    const [descriptionerror, setDescriptionError] = useState('');
    const nav = useNavigate()
    let newcategory = category2.replace(/_/g, ' ')
    console.log(newcategory);

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImg(imageList);
        imgRef.current.style.borderColor = "#ced4da";
        setError("");
    };
    console.log(img)
    const sumbit = async () => {
        const formData = new FormData();
        const config = {
            headers: {
                Accept: 'application/json , text/plain, /',
                'Content-type': 'multipart/form-data',
            },
        };


        if (title.trim().length > 0 && title.trim().length <= 60) {
            if (sellername.trim().length >= 0) {
                if (description.trim().length > 0 && description.trim().length <= 300) {
                    if (price.trim().length > 0) {
                        if ((cropdata.length <= 20) && (cropdata.length > 0)) {
                            if (state.trim().length > 0) {
                                if (city.trim().length > 0) {
                                    if (pincode.trim().length > 0) {
                                        if (neighbourhood.trim().length > 0) {
                                            if (sellerphone.trim().length > 0) {
                                                setError(true)
                                                setposted('success')
                                                formData.append('sellername', sellername)
                                                // formData.append('brand', brand)
                                                formData.append('title', title)
                                                formData.append('sellerphone', sellerphone)
                                                formData.append('categories', category2)
                                                formData.append('description', description)
                                                formData.append('price', price)
                                                let imageStatus = true
                                                console.log(img);

                                                if (imageStatus) {

                                                    formData.append('state', state)
                                                    formData.append('city', city)
                                                    formData.append('pincode', pincode)
                                                    formData.append('neighbourhood', neighbourhood)
                                                    formData.append('user_id', user_id)
                                                    formData.append('sellerType', sellerType)
                                                    formData.append('latitude', latitude)
                                                    formData.append('longitude', Longitude)
                                                    formData.append('images', cropdata[0])
                                                    formData.append('images', cropdata[1])
                                                    formData.append('images', cropdata[2])
                                                    formData.append('images', cropdata[3])
                                                    formData.append('images', cropdata[4])
                                                    formData.append('images', cropdata[5])
                                                    formData.append('images', cropdata[6])
                                                    formData.append('images', cropdata[7])
                                                    formData.append('images', cropdata[8])
                                                    formData.append('images', cropdata[9])
                                                    formData.append('images', cropdata[10])
                                                    formData.append('images', cropdata[11])
                                                    formData.append('images', cropdata[12])
                                                    formData.append('images', cropdata[13])
                                                    formData.append('images', cropdata[14])
                                                    formData.append('images', cropdata[15])
                                                    formData.append('images', cropdata[16])
                                                    formData.append('images', cropdata[17])
                                                    formData.append('images', cropdata[18])
                                                    formData.append('images', cropdata[19])
                                                    const api = `${baseUrl}/product/services/form/create`;
                                                    setLoader(true)
                                                    await axios.post(api, formData, {
                                                        headers: {
                                                            'Content-Type': 'multipart/form-data'
                                                        }
                                                    }).then((response) => {
                                                        if (response.data.status) {
                                                            setLoader(false)
                                                            toast('Successfully Created', {
                                                                position: "bottom-right",
                                                                autoClose: 5000,
                                                                hideProgressBar: false,
                                                                closeOnClick: true,
                                                                draggable: true,
                                                                progress: undefined,
                                                                theme: "colored",
                                                                type: 'success'
                                                            });
                                                            setTimeout(()=>{
                                                                nav('/')
                                                            } ,2000)
                                                            console.log(response.data.status);
                                                            // setposted('success')
                                                            // console.log(posted)
                                                            setMessage('Posted !');
                                                        } else {
                                                            setposted('fail')
                                                            console.log(false);
                                                            // seterrors(false)
                                                            setMessage('Please fill the details')
                                                        }
                                                    })

                                                }
                                            } else {
                                                setposted('fail')
                                                setError(false);
                                                setAllErrors(true)
                                                console.log("landmark error")
                                                sellerphoneRef.current.style.borderColor = 'red';
                                            }
                                        } else {
                                            setposted('fail')
                                            setError(false);
                                            setAllErrors(true)
                                            console.log("landmark error")
                                            neighbourhoodRef.current.style.borderColor = 'red';
                                        }

                                    } else {
                                        setError(false);
                                        setAllErrors(true)
                                        console.log("city error")
                                        pincodeRef.current.style.borderColor = 'red';
                                    }
                                } else {
                                    setError(false);
                                    setAllErrors(true)
                                    console.log("city error")
                                    cityRef.current.style.borderColor = 'red';
                                }
                            } else {
                                setError(false);
                                setAllErrors(true)
                                console.log("state error")
                                stateRef.current.style.borderColor = 'red';
                            }
                        } else {
                            setAllErrors(true)
                            setimageError("Please provide atleast 1 image");
                            console.log("image error")
                            // descriptionRef.current.style.borderColor = 'red';
                        }
                    } else {
                        setError(false);
                        setAllErrors(true)
                        console.log("price error")
                        priceRef.current.style.borderColor = 'red';
                    }
                } else {
                    setError(false);
                    setAllErrors(true)
                    console.log("description error")
                    setDescriptionError("Description should not be more than 300 words !")
                    descriptionRef.current.style.borderColor = 'red';
                }

            } else {
                setError(false);
                setAllErrors(true)
                console.log("title error")
                sellernameRef.current.style.borderColor = 'red';
            }
        } else {
            setError(false);
            setAllErrors(true)
            // usecheck(true);
            console.log("title error")
            setTitleError("Title should not be more than 60 words !")
            titleRef.current.style.borderColor = 'red';
        }


    }

    const handleChangeOtp = () => { }
    const Otpverify = async () => {
        setisOpen(false)
        const api = `${baseUrl}/users/otp/verify/profileUpdate`;
        await axios.post(api, {
            user_id: user_id,
            phone: sellerphone,
            name: sellername,
            otp: otp
        }).then((res) => {
            if (res.status) {
                setModalSellerPhone(sellerphone)
                // setMessage(res.message);
                console.log(res.data, 'Otp');
                toast("Add Successfully", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    type: 'success'
                });
                setOtpCondition(false)
            }
            else {
                // setotpError('invalid otp')

            }
        })
    }
    const Generate = async () => {
        console.log(sellerphone, 'Otp')
        let mobRegex = new RegExp('^[6-9]{1}[0-9]{9}$');
        // console.log("function started");
        // if (sellerphone.trim().length > 0 && sellerphone.trim().match(mobRegex)) {
        const api = `${baseUrl}/users/otp/genrate/formUpdate`;
        await axios.post(api, {
            "phone": sellerphone
        }).then((res) => {
            if (res.data) {
                setOtpCondition(true)
                // Otpverify()
                // setverify(true);
                setOtp(res.data.otp)
                // console.log(verify, 'var')
                console.log(res.data, 'Otp');
            }
            // }
        })
        // } else {
        // setError('Invalid Phone Number');
        // }


    }




    return (
        <>
            <div className="overflow-hidden">
                <Header />
                <h6 className="sub-Categories-Heading text-uppercase">services/{newcategory}</h6>
                <MyContainer>
                    <div className="container post border p-0">
                        <div className="heading-post-product">

                            POST YOUR ITEMS
                            {/* <h6 className="sub-Categories-Heading">{newcategory}</h6> */}
                        </div>
                        <hr />
                        <div className="container set-pd-post">
                            <div className="sub-heading-post">
                                Put Some Details
                            </div>


                            <input type="hidden" name="user_id" value={user_id} onChange={(e) => setUser_id(e.target.value)} /><br />
                            <input type="hidden" name='category' value={category2} hidden />
                            <input type="hidden" name='sellerType' value={sellerType} hidden />




                            <label for="title">TITLE*</label>
                            <input type="text" name="title" className="form-control set-pd-input-post" required placeholder="Enter Your Title"
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                    titleRef.current.style.borderColor = "#ced4da";
                                    setError("")
                                    setAllErrors("")
                                }}
                                value={title}
                                ref={titleRef}
                            />
                            {
                                title.length > 60 &&
                                <div className="titleerrormsg" style={{ color: "red" }} >{titleerror}</div>
                            }
                            <br />

                            <label for="description">ADD DESCRIPTION*</label>
                            <textarea name="description" id="" className="form-control" cols="30" rows="10" width="100%" placeholder="Enter Your Description"
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                    descriptionRef.current.style.borderColor = "#ced4da";
                                    setError("")
                                    setAllErrors("")
                                }} value={description}
                                ref={descriptionRef}
                            ></textarea>
                            {
                                description.length > 300 &&
                                <div className="titleerrormsg" style={{ color: "red" }} >{descriptionerror}</div>
                            }
                            {/* <br /> */}
                            <label for="price">SET PRICE*</label>
                            <br />
                            <input type="number" name="set_price" className="form-control set-pd-input-post" required placeholder="Amount"
                                onChange={(e) => {
                                    setPrice(e.target.value)
                                    priceRef.current.style.borderColor = "#ced4da";
                                    setError("")
                                    setAllErrors("")
                                }} value={price}
                                ref={priceRef}
                            />

                        </div>

                        <hr />

                        <div className="container set-pd-post">
                            <div className="sub-heading-post">
                                UPLOAD SOME PHOTOS
                            </div>
                            <div className="container mt-3 w-100">
                                <div className="imageAlert">Note:- only 20 images will be uploaded</div>
                                <div class="row ">
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>
                                    <div class="col-md-2 mt-3 col-6 col-lg-2">
                                        <CropImage2 cropdata={cropdata} setCropData={setCropData} />
                                    </div>


                                </div>
                                <div className="text-danger">{imageError}</div>
                            </div>
                            {/* <div className="errormsg" style={{ color: "red" }} >{hasError}</div> */}
                        </div>


                        <hr />
                        <div className="container set-pd-post">
                            <div className="sub-heading-post">
                                YOUR LOCATION
                            </div><br />
                            <div className="select-loaction">
                                <label for="state">STATE*</label>
                                <select id="State" name="location" className="form-control set-pd-input-post" required
                                    value={state}
                                    ref={stateRef}
                                    onChange={(e) => {
                                        setState(e.target.value)
                                        stateRef.current.style.borderColor = "#ced4da";
                                        setError("")
                                        setAllErrors("")
                                    }}>
                                    <option value="" disabled selected hidden>SELECT YOUR STATE*</option>
                                    <option value="Andaman & Nicobar Islands">Andaman &amp; Nicobar Islands</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Dadra & Nagar Haveli">Dadra &amp; Nagar Haveli</option>
                                    <option value="Daman & Diu">Daman &amp; Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu & Kashmir">Jammu &amp; Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Pondicherry">Pondicherry</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttaranchal">Uttaranchal</option>
                                    <option value="West Bengal">West Bengal</option>
                                </select>
                                <br />

                                <label for="city">CITY*</label>
                                <input type="text" name="city" className="form-control set-pd-input-post" required value={city} placeholder="Enter Your City"
                                    ref={cityRef}
                                    onChange={(e) => {
                                        setCity(e.target.value)
                                        cityRef.current.style.borderColor = "#ced4da";
                                        setError("")
                                        setAllErrors("")
                                    }} /><br />

                                <label for="pincode">PINCODE*</label>
                                <input type="number" name="pincode" className="form-control set-pd-input-post" required placeholder="Enter Your Pincode"
                                    value={pincode}
                                    ref={pincodeRef}
                                    onChange={(e) => {
                                        setPincode(e.target.value)
                                        pincodeRef.current.style.borderColor = "#ced4da";
                                        setError("")
                                        setAllErrors("")
                                    }} /><br />


                                <label for="neighbour">LANDMARK*</label>
                                <input type="text" name="neighbourhood" className="form-control set-pd-input-post" required value={neighbourhood} placeholder="Enter Your Landmark"
                                    ref={neighbourhoodRef}
                                    onChange={(e) => {
                                        setNeighbourhood(e.target.value)
                                        neighbourhoodRef.current.style.borderColor = "#ced4da";
                                        setError("")
                                        setAllErrors("")
                                    }} />
                            </div>
                        </div>
                        <hr />
                        <div className="container set-pd-post">
                            <div className="sub-heading-post">
                                PUT YOUR DETAILS
                            </div><br />
                            <div className="myi">
                                <div className=" nameTextClass">
                                    <div className=" d-flex text-align-left m-2 p-1">
                                        <div className="preview-container shadow shadowclass">
                                            <span className="fileName d-block my-2"></span>

                                            <div
                                                style={{
                                                    height: "80px",
                                                    width: "80px",
                                                    borderRadius: "50%",
                                                    overflow: 'hidden'

                                                }}


                                            >
                                                <img
                                                    src={ProfileImage}
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        borderRadius: "50%",
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nameControl">
                                        <label for="name" >NAME*</label>
                                        <input type="text" name="name" className="form-control set-pd-input-post nameField" required
                                            value={sellername}
                                            readOnly
                                            ref={sellernameRef}
                                            onChange={(e) => {
                                                setSellerName(e.target.value)
                                                sellernameRef.current.style.borderColor = "#ced4da";
                                                setError("")
                                                setAllErrors("")
                                            }} />
                                    </div>

                                </div>
                            </div>
                            <br />
                            <div className="sub-heading-post">
                                VERIFICATION
                            </div>
                            <p>We will send you OTP on your number</p><br />
                            <label for="phone">Phone Number*</label>
                            <div className="UpdateNum" onClick={OnOpen}>
                                <input type="text" name="number" className="form-control set-pd-input-post" required
                                    onChange={(e) => {
                                        // setSellerPhone(e.target.value)
                                        // sellerphoneRef.current.style.borderColor = "#ced4da";
                                        setError("")
                                        setAllErrors("")
                                    }}
                                    value={ModalSellerPhone}
                                    ref={sellerphoneRef}
                                    readOnly
                                />
                            </div>
                            <div className="text" style={{ color: "red" }}>{hasError}</div>
                            {/* <br /> */}
                            {
                                !ModalSellerPhone && <div className="text-danger">please add your number</div>
                            }
                            <div className="UpdateNum w-100">
                                {
                                    !ModalSellerPhone ? <p className="fs-6 float-end text-primary" onClick={OnOpen}>Add Your Number</p> :
                                        <p className=" float-end text-primary" onClick={OnOpen}>Update Your Number</p>
                                }
                            </div>
                            <div className="text" style={{ color: "red" }}>{hasError}</div>
                            <br />
                            <OTPTAG>

                                {

                                    // (sellerphone.length >= 10) ?
                                    <>
                                        <OtpPop
                                            {
                                            ...{
                                                Otpverify,
                                                Generate,
                                                otp,
                                                setOtp,
                                                OtpCondition, setOtpCondition,
                                                setModalSellerPhone,
                                                setSellerPhone,
                                                sellername,
                                                sellerphone,
                                                user_id,
                                                handleChangeOtp,
                                                isOpen,
                                                setisOpen,
                                                Onclose,
                                                OnOpen
                                            }
                                            }
                                        />
                                        <div className="text" style={{ color: "red" }}>{otpError}</div>
                                        <br />


                                    </>

                                }
                            </OTPTAG>
                            {
                                (PhoneNumber !== null) &&
                                // (verify) &&
                                <div className="post-pr">

                                    <input type="submit" name="submit" value="POST NOW" onClick={() => sumbit()}
                                        onChange={(e) => {
                                            setMessage('')
                                        }} />
                                    {Loader && <Spinner className="ChkraSpin" />}
                                </div>

                            }
                            {/* <div >{otpError}</div> */}
                            <Stack spacing={3}>
                                {AllErrors && <Text color='tomato' fontSize='13px' mt='5'>Invalid Field </Text>}
                            </Stack>
                            {/* {errors &&
                            <div className="messageClass" role="alert" style={{ color: 'green' }}>
                                {message}
                            </div>
                        } */}
                        </div>

                    </div>
                </MyContainer>
            </div>
            <Footer />
        </>
    )
}


export default Service;
const OTPTAG = styled.div`
OTP input {

padding: 17px;
}
`
const MyContainer = styled.div`
    input::placeholder{
        font-size: 12px;
        padding-left: 10px;
    }
    textarea::placeholder{
        padding-left: 10px;
        font-size: 12px;
    }
`