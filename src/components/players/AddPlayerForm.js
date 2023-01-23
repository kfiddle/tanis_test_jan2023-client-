import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import validator from "validator";
import { Hint } from "react-autocomplete-hint";

import InputText from "../forms/InputText.js";
import FoneInput from "../forms/FoneInput";

import usePush from "../../hooks/usePush.js";

import classes from "./AddPlayerForm.module.css";
import { isAllOf } from "@reduxjs/toolkit";

const AddPlayerForm = ({ submitClicked, handleClose }) => {
  const [player, setPlayer] = useState({});
  const allInsts = useSelector((state) => state.insts.allInsts).map(
    (inst) => inst.name
  );
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
          isValid={true}
          onChange={(event) =>
            setPlayer({ ...player, fullName: event.target.value })
          }
        />
      </div>
      <div>
        <Hint options={allInsts} allowTabFill={true} allowEnterFill={true}>
          <input
            label={"Primary Instrument"}
            onChange={(event) =>
              setPlayer({ ...player, instrument: event.target.value })
            }
          />
        </Hint>
      </div>

      <div className={classes.control}>
      <label className={classes.label}>Primary Instrument</label>
      <input
        type={"text"}
        // placeholder={placeholder}
        // onChange={onChange}
      ></input>
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
          onChange={(event) =>
            setPlayer({ ...player, email: event.target.value })
          }
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
