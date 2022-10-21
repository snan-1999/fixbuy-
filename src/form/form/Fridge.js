import React from "react";
import Footer from "./Footer";
import Header from "./header";
import ImageUploading from 'react-images-uploading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";

const Fridge = () => {

    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };


    return (
        <>
            <Header />
            <div class="container post border p-0">
                <div class="heading-post-product">
                    POST YOUR ITEMS
                </div>
                <hr />
                <div class="container set-pd-post">
                    <div class="sub-heading-post">
                        Include Some Details
                    </div>
                    <br />
                    {/* <form action="<?php echo $server_name; ?>/api-call/car-product-api-call.php" method="post" enctype="multipart/form-data">
     */}
                    <input type="hidden" name="user_id" value="<?php echo $_SESSION['user_id'] ?>" /><br />
                    <input type="hidden" name="seller_name" value="<?php echo $_SESSION['username'] ? >" /><br />

                    <label for="title">PHONE No.*</label>
                    <input type="text" name="seller_phone" placeholder="SELLER PHONE*" class="form-control set-pd-input-post" required /><br />

                    <input type="hidden" name="main_category" value="Cars" placeholder="MAIN CATEGORY*" class="form-control set-pd-input-post" /><br />
                    <label for="title">SUB CATEGORY*</label>
                    <input type="text" name="sub_category" value="cars" placeholder="SUB CATEGORY*" class="form-control set-pd-input-post" required /><br />



                    <label for="brand">BRAND*</label>
                    <input type="text" name="seller_phone" placeholder="" class="form-control set-pd-input-post" required /><br />
                    {/* <select id="make" name="brand" class="form-control set-pd-input-post" required> */}
                    {/* <option value=""></option>
                    <optgroup label="Popular Brand"></optgroup>
                    <option value="maruti-suzuki">Maruti Suzuki</option>
                    <option value="hyundai">Hyundai</option>
                    <option value="tata">Tata</option>
                    <option value="mahindra">Mahindra</option>
                    <option value="toyota">Toyota</option>
                    <option value="cars-honda">Honda</option>
                    <optgroup label="All Brand"></optgroup>
                    <option value="ashok">Ashok</option>
                    <option value="aston">Aston</option>
                    <option value="hindustan">Hindustan</option>
                    <option value="mercedes-benz-1">Mercedes Benz</option>
                    <option value="ambassador">Ambassador</option>
                    <option value="ashok-leyland">Ashok Leyland</option>
                    <option value="aston-martin">Aston Martin</option>
                    <option value="audi">Audi</option>
                    <option value="bajaj1">Bajaj</option>
                    <option value="bentley">Bentley</option>
                    <option value="bmw">BMW</option>
                    <option value="bugatti">Bugatti</option>
                    <option value="cadillac">Cadillac</option>
                    <option value="caterham">Caterham</option>
                    <option value="chevrolet">Chevrolet</option>
                    <option value="chrysler">Chrysler</option>
                    <option value="citroen">Citroen</option>
                    <option value="conquest">Conquest</option>
                    <option value="daewoo">Daewoo</option>
                    <option value="datsun">Datsun</option>
                    <option value="dc">Dc</option>
                    <option value="dodge">Dodge</option>      
                    <option value="eicher-polaris">Eicher Polaris</option>
                    <option value="ferrari">Ferrari</option>
                    <option value="fiat">Fiat</option>
                    <option value="force-motors">Force Motors</option>
                    <option value="ford">Ford</option>
                    <option value="hindustan-motors">Hindustan Motors</option>
                    <option value="cars-honda">Honda</option>
                    <option value="hummer">Hummer</option>
                    <option value="hyundai">Hyundai</option>
                    <option value="icml">ICML</option>
                    <option value="infiniti">Infiniti</option>
                    <option value="isuzu">Isuzu</option>
                    <option value="jaguar">Jaguar</option>
                    <option value="jeep">Jeep</option>
                    <option value="kia">Kia</option>
                    <option value="lamborghini">Lamborghini</option>
                    <option value="land-rover">Land Rover</option>
                    <option value="lexus">Lexus</option>
                    <option value="mahindra">Mahindra</option>
                    <option value="mahindra-renault">Mahindra Renault</option>
                    <option value="maruti-suzuki">Maruti Suzuki</option>
                    <option value="maserati">Maserati</option>
                    <option value="maybach">Maybach</option>
                    <option value="mazda">Mazda</option>
                    <option value="mercedes-benz">Mercedes-Benz</option>
                    <option value="mg">MG</option>
                    <option value="mini">Mini</option>
                    <option value="mitsubishi">Mitsubishi</option>
                    <option value="nissan">Nissan</option>
                    <option value="opel">Opel</option>
                    <option value="peugeot">Peugeot</option>
                    <option value="porsche">Porsche</option>
                    <option value="premier">Premier</option>
                    <option value="renault">Renault</option>
                    <option value="rolls-royce">Rolls-Royce</option>
                    <option value="san">San</option>
                    <option value="sipani">Sipani</option>
                    <option value="skoda">Skoda</option>
                    <option value="smart">Smart</option>
                    <option value="ssangyong">Ssangyong</option>
                    <option value="subaru">Subaru</option>
                    <option value="tata">Tata</option>
                    <option value="tesla">Tesla</option>
                    <option value="toyota">Toyota</option>
                    <option value="volkswagen">Volkswagen</option>
                    <option value="volvo">Volvo</option>
                    <option value="cars-other">Other Brands</option> */}
                    {/* </select> */}

                    {/* <BR /> */}

                    <label for="title">MODEL & YEAR</label>
                    <input type="text" name="year" placeholder="MODEL & YEAR" class="form-control set-pd-input-post" /><br />

                    <label for="title">KM DRIVEN</label>
                    <input type="text" name="km_driven" placeholder="km" class="form-control set-pd-input-post" /><br />

                    <label for="title">NO. OF OWNERS</label>
                    <input type="text" name="no_of_owner" placeholder="NO. OF OWNERS" class="form-control set-pd-input-post" /><br />

                    <label for="title">ADD TTILE*</label>
                    <input type="text" name="ad_title" placeholder="ADD TITLE*" class="form-control set-pd-input-post" required /><br />
                    <textarea name="description" id="" class="form-control" cols="30" rows="10" width="100%" placeholder="DESCRIPTION"></textarea>
                    <br />
                    <br />

                </div>
                {/* </input> */}
                <hr />
                <div class="container set-pd-post">
                    <div class="sub-heading-post">
                        SET A PRICE
                    </div>
                    <br />
                    <input type="text" name="set_price" class="form-control set-pd-input-post" placeholder="PRICE*" required />
                </div>
                <hr />
                <br />
                <div class="container set-pd-post">
                    <div class="sub-heading-post">
                        UPLOAD SOME PHOTOS
                    </div>
                    <div class="container mt-3 w-100">
                        {/* <div class="card shadow-sm w-100">
                            <div class="card-header d-flex justify-content-between"> */}
                        <div class="imageAlert">Note:- only 20 images will be uploaded</div>
                        <ImageUploading
                            multiple
                            value={images}
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
                                    {/* <div className="setFloat">

<button class=" btn btn-sm buttonChoose"
onClick={onImageUpload}
//   {...dragProps}
>
Choose Images
</button>
</div> */}
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
                        {/* <div class="form" id="form">
                            <input type="file" name="pdt_image[]" id="image2"  multiple class="d-none images" onchange="image_select(2)" />
                        </div> */}
                        {/* <button class=" btn btn-sm buttonChoose" type="button" onclick="document.getElementById('image2').click()">Choose image</button>                  */}
                        {/* <!-- </form> --> */}
                    </div>
                    {/* <div class="card-body d-flex flex-wrap justify-content-start containerImages" >
                            </div> */}
                    {/* </div>
                    </div> */}
                </div>


                <hr />
                <div class="container set-pd-post">
                    <div class="sub-heading-post">
                        CONFIRM YOUR LOCATION
                    </div><br />
                    <div class="select-loaction">
                        <label for="title">ADDRESS*</label>
                        {/* <!--<input type="text" name="address" placeholder="STREET*" class="form-control set-pd-input-post" required><br>--> */}
                        <input type="text" name="city" placeholder="CITY*" class="form-control set-pd-input-post" required /><br />
                        <select id="State" name="location" class="form-control set-pd-input-post" placeholder="SELECT YOUR STATE*" required>
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
                        {/* </div> */}
                        <div class="post-pr">
                            {/* <!-- <a href="#" name ="submit" >POST NOW</a> --> */}
                            <input type="submit" name="submit" value="POST NOW" />
                        </div>

                        {/* </form> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Fridge;