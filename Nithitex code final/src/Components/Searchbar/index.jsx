import React from "react";
import "./index.css";

const Searchbar = () => {
  return (
    <div class="header-search-container">
      <input
        type="search"
        name="search"
        class="search-field"
        placeholder="Enter your product name..."
      />
      <button class="search-btn">
        <i class="fa fa-search" aria-hidden="true"></i>
      </button>
    </div>
  );
};
export default Searchbar;
