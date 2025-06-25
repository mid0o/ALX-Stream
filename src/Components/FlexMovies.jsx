import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
function FlexMovies({ movie }) {
  return (
    <>
      <div className="flex items-center gap-2 ">
        <span className="text-sm font-medium">{movie.category}</span>
      </div>
      <div className="flex items-center gap-2 ">
        <FaCalendarAlt className="text-subMain w-3 h-3" />

        <span className="text-sm font-medium">{movie.year}</span>
      </div>
      <div className="flex items-center gap-2 ">
        <LuClock3 className="text-subMain w-3 h-3" />

        <span className="text-sm font-medium">{movie.time}</span>
      </div>
    </>
  );
}

export default FlexMovies;
