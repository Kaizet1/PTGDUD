import { useState } from "react";

const operations = ["+", "-", "*", "/"];
function Bai3() {
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState("");

  const handleCalculate = () => {
    if (number1 === null || number2 === null || operation === "") {
      return;
    }

    let res = 0;
    switch (operation) {
      case "+":
        res = parseFloat(number1) + parseFloat(number2);
        break;
      case "-":
        res = parseFloat(number1) - parseFloat(number2);
        break;
      case "*":
        res = parseFloat(number1) * parseFloat(number2);
        break;
      case "/":
        if (number2 === "0") {
          return;
        }
        res = parseFloat(number1) / parseFloat(number2);
        break;
      default:
        return;
    }
    setResult(res);
  };

  return (
    <>
      <input
        type="number"
        value={number1}
        placeholder="Nhập số"
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        type="number"
        value={number2}
        placeholder="Nhập số"
        onChange={(e) => setNumber2(e.target.value)}
      />
      <br />
      {operations.map((op) => (
        <>
          <input
            type="radio"
            name="group"
            onChange={() => setOperation(op)}
          />
          <label>{op}</label>
        </>
      ))}
      <br />
      <button onClick={handleCalculate}>Tính kết quả</button>
      {result !== null && <span>Kết quả: {result}</span>}
    </>
  );
}

export default Bai3;
