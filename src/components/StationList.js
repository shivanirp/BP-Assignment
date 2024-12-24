import React from "react";
import "./styles/StationList.css";

//List of stations based on selected radius and filters
const StationList = ({ stations }) => {
  return (
    <div className="station-list-container">
      {stations.length > 0 ? (
        <ul className="station-list">
          {stations.map((station) => (
            <li key={station.id} className="station-item">
              <div className="station-logo">
                <img
                  src="bp.png"
                  alt="BP Logo"
                />
              </div>
              <div className="station-details">
                <p className="station-name">{station.name}</p>
                <p className="station-address">{station.address}</p>
                <p className="station-radius">{station.radius.toFixed(2)} miles</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No stations found matching the criteria.</p>
      )}
    </div>
  );
};

export default StationList;
