import React from "react";
import "./LogoBar.css";
import background from "../../assets/images/background.jpg";
import logo from "../../assets/images/logo.png";

function LogoBar() {
  return (
    <div
      className="logo-bar-section"
      style={{
        background: `url(${background})`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px",
      }}
    >
      <img src={logo} alt="Sobre-a-mesa's logo" className="logo" />
    </div>
  );
}

export default LogoBar;
