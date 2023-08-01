import styles from "./Keypad.module.scss";
import KeypadButton from "../KeypadButton/KeypadButton";

interface KeypadProps {
  onClickDigit: (digit: string) => void;
  onClickDelete: () => void;
  onClickReset: () => void;
  onClickOperand: (operator: string) => void;
  onClickEqual: () => void;
}

function Keypad({ onClickDigit, onClickReset, onClickDelete, onClickOperand, onClickEqual }: KeypadProps) {
  function digitClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const targetNode = e.target as HTMLButtonElement;
    onClickDigit(targetNode.innerText);
  }

  function operandClickHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const targetNode = e.target as HTMLButtonElement;
    onClickOperand(targetNode.innerText);
  }

  return (
    <div className={styles.keypad}>
      <KeypadButton buttonText="7" onClick={digitClickHandler} />
      <KeypadButton buttonText="8" onClick={digitClickHandler} />
      <KeypadButton buttonText="9" onClick={digitClickHandler} />
      <KeypadButton buttonText="DEL" onClick={onClickDelete} reset />

      <KeypadButton buttonText="4" onClick={digitClickHandler} />
      <KeypadButton buttonText="5" onClick={digitClickHandler} />
      <KeypadButton buttonText="6" onClick={digitClickHandler} />
      <KeypadButton buttonText="+" onClick={operandClickHandler} />

      <KeypadButton buttonText="1" onClick={digitClickHandler} />
      <KeypadButton buttonText="2" onClick={digitClickHandler} />
      <KeypadButton buttonText="3" onClick={digitClickHandler} />
      <KeypadButton buttonText="-" onClick={operandClickHandler} />

      <KeypadButton buttonText="." onClick={digitClickHandler} />
      <KeypadButton buttonText="0" onClick={digitClickHandler} />
      <KeypadButton buttonText="/" onClick={operandClickHandler} />
      <KeypadButton buttonText="x" onClick={operandClickHandler} />

      <KeypadButton buttonText="RESET" onClick={onClickReset} reset big />
      <KeypadButton buttonText="=" onClick={onClickEqual} equal big />
    </div>
  );
}

export default Keypad;
