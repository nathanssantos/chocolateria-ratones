import React from "react";
import { Button, Container } from "@material-ui/core";

import Screen from "../../components/Screen/Screen";
import Hero from "../../components/Hero/Hero";

import contactList from "../../constants/contactList";

import "./styles.scss";

const Contact = () => {
  return (
    <Screen className="contact">
      <Hero title="Contato" small />
      <Container size="md">
        <main>
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
