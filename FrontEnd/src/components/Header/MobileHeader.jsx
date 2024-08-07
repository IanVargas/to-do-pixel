import "../../stylesheets/mobileheader.css";
import HamburguerMenu from "../../stylesheets/images/hamburguermenu.png";
import CloseMenu from "../../stylesheets/images/closemenu.png";
import MobileMenuItems from "./MobileMenuItems";
import { useState } from "react";

function MobileHeader() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="mobile-menu-box">
        <div
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className="hamburguer-menu-box"
        >
          {!showMenu && (
            <img className="hamburguer-menu" src={HamburguerMenu} />
          )}
          {showMenu && (
            <img className="hamburguer-menu-close" src={CloseMenu} />
          )}
        </div>
        {showMenu && <MobileMenuItems />}
      </div>
    </>
  );
}

export default MobileHeader;
