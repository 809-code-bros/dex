import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col } from "react-bootstrap";
import Button from "../Button";
import "./Navbar.scss";

const NavButtons: React.FC = () => {
  return (
    <div>
      <Button position="nav-button">Most Popular</Button>
      <Button position="nav-button">Post Art</Button>
      <Button position="nav-button" background="login">
        Login / Sign Up
      </Button>
    </div>
  );
};

const Navbar: React.FC = () => {
  return (
    <>
      <Col className="navbar">
        <h1 className="header mb-0">DEX</h1>
        <NavButtons />
      </Col>
    </>
  );
};

export default Navbar;
