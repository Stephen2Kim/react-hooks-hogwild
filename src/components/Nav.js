import React from "react";

const Nav = ({ onFilterChange, onSortChange }) => {
  return (
    <div className="navWrapper">
      <span className="headerText">HogWild</span>
      <div>
        <button onClick={onFilterChange}>Toggle Greased Filter</button>
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="weight">Sort by Weight</option>
        </select>
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  );
};

export default Nav;
