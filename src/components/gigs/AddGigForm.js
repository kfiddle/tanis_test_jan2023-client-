import { useEffect, useReducer, useState } from "react";

import validator from "validator";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import InputText from "../forms/InputText.js";
import FoneInput from "../forms/FoneInput";

import usePush from "../../hooks/usePush.js";

import classes from "./AddGigForm.module.css";
import InstsDropDown from "./InstsDropDown.js";

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
    case "reset":
      return { ...initialState };
  }
};

const AddGigForm = ({ submitClicked, setSubmitClicked, handleClose }) => {
  const [gig, setGig] = useState({});
  const [value, onChange] = useState(new Date());
  const [validForm, dispatch] = useReducer(validReducer, initialState);
  const pusher = usePush();

  // console.log(value);
  useEffect(() => {
    const sendUpGig = async () => {
      //   const names = player.fullName.split(" ");
      //   delete player.fullName;
      //   const playerToSend = {
      //     ...player,
      //     fName: names.slice(0, -1).join(" "),
      //     lName: names[names.length - 1],
      //   };
      //   const response = await pusher(playerToSend, "players");
      //   if (response !== null) handleClose();
      // };
      // if (submitClicked && validator.isEmail(player.email) && player.fullName) {
      //   sendUpPlayer();
    };
  }, [submitClicked, handleClose]);

  return (
    <form className={classes.innerContainer}>
      <InputText
        isValid={validForm.venue}
        label={"Venue"}
        onChange={(event) => setGig({ ...gig, venue: event.target.value })}
      />

      <InputText
        label={"Address"}
        isValid
        onChange={(event) => setGig({ ...gig, address: event.target.value })}
      />

      <div className={classes.calendarDiv}>
        <Calendar
          value={value}
          className={classes.calendar}
          onChange={onChange}
        />
      </div>

      <div className={classes.instsDiv}>
        <InstsDropDown />
      </div>

      <FoneInput gig={gig} gigSetter={setGig} />

      <InputText
        label={"Contact Email"}
        isValid={validForm.email}
        onChange={(event) => {
          setSubmitClicked(false);
          dispatch({ type: "email", isValid: true });
          setGig({ ...gig, contactEmail: event.target.value });
        }}
      />
    </form>
  );
};

export default AddGigForm;
