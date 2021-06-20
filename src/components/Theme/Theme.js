import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import theme from "../../constants/theme";

const Theme = ({ children }) => {
  const customTheme = createMuiTheme(theme);
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};

export default Theme;
