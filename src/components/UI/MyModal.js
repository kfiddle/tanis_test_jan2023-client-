import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import * as Constants from "../constants/Constants";

import AddPlayerForm from "../players/AddPlayerForm";
import AddGigForm from "../gigs/AddGigForm";
import AddInstForm from "../instruments/AddInstForm";

const MyModal = ({ handleCloser, formType, fullscreen }) => {
  const [show, setShow] = useState(true);
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleClose = () => handleCloser();

  const submitClicker = () => setSubmitClicked(true);

  const addingEntity = formType[0].toUpperCase() + formType.slice(1, -3);

  return (
    <>
      <Modal show={show}  fullscreen={fullscreen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add {addingEntity} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formType === Constants.PLAYER_ADD && (
            <AddPlayerForm
              submitClicked={submitClicked}
              setSubmitClicked={setSubmitClicked}
              handleClose={handleClose}
            />
          )}

          {formType === Constants.GIG_ADD && (
            <AddGigForm
              submitClicked={submitClicked}
              setSubmitClicked={setSubmitClicked}
              handleClose={handleClose}
            />
          )}

          {formType === Constants.INST_ADD && (
            <AddInstForm
              submitClicked={submitClicked}
              setSubmitClicked={setSubmitClicked}
              handleClose={handleClose}
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <h5>Close</h5>
          </Button>
          <Button variant="primary" onClick={submitClicker}>
            <h5>Submit {addingEntity}</h5>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
