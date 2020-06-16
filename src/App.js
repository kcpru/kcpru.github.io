import React from "react";
import "./App.scss";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

import Layout from "./layout/Layout";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Layout>
    </HashRouter>
  );
}

export default App;
