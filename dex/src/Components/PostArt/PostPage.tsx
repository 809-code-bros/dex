import React, { useState } from "react";
import axios from "axios";

import "./PostPage.scss";
import UploadSection from "./UploadSection";
import { Icon } from "@iconify/react";

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

          <div className="choosefile-input">
            <input type="file" />
          </div>

          <div className="submit-button">
            <button type="submit">Upload Image</button>
          </div>
        </form>
        <div className="blue-box">
          <Icon className="back-Icon" icon="typcn:arrow-back-outline" />
          <h1>Back Home</h1>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
