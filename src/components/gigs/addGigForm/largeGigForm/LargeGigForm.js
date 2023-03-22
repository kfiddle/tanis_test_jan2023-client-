import { useEffect, useReducer, useState } from "react";

// import validator from "validator";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useMediaQuery } from "react-responsive";

import { useDispatch } from "react-redux";
import { refreshActions } from "../../../../redux/Refresh.js";

import InputText from "../../../forms/InputText.js";
// import FoneInput from "../../forms/FoneInput";

import usePush from "../../../../hooks/usePush.js";
import useMakeGigReducer from "../../../../hooks/useMakeGigReducer.js";
import useGigMaker from "../../../../hooks/useGigMaker.js";
import useValidGigForm from "../../../../hooks/useValidGigForm.js";

import InstsDropDown from "../InstsDropDown.js";
import TimeInput from "../TimeInput.js";
import Textarea from "../../../forms/Textarea.js";

import classes from "./LargeGigForm.module.css";

const LargeGigForm = ({ submitClicked, setSubmitClicked, handleClose }) => {
  const [gig, gigDispatch, timeSetter, minuteFormer, formatPay, dateHandler] =
    useGigMaker();

  const [error, setError] = useState(false);
  const [dateValue, dateChanger] = useState(new Date());
  const [validForm, dispatch] = useValidGigForm();
  const pusher = usePush();
  const refreshDispatch = useDispatch();

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
        width={"50%"}
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

      <div className={classes.timeDateDiv}>
        <div className={classes.calendarDiv}>
          <Calendar
            value={gig.date}
            className={classes.calendar}
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
      </div>
      <div className={classes.instsDiv}>
        <InstsDropDown instIds={gig.instIds} gigDispatch={gigDispatch} />
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
        // onChange={formatFone}
        // keyDown={checkForDelete}
        // value={gig.contactPhone}
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

export default LargeGigForm;
