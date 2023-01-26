import { useState, useEffect, useContext } from "react";

import styles from "./InstButton.module.css";

const InstButton = ({ instrument }) => {
  const [clicked, setClicked] = useState(false);
  const [localNumber, setLocalNumber] = useState(0);

  const clickHandler = () => {
    setClicked((previous) => !previous);
  };

  const addButtonClicker = () => {
    setLocalNumber((previous) => previous + 1);
  };

  const subtractButtonClicker = () => {
    setLocalNumber((previous) => previous - 1);
  };

  let outerClassNames = !clicked
    ? styles.instrumentItemDiv
    : styles.clickedItem;
  let buttonsClassNames = !clicked ? styles.invisible : styles.buttonsAndNumber;

  return (
    <div className={styles.outerContainer}>
      <div className={buttonsClassNames}>
        <button type='button' onClick={subtractButtonClicker} className={styles.button}>
          -
        </button>
        <button type='button' onClick={addButtonClicker} className={styles.button}>
          +
        </button>{" "}
        <div className={styles.numberDiv}>{localNumber}</div>
      </div>

      <div onClick={clickHandler} className={outerClassNames}>
        <div className={styles.nameDiv}>{instrument}</div>
      </div>
    </div>
  );
};

export default InstButton;
