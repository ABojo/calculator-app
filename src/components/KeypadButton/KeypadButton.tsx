import styles from "./KeypadButton.module.scss";

interface KeypadButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  buttonText: string;
  equal?: boolean;
  reset?: boolean;
  big?: boolean;
}

function KeypadButton({ onClick, buttonText, equal, reset, big }: KeypadButtonProps) {
  let classes = styles.button;

  if (equal) classes += ` ${styles["button--equal"]}`;
  if (reset) classes += ` ${styles["button--reset"]}`;
  if (big) classes += ` ${styles["button--big"]}`;

  return (
    <button onClick={onClick} className={classes}>
      {buttonText}
    </button>
  );
}

export default KeypadButton;
