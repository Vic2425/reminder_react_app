import React, { useState } from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import DatePicker from "react-datepicker";
// require('react-datepicker/dist/react-datepicker.css')
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

function ReminderList(props) {
  const { reminder, idx, markComplete, removeReminder } = props;
  return (
    <>
      <CheckCircleIcon onClick={() => markComplete(idx)} />
      <span
        style={{ textDecoration: reminder.isDone ? "line-through" : "" }}
      >
        {reminder.text}
      </span>
      <DeleteRoundedIcon onClick={() => removeReminder(idx)} />
    </>
  );
}

const ReminForm = ({ addReminder }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !notes) return;
    addReminder(title, notes);
    setTitle("");
    setNotes("");
  };

  return (
    <div>
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <input
            tyep="test"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="Pp"
            showTimeSelect
            timeFormat="p"
          />
        </div>

        <Link to="/home">
          <button type="submit">Add</button>
        </Link>
      </form>
    </div>
  );
};

const ReminderCard = () => {
  const [reminder, setReminder] = useState([]);

  const addReminder = (text) => {
    const newReminder = [...reminder, { text }];
    setReminder(newReminder);
  };

  const markComplete = (idx) => {
    const newReminder = [...reminder];
    newReminder[idx].isDone = true;
    setReminder(newReminder);
  };

  const removeReminder = (idx) => {
    const newReminder = [...reminder];
    newReminder.splice(idx, 1);
    setReminder(newReminder);
  };
  return (
    <div>
      {reminder.map((text, idx) => (
        <ReminderList
          key={idx}
          index={idx}
          addReminder={addReminder}
          markComplete={markComplete}
          removeReminder={removeReminder}
        />
      ))}
    </div>
  );
};

export default ReminderCard;
