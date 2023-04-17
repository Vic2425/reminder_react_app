import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import cookie from 'cookie';

import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Welcome from './components/Welcome';
import AddReminder from './components/AddReminder'

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;
  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to='/' />
  )
}

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}/>
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/home" element={<ProtectedRoute component={Home} />} />
      <Route path="/addReminder" element={<ProtectedRoute component={AddReminder} />} />
    </Routes>
  );
};

export default Router;
