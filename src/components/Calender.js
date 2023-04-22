import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calender = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <DatePicker
        //disable pass dates
        filterDate={(d) => {
          return new Date() < d;
        }}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="Pp"
        showTimeSelect
        timeFormat="p"
      />
    </div>
  );
};

export default Calender;
