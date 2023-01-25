import { useState } from "react";

import classes from "./FoneInput.module.css";

const FoneInput = (props) => {
  const [foneNumber, setFoneNumber] = useState("");
  const { whichType, player, playerSetter } = props;

  let key = whichType;
  let placeholder = player[whichType];

  // let label = whichType === "homePhone" ? "Home Phone" : "Cell Phone";
  let label = "Phone";

  const formatNumber = (event) => {
    if (isNaN(event.nativeEvent.data) || event.target.value.length === 13) {
      return;
    }
    if (
      (event.target.value.length === 3 || event.target.value.length === 7) &&
      !isNaN(event.nativeEvent.data)
    ) {
      playerSetter({ ...player, phone: event.target.value + "-" });
      setFoneNumber(event.target.value + "-");
    } else {
      playerSetter({ ...player, phone: event.target.value });
      setFoneNumber(event.target.value);
    }
  };

  const checkForDelete = (event) => {
    if (
      event.code === "Backspace" &&
      foneNumber[foneNumber.length - 1] === "-"
    ) {
      setFoneNumber((previous) => previous.slice(0, -1));
    }
  };

  return (
    <div className={classes.control}>
      <label>{label}</label>
      <input
        className={classes.control}
        onChange={formatNumber}
        onKeyDown={checkForDelete}
        value={foneNumber}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default FoneInput;
