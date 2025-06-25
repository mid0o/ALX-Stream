import React, { useState } from "react";
import { CategoriesData } from "../Data/CategoriesData";

const YearData = [
  { title: "sort By Year", value: "" },
  { title: "1700 - 1800", value: "1700-1800" },
  { title: "1800 - 1900", value: "1800-1900" },
  { title: "1900 - 2000", value: "1900-2000" },
  { title: "2000 - 2010", value: "2000-2010" },
  { title: "2010 - 2020", value: "2010-2020" },
];

const TimesData = [
  { title: "sort By Hours", value: "" },
  { title: "1 - 5 Hours", value: "1-5" },
  { title: "5 - 10 Hours", value: "5-10" },
  { title: "10 - 15 Hours", value: "10-15" },
  { title: "15 - 20 Hours", value: "15-20" },
];

const RatesData = [
  { title: "sort By Rates", value: "" },
  { title: "1 star", value: "1" },
  { title: "2 star", value: "2" },
  { title: "3 star", value: "3" },
  { title: "4 star", value: "4" },
  { title: "5 star", value: "5" },
];

function Filters() {
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [times, setTimes] = useState("");
  const [rates, setRates] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    // TODO: Add actual filtering logic here
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    // TODO: Add actual filtering logic here
  };

  const handleTimesChange = (e) => {
    setTimes(e.target.value);
    // TODO: Add actual filtering logic here
  };

  const handleRatesChange = (e) => {
    setRates(e.target.value);
    // TODO: Add actual filtering logic here
  };

  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 rounded p-6">
      {/* Category Filter */}
      <div className="relative">
        <select
          value={category}
          onChange={handleCategoryChange}
          className="w-full text-white bg-main rounded-lg shadow-sm cursor-pointer focus:outline-none border-gray-800 py-4 pl-6 pr-10 text-left text-sm"
        >
          <option value="">Category</option>
          {CategoriesData.map((item, i) => (
            <option key={i} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      {/* Year Filter */}
      <div className="relative">
        <select
          value={year}
          onChange={handleYearChange}
          className="w-full text-white bg-main rounded-lg shadow-sm cursor-pointer focus:outline-none border-gray-800 py-4 pl-6 pr-10 text-left text-sm"
        >
          {YearData.map((item, i) => (
            <option key={i} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      {/* Times Filter */}
      <div className="relative">
        <select
          value={times}
          onChange={handleTimesChange}
          className="w-full text-white bg-main rounded-lg shadow-sm cursor-pointer focus:outline-none border-gray-800 py-4 pl-6 pr-10 text-left text-sm"
        >
          {TimesData.map((item, i) => (
            <option key={i} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      {/* Rates Filter */}
      <div className="relative">
        <select
          value={rates}
          onChange={handleRatesChange}
          className="w-full text-white bg-main rounded-lg shadow-sm cursor-pointer focus:outline-none border-gray-800 py-4 pl-6 pr-10 text-left text-sm"
        >
          {RatesData.map((item, i) => (
            <option key={i} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filters;
