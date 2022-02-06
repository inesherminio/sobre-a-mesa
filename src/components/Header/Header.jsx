import React from "react";
import "./Header.css";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import cake from "../../assets/images/icon_cake.png";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

function Header({ setShow }) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", updateWidth);
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("resize", updateWidth);
      window.removeEventListener("scroll", listenToScroll);
    };
  });

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const listenToScroll = () => {
    let heightToShowFrom;

    if (width > 1024) {
      heightToShowFrom = 130;
    } else if (width > 768) {
      heightToShowFrom = 90;
    } else {
      heightToShowFrom = 70;
    }

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    console.log(winScroll);

    if (winScroll > heightToShowFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className="navbar">
      <div className="nav-list">
        <ul className="list">
          <li className="list-item title">
            <a href="#about">Sobre-a-mesa</a>
          </li>
          {width >= 768 && (
            <>
              <li className="list-item">
                <a href="#products">Menu</a>
              </li>
              <li className="list-item">
                <a href="#contacts">Contactos</a>
              </li>
            </>
          )}
        </ul>
        {isVisible && (
          <img
            src={cake}
            alt="Partial icon Sobre-a-mesa"
            className="logo-icon"
          />
        )}
      </div>
      {width >= 768 && (
        <div className="nav-actions">
          <div className="action">
            <a href="#contacts">
              <button className="btn">Encomendas</button>
            </a>
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
