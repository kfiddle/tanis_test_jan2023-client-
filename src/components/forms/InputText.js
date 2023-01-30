import React from "react";

import classes from "./InputText.module.css";

const InputText = React.forwardRef((props, ref) => {
  const { label, onChange, placeholder, isValid, keyDown, value } = props;

  const inputClasses = isValid
    ? classes.input
    : `${classes.input} ${classes.invalid}`;

  return (
    <div className={classes.control}>
      <label className={classes.label}>{label}</label>
      <input
        className={inputClasses}
        type={"text"}
        ref={ref}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={keyDown ? keyDown : null}
        value={value ? value : ''}
      ></input>
    </div>
  );
});

export default InputText;
