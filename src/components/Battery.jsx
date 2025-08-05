// components/Battery.jsx
export default function Battery({ level, charging, chargingTime, dischargingTime }) {
  return (
    <div style={{ textAlign: "center", fontSize: "18px" }}>
      <h2>🔋 Battery Info</h2>
      <p>Level: {Math.round(level * 100)}%</p>
      <p>Charging: {charging ? "Yes ⚡" : "No"}</p>
      {charging && chargingTime !== Infinity && (
        <p>Charging time: {Math.round(chargingTime)} seconds</p>
      )}
      {!charging && dischargingTime !== Infinity && (
        <p>Discharging time: {Math.round(dischargingTime)} seconds</p>
      )}
    </div>
  );
}
