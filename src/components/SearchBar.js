import React from "react";
import { SearchIcon } from "../icons";
import "../output.css";
const SearchBar = () => {
  return (
    <div className="bg-header overflow-hidden   flex bg-white rounded md:flex-1 md:h-min">
      <input
        className="h-6 font-thin p-2 text-sm w-full outline-none rounded"
        type="text"
        placeholder="Search on Amazon"
      />
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
