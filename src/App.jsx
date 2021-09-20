import React, { lazy, Suspense } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from './constants/routes';


const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import("./pages/Signup"));

export const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
      </Switch>
      </Suspense>
    </Router>
  );
};
