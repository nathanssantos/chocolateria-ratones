import React from "react";
import { useHistory } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import Screen from "../../components/Screen/Screen";

const Home = () => {
  const history = useHistory();

  return (
    <Screen>
      <Hero
        center
        logo
        buttonText="Conheça nossos produtos"
        buttonAction={() => history.push("/produtos")}
      />
    </Screen>
  );
};

export default Home;
