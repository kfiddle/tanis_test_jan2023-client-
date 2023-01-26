import { useState, useEffect, useContext, useReducer } from "react";
import classes from "./TimeInput.module.css";

const START_HOURS = "startHours";
const START_MIN = "startMin";
const END_HOURS = "endHours";
const END_MIN = "endMin";

const initialState = {
  [START_HOURS]: "",
  [START_MIN]: "",
  [END_HOURS]: "",
  [END_MIN]: "",
};

const timeReducer = (state, action) => {
  return { ...state, [action.clockHand]: action.time };
};

const TimeInput = ({}) => {
  const [timeState, dispatch] = useReducer(timeReducer, initialState);

  const timeSetter = (clockHand) => (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 3) {
      return;
    }
    dispatch({ clockHand, time: event.target.value });
  };

  console.log(timeState);

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
                value={timeState[START_HOURS]}
                style={{ width: "4rem", marginRight: ".5rem" }}
              ></input>
              <input
                type={"text"}
                onChange={timeSetter(START_MIN)}
                value={timeState[START_MIN]}
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
                value={timeState[END_HOURS]}
                style={{ width: "4rem", marginRight: ".5rem" }}
              ></input>
              <input
                type={"text"}
                onChange={timeSetter(END_MIN)}
                value={timeState[END_MIN]}
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
