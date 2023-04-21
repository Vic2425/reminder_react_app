import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AllReminders = () => {
  const [startDate, setStartDate] = useState(new Date());

  const [reminderText, setReminderText] = useState([
    {
      text: "A sample remider!",
      isDone: false,
    },
  ]);

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addReminder(value);
    setValue("");
  };

  const addReminder = (text) => {
    const newReminder = [...reminderText, { text }];
    setReminderText(newReminder);
  };

  const markComplete = (idx) => {
    const newReminder = [...reminderText];
    newReminder[idx].isDone = true;
    setReminderText(newReminder);
  };

  const removeRemider = (idx) => {
    const newReminder = [...reminderText];
    newReminder.splice(idx, 1);
    setReminderText(newReminder);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Add Reminders</h3>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="Pp"
              showTimeSelect
              timeFormat="p"
            />
          </div>
          <button type="submit">Add</button>
        </form>
        <div>
          {reminderText.map((reminder, idx) => (
            <div>
              <CheckCircleIcon onClick={() => markComplete(idx)} />
              <span
                style={{
                  textDecoration: reminder.isDone ? "line-through" : "",
                }}
              >
                {reminder.text}
              </span>
              <DeleteRoundedIcon onClick={() => removeRemider(idx)} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllReminders;
