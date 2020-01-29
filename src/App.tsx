import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Index from "./pages/index";
import Skills from "./pages/skills";
import About from "./pages/about";

import Header from "./components/header";

import GlobalStyles from "./assets/style/global-styles";

const Container = styled.div`
  display: flex;
  margin: auto;
  max-width: 620px;
`;

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Container>
        <main>
          <Route path="/" exact component={Index} />
          <Route path="/skills" component={Skills} />
          <Route path="/about" component={About} />
        </main>
      </Container>
    </Router>
  );
};

export default App;
