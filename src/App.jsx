import { GlobalStyles, ThemeProvider } from "@mui/material";
import RoutesComponent from "./Router/Routes";
import createPrimaryTheme from "./Theme/Theme";
import Styles from "./GlobalStyle";

function App() {
  const theme = createPrimaryTheme("light");
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={Styles(theme)} />
        <RoutesComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
