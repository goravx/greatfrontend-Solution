import * as React from "react";
import useObjectState from "./hooks/useObjectState";
const initialState = {
  team: "utah jazz",
  wins: 2138,
  losses: 1789,
  championShips: 0,
};

export default function App() {
  const [stats, setStats] = useObjectState(initialState);

 const addWin = () => {
    setStats((s) => ({
      wins: s.wins + 1,
    }));
  };

  const addLoss = () => {
    setStats((s) => ({
      losses: s.losses + 1,
    }));
  };

  const addChampionship = () => {
    setStats((s) => ({
      championShips: s.championShips + 1,
    }));
  };

  const reset = () => {
    setStats(initialState);
  };

  return (
    <section>
      <h1>useObjectState</h1>

      <button className="link" onClick={addWin}>
        Add Win
      </button>
      <button className="link" onClick={addLoss}>
        Add Loss
      </button>
      <button className="link" onClick={addChampionship}>
        Add Championship
      </button>
      <button className="link" onClick={reset}>
        Reset
      </button>


      <table>
            <thead>
                  <tr>
                        {Object.keys(stats).map((key)=>(
                              <th key={key}>{key}</th>
                        ))}
                  </tr>
            </thead>
            <tbody>
                  <tr>
                        {Object.keys(stats).map((key)=>{
                                return <td key={key}>{stats[key]}</td>
                        })}
                  </tr>
            </tbody>
      </table>
    </section>
  );
}
