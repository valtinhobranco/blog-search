import React, { useContext, useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Context } from "./contexts/Context";
import { AppRoutes } from "./Routes";

import GlobalStyles from "./styles/GlobalStyles";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

import usePersistedState from "./reducers/themePermanentReducer";

function App() {
  const [theme, setTheme] = usePersistedState("theme", dark);
  // const [theme, setTheme] = useState(light);
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    if (state.theme.status === "dark") {
      return setTheme(light);
    }

    if (state.theme.status === "light") {
      return setTheme(dark);
    }
  }, [state, theme]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>

        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
