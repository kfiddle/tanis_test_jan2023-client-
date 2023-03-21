import { useEffect, useReducer, useState } from "react";

// import validator from "validator";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useMediaQuery } from "react-responsive";

import { useDispatch } from "react-redux";
import { refreshActions } from "../../../redux/Refresh.js";

import InputText from "../../forms/InputText.js";
// import FoneInput from "../../forms/FoneInput";

import usePush from "../../../hooks/usePush.js";
import useMakeGigReducer from "../../../hooks/useMakeGigReducer.js";
import useGigMaker from "../../../hooks/useGigMaker.js";
import useValidGigForm from "../../../hooks/useValidGigForm.js";

import classes from "./AddGigForm.module.css";
import InstsDropDown from "./InstsDropDown.js";
import TimeInput from "./TimeInput.js";
import Textarea from "../../forms/Textarea.js";
import SmallGigForm from "./SmallGigForm.js";

const AddGigForm = ({ submitClicked, setSubmitClicked, handleClose }) => {
  const [gig, gigDispatch, timeSetter, minuteFormer, formatPay, dateHandler] =
    useGigMaker();

  const [error, setError] = useState(false);
  const [dateValue, dateChanger] = useState(new Date());
  const [validForm, dispatch] = useValidGigForm();
  const pusher = usePush();
  const refreshDispatch = useDispatch();

  const isSmall = useMediaQuery({ query: "(max-width: 1224px)" });

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

  if (isSmall) {
    return <SmallGigForm submitClicked setSubmitClicked handleClose />;
    // <form className={classes.innerContainer}>
    //   <InputText
    //     isValid={validForm.venue}
    //     label={"Venue"}
    //     onChange={(event) =>
    //       gigDispatch({ type: "venue", venue: event.target.value })
    //     }
    //   />

    //   <InputText
    //     label={"Address"}
    //     isValid
    //     onChange={(event) =>
    //       gigDispatch({ type: "address", address: event.target.value })
    //     }
    //   />

    //   <div className={classes.calendarDiv}>
    //     <Calendar
    //       value={gig.date}
    //       className={classes.calendar}
    //       onChange={(event) => dateHandler(event)}
    //     />
    //   </div>

    //   <div className={classes.timeInputDiv}>
    //     <TimeInput
    //       timeSetter={timeSetter}
    //       minuteFormer={minuteFormer}
    //       gig={gig}
    //     />
    //   </div>

    //   <div className={classes.instsDiv}>
    //     <InstsDropDown instIds={gig.instIds} gigDispatch={gigDispatch} />
    //   </div>

    //   <div className={classes.control}>
    //     <label className={classes.label}>Compensation per player?</label>
    //     <input
    //       className={classes.input}
    //       type={"text"}
    //       onChange={formatPay}
    //       value={gig.pay}
    //     ></input>
    //   </div>

    //   <InputText
    //     label={"Contact Email"}
    //     isValid={validForm.email}
    //     onChange={(event) => {
    //       setSubmitClicked(false);
    //       dispatch({ type: "email", isValid: true });
    //       gigDispatch({
    //         type: "contactEmail",
    //         contactEmail: event.target.value,
    //       });
    //     }}
    //   />

    //   <InputText
    //     label={"Contact Phone"}
    //     isValid={true}
    //     // onChange={formatFone}
    //     // keyDown={checkForDelete}
    //     // value={gig.contactPhone}
    //   />

    //   <Textarea
    //     label="notes"
    //     onChange={(event) =>
    //       gigDispatch({ type: "notes", notes: event.target.value })
    //     }
    //   />
    // </form>
  } else {
    // large form is below

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
  }
};

export default AddGigForm;
