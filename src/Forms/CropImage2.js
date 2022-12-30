
import React, { useState,useRef } from "react";
import ImageCropper from "../form/form/Modals/ImageCropper";
import camera from '../assets/images/camera.png';
import axios from 'axios'
function CropImage2({cropdata,setCropData}) {
 
  const [image, setImage] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [imgAfterCrop, setImgAfterCrop] = useState('');
  const [Data,SetData] = useState(null)
 

  const inputRef = useRef();

  const handleOnChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function (e) {
        onImageSelected(reader.result);
      };
    }
  };

  const onChooseImg = () => {
    // setisOpen(true)
    inputRef.current.click();
  };
  const onImageSelected = (selectedImg) => {
    setImage(selectedImg);
    setCurrentPage("crop-img");
  };

  // Generating Cropped Image When Done Button Clicked
  const onCropDone =(imgCroppedArea,filename)=> {
    const canvas = document.createElement("canvas");
    canvas.width = imgCroppedArea.width;
    canvas.height = imgCroppedArea.height;
    console.log("croooped image", imgCroppedArea)
    const context = canvas.getContext("2d");

    let imageObj1 = new Image();

   console.log("image url daata", imageObj1)
    imageObj1.src = image;
    console.log("cropped image", imageObj1)
    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height
      );
      const dataURL = canvas.toDataURL("image/jpeg");
      console.log(dataURL)
      console.log(dataURL, "dataURL of cropped iMAGE")
      setImgAfterCrop(dataURL)
      // setCurrentPage("img-cropped");
      canvas.toBlob((blob) => {
        blob.name = filename
        console.log(blob)
        // setImgAfterCrop(blob)
        // 
        const newImage = new File([blob], blob.name, { type: blob.type });
        setCropData([newImage, ...cropdata])
        setCurrentPage("choose-img")
     
        
      })

    //   const dataURL = canvas.toDataURL("image/jpeg");

    //   canvas.toBlob((blob)=>{
    //     blob.name = filename
    //     console.log(blob)
    //     const newImage = new File([blob], blob.name, { type: blob.type });
    //     console.log(newImage)
    //   })

    //   setImgAfterCrop(dataURL, "cropped image data found");
    //   console.log(dataURL)
    //   console.log(dataURL,"dataURL of cropped iMAGE")
    //   setCurrentPage("img-cropped");
    //   setImgAfterCrop(dataURL)
      // 
    };
  };

  // Handle Cancel Button Click
  const onCropCancel = () => {
    setCurrentPage("choose-img");
    setImage("");
  };

  return (
    <div className="container text-center">
      {currentPage === "choose-img" ? (
   imgAfterCrop === '' ?
   <div >
     <div className="ImagecontainerBorder" onClick={onChooseImg} style={{cursor : 'pointer'}}>
       <input
         type="file"
         accept="image/*"
         ref={inputRef}
         onChange={handleOnChange}
         style={{ display: "none" }}
       />
       <img src={camera} className="material-symbols-outlined" onClick={onChooseImg} style={{width:'28%' , marginTop:'32%' }} />
     </div>
   </div> :
   <div className="imagePreviewContainer" >
     <div className="d-flex">
       {console.log(imgAfterCrop , "showing image")}
     <img src={imgAfterCrop} className="imageafterCrop" />
     <span class="material-symbols-outlined" onClick={() => setImgAfterCrop('')} style={{color: "white", position:"absolute" , marginLeft: '6%'}}>
       x
     </span>
     </div>

   </div> ) : currentPage === "crop-img" ? (
    // <ImageCropper  Onclose={Onclose} OnOpen={OnOpen} isOpen={isOpen} setisOpen={setisOpen} image={image}
    // onCropDone={onCropDone}
    // onCropCancel={onCropCancel} />
        <ImageCropper
          image={image}
          onCropDone={onCropDone}
          onCropCancel={onCropCancel}
        />
      ) : (
        <div>
          <div>
            <img src={imgAfterCrop} className="cropped-img" style={{height: "12vh",
    width: "auto"}}/>
          </div>

          <button
            onClick={() => {
              setCurrentPage("crop-img");
            }}
            className="btn"
          >
            Crop
          </button>

          <button
            onClick={() => {
              setCurrentPage("choose-img");
              setImage("");
            }}
            className="btn"
          >
            New Image
          </button>
        </div>
      )}
    </div>
  );
}

export default CropImage2;