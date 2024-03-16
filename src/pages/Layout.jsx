import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Fragment } from "react";
import { GlobalStyle, theme } from "../GlobalStyle";
import { ThemeProvider } from 'styled-components';
import HomePage from "./HomePage";
import CountryDetailsPage from "./CountryDetailsPage";
import Container from "../components/UI/Container/Container";

const Layout = () => {
    return (
        // Styled component'in tema provider'ı ile tema verileri uygulamaya aktarıldı.
        // Herhangi bir component'in css'inde aşağıdaki örnekteki gibi kullanılmalı.
        // Örnek: ${({ theme }) => theme.colors.primary};
        <ThemeProvider theme={theme}>
            <Fragment>
                <Container>
                    {/* Global Style */}
                    <GlobalStyle />

                    <Router>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/country-details/:countryCode" element={<CountryDetailsPage />} />
                        </Routes>
                    </Router>
                </Container>
            </Fragment>
        </ThemeProvider>
    )
}

export default Layout