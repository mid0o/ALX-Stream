import React from "react";
import { BsCollectionPlay } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { FiUserCheck } from "react-icons/fi";
import { FaHome } from "react-icons/fa";

function MobileFooter() {
  const active = " text-main bg-white ";
  const inActive =
    " transitions text-2xl flex-colo hover:bg-white hover:text-main  rounded-md px-4 py-3";

  const Hover = ({ isActive }) =>
    isActive ? `${active} ${inActive}` : inActive;

  return (
    <>
      <div className="flex-btn h-full  bg-white rounded cursor-pointer overflow-y-scroll flex-grow w-full"></div>

      <footer className="lg:hidden fixed z-50 bottom-0 w-full px-1">
        <div className="bg-dry rounded-md flex-btn w-full p-1">
          <NavLink to="/" className={Hover}>
            <FaHome />
          </NavLink>
          <NavLink to="/Movis" className={Hover}>
            <BsCollectionPlay />
          </NavLink>
          <NavLink to="/login" className={Hover}>
            <FiUserCheck />
          </NavLink>
        </div>
      </footer>
    </>
  );
}

export default MobileFooter;
