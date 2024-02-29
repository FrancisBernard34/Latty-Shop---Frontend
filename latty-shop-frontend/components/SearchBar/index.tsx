"use client";
import React from "react";

const SearchBar: React.FC = () => {
  const handleSearch = () => {
    // Add your search logic here
    console.log("Search button clicked");
  };

  return (
    <div className="flex items-center">
      <input type="text" placeholder="Busque aqui" className="w-[40vw] p-2 rounded-l-md bg-[#3b3b3b]" />
      <div className="py-2 pr-2 hover:bg-amber-500 cursor-pointer rounded-r-2xl duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#a6adbb"
          className="w-6 h-6 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
