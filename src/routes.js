import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React from "react";

import Index from "../src/views/Index";
import Register from "../src/views/Register";
import Login from "../src/views/Login.js";
import Profile from "../src/views/Profile.js";
import Pedidos from "../src/views/Pedidos.js";
import NovoPedido from "../src/views/NovoPedido.js";
import NovoCliente from "../src/views/NovoCliente.js";
import ImpressaoPedido from "../src/views/PageImpressao";

import { isAuthenticated } from "../src/service/auth";

export default function Routes() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/index" component={Index} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/pedidos" component={Pedidos} />
        <PrivateRoute path="/novopedido" component={NovoPedido} />
        <PrivateRoute path="/novocliente" component={NovoCliente} />
        <PrivateRoute path="/impressaopedido/:id" component={ImpressaoPedido} />
      </Switch>
    </BrowserRouter>
  );
}
