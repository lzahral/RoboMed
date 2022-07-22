import React, { useState } from "react";
import { DarkTheme, LightTheme } from "./styles/themes";
import { ThemeContext, ThemeProvider } from "styled-components";
import { MainDiv } from "./styles/mixins";
import Container from "react-bootstrap/Container";
import NavbarComp from "./components/NavbarComp";
import MainPart from "./components/MainPart";
import Facilities from "./components/Facilities/Facilities";
import Slider from "./components/slider/Slider";
import Team from "./components/teamDoctor/Team";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
    const [theme, toggleTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
                <MainDiv className="p-4">
                    <Container>
                        <NavbarComp theme={theme} />
                        <MainPart theme={theme} />
                        <Facilities />
                        <Slider />
                        <Team />
                        <Subscribe />
                        <Footer />
                    </Container>
                </MainDiv>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;
