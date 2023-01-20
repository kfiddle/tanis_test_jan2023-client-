import { useEffect, useState } from "react";

import validator from "validator";

import InputText from "../forms/InputText.js";
import FoneInput from "../forms/FoneInput";

import classes from "./AddPlayerForm.module.css";

const nameMaker = (fullEnteredName) => {
  if (!fullEnteredName) {
    return;
  }
  const names = fullEnteredName.split(" ");
  const tempFirstNameArea = names.slice(0, -1);

  return {
    enteredFirstNameArea: tempFirstNameArea.join(" "),
    enteredLastName: names[names.length - 1],
  };
};

const AddPlayerForm = ({ submitClicked }) => {
  const [player, setPlayer] = useState({});

  useEffect(() => {
    if (submitClicked && validator.isEmail(player.email) && player.fullName) {
      const names = player.fullName.split(" ");

      delete player.fullName;
      const playerToSend = {
        ...player,
        fName: names.slice(0, -1).join(" "),
        lName: names[names.length - 1],
      };

      console.log(playerToSend);
    }
  }, [submitClicked]);

  return (
    <form className={classes.innerContainer}>
      <div>
        <InputText
          label={"Full Name"}
          onChange={(event) =>
            setPlayer({ ...player, fullName: event.target.value })
          }
        />
      </div>

      <div className={classes.phoneDiv}>
        <FoneInput
          whichType={"cellPhone"}
          player={player}
          playerSetter={setPlayer}
        />

        <InputText
          label={"Email"}
          onChange={(event) =>
            setPlayer({ ...player, email: event.target.value })
          }
        />

        <InputText
          label={"Address Line 1"}
          onChange={(event) =>
            setPlayer({ ...player, addressLine1: event.target.value })
          }
        />

        <InputText
          label={"Address Line 2"}
          onChange={(event) =>
            setPlayer({ ...player, addressLine2: event.target.value })
          }
        />

        <InputText
          label={"City"}
          onChange={(event) =>
            setPlayer({ ...player, city: event.target.value })
          }
        />

        <InputText
          label={"State"}
          onChange={(event) =>
            setPlayer({ ...player, state: event.target.value })
          }
        />

        <InputText
          label={"Zip"}
          onChange={(event) =>
            setPlayer({ ...player, zip: event.target.value })
          }
        />
      </div>
    </form>
  );
};

export default AddPlayerForm;
