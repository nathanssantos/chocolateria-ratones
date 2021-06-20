/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Slider from "react-slick";
import { Container } from "@material-ui/core";
import { OpenWith } from "@material-ui/icons";

import "./styles.scss";
import Modal from "../Modal/Modal";

const sliderSettings = {
  arrows: false,
  dots: true,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
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
            <Slider {...sliderSettings}>
              {images.map((image) => (
                <div className="product__image">
                  <img src={image} />
                  <Modal
                    buttonVariant="outlined"
                    buttonContent={<OpenWith />}
                    buttonClassName="bt-expand-image"
                  >
                    <div className="product__modal__image">
                      <img src={image} />
                    </div>
                  </Modal>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
