import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateSelect = (e) => {
    setDate(date);
  };

  return (
    <div>
      <DatePicker
        //disable pass dates
        filterDate={(d) => {
          return new Date() < d;
        }}
        type="date"
        selected={date}
        onChange={handleDateSelect}
        dateFormat="Pp"
        showTimeSelect
        timeFormat="p"
      />
      <p>{date}</p>
    </div>
  );
};

export default Calendar;
