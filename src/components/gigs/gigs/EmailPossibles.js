import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import styles from "./EmailPossibles.module.css";

const EmailPossibles = ({ modalCloser }) => {
  return (
    <Modal show={true} onHide={modalCloser}>
      <Modal.Header closeButton>
        <Modal.Title>EMAIL </Modal.Title>
      </Modal.Header>
      <Modal.Body>skdhglskhgshgkslghslgs</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={modalCloser}>
          <h5>Close</h5>
        </Button>

        <Button
          variant="primary"
          onClick={() => console.log("clicked a button")}
        >
          <h5>email</h5>
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmailPossibles;
