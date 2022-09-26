import React from "react";
import "./searchBox.css";

function SearchBox({ className, placeholder, onChangeHandle }) {
  return (
    <div>
      <input
        type="search"
        placeholder={placeholder}
        className={`search-box ${className}`}
        onChange={onChangeHandle}
      />
    </div>
  );
}

export default SearchBox;
