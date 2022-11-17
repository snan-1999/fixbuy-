import React, { useState } from "react";


import ImageCropper from "./ImageCOmpressor";

function App() {
  const [imageToCrop, setImageToCrop] = useState(undefined);
  const [croppedImage, setCroppedImage] = useState(undefined);

  const onUploadFile = (event) => {

    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const image = reader.result;

        setImageToCrop(image);
        console.log(image)
        console.log(imageToCrop)
      });
      
      reader.readAsDataURL(event.target.files[0]);
      // console.log(event.target.files[0])
    }
  };

  return (
    <div className="app">
      <input type="file" accept="image/*" onChange={onUploadFile} />
      <div>
        <ImageCropper
          imageToCrop={imageToCrop}
          onImageCropped={(croppedImage) => setCroppedImage(croppedImage)}
        />
      </div>
      {croppedImage && (
        <div>
          <h2>Cropped Image</h2>
          <img alt="Cropped Img" src={croppedImage} />
        </div>
      )}
      <img alt="Cropped Img" src={imageToCrop} className='w-25'/>
    </div>
  );
}

export default App;
