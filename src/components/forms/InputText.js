import React from "react";

import classes from "./InputText.module.css";

const InputText = React.forwardRef((props, ref) => {
  const { label, onChange, placeholder, isValid, keyDown, value, width } =
    props;

  const inputClasses = isValid
    ? classes.input
    : `${classes.input} ${classes.invalid}`;

  console.log(width);

  return value ? (
    <div className={classes.control}>
      <label className={classes.label}>{label}</label>
      <input
        className={inputClasses}
        type={"text"}
        ref={ref}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={keyDown ? keyDown : null}
        value={value}
      ></input>
    </div>
  ) : (
    <div style={{ width }} className={classes.control}>
      <label className={classes.label}>{label}</label>
      <input
        className={inputClasses}
        type={"text"}
        ref={ref}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={keyDown ? keyDown : null}
      ></input>
    </div>
  );
});

export default InputText;
