import { Fragment, useEffect, useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/esm/ListGroup";

import useSimpleFetch from "../../../hooks/useSimpleFetch";
import styles from "./PossiblePlayers.module.css";
import EmailPossibles from "./EmailPossibles";

const PossiblePlayers = ({ part, setOpenCanvas }) => {
  const [possibles, setPossibles] = useState([]);
  const [clickedPlayers, setClickedPlayers] = useState([]);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const { inst } = part;
  const fetcher = useSimpleFetch();

  useEffect(() => {
    const getPossibles = async () => {
      const response = await fetcher("insts/" + inst.id);
      if (response) setPossibles(response.inst.players);
    };
    getPossibles();
  }, []);

  const clickHandler = (player) => () => {
    if (clickedPlayers.includes(player)) {
      let tempList = clickedPlayers;
      tempList.splice(tempList.indexOf(player), 1);
      setClickedPlayers([...tempList]);
    } else {
      setClickedPlayers([...clickedPlayers, player]);
    }
  };

  const openEmail = () => setEmailModalOpen(true);
  const modalCloser = () => setEmailModalOpen(false);

  const displayablePossibles = possibles
    ? possibles.map((player) => (
        <ListGroup.Item key={player.id} action onClick={clickHandler(player)}>
          <p
            className={
              clickedPlayers.includes(player)
                ? styles.clickedPlayer
                : styles.playerName
            }
          >
            {player.fName} {player.lName}
          </p>
        </ListGroup.Item>
      ))
    : [];

  return (
    <Fragment>
      <Offcanvas
        show={true}
        onHide={() => setOpenCanvas(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>{inst.name}</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <ListGroup>
          {displayablePossibles}
          {clickedPlayers.length > 0 && (
            <button className={styles.emailButton} onClick={openEmail}>
              EMAIL PLAYER{clickedPlayers.length > 1 && "S"}
            </button>
          )}
        </ListGroup>
      </Offcanvas>
      {emailModalOpen && <EmailPossibles modalCloser={modalCloser} />}
    </Fragment>
  );
};

export default PossiblePlayers;
