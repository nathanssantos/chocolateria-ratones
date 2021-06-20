import React from "react";
import Slider from "react-slick";
import { Container, Button } from "@material-ui/core";

import Logo from "../Logo/Logo";

import hero1 from "../../assets/images/hero-1.jpg";
import hero2 from "../../assets/images/hero-2.jpg";
import hero3 from "../../assets/images/hero-3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styles.scss";

const Hero = ({
  center,
  title,
  logo,
  buttonText,
  buttonAction,
  fade,
  small,
}) => {
  return (
    <div className={`hero ${small ? "small" : ""}`}>
      <Slider infinite arrows={false} fade={fade} autoplay autoplaySpeed={6000}>
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

      {center ? (
        <div className="hero__center">
          {logo ? <Logo big vertical white /> : null}
          {buttonText ? (
            <div className="hero__button">
              <Button
                variant="outlined"
                className="bt-cta"
                onClick={buttonAction}
              >
                {buttonText}
              </Button>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Hero;
