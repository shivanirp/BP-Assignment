import React from "react";
import "./styles/RadiusSelector.css"; // Add styles for the input box
//radius input compoent
const RadiusSelector = ({ radius, onChange }) => {
  return (
    <div className="radius-selector-container">
      <label htmlFor="radius-input" className="radius-label">
        Radius
      </label>
      <input
        id="radius-input"
        type="number"
        value={radius}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        className="radius-input"
        step="0.1"
        min="0"
        max="10"
        placeholder="Enter radius in miles"
      />
      <span className="radius-unit">miles</span>
    </div>
  );
};

export default RadiusSelector;
