import React from "react";
import "./Products.css";
import cheesecake from "../../assets/images/cheesecake.jpg";
import pavlova from "../../assets/images/pavlova.jpg";
import applePie from "../../assets/images/apple_pie.jpg";
import chocolateCake from "../../assets/images/chocolate_cake.png";
import cookieCake from "../../assets/images/cookie_cake.jpg";
import orangePie from "../../assets/images/orange_pie.png";
import meatPie from "../../assets/images/meat_pie.jpg";
import specialOrders from "../../assets/images/special_orders.jpg";
import EachProduct from "./EachProduct/EachProduct";

const products = [
  {
    name: "Cheesecake",
    image: cheesecake,
  },
  {
    name: "Pavlova",
    image: pavlova,
  },
  {
    name: "Tarte de maça",
    image: applePie,
  },
  {
    name: "Bolo brigadeiro",
    image: chocolateCake,
  },
  {
    name: "Bolo de bolacha",
    image: cookieCake,
  },
  {
    name: "Torta de laranja",
    image: orangePie,
  },
  {
    name: "Bola de carne",
    image: meatPie,
  },
  {
    name: "Pedidos especiais",
    image: specialOrders,
  },
];

function Products() {
  return (
    <div className="products-section" id="products">
      {products.map((product) => {
        return <EachProduct product={product} key={product.name} />;
      })}
    </div>
  );
}

export default Products;
