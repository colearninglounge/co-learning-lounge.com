/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/css/custom.css";
// pages for this kit
import Index from "./views/Index.js";
import Typeform from "./views/type-form";
import NotFound from "./views/NotFound";

ReactDOM.render(
  <BrowserRouter >
      <Switch>
        <Route exact path="/" component={Index} />
        {/* <Route exact path="/" component={ Index } /> */}
        <Route exact path="/community-talent-hunt" component={ Typeform } />
        <Route component={NotFound} />
      </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.register();