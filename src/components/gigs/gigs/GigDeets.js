import { Fragment, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/esm/ListGroup";

import styles from "./GigDeets.module.css";
import PossiblePlayers from "./PossiblePlayers";

const GigDeets = ({ gig }) => {
  const { venue, address, date, parts } = gig;
  const [openCanvas, setOpenCanvas] = useState(false);
  const [partClicked, setPartClicked] = useState(null);

  const partClicker = (part, idx) => () => {
    setPartClicked(part);
    setOpenCanvas(true);
  };

  const displayParts = parts.map((part, idx) => (
    <ListGroup.Item key={idx} action onClick={partClicker(part, idx)}>
      <p
      // style={instClicked.idx === idx ? { color: "blue" } : { color: "black" }}
      >
        {part.inst.name}
      </p>
    </ListGroup.Item>
  ));

  return (
    <Fragment>
      <Card className={styles.gigDeetsCard}>
        <Card.Header>{new Date(date).toDateString()}</Card.Header>
        <Card.Title style={{ paddingTop: "2rem" }}>{venue}</Card.Title>
        <Card.Body>
          <ListGroup>{displayParts}</ListGroup>
        </Card.Body>
      </Card>

      {openCanvas && (
        <PossiblePlayers
          part={partClicked}
          setOpenCanvas={setOpenCanvas}
          gig={gig}
        />
      )}
    </Fragment>
  );
};

export default GigDeets;
