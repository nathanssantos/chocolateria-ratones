import React from "react";
import Slider from "react-slick";
import { Container } from "@material-ui/core";

import Logo from "../Logo/Logo";

import hero1 from "../../assets/images/hero-1.jpg";
import hero2 from "../../assets/images/hero-2.jpg";
import hero3 from "../../assets/images/hero-3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles.scss";

const Hero = ({ title, logo, small }) => {
  return (
    <div className={`hero ${small ? "small" : ""}`}>
      <Slider infinite arrows={false} autoplay autoplaySpeed={6000}>
        <div className="hero__slide">
          <img src={hero1} alt="Chocolateria Ratones" />
        </div>
        <div className="hero__slide">
          <img src={hero2} alt="Chocolateria Ratones" />
        </div>
        <div className="hero__slide">
          <img src={hero3} alt="Chocolateria Ratones" />
        </div>
      </Slider>

      {title ? (
        <div className="hero__title">
          <Container size="md">
            <h2>{title}</h2>
          </Container>
        </div>
      ) : null}

      {logo ? (
        <div className="hero__logo">
          <Logo big vertical white />
        </div>
      ) : null}
    </div>
  );
};

export default Hero;
