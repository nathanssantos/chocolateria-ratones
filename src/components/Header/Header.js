import React from "react";
import { Container } from "@material-ui/core";

import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Drawer from "../Drawer/Drawer";

import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <Container size="md">
        <div className="header__content">
          <div className="header__logo">
            <Logo />
          </div>
          <div className="header__menu">
            <Menu />
          </div>
          <div className="header__drawer">
            <Drawer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
