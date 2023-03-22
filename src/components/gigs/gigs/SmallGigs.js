import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import SortBar from "../../sortBar/SortBar";

import styles from "./SmallGigs.module.css";


const SmallGigs = () => {
  const gigs = useSelector((state) => state.gigs.allGigs);
  const [clickedGig, setClickedGig] = useState();

  const gigsCopy = [...gigs];
  const sortedGigs = gigsCopy.sort((gig1, gig2) => {
    if (gig1.date < gig2.date) return -1;
    if (gig1.date > gig2.date) return 1;
    return 0;
  });

  const clicker = (gig) => () => console.log(gig);

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
