import { Link } from "react-router-dom";
import "../../stylesheets/mobileheader.css";

function MobileMenuItems() {
  return (
    <>
      <Link to="/" className="mobile-menu-item">
        Home
      </Link>
      <Link to="#About" className="mobile-menu-item">
        About
      </Link>
      <Link to="#Contact-us" className="mobile-menu-item">
        Contact-us
      </Link>
      <Link to="/Login" className="mobile-button mobile-menu-item">
        Login
      </Link>
      <Link to="/Join" className="mobile-button mobile-menu-item">
        Register
      </Link>
    </>
  );
}

export default MobileMenuItems;
