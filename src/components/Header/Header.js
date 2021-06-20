import React from "react";
import { Container, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import Drawer from "../Drawer/Drawer";

import "./styles.scss";

const Header = () => {
  const history = useHistory();

  return (
    <header className="header">
      <Container size="md">
        <div className="header__content">
          <Button onClick={() => history.push("/")} className="header__logo">
            <Logo />
          </Button>
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
