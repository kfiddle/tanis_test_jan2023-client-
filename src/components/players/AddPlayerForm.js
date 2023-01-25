import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";

import validator from "validator";
import { Hint } from "react-autocomplete-hint";

import InputText from "../forms/InputText.js";
import FoneInput from "../forms/FoneInput";

import usePush from "../../hooks/usePush.js";

import classes from "./AddPlayerForm.module.css";

const initialState = {
  fullName: true,
  firstInst: true,
  secondInst: true,
  email: true,
};

const validReducer = (state, action) => {
  switch (action.type) {
    case "fullName":
      return { ...state, fullName: action.isValid };
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

const AddPlayerForm = ({ submitClicked, setSubmitClicked, handleClose }) => {
  const [player, setPlayer] = useState({});
  const [insts, setInts] = useState([]);
  const [validForm, dispatch] = useReducer(validReducer, initialState);
  const allInsts = useSelector((state) => state.insts.allInsts).map(
    (inst) => inst.name
  );
  const pusher = usePush();

  const formIsValid = () => {
    if (!player.fullName) {
      dispatch({ type: "fullName", isValid: false });
      return false;
    }

    if (insts[0] && !allInsts.includes(insts[0])) {
      console.log("here with no first inst");
      dispatch({ type: "firstInst", isValid: false });
      return false;
    }

    if (insts[1] && !allInsts.includes(insts[1])) {
      dispatch({ type: "secondInst", isValid: false });
      return false;
    }

    if (player.email && validator.isEmail(player.email)) {
      dispatch({ type: "email", isValid: false });
      return false;
    }

    return true;
  };

  useEffect(() => {
    const sendUpPlayer = async () => {
      const names = player.fullName.split(" ");

      delete player.fullName;
      const playerToSend = {
        ...player,
        fName: names.slice(0, -1).join(" "),
        lName: names[names.length - 1],
      };

      // const response = await pusher(playerToSend, "players");
      // if (response !== null) handleClose();
    };
    if (submitClicked && formIsValid()) {
      sendUpPlayer();
    }
  }, [submitClicked, handleClose]);

  const instHandler = (event, num) => {
    let tempList = insts;
    tempList[num] = event.target.value.trim().toLowerCase();
    setInts(tempList);
  };

  return (
    <form className={classes.innerContainer}>
      <button type="button" onClick={() => console.log(player)}>
        check reducer
      </button>
      <div>
        <InputText
          label={"Full Name"}
          isValid={validForm.fullName}
          onChange={(event) => {
            setSubmitClicked(false);
            dispatch({ type: "fullName", isValid: true });
            setPlayer({ ...player, fullName: event.target.value });
          }}
        />
      </div>

      <div className={classes.instInputsDiv}>
        <div className={classes.control}>
          <label className={classes.label}>Instrument</label>
          <Hint options={allInsts} allowTabFill={true} allowEnterFill={true}>
            <input
              type={"text"}
              className={
                validForm.firstInst
                  ? classes.input
                  : `${classes.input} ${classes.invalid}`
              }
              onChange={(event) => {
                setSubmitClicked(false);
                dispatch({ type: "firstInst", isValid: true });
                instHandler(event, 0);
              }}
            ></input>
          </Hint>
        </div>

        <div className={classes.control}>
          <label className={classes.label}>Secondary?</label>
          <Hint options={allInsts} allowTabFill={true} allowEnterFill={true}>
            <input
              type={"text"}
              className={
                validForm.secondInst
                  ? classes.input
                  : `${classes.input} ${classes.invalid} `
              }
              onChange={(event) => {
                setSubmitClicked(false);
                dispatch({ type: "secondInst", isValid: true });
                instHandler(event, 1);
              }}
            ></input>
          </Hint>
        </div>
      </div>

      <div className={classes.phoneDiv}>
        <FoneInput
          whichType={"cellPhone"}
          player={player}
          playerSetter={setPlayer}
        />

        <InputText
          label={"Email"}
          isValid={true}
          onChange={(event) => {
            setSubmitClicked(false);
            dispatch({ type: "email", isValid: true });
            setPlayer({ ...player, email: event.target.value });
          }}
        />

        <InputText
          label={"Address Line 1"}
          isValid={true}
          onChange={(event) =>
            setPlayer({ ...player, addressLine1: event.target.value })
          }
        />

        <InputText
          label={"Address Line 2"}
          isValid={true}
          onChange={(event) =>
            setPlayer({ ...player, addressLine2: event.target.value })
          }
        />

        <InputText
          label={"City"}
          isValid={true}
          onChange={(event) =>
            setPlayer({ ...player, city: event.target.value })
          }
        />

        <InputText
          label={"State"}
          isValid={true}
          onChange={(event) =>
            setPlayer({ ...player, state: event.target.value })
          }
        />

        <InputText
          label={"Zip"}
          isValid={true}
          onChange={(event) =>
            setPlayer({ ...player, zip: event.target.value })
          }
        />
      </div>
    </form>
  );
};

export default AddPlayerForm;
