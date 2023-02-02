import Card from "react-bootstrap/Card";


import styles from "./GigDeets.module.css";

const GigDeets = ({ gig }) => {
  console.log(gig.parts);

  return (
    <Card className={styles.gigDeetsCard}>
      <Card.Header>{new Date(gig.date).toDateString()}</Card.Header>
      <Card.Title>{gig.venue}</Card.Title>
      <Card.Body>gig deets to come</Card.Body>
    </Card>
  );
};

export default GigDeets;
