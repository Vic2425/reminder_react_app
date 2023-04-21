import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import cookie from "cookie";

import Welcome from "./components/Welcome";
import SignIn from "./components/SignIn";
import Home from "./components/Home";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;
  return checkAuth() === true ? <Component {...rest} /> : <Navigate to="/" />;
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/home" element={<ProtectedRoute component={Home} />} />
    </Routes>
  );
};

export default Router;
