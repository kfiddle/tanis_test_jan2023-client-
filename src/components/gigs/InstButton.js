import { useState, useEffect, useContext } from "react";

import styles from "./InstButton.module.css";

const InstButton = ({ instrument, instId, parts, gigDispatch }) => {
  const [clicked, setClicked] = useState(false);
  const [localNumber, setLocalNumber] = useState(0);

  const clickHandler = () => {
    if (!parts.includes(instId) && !clicked) {
      gigDispatch({ type: "parts", parts: [...parts, instId] });
    }

    if (parts.includes(instId) && clicked) {
      gigDispatch({
        type: "parts",
        parts: parts.filter((id) => id !== instId),
      });
    }
    setClicked((previous) => !previous);
  };

  const addButtonClicker = () => {
    gigDispatch({ type: "parts", parts: [...parts, instId] });
  };

  const subtractButtonClicker = () => {
    const tempParts = parts;
    const index = tempParts.findIndex((id) => id === instId);
    tempParts.splice(index, 1);
    gigDispatch({ type: "parts", parts: tempParts });
    setLocalNumber((previous) => previous - 1);
  };

  let outerClassNames = !clicked
    ? styles.instrumentItemDiv
    : styles.clickedItem;
  let buttonsClassNames = !clicked ? styles.invisible : styles.buttonsAndNumber;

  return (
    <div className={styles.outerContainer}>
      <div className={buttonsClassNames}>
        <button
          type="button"
          onClick={subtractButtonClicker}
          className={styles.button}
        >
          -
        </button>
        <button
          type="button"
          onClick={addButtonClicker}
          className={styles.button}
        >
          +
        </button>{" "}
        <div className={styles.numberDiv}>
          {parts.filter((id) => id === instId).length}
        </div>
      </div>

      <div onClick={clickHandler} className={outerClassNames}>
        <div className={styles.nameDiv}>{instrument}</div>
      </div>
    </div>
  );
};

export default InstButton;
