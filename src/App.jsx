// App.jsx
import React from "react";
import  useMouse  from "./hooks/useMouse";
import "./App.css";

export default function App() {
  const [mouse, ref] = useMouse();

  const xIntersecting = mouse.elementX > 0 && mouse.elementX < 300;
  const yIntersecting = mouse.elementY > 0 && mouse.elementY < 300;
  const isIntersecting = xIntersecting && yIntersecting;

  return (
    <div className="app">
      <h1>Mouse Tracker</h1>
      <div
        ref={ref}
        className={`track-box ${isIntersecting ? "active" : ""}`}
      >
        <p>Use a ref to add coords relative to the element</p>
      </div>

      <div
        className="mouse-popup"
        style={{top:mouse.clientY+10,left:mouse.clientX+10}}
      >
        <table>
          <thead>
            <tr>
              <th colSpan={2}>MOUSE POSITION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>x</td>
              <td>{mouse.clientX}</td>
            </tr>
            <tr>
              <td>y</td>
              <td>{mouse.clientY}</td>
            </tr>
            <tr>
              <th colSpan={2}>RELATIVE TO REF</th>
            </tr>
            <tr>
              <td>elementX</td>
              <td>{mouse.elementX.toFixed(2)}</td>
            </tr>
            <tr>
              <td>elementY</td>
              <td>{mouse.elementY.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
