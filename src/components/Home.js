import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

import AddReminder from "./AddReminder";
const Home = () => {
  return (
    <div>
      <h1>Greetings, user!</h1>
      <h2>Let's check out your today's schedule!</h2>
      <Link to="/addReminder" >
        <AddIcon sx={{ fontSize: 30, color: '#040406' }}></AddIcon>
        <AddReminder />
      </Link>
    </div>
  );
};

export default Home;
