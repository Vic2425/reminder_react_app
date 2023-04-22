import React from "react";
// import { Link } from "react-router-dom";
// import AddIcon from "@mui/icons-material/Add";

import AllReminders from "./AllReminders";

const Home = () => {
  return (
    <div>
      <h1>Greetings, user!</h1>
      <h2>Let's check out your today's schedule!</h2>
      <div>
        <AllReminders />
      </div>
    </div>
  );
};

export default Home;
