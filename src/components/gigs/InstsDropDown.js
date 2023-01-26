import InstButton from "./InstButton";

import styles from './InstsDropDown.module.css';

const insts = ["VIOLIN", "VIOLA", "CELLO", "PIANO", "GUITAR", ];

const InstsDropDown = (props) => {
  const visible = true;

  const displayableExtras = insts.map((instrument) => (
    <InstButton key={insts.indexOf(instrument)} instrument={instrument} />
  ));

  const classNames = visible
    ? `${styles.outerContainer} ${styles.visible}`
    : styles.outerContainer;

  return <div className={classNames}>{displayableExtras}</div>;
};

export default InstsDropDown;

