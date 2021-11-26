import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  function getRandomIndex(len) {
    return Math.floor(Math.random() * len);
  }
  const [menu, setMenu] = useState([
    "곱창",
    "족발",
    "보쌈",
    "치킨",
    "피자",
    "곱도리탕",
    "떡볶이",
    "닭강정",
    "김치우동",
    "라면",
    "아이스크림",
    "닭발",
    "닭발",
    "김치전",
    "파전",
    "골뱅이소면",
    "닭꼬치",
    "양꼬치",
    "꿔바로우",
    "오돌뼈",
    "오뎅탕",
    "낙곱새",
  ]);
  return (
    <div className="container">
      <div className="box">{menu[getRandomIndex(menu.length)]} 먹자!</div>
    </div>
  );
}

export default App;
