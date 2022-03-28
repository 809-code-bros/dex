import React from "react";
import "./PostPage.scss";
const PostPage = () => {
  return (
    <div className="PostPage-window d-flex">
      <div className="userPost-text d-flex">
        <h1>Hello PrivateDrippy, create or upload art for others to see</h1>
      </div>
      <div className="post-buttons">
        <button>Create</button>
        <button>Upload Image</button>
        
      </div>
      <div className="photo-insert">
          
      </div>
    </div>
  );
};

export default PostPage;
