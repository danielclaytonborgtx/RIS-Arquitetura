import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { Router } from "./routes";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
          <Router />
        </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;