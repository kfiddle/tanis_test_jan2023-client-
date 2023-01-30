import { useState, useEffect, useContext, useReducer } from "react";
import classes from "./TimeInput.module.css";

const START_HOURS = "startHours";
const START_MIN = "startMin";
const END_HOURS = "endHours";
const END_MIN = "endMin";

const TimeInput = ({ timeSetter, minuteFormer, gig }) => {
  const timeShown = {
    startHours: gig.startHours,
    startMin: gig.startMin,
    endHours: gig.endHours,
    endMin: gig.endMin,
  };

  // const inputClasses =

  return (
    <div className={classes.outerContainer}>
      <div className={classes.bothTimesHolder}>
        <div className={classes.bothTimesHolder}>
          <div className={`${classes.control} ${classes.timeDiv}`}>
            <label>Start Time</label>
            <div className={classes.hoursMinutesHolder}>
              <input
                className={
                  timeShown.startHours < 13 ? classes.input : classes.invalid
                }
                type={"text"}
                onChange={timeSetter(START_HOURS)}
                value={timeShown.startHours}
                style={{ width: "4rem", marginRight: ".5rem" }}
              ></input>
              <input
                className={
                  timeShown.startMin < 60 ? classes.input : classes.invalid
                }
                type={"text"}
                onChange={timeSetter(START_MIN)}
                onBlur={minuteFormer(START_MIN)}
                value={timeShown.startMin}
                style={{ width: "6rem" }}
              ></input>
            </div>
          </div>

          <div className={`${classes.control} ${classes.timeDiv}`}>
            <label>End Time?</label>
            <div className={classes.hoursMinutesHolder}>
              <input
                className={
                  timeShown.endHours < 13 ? classes.input : classes.invalid
                }
                type={"text"}
                onChange={timeSetter(END_HOURS)}
                value={timeShown.endHours}
                style={{ width: "4rem", marginRight: ".5rem" }}
              ></input>
              <input
                className={
                  timeShown.endMin < 60 ? classes.input : classes.invalid
                }
                type={"text"}
                onChange={timeSetter(END_MIN)}
                onBlur={minuteFormer(END_MIN)}
                value={timeShown.endMin}
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
