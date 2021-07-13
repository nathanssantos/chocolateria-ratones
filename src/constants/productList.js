import palha1 from "../assets/images/products/palha/palha-1.jpg";
import palha2 from "../assets/images/products/palha/palha-2.jpg";
import palha3 from "../assets/images/products/palha/palha-3.jpg";
import palha4 from "../assets/images/products/palha/palha-4.jpg";

import bombom1 from "../assets/images/products/bombom/bombom-1.jpeg";
import bombom2 from "../assets/images/products/bombom/bombom-2.jpeg";
import bombom3 from "../assets/images/products/bombom/bombom-3.jpg";

import bombom4 from "../assets/images/products/bombom/bombom-4.jpg";
import bombom5 from "../assets/images/products/bombom/bombom-5.jpg";
import bombom6 from "../assets/images/products/bombom/bombom-6.jpg";

import barra1 from "../assets/images/products/barra/barra-1.jpeg";
import barra2 from "../assets/images/products/barra/barra-2.jpeg";
import barra3 from "../assets/images/products/barra/barra-3.jpeg";
import barra4 from "../assets/images/products/barra/barra-4.jpeg";

import coracao1 from "../assets/images/products/coracao/coracao-1.jpg";
import coracao2 from "../assets/images/products/coracao/coracao-2.jpg";

const productList = [
  {
    name: "Palha Italiana",
    price: 10,
    description: () =>
      "Palha Italiana de brigadeiro e biscoito Oreo coberta com chocolate nobre blend.",
    images: [palha1, palha2, palha3, palha4],
  },
  {
    name: "Bombom grande",
    price: 12,
    description: () => (
      <div className="flavour-list">
        <div className="flavour-list__title">Sabores disponíveis:</div>

        <ul>
          <li>Ferrero Rocher</li>
          <li>Morango</li>
          <li>Oreo</li>
          <li>Prestígio</li>
        </ul>
      </div>
    ),
    images: [bombom1, bombom2, bombom3],
  },
  {
    name: "Bombom médio 2un",
    weight: 160,
    price: 15,
    description: () => (
      <div className="flavour-list">
        <div className="flavour-list__title">Sabores disponíveis:</div>

        <ul>
          <li>Brigadeiro</li>
          <li>Cookies</li>
        </ul>
      </div>
    ),
    images: [bombom4, bombom5, bombom6],
  },
  {
    name: "Barra de Chocolate Gourmet",
    weight: 200,
    price: 24,
    description: () => (
      <div className="flavour-list">
        <div className="flavour-list__title">Sabores disponíveis:</div>

        <ul>
          <li>Laka e Oreo</li>
          <li>Chocolate ao Leite</li>
          <li>Nutella</li>
          <li>Prestígio</li>
        </ul>
      </div>
    ),
    images: [barra1, barra2, barra3, barra4],
  },
  {
    name: "Coração de Chocolate Recheado",
    weight: 400,
    price: 65,
    description: () => (
      <div className="flavour-list">
        <div className="flavour-list__title">Sabores disponíveis:</div>

        <ul>
          <li>Cookies e Chocolate Blend</li>
          <li>Brownie e Chocolate Blend</li>
        </ul>
      </div>
    ),
    images: [coracao2, coracao1],
  },
];

export default productList;
