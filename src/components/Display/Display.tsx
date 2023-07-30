import styles from "./Display.module.scss";

interface DisplayProps {
  value: string;
}
function Display({ value }: DisplayProps) {
  return <div className={styles.display}>{value}</div>;
}

export default Display;
