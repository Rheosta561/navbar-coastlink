import React, { useState } from 'react';
import './nav.css';

function Navbar() {
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const [dropDownHeight, setHeight] = useState("0rem");
  const [leftShiftPanel, setLeft] = useState("-15vw");

  const handleClick = () => {
    setDropdownVisibility(prevState => !prevState);
    setHeight(prevHeight => (prevHeight === "0rem" ? "10rem" : "0rem"));
  };

  const togglePanel = () => {
    setLeft(prev => (prev === "-15vw" ? "1vw" : "-15vw"));
  };

  return (
    <div>
      <div className="navbar">
        <div className="left-nav-dock">
          <div className="navlogo">
            <button className="menubutton" onClick={togglePanel}>
              <img src="./src/assets/cowin.png" alt="" className="navimage" />
            </button>
          </div>
          <ul className="navlist">
            <li className="nlitem"><button className="libut">Home</button></li>
            <li className="nlitem"><button className="libut">About</button></li>
            <li className="nlitem"><button className="libut">Contact</button></li>
            <li className="nlitem" id="navtheme">
              <div className="navtheme">
                <div className="themehead">
                  <button className="libut" onClick={handleClick}>Themes</button>
                </div>
                <div
                  className="themedropdown"
                  style={{
                    opacity: isDropdownVisible ? 1 : 0,
                    transition: 'all 0.2s linear',
                    height: dropDownHeight
                  }}
                >
                  <div className="themevalue">
                    <a href="#">Mountains</a>
                  </div>
                  <div className="themevalue">
                    <a href="#">Beaches</a>
                  </div>
                  <div className="themevalue">
                    <a href="#">Galaxy</a>
                  </div>
                  <div className="themevalue">
                    <a href="#">Light</a>
                  </div>
                  <div className="themevalue">
                    <a href="#">Dark</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="right-nav-dock">
          <div className="navlogin">
            <button className="libut">Login</button>
          </div>
          <div className="nav-profile-image">
            <a href="/"><img src="./src/assets/user.png" alt="" /></a>
          </div>
        </div>
      </div>
      <div className="leftmenu" style={{ marginLeft: leftShiftPanel }}>
        <div className="leftnavitem">
          Why CoastLink, use it know it
          <div className="leftnavdesc"><a href="/">Learn More</a></div>
        </div>
        <div className="leftnavitem">
          Earn with CoastLink
          <div className="leftnavdesc"><a href="/">Learn More</a></div>
        </div>
        <div className="leftnavitem">
          About Us - FAQ'S
          <div className="leftnavdesc"><a href="/">Learn More</a></div>
        </div>
        <div className="leftnavitem">
          The Team, Insights
          <div className="leftnavdesc"><a href="/">Learn More</a></div>
        </div>
        <div className="leftnavitem">
          Support Hub for Help
          <div className="leftnavdesc"><a href="/">Learn More</a></div>
        </div>
        <div className="leftnavitem">
          Our Policies and Terms
          <div className="leftnavdesc"><a href="/">Learn More</a></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
