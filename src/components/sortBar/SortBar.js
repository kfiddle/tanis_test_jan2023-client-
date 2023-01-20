import { useState } from "react";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import classes from "./SortBar.module.css";

const SortBar = ({ sorter, options }) => {
  const [clickedOption, setClickedOption] = useState("");

  const clickedOptionHandler = (option) => {
    setClickedOption(option);
    sorter(option);
  };

  const displayableSortOptions = options.map((option, idx) => (
    <Button
      key={idx}
      variant="secondary"
      active
      style={{ background: "#708090", color: "black", fontWeight: "bold" }}
      onClick={() => clickedOptionHandler(option)}
    >
      {option}
    </Button>
  ));

  return <ButtonGroup>{displayableSortOptions}</ButtonGroup>;
};

export default SortBar;
