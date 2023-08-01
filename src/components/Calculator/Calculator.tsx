import { useState } from "react";

import Header from "../Header/Header";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

import math from "../../utils/math";
import formatNumber from "../../utils/formatNumber";

import styles from "./Calculator.module.scss";

type Operator = "+" | "-" | "x" | "/";

function Calculator(): JSX.Element {
  const [lastValue, setLastValue] = useState("");
  const [lastOperator, setLastOperator] = useState("");
  const [currentValue, setCurrentValue] = useState("");

  function resetState() {
    setCurrentValue("");
    setLastValue("");
    setLastOperator("");
  }

  function addDigit(char: string) {
    setCurrentValue((prev) => prev + char);
  }

  function removeDigit() {
    setCurrentValue((prev) => {
      if (prev.length > 1) {
        return prev.slice(0, -1);
      }

      return "";
    });
  }

  function executeOperation(): string {
    const operatorFn = math[lastOperator as Operator];

    const numberA = parseFloat(lastValue);
    const numberB = parseFloat(currentValue);

    return operatorFn(numberA, numberB).toString();
  }

  function onClickOperand(operator: string): void {
    //only continue if user has entered a value
    if (!currentValue) return;

    //if there is an operation waiting then execute it and update the last value and operator
    //else set the last value and operator
    if (lastValue && lastOperator) {
      const result = executeOperation();

      setLastValue(result);
      setLastOperator(operator);
    } else {
      setLastValue(currentValue);
      setLastOperator(operator);
    }

    setCurrentValue("");
  }

  function onClickEqual() {
    if (lastValue && lastOperator && currentValue) {
      const result = executeOperation();

      resetState();
      setCurrentValue(result);
    }
  }

  return (
    <div className={styles.calculator}>
      <Header />
      <Display
        currentValue={formatNumber(currentValue)}
        lastValue={formatNumber(lastValue)}
        lastOperator={lastOperator}
      />
      <Keypad
        onClickDigit={addDigit}
        onClickDelete={removeDigit}
        onClickReset={resetState}
        onClickOperand={onClickOperand}
        onClickEqual={onClickEqual}
      />
    </div>
  );
}

export default Calculator;
