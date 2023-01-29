import { useEffect, useReducer, useState } from "react";

import validator from "validator";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Overlay from "react-bootstrap/esm/Overlay.js";
import Popover from "react-bootstrap/Popover";

import InputText from "../forms/InputText.js";
import FoneInput from "../forms/FoneInput";

import usePush from "../../hooks/usePush.js";

import classes from "./AddGigForm.module.css";
import InstsDropDown from "./InstsDropDown.js";
import TimeInput from "./TimeInput.js";

const initialState = {
  venue: true,
  firstInst: true,
  secondInst: true,
  email: true,
};

const validReducer = (state, action) => {
  switch (action.type) {
    case "venue":
      return { ...state, venue: action.isValid };
    case "firstInst":
      return { ...state, firstInst: action.isValid };
    case "secondInst":
      return { ...state, secondInst: action.isValid };
    case "email":
      return { ...state, email: action.isValid };
    case "time":
      return { ...state, [action.clockHand]: action.time };
    case "reset":
      return { ...initialState };
  }
};

const initialGig = {
  venue: "",
  address: "",
  contactEmail: "",
  startHours: "",
  startMin: "",
  endHours: "",
  endMin: "",
};

const gigReducer = (state, action) => {
  switch (action.type) {
    case "venue":
      return { ...state, venue: action.venue };
    case "address":
      return { ...state, address: action.address };
    case "contactEmail":
      return { ...state, contactEmail: action.contactEmail };
    case "startHours":
      return { ...state, startHours: action.startHours };
    case "startMin":
      return { ...state, startMin: action.startMin };
    case "endHours":
      return { ...state, endHours: action.endHours };
    case "endMin":
      return { ...state, endMin: action.endMin };
    // case "email":
    //   return { ...state, email: action.isValid };

    case "reset":
      return { ...initialState };
  }
};

const AddGigForm = ({ submitClicked, setSubmitClicked, handleClose }) => {
  const [gig, gigDispatch] = useReducer(gigReducer, initialGig);
  const [value, onChange] = useState(new Date());
  const [validForm, dispatch] = useReducer(validReducer, initialState);
  const pusher = usePush();

  const timeSetter = (clockHand) => (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 3) {
      return;
    }
    gigDispatch({ type: clockHand, [clockHand]: event.target.value });
  };

  useEffect(() => {
    const sendUpGig = async () => {
      console.log(gig);
    };
    if (submitClicked) sendUpGig();
  }, [submitClicked, handleClose]);

  return (
    <form className={classes.innerContainer}>
      <InputText
        isValid={validForm.venue}
        label={"Venue"}
        onChange={(event) =>
          gigDispatch({ type: "venue", venue: event.target.value })
        }
      />

      <InputText
        label={"Address"}
        isValid
        onChange={(event) =>
          gigDispatch({ type: "address", address: event.target.value })
        }
      />

      <div className={classes.calendarDiv}>
        <Calendar
          value={value}
          className={classes.calendar}
          onChange={onChange}
        />
      </div>

      <div className={classes.timeInputDiv}>
        <TimeInput timeSetter={timeSetter} gig={gig} />
      </div>

      <div className={classes.instsDiv}>
        <InstsDropDown />
      </div>

      {/* <FoneInput gig={gig} gig={setGig} /> */}

      <InputText
        label={"Contact Email"}
        isValid={validForm.email}
        onChange={(event) => {
          setSubmitClicked(false);
          dispatch({ type: "email", isValid: true });
          gigDispatch({
            type: "contactEmail",
            contactEmail: event.target.value,
          });
        }}
      />
    </form>
  );
};

export default AddGigForm;
