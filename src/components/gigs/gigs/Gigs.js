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

  const displayableGigs = gigs
    ? gigs.map((gig, idx) => (
        // <ListGroup.Item
        //   key={idx}
        //   action
        //   // onClick={clicker}
        //   className={styles.li}
        // >
        //   {gig.venue}
        // </ListGroup.Item>
        <Gig key={idx} gig={gig} />
      ))
    : [];

  return (
    <Card>
      {/* <SortBar sorter={sorter} options={options} /> */}
      <ListGroup>{displayableGigs}</ListGroup>
      <Gig />
    </Card>
  );
};

export default Gigs;
