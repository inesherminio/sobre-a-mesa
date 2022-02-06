import React from "react";
import "./Contacts.css";
import chat from "../../assets/images/icon_chat.png";
import { useState } from "react";

function Contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    motive: "",
    message: "",
  });
  const { name, email, motive, message } = form;
  const [show, setShow] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShow(true);
    setForm({
      name: "",
      email: "",
      motive: "",
      message: "",
    });
  }

  return (
    <div className="contacts-section" id="contacts">
      <div className="info-section">
        <div>
          <img src={chat} alt="icon chat message" className="chat-icon" />
        </div>
        <div className="info">
          <div>
            Entre em contacto connosco para saber mais sobre os nossos produtos
            e fazer as suas encomendas.
            <br />
            Se preferir, envie-nos uma mensagem, através do formulário. Temos
            todo o gosto em ajudar!
          </div>
          <div className="contacts">
            <strong>Telemóvel: </strong>
            <span>(+351) 967 382 450</span>
          </div>
          <div>
            <strong>Email: </strong>
            <span>sobreamesa.isabel@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h4>Quero ser contactado</h4>
        <form
          action="https://formsubmit.co/inesherminio@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
          className="form"
        >
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/#contacts"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Nome*"
            className="form-input"
            autocomplete="off"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email*"
            className="form-input"
            autocomplete="off"
            onChange={handleChange}
            required
          />
          <select
            name="motive"
            className="form-input select"
            onChange={handleChange}
            value={motive}
          >
            <option value="" selected>
              Motivo do contacto
            </option>
            <option value="info&budget">Informações e orçamentos</option>
            <option value="specialOrder">
              Pedidos especiais e personalizados
            </option>
            <option value="other">Outros</option>
          </select>
          <textarea
            name="message"
            value={message}
            placeholder="Mensagem*"
            rows="5"
            className="form-input textarea"
            autocomplete="off"
            onChange={handleChange}
            required
          />
          <button className="btn send" type="submit">
            Enviar
          </button>
        </form>
        {show && (
          <p style={{ color: "#ad976b" }}>Obrigada pelo seu contacto!</p>
        )}
      </div>
    </div>
  );
}

export default Contacts;
