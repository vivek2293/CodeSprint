import React from "react";
import Gdscpng from '../../Assets/gdsc.png'
import Glogo from "../../Assets/glogo.png"
import Hamburger from "./Burger";
function navbar() {
  return (
    // <div>navbar</div>
    <>
      <div
        className="d-flex flex-row justify-content-between"
        id = "navdiv"
      >
        <div>
        <img src={Gdscpng} alt="" id="gdscimage" />
        <img src={Glogo} alt="" id="gdsclogo" />

        
        </div>
        <Hamburger />
      </div>
    </>
  );
}

export default navbar;
