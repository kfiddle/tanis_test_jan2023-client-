import { useEffect, useState } from "react";

import { server } from "../utils/WhichServer";

import useGrabList from "../../hooks/useGrabList";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import styles from "./Players.module.css";
import SortBar from "../sortBar/SortBar";
const Players = () => {
  const [sortOption, setSortOption] = useState("last-name");
  const players = useGrabList("players");
  const clicker = () => console.log("player");

  const options = ["LAST NAME", "INSTRUMENT"];

  const sorter = async (sortOption) => {
    setSortOption(sortOption);
    await fetch(server + "players/last-name");
  };


  const displayablePlayers = players
    ? players.map((player, idx) => (
        <ListGroup.Item
          key={idx}
          action
          onClick={clicker}
          className={styles.li}
        >
          {player.lName} {player.fName} 'cello'
        </ListGroup.Item>
      ))
    : [];

  return (
    <Card>
      <SortBar sorter={sorter} options={options} />
      <ListGroup>{displayablePlayers}</ListGroup>
    </Card>
  );
};

export default Players;
