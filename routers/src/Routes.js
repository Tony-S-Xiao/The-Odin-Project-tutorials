import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import NotFound from "./NotFound";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/123" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;