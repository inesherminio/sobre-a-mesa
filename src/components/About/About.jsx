import React from "react";
import "./About.css";
import isabel from "../../assets/images/isabel.png";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="info-about-section">
        <h5>A nossa história</h5>
        <p className="info-about">
          Desde criança que tenho interesse pela culinária. Das primeiras coisas
          que aprendi, depois de ler e escrever, foi a ler os livros de receitas
          da minha mãe, e tentar recriar algumas. Umas saiam bem, outras nem
          tanto. Mas o prazer de experimentar e fazer era maravilhoso! O tempo
          foi passando, mas a culinária seguiu comigo, pois fui fazendo receitas
          para familiares e amigos.
          <br />
          Até que começaram por dizer que deveria dar a conhecer o que faço a
          mais pessoas. Nunca levei a sério essas ideias. Tinha outros
          objetivos, e pouco tempo para tal. Mas a ideia ficou guardada, não
          esquecida. Até que chegou o momento mais apropriado para realizar este
          sonho. E assim, com a ajuda e incentivo de familiares e amigos, nasce
          este pequeno projeto de dar a conhecer um pouco do meu prazer e amor
          pela culinária.
          <br />
          Não sou nenhuma <span className="italic">expert</span>, mas tento fazer tudo com o melhor
          profissionalismo possível, tendo o máximo cuidado em proporcionar
          felicidade e alegria às pessoas que degustam as minhas receitas.
          Assim, quando precisar de uma receita feita com Amor e carinho, o{" "}
          <span style={{ fontFamily: "pristina", fontSize: "1rem" }}>Sobre-a-mesa</span> satisfaz
          os seus pedidos.
          <br />
          Tudo feito com muito amor e carinho.
          <br />
          Isabel
        </p>
      </div>
      <div className="about-pic-section">
        <img src={isabel} alt="Isabel Santos" className="about-pic" />
      </div>
    </div>
  );
}

export default About;
