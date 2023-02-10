import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import styles from "./EmailPossibles.module.css";

const EmailPossibles = ({ modalCloser, possibles, gig }) => {
  //   const displayGig = new Date(gig.date).toLocaleString("en-us", {
  //     weekday: "long",
  //     month: "long",
  //     year: "numeric",
  //   });

  const displayDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(gig.date);

  return (
    <Modal show={true} onHide={modalCloser}>
      <Modal.Header closeButton>
        <Modal.Title>EMAIL </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.messageDiv}>
          <p>The following players will each receive the following email:</p>
          Hi (player's name), I'm writing to ask if you'd be available to play a
          gig at {gig.venue}, on {displayDate}
        </div>
      </Modal.Body>
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
