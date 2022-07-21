import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import NavbarComp from './components/NavbarComp';
import MainPart from './components/MainPart';
import Facilities from './components/Facilities/Facilities';
import Slider from './components/slider/Slider';
import Team from './components/teamDoctor/Team';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { base, light, dark } from './themes'

const themesMap = {
  light,
  dark
}

export const P = styled.p(
  ({ theme }) => `
    color: ${theme.colors.p};`
)

export const MainDiv = styled.div(
  ({ theme }) => `
  display: block;
  width: 100%;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.color};
  overflow: hidden;`
)

export const Div = styled.div(
  ({ theme }) => `
  background: rgba(240, 11, 11, 0);
  border: 2px solid ${theme.colors.primary};
  backdrop-filter: blur(200px);
  border-radius: 8px;
`
)
export const Bg = styled.span(
  ({ theme }) => `
  background: #3341551A;
  border-radius: 8px;
  color: ${theme.colors.color}; `
)
export const Btn = styled.button(
  ({ theme }) => `
  padding: 0;
  padding:0 7px 5px 7px;
  border-radius: 30%;
  background: #29A9E1 ;
  border: 0;
  color: ${theme.colors.primary};
  width: 40px;
  height: 40px; `
)
export const Button = styled.button(
  ({ theme }) => `
  padding: 0;
  padding:10px 20px;
  border-radius: 8px;
  background: #29A9E1 ;
  border: 0;
  color: ${theme.colors.primary};`
)



export const ThemePreferenceContext = React.createContext()

const App = () => {
  const [Theme, setTheme] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(Theme?"dark":"light")

  const theme = { ...base, colors: themesMap[currentTheme] }
  console.log(theme.colors.p)
  return (
    <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
    <ThemeProvider theme={theme}>
    <MainDiv className="p-4">
      <Container>
        <NavbarComp theme={Theme} setTheme={setTheme} setCurrentTheme={setCurrentTheme}/>
        <MainPart theme={Theme}/>
        <Facilities/>
        <Slider/>
        <Team/>
        <Subscribe/>
        <Footer/>
      </Container>
    </MainDiv>
    </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
};

export default App;