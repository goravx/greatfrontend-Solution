import React, { useState } from "react";
import usePrevious from "./hooks/usePrevious";

function getRandomColor() {
  const colorArr = ["green", "red", "purple", "violet", "pink"];
  return colorArr[Math.floor(Math.random() * colorArr.length)];
}

const App = () => {
  const [color, setColor] = useState(getRandomColor());
  const previousColor = usePrevious(color);

  const handleClick = () => {
    let newColor = getRandomColor();
    while (newColor === color) {
      newColor = getRandomColor();
    }
    setColor(newColor);
  };

  return (
    <div>
      <button onClick={handleClick}>Change the color</button>
      <div
        className="colors-cls"
        style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
      >
        <div
          style={{
            backgroundColor: previousColor.current,
            height: "50px",
            width: "50px",
            border: "1px solid #000",
          }}
        />
        <div
          style={{
            backgroundColor: color,
            height: "50px",
            width: "50px",
            border: "1px solid #000",
          }}
        />
      </div>
    </div>
  );
};

export default App;
