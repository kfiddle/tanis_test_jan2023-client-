import { useState, useEffect, useContext } from "react";
import { useMediaQuery } from "react-responsive";

import styles from "./InstButton.module.css";

const InstButton = ({ instrument, instId, instIds, gigDispatch }) => {
  const [clicked, setClicked] = useState(false);
  const [localNumber, setLocalNumber] = useState(0);

  const isSmall = useMediaQuery({ query: "(max-width: 1224px)" });

  const clickHandler = () => {
    if (!instIds.includes(instId) && !clicked) {
      gigDispatch({ type: "instIds", instIds: [...instIds, instId] });
    }

    if (instIds.includes(instId) && clicked) {
      gigDispatch({
        type: "instIds",
        instIds: instIds.filter((id) => id !== instId),
      });
    }
    setClicked((previous) => !previous);
  };

  const addButtonClicker = () => {
    gigDispatch({ type: "instIds", instIds: [...instIds, instId] });
  };

  const subtractButtonClicker = () => {
    const tempParts = instIds;
    const index = tempParts.findIndex((id) => id === instId);
    tempParts.splice(index, 1);
    gigDispatch({ type: "instIds", instIds: tempParts });
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
          {instIds.filter((id) => id === instId).length}
        </div>
      </div>

      <div onClick={clickHandler} className={outerClassNames}>
        <div className={styles.nameDiv}>{instrument}</div>
      </div>
    </div>
  );
};

export default InstButton;
