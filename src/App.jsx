import { Fragment } from "react";
import Home from "./components/Home";
import { GlobalStyle, theme } from "./GlobalStyle";
import { ThemeProvider } from 'styled-components';


function App() {

  return (
    // Styled component'in tema provider'ı ile tema verileri uygulamaya aktarıldı.
    // Herhangi bir component'in css'inde aşağıdaki örnekteki gibi kullanılmalı.
    // Örnek: ${({ theme }) => theme.colors.primary};
    <ThemeProvider theme={theme}>
      <Fragment>
        {/* Global Style */}
        <GlobalStyle />

        {/* Home Component */}
        <Home />
      </Fragment>
    </ThemeProvider>
  )
}

export default App;
