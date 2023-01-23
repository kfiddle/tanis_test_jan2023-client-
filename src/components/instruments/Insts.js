import { useEffect, useState } from "react";

import { server } from "../utils/WhichServer";

import useGrabList from "../../hooks/useGrabList";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import styles from "./Insts.module.css";
import SortBar from "../sortBar/SortBar";

const Insts = () => {
  const insts = useGrabList("insts");

  const displayableInsts = insts
    ? insts.map((inst, idx) => (
        <ListGroup.Item
          key={idx}
          action
        //   onClick={clicker}
          className={styles.li}
        >
          {inst.name} 
        </ListGroup.Item>
      ))
    : [];

  return (
    <Card className={styles.card}>
      {/* <SortBar sorter={sorter} options={options} /> */}
      <ListGroup>{displayableInsts}</ListGroup>
    </Card>
  );
};

export default Insts;
