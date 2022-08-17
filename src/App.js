import "./App.css";
import { useState } from "react";

// var converter = require("number-to-words");

function App() {
  const [word, setword] = useState("");

  const ones = [
    " zero ",
    " one ",
    " two ",
    " three ",
    " four ",
    " five ",
    " six ",
    " seven ",
    " eight ",
    " nine ",
    " ten ",
    " eleven ",
    " twelve ",
    " thirteen ",
    " fourteen ",
    " fifteen ",
    " sixteen ",
    " seventeen ",
    " eightteen ",
    " nineteen ",
  ];
  const tens = [
    "twenty",
    "thirty",
    "fourty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const htlc = [
    " hundred ",
    "thousand ",
    " lakh ",
    " crore",
    " arab ",
    " kharab ",
  ];

  const changeHandler = (e) => {
    let num = e.target.value;
    let counter = 0;
    let str = "";

    for (let i = num.length - 1; i > -1; i--) {
      if (counter === 3) {
        str += ",";
      }
      if (counter % 2 === 1 && counter > 3) str += ",";
      counter++;
      str += num[i];
    }
    str = str.split(",");
    // console.log(str)
    let res = "";
    for (let i = 0; i < str.length; i++) {
      let temp = str[i].split("");
      temp = temp.reverse();
      temp = temp.toString().replace(",", "");
      if (i === 0) {
        temp = temp.split(",").toString().replace(",", "");
        if (Number(temp) < 99) {
          res += twoDigits(temp);
        } else {
          res += ones[Number(temp[0])] + htlc[0] + twoDigits(temp[1] + temp[2]);
        }
      } else {
        if (Number(temp) !== 0) res = twoDigits(temp) + htlc[i] + res;
      }
    }

    setword(res);
  };

  // 1-99 DIGITS HANDLED
  const twoDigits = (temp1) => {
    let temp = temp1;
    console.log(Number(temp));
    if (temp[0] === "0") temp = temp1.substring(1);
    if (Number(temp) === 0) return "";
    else {
      if (Number(temp) < 20) return ones[Number(temp)];
      else if (temp[1] === "0") return tens[Number(temp[0]) - 2];
      else return tens[Number(temp[0]) - 2] + ones[Number(temp[1])];
    }
  };

  return (
    <div className="App">
      <p>Please Enter Number</p>
      <p>
        <input onChange={changeHandler} type="number"></input>
      </p>
      <p>{word}</p>
    </div>
  );
}

export default App;
