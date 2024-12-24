import React, { useState } from "react";
import "./styles/Filters.css";

const Filters = ({ filters, onFilterChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div className="filters-container">
      <div className="filters-header" onClick={toggleCollapse}>
        <h3>Filters</h3>
        <span className="toggle-icon">{isCollapsed ? "+" : "-"}</span>
      </div>
      {!isCollapsed && (
        <div className="filters-list">
          {Object.keys(filters).map((key) => (
            <div key={key} className="filter-item">
              <label>
                <input
                  type="checkbox"
                  checked={filters[key]}
                  onChange={() => onFilterChange(key)}
                />
                {key.replace(/([A-Z])/g, " $1").trim()}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filters;
