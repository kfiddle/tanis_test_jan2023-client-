import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";

import useGrabList from "../../../hooks/useGrabList";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import SortBar from "../../sortBar/SortBar";

import styles from "./SmallGigs.module.css";


const SmallGigs = () => {
  const gigs = useGrabList("gigs");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  const clicker = (gig) => () => console.log(gig);

  const displayableGigs = gigs
    ? gigs.map((gig, idx) => {
        const displayDate = gig.date
          ? new Date(gig.date).toLocaleDateString()
          : "";
        return (
          <ListGroup.Item
            key={idx}
            action
            onClick={clicker(gig)}
            className={styles.li}
          >
            <div className={styles.dateDiv}>{displayDate}</div>
            <div className={styles.venueDiv}>{gig.venue}</div>
          </ListGroup.Item>
        );
      })
    : [];

  return (
    <Card>
      {/* <SortBar sorter={sorter} options={options} /> */}
      <ListGroup>{displayableGigs}</ListGroup>
    </Card>
  );
};

export default SmallGigs;
