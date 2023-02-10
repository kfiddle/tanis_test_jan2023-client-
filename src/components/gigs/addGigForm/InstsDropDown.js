import InstButton from "./InstButton";
import useGrabList from "../../../hooks/useGrabList";

import { useMediaQuery } from "react-responsive";

import styles from "./InstsDropDown.module.css";

const InstsDropDown = ({ instIds, gigDispatch }) => {
  const insts = useGrabList("insts");
  const isSmall = useMediaQuery({ query: "(max-width: 1224px)" });

  const displayableExtras = insts.map((instrument) => (
    <InstButton
      key={insts.indexOf(instrument)}
      instrument={instrument.name}
      instId={instrument.id}
      instIds={instIds}
      gigDispatch={gigDispatch}
    />
  ));

  if (isSmall) {
    return <div className={styles.smallContainer}>{displayableExtras}</div>;
  } else {
    return <div className={styles.largeContainer}>{displayableExtras}</div>;
  }
};

export default InstsDropDown;
