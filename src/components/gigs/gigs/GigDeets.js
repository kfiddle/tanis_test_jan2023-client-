import styles from "./GigDeets.module.css";

const GigDeets = ({ gig }) => {
  console.log(gig.parts);


  return (
    <div>
      <div>{gig.venue}</div>
      <div>{gig.address}</div>
    </div>
  );
};

export default GigDeets;
