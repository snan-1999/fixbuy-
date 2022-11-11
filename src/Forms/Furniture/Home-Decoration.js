import React, { useState , useRef } from "react";
import Footer from "../../form/form/Footer";
import Header from "../../form/form/header";
import ImageUploading from 'react-images-uploading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import facebook from '../../assets/images/facebook.png'
// import { ElectronicsFunc } from "../../functions/ElectronicsApi";
import { baseUrl } from "../../functions/constant";
import axios from 'axios';
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

const HomeDecoration = () => {
    const { category2 } = useParams();
    const IdData = localStorage.getItem('token');
    let ProfileNameForm = JSON.parse(IdData).profileName;
    let PhoneNumber = JSON.parse(IdData).phone;
    let ProfileImage = JSON.parse(IdData).profileImg;
    let ProfleId = JSON.parse(IdData).token;
    const Type = JSON.parse(IdData).type;   
    // console.log(ProfleId);
    const [user_id, setUser_id] = useState(ProfleId)
    const [img, setImg] = useState('');
    const [pincode, setPincode] = useState('');
    const [title, setTitle] = useState('');
    const [sellerphone, setSellerPhone] = useState(PhoneNumber);
    const [posted, setposted] = useState('');
    // const [categories, setCategories] = useState('fridge');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [sellername, setSellerName] = useState(ProfileNameForm);
    const [sellerType, setSellerType] = useState(Type);
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [neighbourhood, setNeighbourhood] = useState('');
    const [hasError, setError] = useState('')
    const [message, setMessage] = useState('');
    const titleRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const stateRef = useRef();
    const cityRef = useRef();
    const neighbourhoodRef = useRef();
    const pincodeRef = useRef();
    const sellernameRef = useRef();
    const imgRef = useRef();
    const sellerphoneRef = useRef();

    console.log(category2)

    const maxNumber = 20;

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

        if (title.trim().length > 0) {
            if (sellername.trim().length >= 0) {
                if (description.trim().length > 0) {
                    if (price.trim().length > 0) {
                        if ((img.length <= 20) && (img.length > 0)) {
                            if (state.trim().length > 0) {
                                if (city.trim().length > 0) {
                                    if (pincode.trim().length > 0) {
                                        if (neighbourhood.trim().length > 0) {
                                        if (sellerphone.trim().length > 0) {
                                            setError(true)
                                            formData.append('sellername', sellername)
                                            // formData.append('brand', brand)
                                            formData.append('title', title)
                                            formData.append('sellerphone', sellerphone)
                                            formData.append('categories', category2)
                                            formData.append('description', description)
                                            formData.append('price', price)
                                            formData.append('longitude' , "28.663996")
                                            formData.append('latitude' , "77.306843")
                                            let imageStatus = true
                                            console.log(img);
                                            img.forEach(imgs => {
                                                // console.log(imgs.file.type)
                                                if ((imgs.file.type !== 'image/jpeg') && (imgs.file.type !== 'image/jpg') && (imgs.file.type !== 'image/heic') && (imgs.file.type !== 'image/heif') && (imgs.file.type !== "image/png") && (imgs.file.type == 'image/webp')) {
                                                    console.log(imgs.file.type)
                                                    alert("File does not support .webp extension ");
                                                    imageStatus = false
                                                    return false;


                                                }
                                                formData.append("images", imgs.file)
                                            });
                                            // formData.append('images', img)
                                            // if()
                                            if (imageStatus) {
                                                formData.append('state', state)
                                                formData.append('city', city)
                                                formData.append('neighbourhood', neighbourhood)
                                                formData.append('user_id', user_id)
                                                formData.append('sellerType', sellerType)
                                                const api = `${baseUrl}/product/furnitures/form/create`;
                                                await axios.post(api, formData, {
                                                    headers: {
                                                        'Content-Type': 'multipart/form-data'
                                                    }
                                                }).then((response) => {
                                                    if (response.data.status) {
                                                        console.log(response.data.status);
                                                        setposted('success')
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
                                            setError(false);
                                            console.log("sellerphone error")
                                            sellerphoneRef.current.style.borderColor = 'red';
                                        }
                                        } else {
                                            setposted('fail')
                                            setError(false);
                                            console.log("landmark error")
                                            neighbourhoodRef.current.style.borderColor = 'red';
                                        }
                                    } else {
                                        setError(false);
                                        console.log("pincode error")
                                        pincodeRef.current.style.borderColor = 'red';
                                    }
                                } else {
                                    setError(false);
                                    console.log("city error")
                                    cityRef.current.style.borderColor = 'red';
                                }
                            } else {
                                setError(false);
                                console.log("state error")
                                stateRef.current.style.borderColor = 'red';
                            }
                        } else {
                            setError("Please provide atleast 1 image");
                            console.log("image error")
                            // descriptionRef.current.style.borderColor = 'red';
                        }
                    } else {
                        setError(false);
                        console.log("price error")
                        priceRef.current.style.borderColor = 'red';
                    }
                } else {
                    setError(false);
                    console.log("description error")
                    descriptionRef.current.style.borderColor = 'red';
                }
            } else {
                setError(false);
                console.log("title error")
                sellernameRef.current.style.borderColor = 'red';
            }
        } else {
            setError(false);
            console.log("title error")
            titleRef.current.style.borderColor = 'red';
        }


    }




    return (
        <>
            <Header />
            <div class="container post border p-0">
                <div class="heading-post-product">
                    {/* <input type="text" name='category' value={category2} /> */}
                    {/* <h3>hello</h3> */}
                    POST YOUR ITEMS
                    <h6 className="sub-Categories-Heading">{newcategory}</h6>
                </div>
                <hr />
                <div class="container set-pd-post">
                    <div class="sub-heading-post">
                        Put Some Details
                    </div>
                    {/* <br /> */}
                    {/* <form action="<?php echo $server_name; ?>/api-call/car-product-api-call.php" method="post" enctype="multipart/form-data"> */}

                    <input type="hidden" name="user_id" value={user_id} onChange={(e) => setUser_id(e.target.value)} /><br />
                    <input type="hidden" name='category' value={category2} hidden />
                    <input type="hidden" name='sellerType' value={sellerType} hidden />

                    <label for="brand">TITLE*</label>
                    <input type="text" name="title" class="form-control set-pd-input-post" required 
                    onChange={(e) => {
                        setTitle(e.target.value)
                        titleRef.current.style.borderColor = "#ced4da";
                        setError("")
                    }} 
                    value={title} 
                    ref={titleRef}
                    /><br />

                    <label for="description">ADD DESCRIPTION*</label>
                    <textarea name="description" id="" class="form-control" cols="30" rows="10" width="100%" 
                    onChange={(e) => {
                        setDescription(e.target.value)
                        descriptionRef.current.style.borderColor = "#ced4da";
                        setError("")
                    }} 
                    value={description}
                    ref={descriptionRef}
                    ></textarea>
                    {/* <br />
                    <br /> */}
                    <br />
                    <label for="price">SET PRICE*</label>
                    <br />
                    <input type="text" name="set_price" class="form-control set-pd-input-post" required 
                    onChange={(e) => {
                        setPrice(e.target.value)
                        priceRef.current.style.borderColor = "#ced4da";
                        setError("")
                    }} 
                    value={price} 
                    ref={priceRef}
                    />

                </div>
                {/* </input> */}
                {/* <hr /> */}
                {/* <div class="container set-pd-post">
                <label for="description">SET PRICE</label>
                    <br />
                    <input type="text" name="set_price" class="form-control set-pd-input-post" placeholder="PRICE*" required />
                </div> */}
                <hr />
                {/* <br /> */}
                <div class="container set-pd-post">
                    <div class="sub-heading-post">
                        UPLOAD SOME PHOTOS
                    </div>
                    <div class="container mt-3 w-100">
                        <div class="imageAlert">Note:- only 20 images will be uploaded</div>
                        <ImageUploading
                            multiple
                            value={img}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                        >
                            {({
                                imageList,
                                onImageUpload,
                                onImageRemove,
                                onImageUpdate,
                            }) => (
                                // write your building UI
                                <div className="upload__image-wrapper">

                                    &nbsp;
                                    <div className="">

                                        <div className="row p-0 m-0 d-flex justify-content-center align-items-center">
                                            {imageList.map((image, index) => (
                                                <div key={index} className="image-item mt-4 ms-4 col-2">
                                                    <img src={image['data_url']} alt="" width="100" />
                                                    <div className="image-item__btn-wrapper">
                                                        {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                                                        <FontAwesomeIcon icon="fa-sharp fa-solid fa-circle-xmark" className="icon" onClick={() => onImageRemove(index)}></FontAwesomeIcon>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="setFloat">

                                        <button class=" btn btn-sm buttonChoose"
                                            onClick={onImageUpload}
                                        //   {...dragProps}
                                        >
                                            Choose Images
                                        </button>
                                    </div>
                                </div>
                            )}
                        </ImageUploading>

                    </div>
                    <div className="errormsg" style={{ color: "red" }} >{hasError}</div>
                </div>


                <hr />
                <div class="container set-pd-post">
                    <div class="sub-heading-post">
                        YOUR LOCATION
                    </div><br />
                    <div class="select-loaction">
                        <label for="state">STATE*</label>
                        <select id="State" name="location" class="form-control set-pd-input-post" required 
                        value={state} 
                        ref={stateRef}
                        onChange={(e) => {
                            setState(e.target.value)
                            stateRef.current.style.borderColor = "#ced4da";
                        setError("")
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
                        <input type="text" name="city" class="form-control set-pd-input-post" required 
                        value={city} 
                        ref={cityRef}
                        onChange={(e) => {
                            setCity(e.target.value)
                            cityRef.current.style.borderColor = "#ced4da";
                        setError("")
                            }} /><br />


                        <label for="pincode">PINCODE*</label>
                        <input type="text" name="pincpde" class="form-control set-pd-input-post" required 
                        value={pincode} 
                        ref={pincodeRef}
                        onChange={(e) => {
                            setPincode(e.target.value)
                            pincodeRef.current.style.borderColor = "#ced4da";
                        setError("")
                            }} /><br />


                        <label for="neighbour">LANDMARK*</label>
                        <input type="text" name="neighbourhood" class="form-control set-pd-input-post" required 
                        value={neighbourhood} 
                        ref={neighbourhoodRef}
                        onChange={(e) => {
                            setNeighbourhood(e.target.value)
                            neighbourhoodRef.current.style.borderColor = "#ced4da";
                        setError("")
                        }} />
                    </div>
                </div>
                <hr />
                <div class="container set-pd-post">
                    <div class="sub-heading-post">
                        PUT YOUR DETAILS
                    </div><br />
                    <div class="myi">
                        <div class=" nameTextClass">
                            <div class=" d-flex text-align-left m-2 p-1">
                                <div class="preview-container shadow shadowclass">
                                    <span class="fileName d-block my-2"></span>
                                    {/* <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        ref={imageUploader}
                                        style={{
                                            display: "none"
                                        }}
                                    />*/}
                                    <div
                                        style={{
                                            height: "80px",
                                            width: "80px",
                                            borderRadius: "50%",
                                            overflow: 'hidden'

                                        }}
                                    // onClick={() => imageUploader.current.click()}

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
                                <input type="text" name="name" class="form-control set-pd-input-post nameField" required 
                                value={sellername} 
                                ref={sellernameRef}
                                onChange={(e) => {
                                    setSellerName(e.target.value)
                                    sellernameRef.current.style.borderColor = "#ced4da";
                        setError("")
                                    }} />
                            </div>

                        </div>
                    </div>
                    <br />
                    <div class="sub-heading-post">
                        VERIFICATION
                    </div>
                    <p>We will send you OTP on your number</p><br />
                    <label for="phone">Phone Number*</label>
                    <input type="text" name="number" class="form-control set-pd-input-post" required
                    onChange={(e) => {
                        setSellerPhone(e.target.value)
                        sellerphoneRef.current.style.borderColor = "#ced4da";
                        setError("")
                    }}
                    value={sellerphone}
                    ref={sellerphoneRef}
                    /><br />

                    <div class="post-pr">
                        <input type="submit" name="submit" value="POST NOW" onClick={sumbit} />
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default HomeDecoration;