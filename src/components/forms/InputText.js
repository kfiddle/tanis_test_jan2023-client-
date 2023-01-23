import React from "react";

import classes from "./InputText.module.css";

const InputText = React.forwardRef((props, ref) => {
  const { label, onChange, placeholder, isValid} = props;

  const classNames = isValid? classes.control : `${classes.control} ${classes.invalid}`;

  return (
    <div className={classNames}>
      <label>{label}</label>
      <input
        type={"text"}
        ref={ref}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </div>
  );
});

export default InputText;
