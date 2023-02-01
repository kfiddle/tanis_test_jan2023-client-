import { useEffect, useReducer, useState } from "react";

import validator from "validator";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useDispatch } from "react-redux";
import { refreshActions } from "../../../redux/Refresh.js";

import InputText from "../../forms/InputText.js";
import FoneInput from "../../forms/FoneInput";

import usePush from "../../../hooks/usePush.js";

import classes from "./AddGigForm.module.css";
import InstsDropDown from "./InstsDropDown.js";
import TimeInput from "./TimeInput.js";
import Textarea from "../../forms/Textarea.js";

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
  parts: [],
  date: new Date(),
  startHours: "",
  startMin: "",
  endHours: "",
  endMin: "",
  contactEmail: "",
  contactPhone: "",
  notes: "",
};

const gigReducer = (state, action) => {
  switch (action.type) {
    case "venue":
      return { ...state, venue: action.venue };
    case "address":
      return { ...state, address: action.address };
    case "date":
      return { ...state, date: action.date };
    case "contactEmail":
      return { ...state, contactEmail: action.contactEmail };
    case "contactPhone":
      return { ...state, contactPhone: action.contactPhone };
    case "startHours":
      return { ...state, startHours: action.startHours };
    case "startMin":
      return { ...state, startMin: action.startMin };
    case "endHours":
      return { ...state, endHours: action.endHours };
    case "endMin":
      return { ...state, endMin: action.endMin };
    case "parts":
      return { ...state, parts: action.parts };
    case "notes":
      return { ...state, notes: action.notes };
    // case "email":
    //   return { ...state, email: action.isValid };

    case "reset":
      return { ...initialState };
  }
};

const AddGigForm = ({ submitClicked, setSubmitClicked, handleClose }) => {
  const [gig, gigDispatch] = useReducer(gigReducer, initialGig);
  const [error, setError] = useState(false);
  const [dateValue, dateChanger] = useState(new Date());
  const [validForm, dispatch] = useReducer(validReducer, initialState);
  const pusher = usePush();
  const refreshDispatch = useDispatch();

  const timeSetter = (clockHand) => (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 3) {
      return;
    }
    gigDispatch({ type: clockHand, [clockHand]: event.target.value });
  };

  const minuteFormer = (clockHand) => (event) => {
    let minutes = event.target.value;
    if ((minutes.length === 1 && minutes === "0") || minutes.length === 0)
      return gigDispatch({ type: clockHand, [clockHand]: "00" });
    if (minutes <= 9 && minutes.length > 0 && minutes[0] !== "0")
      return gigDispatch({ type: clockHand, [clockHand]: "0" + minutes });
    gigDispatch({ type: clockHand, [clockHand]: minutes });
  };

  const formatFone = (event) => {
    let enteredNum = event.target.value;
    if (isNaN(event.nativeEvent.data) || enteredNum.length === 13) {
      return;
    }
    if (enteredNum.length === 3 || enteredNum.length === 7) {
      return gigDispatch({
        type: "contactPhone",
        contactPhone: enteredNum + "-",
      });
    }
    return gigDispatch({ type: "contactPhone", contactPhone: enteredNum });
  };

  const checkForDelete = (event) => {
    if (
      event.code === "Backspace" &&
      gig.contactPhone[gig.contactPhone.length - 1] === "-"
    ) {
      return gigDispatch({
        type: "contactPhone",
        contactPhone: gig.contactPhone.slice(0, -1),
      });
    }
    return;
  };

  const dateHandler = (event) => {
    gigDispatch({ type: "date", date: event });
  };

  useEffect(() => {
    const sendUpGig = async () => {
      setSubmitClicked(false);
      const response = await pusher(gig, "gigs");
      if (typeof response === "string") return setError(response);
      refreshDispatch(refreshActions.toggle(true));
      handleClose();
    };
    if (submitClicked) {
      sendUpGig();
    }
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
          // value={dateValue}
          value={gig.date}
          className={classes.calendar}
          // onChange={dateChanger}
          onChange={(event) => dateHandler(event)}
        />
      </div>

      <div className={classes.timeInputDiv}>
        <TimeInput
          timeSetter={timeSetter}
          minuteFormer={minuteFormer}
          gig={gig}
        />
      </div>

      <div className={classes.instsDiv}>
        <InstsDropDown parts={gig.parts} gigDispatch={gigDispatch} />
      </div>

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

      <InputText
        label={"Contact Phone"}
        isValid={true}
        onChange={formatFone}
        keyDown={checkForDelete}
        value={gig.contactPhone}
      />

      <Textarea
        label="notes"
        onChange={(event) =>
          gigDispatch({ type: "notes", notes: event.target.value })
        }
      />
    </form>
  );
};

export default AddGigForm;
