import React, { useEffect, useState } from "react";
import {
  fetchPrices,
  fetchEvents,
  fetchChangePoints
} from "./api";
import PriceChart from "./components/PriceChart";

function App() {
  const [prices, setPrices] = useState([]);
  const [events, setEvents] = useState([]);
  const [changePoint, setChangePoint] = useState(null);
  const [loading, setLoading] = useState(true);

  // Date filter state
  const [startDate, setStartDate] = useState("2000-01-01");
  const [endDate, setEndDate] = useState("2025-12-31");

  useEffect(() => {
    Promise.all([
      fetchPrices(),
      fetchEvents(),
      fetchChangePoints()
    ])
      .then(([priceData, eventData, cpData]) => {
        setPrices(priceData);
        setEvents(eventData);
        setChangePoint(cpData.change_point_date);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error loading data:", error);
      });
  }, []);

  // Apply date filtering
  const filteredPrices = prices.filter(p => {
  const priceDate = new Date(p.Date);
  const start = new Date(startDate);
  const end = new Date(endDate);

  return priceDate >= start && priceDate <= end;
});

  return (
    <div style={{ padding: "20px" }}>
      <h2>Brent Oil Price Dashboard</h2>

      {/* Date Range Controls */}
      <div style={{ marginBottom: "15px" }}>
        <label>Start Date: </label>
        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />

        <label style={{ marginLeft: "10px" }}>End Date: </label>
        <input
          type="date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <PriceChart
          data={filteredPrices}
          events={events}
          changePoint={changePoint}
        />
      )}
    </div>
  );
}

export default App;
