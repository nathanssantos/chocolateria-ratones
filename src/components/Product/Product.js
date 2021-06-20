/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container } from "@material-ui/core";

import "./styles.scss";

const Product = ({
  images = [],
  name = "",
  weight = null,
  price = "",
  description = null,
}) => {
  return (
    <div className="product">
      <Container size="md">
        <div className="product__content">
          <div className="product__title">{name}</div>

          {weight ? <div className="product__weight">{weight}g</div> : null}

          <div className="product__price">
            R$ {price.toFixed(2).toString().replace(".", ",")}
          </div>

          {description ? (
            <div className="product__description">{description()}</div>
          ) : null}

          <div className="product__images">
            {images.map((image) => (
              <div className="product__image">
                <img src={image} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
