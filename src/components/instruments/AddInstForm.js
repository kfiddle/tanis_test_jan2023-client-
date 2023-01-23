import { useEffect, useState } from "react";

import validator from "validator";

import InputText from "../forms/InputText.js";

import usePush from "../../hooks/usePush.js";

import classes from "./AddInstForm.module.css";

const AddInstForm = ({ submitClicked, setSubmitClicked, handleClose }) => {
  const [inst, setInst] = useState({});
  const [instAlreadyExists, setInstAlreadyExists] = useState(false);
  const pusher = usePush();

  useEffect(() => {
    const sendUpInst = async () => {
      const response = await pusher(inst, "insts");

      if (
        typeof response === "string" &&
        response === "instrument already exists"
      )
        return setInstAlreadyExists(true);
      handleClose();
    };
    if (submitClicked && !validator.isEmpty(inst.name)) {
      sendUpInst();
    }
  }, [submitClicked, handleClose]);

  const onChangeFunc = (event) => {
    setInstAlreadyExists(false)
    setSubmitClicked(false)
    setInst({ ...inst, name: event.target.value.toLowerCase() });
  };

  return (
    <form className={classes.innerContainer}>
      <div>
        <InputText
          label={
            !instAlreadyExists ? "Instrument Name" : "instrument already exists"
          }
          isValid={!instAlreadyExists}
          onChange={(event) => onChangeFunc(event)}
        />
      </div>
    </form>
  );
};

export default AddInstForm;
