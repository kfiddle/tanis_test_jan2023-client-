import { useEffect, useState } from "react";

import validator from "validator";

import InputText from "../forms/InputText.js";
import FoneInput from "../forms/FoneInput";

import usePush from "../../hooks/usePush.js";

import classes from "./AddPlayerForm.module.css";

const AddPlayerForm = ({ submitClicked, handleClose }) => {
  const [player, setPlayer] = useState({});
  const pusher = usePush();

  useEffect(() => {
    const sendUpPlayer = async () => {
      const names = player.fullName.split(" ");

      delete player.fullName;
      const playerToSend = {
        ...player,
        fName: names.slice(0, -1).join(" "),
        lName: names[names.length - 1],
      };

      const response = await pusher(playerToSend, "players");
      if (response !== null) handleClose();
    };
    if (submitClicked && validator.isEmail(player.email) && player.fullName) {
      sendUpPlayer();
    }
  }, [submitClicked, handleClose]);

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
