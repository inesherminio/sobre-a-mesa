import React from "react";
import "./About.css";
import isabel from "../../assets/images/isabel.png";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="info-about-section">
        <h5>A nossa história</h5>
        <p className="info-about">
          <span>Sobre-a-mesa</span> surgiu… O Lorem Ipsum é um texto modelo da
          indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o
          texto padrão usado por estas indústrias desde o ano de 1500, quando
          uma misturou os caracteres de um texto para criar um espécime de
          livro. Este texto não só sobreviveu 5 séculos, mas também o salto para
          a tipografia electrónica, mantendo-se essencialmente inalterada. Foi
          popularizada nos anos 60 com a disponibilização das folhas de
          Letraset, que continham passagens com Lorem Ipsum, e mais recentemente
          com os programas de publicação como o Aldus PageMaker que incluem
          versões do Lorem Ipsum.
        </p>
      </div>
      <div className="about-pic-section">
        <img src={isabel} alt="Isabel Santos" className="about-pic" />
      </div>
    </div>
  );
}

export default About;
