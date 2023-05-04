import React, { useState } from "react";
import moment from "moment";

function CheckEvents(props) {
  const { reminders } = props;
  console.log("props", props);

  const [notification, setNotification] = useState("");

  const checkEvent = () => {
    const now = new Date();
    const upcomingEvents = reminders.filter(
      (reminder) => new Date(reminder.date) > now
    );
    if (upcomingEvents.length > 0) {
      const nextEvent = upcomingEvents[0];
      const timeUntilNextEvent = new Date(nextEvent.date) - now;
      const hours = Math.floor(timeUntilNextEvent / (1000 * 60 * 60));
      const minutes = Math.floor(
        (timeUntilNextEvent % (1000 * 60 * 60)) / (1000 * 60)
      );
      setNotification(
        `Next event "${nextEvent.title}" in ${hours} hours and ${minutes} minutes`
      );
      setTimeout(() => setNotification(""), timeUntilNextEvent);
    }
  };

  setInterval(checkEvent, 60000);

  return (
    <div>
      {notification && <p>{notification}</p>}
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>
            <h3>{reminder.title}</h3>
            <p>
              {moment(new Date(reminder.date))
                .format("MMMM Do YYYY, h:mm a")
                .toString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckEvents;
