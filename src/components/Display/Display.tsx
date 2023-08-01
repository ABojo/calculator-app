import styles from "./Display.module.scss";

interface DisplayProps {
  currentValue: string;
  lastValue?: string;
  lastOperator?: string;
}

function Display({ currentValue, lastValue, lastOperator }: DisplayProps) {
  return (
    <div className={styles.display}>
      <span className={styles.display__history}>
        {lastValue} {lastOperator}
      </span>
      <span className={styles.display__current}>{currentValue}</span>
    </div>
  );
}

export default Display;
