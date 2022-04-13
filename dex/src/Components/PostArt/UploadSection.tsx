import React, { useState } from "react";
import axios from "axios";

import "./UploadSection.scss";
// import LoadingDots from "../../Pictures/loading-dotsV2.gif";
const UploadSection = () => {
  const [file, setFile] = useState(null);
  const [inputContainsfile, setInputContainsFile] = useState(false);
  const [currentlyUploading, setcurrentlyUploading] = useState(false);
  const [imageId, setimageId] = useState(null);
  const [progress, setProgress] = useState(null);

  const handleFile = (event) => {
    setFile(event.target.files[0]);
    setInputContainsFile(true);
  };

  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", file, file.name);
    axios.post(`/api/image/upload`, fd, {
      onUploadProgress: (progressEvent) => {
        setProgress((progressEvent.loaded / progressEvent.total) * 100);
        console.log(
          "upload progress: ",
          Math.round((progressEvent.loaded / progressEvent.total) * 100)
        );
      },
    }).then(({data}) => { 
      setimageId(data); 
      setFile(null); 
      setInputContainsFile(false);
      setcurrentlyUploading(false);
    }). catch((err)=> { 
        console.log(err); 
        if(err.response.status === 400) { 
            const errMessage = err.response.data; 
            if(errMessage){ 
                console.log(errMessage);
                alert(errMessage);
            }
        }
        else { 
            console.log('other error:', err); 
            setInputContainsFile(false); 
            setcurrentlyUploading(false); 

        }
    })
  };

  const handleClick = () => {
    if (inputContainsfile) {
      setcurrentlyUploading(true);
      fileUploadHandler();
    }
  };

  return (
    <div className="regular">
        <div className="image-section">
            {imageId ? ( 
            <>
            <img className="image" src={`/api/image/${imageId}`} alt="regular version" />
            <a className="link" href={`/api/image/${imageId}`} target="_blank">link</a>
            </>
            ): (<p className="nopic">no picture exist yet</p>)
            }
        </div>
      <div className="inputContainer">
        {currentlyUploading ? (
          <img
            src={LoadingDots}
            className="loadingdots"
            alt="upload in progress"
          />
        ) : (
          <>
            <input
              className="file-input"
              onChange={handleFile}
              type="file"
              name="file"
              id="file"
            />
            <label
              className={`inputlabel ${file && " file-selected"}`}
              htmlFor="file"
              onClick={handleClick}
            >
                {file ? <>SUBMIT</> : <>Choose Image</>}
            </label>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadSection;
