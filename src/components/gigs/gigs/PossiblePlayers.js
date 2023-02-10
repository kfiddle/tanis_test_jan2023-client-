import { Fragment, useEffect, useState } from "react";

import Offcanvas from "react-bootstrap/Offcanvas";
import ListGroup from "react-bootstrap/esm/ListGroup";

import useSimpleFetch from "../../../hooks/useSimpleFetch";
import styles from "./PossiblePlayers.module.css";
import EmailPossibles from "./EmailPossibles";
import usePush from "../../../hooks/usePush";

const PossiblePlayers = ({ part, gig, setOpenCanvas }) => {
  const [possibles, setPossibles] = useState([]);
  const [clickedPlayers, setClickedPlayers] = useState([]);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const { inst } = part;
  const fetcher = useSimpleFetch();
  const pusher = usePush();

  // router.patch("/assign-player/:gid/:pid", gigController.assignPlayerToPart);
  // part id = 63dbe3d30a06528389c19045
  // gig id = 63dd55df2c8cdcf4672118c1

  console.log(part);

  useEffect(() => {
    const getPossibles = async () => {
      const response = await fetcher("insts/" + inst.id);
      if (response) setPossibles(response.inst.players);
    };
    getPossibles();
  }, []);

  const doubleClickHandler = (player) => async () => {
    let response = await pusher(
      { playerId: player.id },
      "gigs/assign-player/63dd55df2c8cdcf4672118c1/63dd55df2c8cdcf4672118c3"
    );
  };

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
        <ListGroup.Item
          key={player.id}
          action
          onClick={clickHandler(player)}
          onDoubleClick={doubleClickHandler(player)}
        >
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
      {emailModalOpen && (
        <EmailPossibles
          modalCloser={modalCloser}
          possibles={clickedPlayers}
          gig={gig}
        />
      )}
    </Fragment>
  );
};

export default PossiblePlayers;
