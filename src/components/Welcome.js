import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome, user!</h1>
      <h3>
        Please <Link to="/signIn">Sign In</Link> to see your reminders!
      </h3>
    </div>
  );
};

export default Welcome;
