import React, { useState } from "react";
import { TextField } from "@mui/material";
import DatePicker from 'react-datepicker'
require('react-datepicker/dist/react-datepicker.css')
// import "react-datepicker/dist/react-datepicker.css";


const AddReminder = () => {
  const [title, setTitle] = useState("");
  const [addNotes, setAddNotes] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>hello</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            id="standard-basic"
            variant="standard"
            label={title === "" ? "New reminder" : ""}
            InputLabelProps={{ shrink: false }}
            InputProps={{ disableUnderline: true }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <TextField
            id="standard-basic"
            label={addNotes === "" ? "Add note" : ""}
            InputLabelProps={{ shrink: false }}
            variant="standard"
            value={addNotes}
            onChange={(e) => setAddNotes(e.target.value)}
          />
        </div>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat='Pp'
            showTimeSelect
            timeFormat="p"
          />
        </div>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};

export default AddReminder;
