import { useState } from "react";

function Bai2() {
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [sum, setSum] = useState(null);

  const handleSum = () => {
    if (number1 && number2) {
      setSum(Number(number1) + Number(number2));
    }
  }

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
      <button onClick={handleSum}>Add</button>
      <br />
      {sum && <span>Kết quả: {sum}</span>}
    </>
  );
}

export default Bai2;
