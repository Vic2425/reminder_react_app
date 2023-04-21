// import React, { useState } from "react";
// import { TextField } from "@mui/material";
// import DatePicker from "react-datepicker";
// // require('react-datepicker/dist/react-datepicker.css')
// import "react-datepicker/dist/react-datepicker.css";
// import { Link } from "react-router-dom";

// const ReminForm = ({ addReminder, setNotes }) => {
//   const [startDate, setStartDate] = useState(new Date());
//   // const [title, setTitle] = useState("");
//    const [notes, setNotes] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!notes) return;
//     addReminder(notes);
//     // setTitle("");
//     setNotes("");
//   };

//   return (
//     <div>
//       <h1>Reminders</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           {/* <TextField
//             id="standard-basic"
//             variant="standard"
//             label={title === "" ? "New reminder" : ""}
//             InputLabelProps={{ shrink: false }}
//             InputProps={{ disableUnderline: true }}
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           <br /> */}
//           <TextField
//             id="standard-basic"
//             label={notes === "" ? "Add note" : ""}
//             InputLabelProps={{ shrink: false }}
//             variant="standard"
//             value={notes}
//             onChange={(e) => setNotes(e.target.value)}
//           />
//         </div>
//         <div>
//           <DatePicker
//             selected={startDate}
//             onChange={(date) => setStartDate(date)}
//             dateFormat="Pp"
//             showTimeSelect
//             timeFormat="p"
//           />
//         </div>

//         <Link to="/home">
//           <button type="submit">Add</button>
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default ReminForm;
