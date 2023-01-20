import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import * as Constants from "../constants/Constants";
import AddPlayerForm from "../players/AddPlayerForm";
import AddGigForm from "../gigs/AddGigForm";

const MyModal = ({ handleCloser, formType }) => {
  const [show, setShow] = useState(true);
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleClose = () => handleCloser();

  const submitClicker = () => setSubmitClicked(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formType === Constants.PLAYER_ADD && (
            <AddPlayerForm
              submitClicked={submitClicked}
              handleClose={handleClose}
            />
          )}

          {formType === Constants.GIG_ADD && (
            <AddGigForm
              submitClicked={submitClicked}
              handleClose={handleClose}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitClicker}>
            Submit Player
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
