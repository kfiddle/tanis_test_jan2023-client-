import { Fragment } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";

import useGrabList from "../../../hooks/useGrabList";

import styles from "./LargeGigs.module.css";

const LargeGigs = () => {
  const gigs = useSelector((state) => state.gigs.allGigs);

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
    <div className={styles.outerContainer}>
      <Card className={styles.bigScreenGigs}>
        {/* <SortBar sorter={sorter} options={options} /> */}
        <ListGroup className={styles.list}>{displayableGigs}</ListGroup>
      </Card>

      <Card></Card>
    </div>
  );
};

export default LargeGigs;
