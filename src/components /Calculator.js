import React from "react";
import { useState } from "react";
import "./calculator.css";

export default function Calculator() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();

  const add = () => {
    setResult(num1 + num2);
  };

  const subtract = () => {
    setResult(num1 - num2);
  };

  const multiply = () => {
    setResult(num1 * num2);
  };

  const divide = () => {
    setResult(num1 / num2);
  };

  const clear = () => {
    setNum1(0);
    setNum2(0);
  };

  return (
    <div className=" main-div">
      <div className="numbers-div">
        <label> Number 1: </label>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(parseInt(e.target.value))}
        />

        <label> Number 2: </label>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(parseInt(e.target.value))}
        />
      </div>

      <button onClick={add}> + </button>
      <button onClick={subtract}> - </button>
      <button onClick={divide}> / </button>
      <button onClick={multiply}> * </button>
      <button onClick={clear}> c </button>

      <label> Result : </label>
      <input type="number" value={result}></input>
    </div>
  );
}
