import React from "react";
import "./About.scss";
import BoysPic from "../../../Pictures/boys.jpg"
const About = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <h3>
          DEX app is platform where you can display your digital art. DEX’s
          meaning comes from the word Dexterity which defines “skill in
          performing task, especially with hands.” This app is intended for you
          to upload your own images you’ve taken or drawn. Below we have the
          three latest photos that have been posted on the DEX app.
        </h3>
      </div>

      <div className="show-case">

        <div className="show-case1">
        <img src={BoysPic} alt="boyspic" />

        </div>
        <div className="show-case2">

        </div>
        <div className="show-case3">
        </div>

      </div>
    </div>
  );
};

export default About;
