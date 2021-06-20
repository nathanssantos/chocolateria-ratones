import React from "react";
import { Button, Container } from "@material-ui/core";

import Screen from "../../components/Screen/Screen";
import Hero from "../../components/Hero/Hero";

import contactList from "../../constants/contactList";

import "./styles.scss";

const Contact = () => {
  return (
    <Screen className="contact">
      <Hero title="Contato" fade small />
      <Container size="md">
        <main>
          <div className="contact__title">Tele-entrega</div>
          <div className="contact__text">
            Segunda a Sexta das 14:00 às 18:00
          </div>
          <ul className="contact__list">
            {contactList.map((item) => (
              <li className="contact__list__item">
                <Button
                  variant="outlined"
                  className="contact__button"
                  onClick={item.action}
                  startIcon={item.icon}
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </main>
      </Container>
    </Screen>
  );
};

export default Contact;
