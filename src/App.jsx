import React, { lazy, Suspense } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from './constants/routes';


const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import("./pages/Signup"));
const NotFound = lazy(() => import("./pages/Notfound"));

export const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} exact />
        <Route path={ROUTES.SIGN_UP} component={SignUp} exact />
        <Route component={NotFound} />
      </Switch>
      </Suspense>
    </Router>
  );
};
