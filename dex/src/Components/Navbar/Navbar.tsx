import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
import Button from "../Button";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h1 className="header">DEX</h1>

        <div>
          <Button position="nav-button">Most Popular</Button>
          <Button position="nav-button">Post Art</Button>
          <Button position="nav-button" background="login">
            Login / Sign Up
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
