
import { useBattery } from "./hooks/useBattery";
import Battery from "./components/Battery";

export default function App() {
  const { loading, level, charging, chargingTime, dischargingTime } = useBattery();

  return (
    <div style={{ padding: "2rem", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Custom useBattery Hook 🔌</h1>
      {!loading ? (
        <Battery
          level={level}
          charging={charging}fr
          chargingTime={chargingTime}
          dischargingTime={dischargingTime}
        />
      ) : (
        <h2>Loading battery status...</h2>
      )}
    </div>
  );
}



