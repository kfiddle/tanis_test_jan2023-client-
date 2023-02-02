import InstButton from "./InstButton";
import useGrabList from "../../../hooks/useGrabList";

import styles from "./InstsDropDown.module.css";

const InstsDropDown = ({ instIds, gigDispatch }) => {
  const insts = useGrabList("insts");

  const displayableExtras = insts.map((instrument) => (
    <InstButton
      key={insts.indexOf(instrument)}
      instrument={instrument.name}
      instId={instrument.id}
      instIds={instIds}
      gigDispatch={gigDispatch}
    />
  ));

  return <div className={styles.outerContainer}>{displayableExtras}</div>;
};

export default InstsDropDown;
