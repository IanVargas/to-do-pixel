import "../../stylesheets/mobileheader.css";
import HamburguerMenu from "../../stylesheets/images/hamburguermenu.png";
import MobileMenuItems from "./MobileMenuItems";
import { useState } from "react";

function MobileHeader() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="mobile-menu-box">
        <div className="hamburguer-menu-box">
          <img
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className="hamburguer-menu"
            src={HamburguerMenu}
          />
        </div>
        {showMenu && <MobileMenuItems />}
      </div>
    </>
  );
}

export default MobileHeader;
