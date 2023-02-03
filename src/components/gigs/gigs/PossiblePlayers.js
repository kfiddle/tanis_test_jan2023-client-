import { useEffect, useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/esm/ListGroup";

import styles from "./PossiblePlayers.module.css";
import useSimpleFetch from "../../../hooks/useSimpleFetch";

const PossiblePlayers = ({ part, setOpenCanvas }) => {
  const [possibles, setPossibles] = useState([]);
  const { inst } = part;
  const fetcher = useSimpleFetch();

  useEffect(() => {
    const getPossibles = async () => {
      const response = await fetcher("insts/" + inst.id);
      if (response) setPossibles(response.inst.players);
    };
    getPossibles();
  }, []);

  console.log(possibles);

  const displayablePossibles = possibles
    ? possibles.map((player) => (
        <ListGroup.Item key={player.id} action>
          {player.fName} {player.lName}
        </ListGroup.Item>
      ))
    : [];

  return (
    <Offcanvas show={true} onHide={() => setOpenCanvas(false)} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <h2>{inst.name}</h2>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <ListGroup>{displayablePossibles}</ListGroup>
    </Offcanvas>
  );
};

export default PossiblePlayers;
