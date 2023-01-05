import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switcher,
  Route,
} from "react-router-dom";
import Dashboard from "../modules/Dashboard";
import Login from "../modules/Login";
import { PrivateRoutes } from "./PrivateRoutes";
const Routes = () => {
  return (
    <Router>
      <Switcher>
        <>
          <Route path="/" element={<Login />} />
          {PrivateRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </>
      </Switcher>
    </Router>
  );
};

export default Routes;
