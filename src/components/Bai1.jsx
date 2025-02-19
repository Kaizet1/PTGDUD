import { useState } from "react";

function Bai1() {
  const [text, setText] = useState("");
  const [clickText, setClickText] = useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        placeholder="Nhập tên"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setClickText(text);
        }}
      >
        Click
      </button>
      <br />
      {clickText && <span>Hello {clickText}</span>}
    </>
  );
}

export default Bai1;
