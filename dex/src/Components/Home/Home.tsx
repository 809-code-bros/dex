import React from "react";
import "./Home.scss";
import SearchBar from "./SearchBar";
import About from "./About/About";

import { Fade } from "react-reveal";
import { Icon } from '@iconify/react';


const Home = () => {
  return (
    <div className="HomePg">
      <SearchBar />
      <div className="frontArt">
        <h1>EXPLORE</h1>
      </div>

      <div className="about-start">
        <h1>About</h1>
        <Icon  className= "icon-downArrow" icon="dashicons:arrow-down-alt2" />
      </div>
    
        <Fade left>
            <About />
        </Fade>
    </div>
  );
};

export default Home;
