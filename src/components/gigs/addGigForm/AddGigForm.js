import { useMediaQuery } from "react-responsive";

import SmallGigForm from "./smallGigForm/SmallGigForm.js";
import LargeGigForm from "./largeGigForm/LargeGigForm.js";

const AddGigForm = ({ submitClicked, setSubmitClicked, handleClose }) => {
  const isSmall = useMediaQuery({ query: "(max-width: 1224px)" });

  if (isSmall) {
    return (
      <SmallGigForm
        submitClicked={submitClicked}
        setSubmitClicked={setSubmitClicked}
        handleClose={handleClose}
      />
    );
  } else {
    return (
      <LargeGigForm
        submitClicked={submitClicked}
        setSubmitClicked={setSubmitClicked}
        handleClose={handleClose}
      />
    );
  }
};

export default AddGigForm;
