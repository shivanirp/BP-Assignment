import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchStations } from "./redux/stations.slice";
import RadiusSelector from "./components/RadiusSelector";
import Filters from "./components/Filters";
import StationList from "./components/StationList";
import "./App.css";
 
const App = () => {
  const dispatch = useDispatch();
  const { stations, loading, error } = useSelector((state) => state.stations);
 
  const [radius, setRadius] = useState(1);
  const [filters, setFilters] = useState({
    is24Hours: false,
    hasConvenienceStore: false,
    hasHotFood: false,
    acceptsBpCard: false,
  });
 
  useEffect(() => {
    dispatch(fetchStations());
  }, [dispatch]);
 
  const handleFilterChange = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };
 
  const filteredStations = stations.filter((station) => {
    const withinRadius = station.radius <= radius;
    const matchesFilters = Object.keys(filters).every(
      (key) => !filters[key] || station[key]
    );
    return withinRadius && matchesFilters;
  });
 
  return (
    <div className="app-container">
      <h1>BP Service Stations</h1>
      <RadiusSelector radius={radius} onChange={setRadius} />
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      {loading && <p>Loading stations...</p>}
      {error && <p>{error}</p>}
      <StationList stations={filteredStations} />
    </div>
  );
};
 
export default App;