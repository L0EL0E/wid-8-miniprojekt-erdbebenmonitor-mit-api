import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Map } from "./Map";
import "./App.css";
import "leaflet/dist/leaflet.css";

function App() {
  const [focussedEarthquake, setFocussedEarthquake] = useState({});
  const [size, setSize] = useState(1);
  const [magnitude, setMagnitude] = useState("2.5");
  const [time, setTime] = useState("week")
  const [earthquakeOnline, setEarthquakeOnline] = useState({});
    useEffect(() => {
    fetch(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/${magnitude}_${time}.geojson`)
      .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
      .then((res) => setEarthquakeOnline(res))
      .catch(err => console.error("Fetch failed:", err));
  },
  [magnitude, time]
  );

  return (
    <div className="app">
      <Header 
        setMagnitude={setMagnitude}
        setTime={setTime}
      />
      <Sidebar 
        earthquake={focussedEarthquake} 
        size={size} 
        setSize={setSize} 
      />
      <div className="mainArea">
        <Map
          size={size}
          setSize={setSize}
          setFocussedEarthquake={setFocussedEarthquake}
          earthquakeOnline={earthquakeOnline}
        />
      </div>
    </div>
  );
}

export default App;
