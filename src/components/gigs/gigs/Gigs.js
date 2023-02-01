import { useEffect, useState } from "react";

import { server } from "../../utils/WhichServer";

import { useSelector } from "react-redux";

import useGrabList from "../../../hooks/useGrabList";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Gig from "./Gig";
import styles from "./Gigs.module.css";
import SortBar from "../../sortBar/SortBar";

const Gigs = () => {
  const gigs = useGrabList("gigs");

  const clicker = (gig) => () => console.log(gig)

  const displayableGigs = gigs
    ? gigs.map((gig, idx) => (
        <ListGroup.Item
          key={idx}
          action
          onClick={clicker(gig)}
          className={styles.li}
        >
          {gig.venue}
        </ListGroup.Item>
      ))
    : [];

  return (
    <Card>
      {/* <SortBar sorter={sorter} options={options} /> */}
      <ListGroup>{displayableGigs}</ListGroup>
    </Card>
  );
};

export default Gigs;
