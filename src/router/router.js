import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/navBar";

import Home from "../components/home";
import Growth from "../components/growth";
import Table from "../components/table";
import Perfil from "../components/perfil";

const Routes = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/growth" component={Growth} />
      <Route path="/table" component={Table} />
      <Route path="/perfil" component={Perfil} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
