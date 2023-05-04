import React, { Component, Fragment } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
// import Calendar from "./Calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";

class AddReminder extends Component {
  state = {
    open: false,
    title: "",
    description: "",
    date: new Date(),
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  handleTxtChange = (e) => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const reminder = { ...this.state };
    reminder.id = this.props.reminderTotal + 1;
    delete reminder.open;
    // add addReminder func
    this.props.addReminder(reminder);
    //add this.setState to close dialog
    this.setState({ open: false });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        title: "",
        description: "",
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="mainBox">
          <div className="header">
            <h1>Reminders:</h1>
            <div className="add-btn">
              <button onClick={this.toggleDialog}>+</button>
            </div>
          </div>
        </div>
        <div>
          <Dialog
            open={this.state.open}
            onClose={this.toggleDialog}
            maxWidth="sm"
            fullWidth
          >
            <DialogTitle>Add New Reminder</DialogTitle>
            <DialogContent className="">
              <form onSubmit={this.handleSubmit} className="form">
                <TextField
                  id="title"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.handleTxtChange}
                  required
                  className="txtinput"
                />
                <TextField
                  id="description"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.handleTxtChange}
                  className="txtinput"
                  multiline
                  rows={4}
                />
                <DatePicker
                  type="date"
                  //disable pass dates
                  minDate={new Date()}
                  selected={this.state.date}
                  onChange={(date) => {
                    this.setState({ date: date });
                  }}
                  dateFormat="Pp"
                  showTimeSelect
                  timeFormat="p"
                  shouldCloseOnSelect={false}
                />
                <br />

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </Fragment>
    );
  }
}

export default AddReminder;
