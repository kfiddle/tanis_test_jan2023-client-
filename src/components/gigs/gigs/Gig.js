import ListGroup from "react-bootstrap/ListGroup";
import styles from "./Gig.module.css";

const Gig = ({ gig }) => {
  const {
    venue,
    address,
    parts,
    date,
    startHours,
    startMin,
    endHours,
    endMin,
    contactEmail,
    contactPhone,
    notes,
  } = gig;
  console.log(venue);
  return (
    <ListGroup.Item
      action
      // onClick={clicker}
      //   className={styles.li}
    >
      {/* {gig.venue} */}
    </ListGroup.Item>
  );
};

export default Gig;
