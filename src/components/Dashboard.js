import React from "react";
import AddReminder from "../containers/AddReminder";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import moment from "moment";
// import CheckEvents from "./CheckEvents";
import "../App.css";

const Dashboard = (props) => {
  return (
    <>
      {/* <CheckEvents /> */}
      {/* <div className="grid-container"> */}
      <AddReminder />
      <div className="grid-right">
        {props.reminders.map((reminder, index) => (
          <div key={index} className="list">
            <div className="checkBx">
              <input
                className="check"
                type="checkbox"
                checked={reminder.isDone}
                onClick={() => props.markComplete(index)}
              />
            </div>
            <div className="note-box">
              <span
                // className="check"
                style={{
                  textDecoration: reminder.isDone ? "line-through" : "",
                }}
              >
                <div className="content-middle">{reminder.title}</div>
                <div className="details">{reminder.description}</div>
                <div className="date">
                  {moment(new Date(reminder.date))
                    .format("MMMM Do YYYY, h:mm a")
                    .toString()}
                </div>
              </span>
            </div>
            <div className="delIcon">
              <DeleteRoundedIcon
                onClick={() => props.removeReminder(index)}
                style={{ color: "#61398F", fontSize: 30 }}
              />
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </>
  );
};

export default Dashboard;
