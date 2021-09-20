import React, { lazy, Suspense } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from './constants/routes';


const Login = lazy(() => import('./pages/Login'));

export const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />
      </Switch>
      </Suspense>
    </Router>
  );
};
