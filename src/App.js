import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import menus from "./menuData";

function App() {
  function getRandomIndex(len) {
    return Math.floor(Math.random() * len);
  }

  const [menu, setMenu] = useState(menus[getRandomIndex(menus.length)]);

  const [hasClick, setHasClick] = useState(false);

  function randomPick() {
    setMenu(menus[getRandomIndex(menus.length)]);
  }

  function addMenu() {
    setHasClick(!hasClick);
  }
  return (
    <div className="container">
      <div className="box">{menu} 먹자!</div>
      <button onClick={randomPick}>말고 딴 거</button>

      {hasClick ? (
        <>
          <input></input>
          <button onClick={addMenu}>뒤로</button>
          <button onClick={addMenu}>저장</button>
        </>
      ) : (
        <button onClick={addMenu}>딴 거 추가</button>
      )}
    </div>
  );
}

export default App;
