import React from "react";
import "./PostPage.scss";
const PostPage = () => {
  return (
    <div className="PostPage-window d-flex">
      <div className="userPost-text d-flex">
        <h1>Hello PrivateDrippy, upload art for others to see</h1>
      </div>
      <div className="post-forms">
        <form action="">
          <div className="imageTitle-sec">
            <label>Image Title</label>
            <input type="text" placeholder="Image Name" />
          </div>
          <div className="imageDesc-sec">
            <label>Image Description</label>
            <textarea placeholder="Description"></textarea>
          </div>
          <div className="uploadImage-sec">
            <label>Upload Image</label>
            <input type="file" id="image" name="image" value="" required />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      {/* <div className="photo-insert">
          
      </div> */}
    </div>
  );
};

export default PostPage;
