import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Aime({ Aime }) {
  return (
    <>
      <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden ">
        <Link to={`/Movis/${Aime?.name}`} className="w-full">
          <img
            src={`../${Aime.image}`}
            alt=""
            className="w-full object-cover h-64"
          />
        </Link>
        <div className=" absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
          <h3 className=" font-semibold truncate ">{Aime.name}</h3>
          <button className="h-9 w-9 text-sm flex-colo transitions hover:bg-transparent border-2 border-subMain rounded-md bg-subMain text-white ">
            <FaHeart />
          </button>
        </div>
      </div>
    </>
  );
}

export default Aime;
