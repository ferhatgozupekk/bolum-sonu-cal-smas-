import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { GlobalStyle } from "./components/styled/GlobalStyle";
import { lightTheme, darkTheme } from "./theme";
import { useContext } from "react";
import { SiteContext } from "./context/SiteContext";

function App() {
  const { themeName } = useContext(SiteContext);

  return (
    <>
      <ThemeProvider theme={themeName === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Header />
        <div className="app">
          <br />
          <br />
          <h1>Hello My Project</h1>
          <h1>Nice to meet you</h1>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
