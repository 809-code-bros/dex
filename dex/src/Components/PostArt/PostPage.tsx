import React, { useState } from "react";
import axios from "axios";

import "./PostPage.scss";
import UploadSection from "./UploadSection";

interface IUser {
  title?: string;
  desc?: string;
  img?: any;
}

const PostPage = () => {
  const [createArt, setcreateArt] = useState({
    title: "",
    desc: "",
    img: "",
  });

  const artUpdate = (value: Partial<IUser>) => {
    return setcreateArt((prev) => {
      return { ...prev, ...value };
    });
  };

  // const artList = (e:any) => { 
  //   e.preventDefault(); 
  //   axios
  //   .post("http://localhost:4000/", { 
  //     createArt:createArt
  //   })
  //   .catch((err) => console.log(err));

  // }

  

  return (
    <div className="PostPage-window d-flex">
      <div className="post-forms">
        <h1>Hello PrivateDrippy, upload art for others to see</h1>
        <form>
          <div className="imageTitle-sec">
            <label>Title</label>
            <input
              type="text"
              placeholder="Image Name"
              value={createArt.title}
              onChange={(e) => artUpdate({ title: e.target.value })}
            />
          </div>
          <div className="imageDesc-sec">
            <label>Description</label>
            <textarea
              placeholder="Description"
              value={createArt.desc}
              onChange={(e) => artUpdate({ desc: e.target.value })}
            ></textarea>
          </div>
          <div className= "upload-section">
            {/* <UploadSection />  */}
          </div>
         
          {/* <div className="submit-button">
            <button type="submit">Submit</button>
          </div> */}
        </form>
      </div>
    </div>

    // <div className="PostPage-window d-flex">
    //   <div className="userPost-text d-flex">
    //     <h1>Hello PrivateDrippy, upload art for others to see</h1>
    //   </div>
    //   <div className="post-forms">
    //     <form action="">
    //       <div className="imageTitle-sec">
    //         <label>Image Title</label>
    //         <input type="text" placeholder="Image Name" />
    //       </div>
    //       <div className="imageDesc-sec">
    //         <label>Image Description</label>
    //         <textarea placeholder="Description"></textarea>
    //       </div>
    //       <div className="uploadImage-sec">
    //         <label>Upload Image dsa dsad sad sad sads a</label>
    //         <input type="file" id="image" name="image" value="" required />
    //       </div>
    //       <div>
    //         <button type="submit">Submit</button>
    //       </div>
    //     </form>
    //   </div>
    //   <div className="photo-insert"></div>
    // </div>
  );
};

export default PostPage;
