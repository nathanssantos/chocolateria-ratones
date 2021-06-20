import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Theme from "./components/Theme/Theme";
import Router from "./components/Router/Router";

const App = () => (
  <div className="App">
    <Theme>
      <Router />
      <CssBaseline />
    </Theme>
  </div>
);

export default App;
