import React, { useState } from "react";

import Cropper from "react-easy-crop";
import styled from "styled-components";
function ImageCropper({ image, onCropDone, onCropCancel, Onclose, OnOpen, setisOpen, isOpen, }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  // const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(16 / 9);
  const [zoom, setZoom] = useState(1)

  const filename = 'ajay.jpeg'
  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };
  console.log(croppedArea)
  const onAspectRatioChange = (event) => {
    setAspectRatio(event.target.value);
  };

  return (


    <div className="boxContainer" >
      <div className="cropper" >

        <Cropper
          image={image}
          aspect={aspectRatio}
          zoom={zoom}
          crop={crop}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          // style={{
          //   containerStyle: {
          //     width: "30vw",
          //     height: "40vh",
          //     position: "fixed",
          //     left: "0%",
          //     right: "0%",
          //     marginLeft: "35%",
          //     top: "30%",
          //     zIndex:2,
          //   },
          // }}
        />

      </div>
      <ActionButton className="action-btns" >
        {/* <div className="aspect-ratios" style={{marginBottom:"2%"}} onChange={onAspectRatioChange}>
        </div> */}
        <div className="aspect-ratios" onChange={onAspectRatioChange}>
        <div className="image-radio-button">
          <div className="borderClass border ">
            <input className="radio" type="radio" name="type" id="inlineRadio1"
              value={16/ 14}
              // checked={type === '16/14'}
            />
            <label className="form-check-label" for="inlineRadio1">16:9</label>
          </div>
          {/* <input type="radio" value={16/ 14} name="ratio" style={{color:"white"}}/> 16:9 */}
          <div className="borderClass border ">
          <input className="radio" type="radio" value={9 / 14} name="type" id="inlineRadio2" />
           <label className="form-check-label" for="inlineRadio2">5:4</label>
          </div>
          <div className="borderClass border ">
          <input className="radio" type="radio" value={4 / 3} name="type" id="inlineRadio3" /> 
          <label className="form-check-label" for="inlineRadio3">5:3</label>
          </div>
          <div className="borderClass border ">
          <input  className="radio" type="radio" value={3 / 2} name="type" id="inlineRadio4" />
          <label className="form-check-label" for="inlineRadio4"> 3:2</label>
          </div>
        </div>
        </div>
           
           <div className="button-gap">
        <button className="btn btn-outline" style={{ color: "black" , backgroundColor:"white", fontWeight:700, borderRadius:"20px", opacity:0.8}} onClick={onCropCancel}>
          Cancel
        </button>

        <button
          className="btn"
          style={{ color: "black" , backgroundColor:"white" , fontWeight:700 , borderRadius:"20px" , opacity:0.8}}
          onClick={() => onCropDone(croppedArea, filename)
          }
        >
          Done
        </button>
        </div>
      </ActionButton>

    </div>
  )
}
export default ImageCropper;

const ActionButton = styled.div`
  position: fixed;
  background: linear-gradient(var(--color1), var(--color2));
  top: 64%;
  left: 50%;
  transform: translate(-50%, 10px);
  margin-top: 31px; 
  border-bottom-right-radius: 18px;
  border-bottom-left-radius: 18px;
  width: 30%; 
  height:21vh; 
   opacity:1;
   @media screen and (max-width: 600px){
    z-index: 20;
    border-bottom-right-radius: 18px;
    border-bottom-left-radius: 18px;
    width: 85% !important;
    height: 18vh !important;
    opacity: 1;
    margin-top: -17% !important;
   }

  @media screen and (min-width : 601px) and (max-width: 900px ){
    z-index: 20;
    border-bottom-right-radius: 18px;
    border-bottom-left-radius: 18px;
    width: 44% !important;
    height: 12vh !important;
    opacity: 1;
    margin-top: -16% !important;
  }
  
  `
