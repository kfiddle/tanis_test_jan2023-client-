import styles from "./Textarea.module.css";

const Textarea = ({ label, onChange }) => {
  return (
    <div className={styles.div}>
      <label className={styles.label}>{label}</label>
      <textarea
        className={styles.textarea}
        type={"text"}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
