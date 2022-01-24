import React from "react";
import "./Offcanvas.css";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

function Offcanvas({ setShow }) {
  return (
    <div className="offcanvas">
      <div className="offcanvas-close">
        <IconButton onClick={() => setShow(false)}>
          <CloseIcon fontSize="large" sx={{ color: "white" }} />
        </IconButton>
      </div>
      <div>
        <ul className="offcanvas-list">
          <li className="offcanvas-list-item">
            <a href="#" onClick={() => setShow(false)}>
              Menu
            </a>
          </li>
          <li className="offcanvas-list-item">
            <a href="#" onClick={() => setShow(false)}>
              Contactos
            </a>
          </li>
        </ul>
      </div>
      <div className="offcanvas-nav-actions">
        <div className="offcanvas-action">
          <button className="offcanvas-btn">Encomendas</button>
        </div>
        <div className="offcanvas-action">
          <a href="#">
            <img
              src={facebook}
              alt="Facebook icon"
              className="offcanvas-social-network-icon"
            />
          </a>
          <a href="#">
            <img
              src={instagram}
              alt="Instagram icon"
              className="offcanvas-social-network-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Offcanvas;
