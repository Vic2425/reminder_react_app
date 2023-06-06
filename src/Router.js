import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import cookie from "cookie";
import Dashboard from "./containers/Dashboard";
import SignIn from "./components/SignIn";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;
  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/signIn" />
  );
};

const Router = () => {
  // const [reminders, setReminders] = useState([]);

  // // Function to edit a reminder
  // const editReminder = (index, updatedReminder) => {
  //   // Create a copy of the reminders array
  //   const updatedReminders = [...reminders];
  //   // Update the reminder at the specified index with the updated reminder object
  //   updatedReminders[index] = updatedReminder;
  //   // Set the updated reminders array in the state
  //   setReminders(updatedReminders);
  // };
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute
            component={
              Dashboard 
              // reminders={reminders} editReminder={editReminder} 
              
            }
          />
        }
      />
    </Routes>
  );
};

export default Router;
