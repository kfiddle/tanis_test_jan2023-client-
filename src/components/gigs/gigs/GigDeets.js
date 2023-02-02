import { Fragment, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/esm/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
import Offcanvas from "react-bootstrap/Offcanvas";

import styles from "./GigDeets.module.css";

const GigDeets = ({ gig }) => {
  const { venue, address, date, parts } = gig;
  const [instClicked, setInstClicked] = useState({ instName: null, idx: null });

  const displayParts = parts.map((part, idx) => (
    <ListGroup.Item
      key={idx}
      action
      onClick={() => setInstClicked({ instName: part.instName, idx })}
    >
      <p
        // style={instClicked.idx === idx ? { color: "blue" } : { color: "black" }}
      >
        {part.instName}
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

      <Offcanvas
        show={instClicked !== null ? true : false}
        onHide={() => setInstClicked(null)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{instClicked.instName}</Offcanvas.Title>
        </Offcanvas.Header>
      </Offcanvas>
    </Fragment>
  );
};

export default GigDeets;
