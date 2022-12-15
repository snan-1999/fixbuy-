import React, { useState } from "react";

import Cropper from "react-easy-crop";
import styled from "styled-components";
function ImageCropper({ image, onCropDone, onCropCancel, Onclose, OnOpen, setisOpen, isOpen, }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  // const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(16 / 9);

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
      <div className="cropper" style={{ height: "4vh", width: "20%" }}>

        <Cropper
          image={image}
          aspect={aspectRatio}
          crop={crop}

          onCropChange={setCrop}
          // onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={{
            containerStyle: {
              width: "30vw",
              height: "40vh",
              backgroundColor: "grey",
              position: "fixed",
              left: "0%",
              right: "0%",
              marginLeft: "35%",
              top: "30%"
              // backgroundColor: "#fff",

            },
          }}
        />

        <ActionButton className="action-btns">
          {/* <div className="aspect-ratios" style={{marginBottom:"2%"}} onChange={onAspectRatioChange}>
        </div> */}

          <button className="btn btn-outline" style={{ color: "white" }} onClick={onCropCancel}>
            Cancel
          </button>

          <button
            className="btn"
            style={{ color: "white" }}
            onClick={() => onCropDone(croppedArea, filename)
            }
          >
            Done
          </button>
        </ActionButton>

      </div>
    </div>
  )
}
export default ImageCropper;

const ActionButton = styled.div`
  position: fixed;
  top: 64%;
  left: 50%;
  /* margin-left: 18%; */
  transform: translate(-50%, 10px);
  `
