import React from "react";

import Screen from "../../components/Screen/Screen";
import Hero from "../../components/Hero/Hero";
import Product from "../../components/Product/Product";

import productList from "../../constants/productList";

import "./styles.scss";

const Products = () => {
  return (
    <Screen className="products">
      <Hero title="Produtos" fade small />
      <main>
        {productList.map(({ name, weight, price, images, description }) => (
          <Product
            key={name}
            name={name}
            weight={weight}
            price={price}
            description={description}
            images={images}
          />
        ))}
      </main>
    </Screen>
  );
};

export default Products;
