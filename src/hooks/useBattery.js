// hooks/useBattery.js
import { useEffect, useState } from "react";

export function useBattery() {
  const [batteryData, setBatteryData] = useState({
    level: 1,
    charging: false,
    chargingTime: Infinity,
    dischargingTime: Infinity,
    loading: true,
  });

  useEffect(() => {
    let battery;

    const updateBatteryInfo = () => {
      setBatteryData({
        level: battery.level,
        charging: battery.charging,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime,
        loading: false,
      });
    };

    navigator.getBattery().then((bat) => {
      battery = bat;
      updateBatteryInfo();
      console.log("running");
      battery.addEventListener("levelchange", updateBatteryInfo);
      battery.addEventListener("chargingchange", updateBatteryInfo);
      battery.addEventListener("chargingtimechange", updateBatteryInfo);
      battery.addEventListener("dischargingtimechange", updateBatteryInfo);
    });

    return () => {
      if (battery) {
        battery.removeEventListener("levelchange", updateBatteryInfo);
        battery.removeEventListener("chargingchange", updateBatteryInfo);
        battery.removeEventListener("chargingtimechange", updateBatteryInfo);
        battery.removeEventListener("dischargingtimechange", updateBatteryInfo);
      }
    };
  }, []);

  return batteryData;
}
