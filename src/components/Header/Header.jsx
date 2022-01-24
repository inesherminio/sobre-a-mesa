import React from "react";
import "./Header.css";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

function Header({ setShow }) {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  return (
    <div className="navbar">
      <div className="nav-list">
        <ul className="list">
          <li className="list-item title">
            <a href="#">Sobre-a-mesa</a>
          </li>
          {width >= 768 && (
            <>
              <li className="list-item">
                <a href="#">Menu</a>
              </li>
              <li className="list-item">
                <a href="#">Contactos</a>
              </li>
            </>
          )}
        </ul>
      </div>
      {width >= 768 && (
        <div className="nav-actions">
          <div className="action">
            <button className="btn">Encomendas</button>
          </div>
          <div className="action">
            <a href="#">
              <img
                src={facebook}
                alt="Facebook icon"
                className="social-network-icon"
              />
            </a>
            <a href="#">
              <img
                src={instagram}
                alt="Instagram icon"
                className="social-network-icon"
              />
            </a>
          </div>
        </div>
      )}
      {width < 768 && (
        <div className="offcanvas-icon">
          <IconButton onClick={() => setShow(true)}>
            <MenuIcon fontSize="large" sx={{ color: "#878277" }} />
          </IconButton>
        </div>
      )}
    </div>
  );
}

export default Header;
