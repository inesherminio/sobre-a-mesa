import React from "react";
import "./Footer.css";
import background from "../../assets/images/background.jpg";

function Footer() {
  return (
    <div
      className="footer"
      style={{
        background: `url(${background})`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px",
      }}
    >
      <p>© 2021 by ©Sobre-a-mesa by Isabel, developed by Inês Hermínio</p>
    </div>
  );
}

export default Footer;
