import { useState, useEffect, useContext, useReducer } from "react";
import classes from "./TimeInput.module.css";

const START_HOURS = "startHours";
const START_MIN = "startMin";
const END_HOURS = "endHours";
const END_MIN = "endMin";

const TimeInput = ({ timeSetter, gig }) => {
  const displayedValues = {
    startHours: gig.startHours,
    startMin: +gig.startMin <= 9 ? "0" + gig.startMin : gig.endMin,
    endHours: gig.endHours,
    endMin: +gig.endMin <= 9 ? "0" + gig.endMin : gig.endMin,
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.bothTimesHolder}>
        <div className={classes.bothTimesHolder}>
          <div className={`${classes.control} ${classes.timeDiv}`}>
            <label>Start Time</label>
            <div className={classes.hoursMinutesHolder}>
              <input
                type={"text"}
                onChange={timeSetter(START_HOURS)}
                value={displayedValues.startHours}
                style={{ width: "4rem", marginRight: ".5rem" }}
              ></input>
              <input
                type={"text"}
                onChange={timeSetter(START_MIN)}
                value={displayedValues.startMin}
                style={{ width: "6rem" }}
              ></input>
            </div>
          </div>

          <div className={`${classes.control} ${classes.timeDiv}`}>
            <label>End Time?</label>
            <div className={classes.hoursMinutesHolder}>
              <input
                type={"text"}
                onChange={timeSetter(END_HOURS)}
                value={gig.endHours}
                style={{ width: "4rem", marginRight: ".5rem" }}
              ></input>
              <input
                type={"text"}
                onChange={timeSetter(END_MIN)}
                value={gig.endMin}
                style={{ width: "6rem" }}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeInput;
