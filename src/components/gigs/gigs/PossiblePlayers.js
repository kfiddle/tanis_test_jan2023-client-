import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/esm/ListGroup";

import styles from "./PossiblePlayers.module.css";
import useGrabList from "../../../hooks/useGrabList";

const PossiblePlayers = ({ part, setOpenCanvas }) => {
  // const possiblePlayers = useGrabList('players')

  return (
    <Offcanvas show={true} onHide={() => setOpenCanvas(false)} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <h2>{part.inst.name}</h2>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <ListGroup>
        <ListGroup.Item action>a</ListGroup.Item>
        <ListGroup.Item action>b</ListGroup.Item>
        <ListGroup.Item action>c</ListGroup.Item>
      </ListGroup>
    </Offcanvas>
  );
};

export default PossiblePlayers;
