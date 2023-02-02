import { Fragment, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";

import useGrabList from "../../../hooks/useGrabList";
import GigDeets from "./GigDeets";

import styles from "./LargeGigs.module.css";

const LargeGigs = () => {
  const gigs = useSelector((state) => state.gigs.allGigs);
  const [clickedGig, setClickedGig] = useState();

  const gigsCopy = [...gigs];
  const sortedGigs = gigsCopy.sort((gig1, gig2) => {
    if (gig1.date < gig2.date) return -1;
    if (gig1.date > gig2.date) return 1;
    return 0;
  });

  const clicker = (gig) => () => {
    setClickedGig(gig);
  };

  const displayableGigs = sortedGigs
    ? sortedGigs.map((gig, idx) => {
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
            <div
              className={styles.dateDiv}
              style={clickedGig === gig ? { color: "blue" } : { color: "black" }}
            >
              {displayDate}
            </div>
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

      {clickedGig && <GigDeets gig={clickedGig} />}
    </div>
  );
};

export default LargeGigs;
