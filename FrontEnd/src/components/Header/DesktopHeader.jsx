//import {HashLink as Link}  from 'react-Linkr-hash-Link'
import { Link } from "react-router-dom";
import "../../stylesheets/desktopheader.css";

function Header() {
  return (
    <>
      <div className="desktop-menu-box">
        <div>
          <Link to="/" className="desktop-menu-item">
            Home
          </Link>
          <Link to="#About" className="desktop-menu-item">
            About
          </Link>
          <Link to="#Contact-us" className="desktop-menu-item">
            Contact-us
          </Link>
        </div>
        <div>
          <Link to="/Login" className="desktop-button desktop-menu-item">
            Login
          </Link>
          <Link to="/Join" className="desktop-button desktop-menu-item">
            Register
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
