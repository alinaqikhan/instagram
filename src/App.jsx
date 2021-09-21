import React, { lazy, Suspense } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from './constants/routes';
import useAuthListener from "./hooks/useAuthListener";
import { UserContext } from "./context/user";


const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/Notfound"));

export const App = () => {

  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{user}}>
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} exact />
        <Route path={ROUTES.SIGN_UP} component={SignUp} exact />
        <Route path={ROUTES.DASHBOARD} component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
      </Suspense>
    </Router>
    </UserContext.Provider>
  );
};
