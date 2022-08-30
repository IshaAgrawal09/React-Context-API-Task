import React, { useState } from "react";

const TextUtils = () => {
  const [text, setText] = useState("");
  const [word, setWord] = useState(0);
  const [char, setChar] = useState(0);
  const [display, setDisplay] = useState("none");

  const handleInput = (event) => {
    setText(event.target.value);
  };
  const upperCase = () => {
    setText(text.toUpperCase());
  };
  const lowerCase = () => {
    setText(text.toLowerCase());
  };
  const wordShow = () => {
    if (text.split(" ").length == 1) {
      setWord(0);
    } else {
      setWord(text.split(" ").length);
    }
    setChar(text.length);
    setDisplay("block");
  };
  return (
    <div className="textUtils">
      <textarea
        type="text"
        id="text"
        placeholder="Enter Text"
        value={text}
        onChange={handleInput}
        rows={4}
        cols={50}
      ></textarea>
      <br />
      <button onClick={upperCase}>UPPER CASE</button>
      <button onClick={lowerCase}>LOWER CASE</button>
      <button onClick={wordShow}> Show Summary </button>

      <p style={{ display: display }}>
        {word} Words and {char} Characters
      </p>
    </div>
  );
};

export default TextUtils;
