import React from "react";
import { Button, Container } from "@material-ui/core";

import Screen from "../../components/Screen/Screen";
import Hero from "../../components/Hero/Hero";

import { WhatsApp, Instagram, MailOutline } from "@material-ui/icons";

import "./styles.scss";

const Contact = () => {
  const contactList = [
    {
      label: "(48) 998067264",
      icon: <WhatsApp />,
      action: () => {
        window.open(`https://wa.me/5548998067264`);
      },
    },
    {
      label: "@chocolateriaratones",
      icon: <Instagram />,
      action: () => {
        window.open(`https://www.instagram.com/chocolateriaratones/`);
      },
    },
    {
      label: "chocolateriaratones@gmail.com",
      icon: <MailOutline />,
      action: () => {
        window.open(`mailto:chocolateriaratones@gmail.com`);
      },
    },
  ];

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
