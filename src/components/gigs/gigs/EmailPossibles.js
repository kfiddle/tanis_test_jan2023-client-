import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import styles from "./EmailPossibles.module.css";

const EmailPossibles = ({ modalCloser, possibles, gig }) => {
  const displayDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
  }).format(new Date(gig.date));

  const displayStartTime = !gig.startMin
    ? gig.startHours + ":00"
    : `${gig.startHours}: ${gig.startMin}`;
  const displayEndTime = !gig.endMin
    ? gig.endHours + ":00"
    : `${gig.endHours}: ${gig.endMin}`;

  return (
    <Modal show={true} onHide={modalCloser} size="lg" className={styles.modal}>
      <Modal.Header closeButton>
        <Modal.Title>EMAIL </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <div className={styles.messageDiv}>
          <p>The following players will each receive the following email:</p>
          Hi (player's name), I'm writing to ask if you'd be available to play a
          gig at {gig.venue}, on {displayDate}, from {displayStartTime} to{" "}
          {displayEndTime}. Your pay will be ${gig.pay}. Check your app when
          it's up and running, blah blah
        </div>
        <div style={{ marginTop: "2rem" }}>
          if instead, you'd rather customize a message to{" "}
          {possibles.length > 1 ? "these players" : "this player"}, use the text
          box below...
        </div>

        <div className={styles.textBoxDiv}>
          <textarea cols={70} rows={20} />
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
