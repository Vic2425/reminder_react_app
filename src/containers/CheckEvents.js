import { connect } from "react-redux";
import CheckEvents from "../components/CheckEvents";
import { checkEvent } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addReminder: (reminder) => dispatch(checkEvent(reminder)),
  };
};

export default connect(null, mapDispatchToProps)(CheckEvents);
